const STORAGE_NAME = 'compare-product-saved-product-handles'

export const saveCompareProducts = (newProduct, shouldAdd = true) => {
  if (shouldAdd) {
    return addSavedCompareProduct(newProduct)
  } else {
    return removeSavedCompareProduct(newProduct)
  }
}

export const getSavedCompareProducts = (storefront) => {
  const savedProducts = localStorage.getItem(STORAGE_NAME)
  return JSON.parse(savedProducts) || []
}

const addSavedCompareProduct = (newProduct) => {
  const savedProducts = localStorage.getItem(STORAGE_NAME)
  const products = JSON.parse(savedProducts) || []
  const containsProduct = products.find((product) => newProduct.handle === product.handle)
  if (!containsProduct) {
    products.push(newProduct)
  }
  localStorage.setItem(STORAGE_NAME, JSON.stringify(products))
  return products
}

const removeSavedCompareProduct = (newProduct) => {
  const savedProducts = localStorage.getItem(STORAGE_NAME)
  const products = JSON.parse(savedProducts) || []
  const newProducts = products.filter((product) => newProduct.handle !== product.handle)
  localStorage.setItem(STORAGE_NAME, JSON.stringify(newProducts))
  return newProducts
}