const devices = {
  mobile: '640px',
  tablet: '768px',
  computer: '1024px'
}

const mediaQueries = {
  sm: `(max-width: ${devices.mobile})`,
  md: `(max-width: ${devices.tablet})`,
  lg: `(max-width: ${devices.computer})`

}

export { mediaQueries }