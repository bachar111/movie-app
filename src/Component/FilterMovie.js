import React from 'react'
import { Form } from 'react-bootstrap'

const FilterMovie = ({setInputSearch ,inputSearch} ) => {
  
  return (
    <div>
    
    <Form.Control type="email" placeholder="Search movie"
        onChange={(e)=>setInputSearch(e.target.value)}
        value={inputSearch}/>
    </div>
  )
}

export default FilterMovie
