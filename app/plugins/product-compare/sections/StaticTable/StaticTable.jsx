import { useProductsFromHandles } from '~/hooks/product/useProductsFromHandles.ts'
import { StaticTableSchema } from './Schema.js'

import { TableSections } from '../../snippets/TableSections.jsx'

export function StaticTable({ cms }) {
  const productHandles = (cms.products_to_display || []).map((product) => {
    return product.handle
  })
  const products = useProductsFromHandles(productHandles)

  return (
    <section className="py-contained lg:px-contained">
      <h2 className="mb-8">
        {cms.general?.heading}
      </h2>
      <TableSections products={products} 
                     cms={cms}
                     showRemove={false} />
    </section>
  )
}

StaticTable.displayName = 'Compare Table'
StaticTable.Schema = StaticTableSchema
