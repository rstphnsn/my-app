import React from 'react'

const Thing = ({ lazy }) => (
  <div>
    Some {lazy ? 'lazy' : ''} thing
  </div>
)

export default Thing