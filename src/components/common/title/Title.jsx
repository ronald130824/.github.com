import React from 'react'

const Title = ({ subtitle, Title }) => {
  return (
    <div>
      <div id='heading'>
        <h3>{subtitle}</h3>
        <h1>{Title}</h1>
      </div>
    </div>
  )
}

export default Title
