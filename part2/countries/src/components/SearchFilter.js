import React from 'react'

const SearchFilter = ({search, searchCountry, disable}) => {
    
    return(
        <div>
            find countries <input value={search} onChange={searchCountry} disabled={disable}/>
        </div>
    )
}

export default SearchFilter;