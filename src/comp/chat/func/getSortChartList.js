/**
 *
 * @param {Object} list
 * @returns {Object}
 */
export const getSortChartList = (list) => {
  let sortChartList = {}
  for (let key in list) {
    if (list[key].is_question) sortChartList = { ...sortChartList, [key]: { ...list[key] } }
  }
  return sortChartList
}
