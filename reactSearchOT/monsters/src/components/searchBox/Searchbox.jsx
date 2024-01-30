import React from 'react'
import "../searchBox/Searchbox.css"

export default function Searchbox({className, placeholder, onChangeHandler}) {
  return (
    <div>
        <input 
          type="search" 
          placeholder={placeholder} 
          className={`searchbox ${className}`} 
          onChange={onChangeHandler} />
    </div>
  )
}
