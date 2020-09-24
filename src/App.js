import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Wines from './components/Wines.js';

export default function App () {
  const [wines, setWines] = useState([])
  const [formInputs, updateFormInputs] = useState({
    winery: '',
    name: '',
    color: '',
    vintage: '',
    region: '',
    country: ''
  })

  const getWines = async () => {
    try {
      const response = await fetch('https://localhost:3000/wines');
      const data = await response.json()
      setWines(data)
     } catch(error){
       console.error(error)
     }
   } 
 useEffect(()=>{
   (async function (){
     await getWines()
       })()
     },[])

  const handleChange = (event) => {
    const updateFormInputs = Object.assign({}, formInputs, { [event.target.id]: event.target.value })
    updateFormInputs(updateFormInputs)
  }

  const handleSubmit  = async (event) =>{
    event.preventDefault()
    try{
      const response = await axios.post('http://localhost:3000/wines', formInputs)
      const createdWine = response.data
      await updateFormInputs({
        winery: '',
        name: '',
        color: '',
        vintage: '',
        region: '',
        country: ''
      })
      await setWines([createdWine, ...wines])
    }catch(error){
      console.error(error)
    }
  }
  
  return (
    <div className="App">
      <div className="container">
          <nav>
            <h4>Post a Wine </h4>
          <form onSubmit={handleSubmit}>
            <label htmlFor="winery">Winery</label>
            <input 
              type="text"
              id="winery"
              value={formInputs.winery}
              onChange={handleChange}
            />
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="color"
              value={formInputs.name}
              onChange={handleChange}
            />
            <label htmlFor="color">Color</label>
            <input 
            type="text" 
            id="color"
            value={formInputs.color}
            onChange={handleChange}
            />
            <label htmlFor="vintage">Vintage</label>
            <input 
              type="number" 
              id="vintage"
              value={formInputs.vintage}
              onChange={handleChange}
            />
            <label htmlFor="region">Region</label>
            <input 
              type="text" 
              id="region" 
              value={formInputs.region}
              onChange={handleChange}
            />
            <label htmlFor="country">Country</label>
            <input 
              type="text" 
              id="country" 
              value={formInputs.country}
              onChange={handleChange}
            />
            <input type="submit" className="submit" />
          </form>
        </nav>
        <main>
          <Wines wines={wines}/>
        </main>
        <aside></aside>
      </div>
    <footer />
  </div>
  );
}