import { useProductMetafields } from '~/hooks/product/useProductMetafields.ts'

import { TableCell } from './TableCell.jsx'

const sendRemoveEvent = (product) => {
  document.dispatchEvent(
    new CustomEvent(
      'compare-add-product',
      { detail: { handle: product, shouldAdd: false } }
    )
  )
}

export const TableRow = ({ product, cms, metafieldMap, rowIndex, showRemove }) => {
  const metafields = useProductMetafields(product.handle, metafieldMap)

  const backgroundColor = rowIndex % 2 === 1
    ? (cms.colors?.table_row_background || 'var(--white)')
    : (cms.colors?.table_row_background_alt || 'var(--off-white)')

  return (
    <tr style={{ background: backgroundColor }}>
      <td className="py-2 px-3 whitespace-nowrap">
        <a href={`/products/${product.handle}`}
           className="text-primary underline">
          {product.title}
        </a>
      </td>
      {cms.product_field.map((field) =>
        <TableCell product={product}
                   field={field}
                   metafields={metafields}
                   key={`product-${product.handle}-field-${field.field_display_title}`}
                   splitProducts={cms.general?.split_products} />
      
      )}
      {showRemove &&
        <td>
          <button className="inline-flex items-center gap-x-1 py-2 px-3 text-red-800"
                  onClick={() => sendRemoveEvent(product)}>
            <svg className="w-5 h-5 fill-current"
                 xmlns="http://www.w3.org/2000/svg" 
                 viewBox="0 0 384 512">
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
            </svg>
            Remove
          </button>
        </td>
      }
    </tr>
  )
}