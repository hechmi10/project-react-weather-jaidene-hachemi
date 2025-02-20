import '../App.css'
import PropTypes from 'prop-types'
import { useState } from 'react'
function SearchBar(props){
    const {initialSearch}=props
    const [search,setSearch]=useState(initialSearch)
    const searchButton=()=>{
        setSearch(search)
    }
    return(
        <>
        <input className='form-control' type="text"/>
        <button className='btn btn-primary' onClick={searchButton}>Search</button>
        </>
        
    )
}
SearchBar.propTypes={
    initialSearch:PropTypes.string.isRequired
}
export default SearchBar;