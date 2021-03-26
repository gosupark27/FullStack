import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import SearchFilter from './components/SearchFilter'
import Display from './components/Display'

const App = () => {
  const [search, setSearch] = useState('')
  const [countryList, setCountryList] = useState()
  const originalList = useRef()

  useEffect(() => {
    const fetchCities = async() =>{
      await axios.get('https://restcountries.eu/rest/v2/all')
        .then(response => {
          originalList.current = response.data
          // Changes write prop to true -> disable input = false
          setCountryList([])
        })
    }
    
    fetchCities()
  }, [])

  const searchCountry = e => {
    const input = e.target.value
    const result = originalList.current.filter(country => country.name.toLowerCase().includes(input.toLowerCase()))
    setCountryList(result)
    setSearch(input)
    
  }

  const selectedCountry = id =>{
    const country = originalList.current.filter(country => country.numericCode === id)
    setCountryList(country)
    return <Display countryList={countryList} onClick={selectedCountry}/>
  }

  const sendList = () => {
    if(typeof countryList !== 'undefined'){
      return <Display countryList={countryList} onClick={selectedCountry}/>
    }
  }

  return (
    <div>
      <SearchFilter search={search} searchCountry={searchCountry} disable={(typeof countryList === 'undefined')}/>
      {sendList()}
    </div>
  )
}

export default App