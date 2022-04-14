import React from 'react'

export const Quote = ( { quote } ) => {
  return (
    
    <p>
        { quote.quote } <br />  
        <span> - { quote.author } </span>  
    </p>

  )
}
