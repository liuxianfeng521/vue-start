const req = require.context('./geometryCouties', false, /\.json$/)
const requireAll = requireContext => requireContext.keys()

const re = /\.\/(.*)\.json/

const mapJson = requireAll(req).map(i => {
  return i.match(re)[1]
})
console.log('mapJson', mapJson)
export default mapJson
