import { useState, useEffect, useRef } from "react"

import { watchForCompareAddEvent } from '../../utils/EventBus.jsx'
import { getSavedCompareProducts } from '../../utils/CompareCacher.jsx'

import { CompareTableSchema } from './Schema.js'
import { PluginStyles } from '../../snippets/PluginStyles.jsx'
import { TableSections } from '../../snippets/TableSections.jsx'

export function CompareTable ({ cms }) {
  const [products, setProducts] = useState([])
  const [attemptedLoad, setAttemptedLoad] = useState(false)
  const dialogRef = useRef()

  // Listener for adding new products
  useEffect(watchForCompareAddEvent((newProducts) => {
    setProducts(newProducts)
  }), [products])

  // Load any previously saved products from local storage
  useEffect(() => {
    if (products.length === 0 && attemptedLoad == false) {
      setAttemptedLoad(true)
      const savedproducts = getSavedCompareProducts()
      setProducts(savedproducts)
    }
  }, [products, attemptedLoad])

  return (
    <div>
      <PluginStyles cms={cms} />

      <dialog ref={dialogRef} className="compare-table fixed inset-0 items-center justify-center z-[1000]">
        <button className="fixed inset-0 block w-screen h-screen bg-black opacity-50"
                aria-label="close product compare table"
                onClick={() => dialogRef.current.close()}>
        </button>
        <div className="relative rounded-md px-6 py-3 max-w-[85vw] w-screen max-h-[85vh] z-1"
             style={{ background: cms.colors?.popup_background || 'var(--white)' }}>
          <div className="mb-8 w-full flex items-center justify-between">
            <h2 style={{ color: cms.colors?.title_color || 'var(--black)' }}>
              {cms.general.heading}
            </h2>
            <button style={{ color: cms.colors?.title_color || 'var(--black)' }}
                    aria-label="close product compare table"
                    onClick={() => dialogRef.current.close()}>
              <svg className="w-6 h-6"
                   xmlns="http://www.w3.org/2000/svg" 
                   viewBox="0 0 384 512">
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
              </svg>
            </button>
          </div>
          <TableSections cms={cms} products={products} />
        </div>
      </dialog>

      {products.length > 0 &&
        <button onClick={() => dialogRef.current?.showModal()}
                className="btn btn--compare fixed bottom-4">
          {cms.cta?.cta_text}
        </button>
      }
    </div>
  )
}

CompareTable.displayName = 'Compare Table'
CompareTable.Schema = CompareTableSchema