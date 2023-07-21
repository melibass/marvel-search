import React, { useRef } from 'react'

export default function SearchBar() {
    /* need a reference tu extract the value */
    let input = useRef('')

  return (
    <form> 
        <input type="text" placeholder='Search...' ref={input}/>
        <button>Search</button>
    </form>

  )
}
