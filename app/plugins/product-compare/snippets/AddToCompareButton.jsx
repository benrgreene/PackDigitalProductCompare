import { useState, useEffect } from "react"

import { watchForCompareAddEvent } from '../utils/EventBus.jsx'
import { getSavedCompareProducts } from '../utils/CompareCacher.jsx'

const sendAddEvent = (product) => {
  document.dispatchEvent(
    new CustomEvent(
      'compare-add-product',
      { detail: { handle: product, shouldAdd: true } }
    )
  )
}

export const AddToCompareButton = ({ product }) => {
  const [products, setProducts] = useState([])
  const [attemptedLoad, setAttemptedLoad] = useState(false)

  // Listener for adding new products
  useEffect(watchForCompareAddEvent((newProducts) => {
    setProducts(newProducts)
  }), [products])

  // Load any previously saved products from local storage
  useEffect(() => {
    if (products.length === 0 && attemptedLoad == false) {
      setAttemptedLoad(true)
      const savedProducts = getSavedCompareProducts()
      setProducts(savedProducts)
    }
  }, [products, attemptedLoad])

  const productsContainCurrent = products.find((productToCheck) => {
    return product.handle === productToCheck.handle
  })

  return (
    <button onClick={() => sendAddEvent(product)}
            className="mt-5 btn">
      {productsContainCurrent &&
        <span>Added</span>
      }
      {!productsContainCurrent &&
        <span>Add To Compare</span>
      }
    </button>
  )
}
