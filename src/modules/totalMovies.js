export const totalCount = () => {
  const totalAnimes = document.querySelector('total-count')
  const total = totalAnimes.childElementCount
  return total
}
