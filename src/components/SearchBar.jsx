import React, { useRef } from 'react'
import logo from '../img/logo.png'

// import utils
import { fetchHeroes } from '../utils/utils';

export default function SearchBar({ setter }) {
    /* need a reference tu extract the value */
    let input = useRef('');

    const handleClick = async (e)=>{
        e.preventDefault();
        let value = input.current.value;
        if (value === "") return

        try{
            let heroes = await fetchHeroes(value);
            setter(heroes);
        } catch (err){
            console.error(err)
        }
    }

  return (
    <div>
        <form> 
            <img src={logo} alt='Logo'/>
            <input type="text" placeholder='Search...' ref={input}/>
            <button onClick={handleClick}>Search</button>
        </form>
    </div>

  )
}
