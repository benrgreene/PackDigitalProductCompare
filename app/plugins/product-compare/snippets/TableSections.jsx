import { useState, useEffect } from 'react'

import { TableRow } from './TableRow.jsx'


export const TableSections = ({ cms, products, showRemove = true }) => {
  const displayType = cms?.general?.group_display || 'list'
  const [visibleTab, setVisibleTab] = useState(0)

  const metafieldMap = cms.product_field
    .filter((field) => field.field_type === 'metafield')
    .map((field) => {
      return {
        namespace: field.property_key.split('.')[0],
        key: field.property_key.split('.')[1]
      } || [] 
    })

  const productGroups = {}
  if (cms.general.split_products === 'no') {
    productGroups['all'] = {
      products: products,
      label: false
    } 
  } else {
    products.forEach((product) => {
      const type = product.productType
      productGroups[type] = productGroups[type] || {
        products: [],
        label: type !== '' ? type : 'Uncategorized'
      }
      productGroups[type].products.push(product)
    })
  }
  const productGroupKeys = Object.keys(productGroups)

  useEffect(() => {
    if (visibleTab >= productGroupKeys.length && productGroupKeys.length > 0) {
      setVisibleTab(productGroupKeys.length - 1)
    }
  }, [visibleTab, productGroupKeys])

  return (
    <div className="flex flex-col gap-5 w-full">
      {displayType === 'tabs' && productGroupKeys.length > 1 &&
        <div className="flex items-center justify-stretch">
          {productGroupKeys.map((productGroupKey, groupIndex) => 
            <button key={`tab-button-${productGroupKey}`}
                    className="grow basis-[1px]"
                    onClick={() => setVisibleTab(groupIndex)}>
              View {productGroupKey}
            </button>
          )}  
        </div>
      }
      {productGroupKeys.map((productGroupKey, groupIndex) => 
        <div className={`${displayType === 'tabs' && groupIndex !== visibleTab ? 'hidden' : 'block'}`}
             key={`product-grouping-${productGroupKey}`}>
          {productGroups[productGroupKey].label &&
            <h3 style={{ color: cms.colors?.subtitle_color || 'var(--black)' }}>
              {productGroups[productGroupKey].label}
            </h3>
          }
          <div className="pb-4 w-full overflow-auto">
            <table className="w-full">
              <thead>
                <tr style={{ background: cms.colors?.table_row_background || 'var(--white)' }}>
                  <th className="py-2 px-3 text-left whitespace-nowrap">Product Title</th>
                  {cms.product_field.map((field) => {
                      if (cms.general?.split_products === 'no' || !field.product_type || field.product_type === '' || field.product_type === productGroupKey) {
                        return (
                          <th key={`field-title-${field.field_display_title}`}
                              className="py-2 px-3 text-left whitespace-nowrap">
                            {field.field_display_title}
                          </th>
                        )
                      }
                  })}
                  {showRemove &&
                    <th aria-label="remove product"></th>
                  }
                </tr>
              </thead>
              <tbody>
                {productGroups[productGroupKey].products.map((product, rowIndex) =>
                  <TableRow product={product}
                            cms={cms}
                            metafieldMap={metafieldMap}
                            key={`product-compare-${product.handle}`}
                            className="w-full" 
                            rowIndex={rowIndex}
                            showRemove={showRemove} />
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}