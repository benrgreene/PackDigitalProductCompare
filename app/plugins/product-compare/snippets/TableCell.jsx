import { AddToCart } from '~/components'
import { QuickShopOptions } from '~/components/ProductItem/Quickshop/QuickShopOptions'

const getFieldValue = (product, field, metafields) => {
  if (field.field_display_type == 'price') {
    return product.priceRange?.minVariantPrice?.amount || 0
  } else if (field.field_type === 'property') {
    return product[`${field.property_key}`]
  } else {
    if (metafields) {
      return metafields[`${field.property_key}`] ? metafields[`${field.property_key}`].value : ''
    }
  }
}


const getFieldDisplay = (product, field, metafields) => {
  const value = getFieldValue(product, field, metafields)
  if (field.field_display_type === 'boolean') {
    return value
      ? <svg className="w-5" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
      : <svg className="w-5" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
  } else if (field.field_display_type === 'text') {
    return value
  } else if (field.field_display_type === 'price') {
    return value ? `$${parseFloat(value).toFixed(2)}` : 0
  }
}


export const TableCell = ({ splitProducts, product, field, metafields }) => {
  const hasOneVariant = product.variants?.nodes?.length === 1
  if (splitProducts === 'no' || !field.product_type || field.product_type === '' || product.productType === field.product_type) {
    return (
      <td className={`py-2 px-3 whitespace-nowrap ${field.field_display_type === 'atc' ? 'max-w-[9rem]' : ''}`}>
        {field.field_display_type === 'atc' &&
          <span>
            {hasOneVariant &&
              <AddToCart addToCartText={'Add To Cart'}
                        className="btn-inverse-dark"
                        selectedVariant={product.variants?.nodes[0]} />
            }
            {!hasOneVariant &&
              <QuickShopOptions quickShopMultiText={'add'}
                                selectedProduct={product}
                                selectedVariant={product.variants?.nodes[0]} />
            }
          </span>
        }
        {field.field_display_type !== 'atc' &&
          getFieldDisplay(product, field, metafields)
        }
      </td>
    )
  }
}
