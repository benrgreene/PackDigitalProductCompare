import { saveCompareProducts } from './CompareCacher.jsx'

export const watchForCompareAddEvent = (callback) => {
  return () => {
    const controller = new AbortController()
    document.addEventListener(
      'compare-add-product',
      (event) => {
        const handles = saveCompareProducts(event.detail.handle, event.detail.shouldAdd)
        callback(handles)
      },
      { signal: controller.signal }
    )
    return () => controller.abort()
  }
}
