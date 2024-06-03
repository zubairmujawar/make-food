import './App.css'
import Category from './components/category/Category'
import FirstSection from './components/firstSection/FirstSection'
import Navbar from './components/navbar/Navbar'
import { useEffect, useState } from 'react'

function App() {
  const [apiData, setApiData] = useState([])
   const url = 'https://the-vegan-recipes-db.p.rapidapi.com/';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e14278bea0mshf9091f735ed80d0p1dc359jsn01fb7575d593',
      'X-RapidAPI-Host': 'the-vegan-recipes-db.p.rapidapi.com'
    }
  };
  const fetchData = async()=>{
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setApiData(result)
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
    useEffect(()=>{
      // fetchData()
    },[])


  return (
    <>
    <Navbar/>
    <Category apiData={apiData}/>
    <FirstSection apiData={apiData}/>
    </>
  )
}

export default App
