
import './App.css';
import { useState } from 'react';
import CardData from './components/CardData';


function App() {
  const [date,setDate]=useState()
  const [heading,setHeading]=useState("")
  const [subHead,setSubHead]=useState("")
  const [data,setData]=useState([])

  const handleDate = (e)=>{
    // console.log(e.target.value)
     setDate(e.target.value)
    //  console.log(date)
    }

  const handleHeading = (e)=>{
    setHeading(e.target.value)
    // console.log(heading)
  }

  const handleSubhead = (e)=>{
    setSubHead(e.target.value)
  }


  const handleSubmit= ()=>{
    
     setData([...data,{
       id:Date.now(),
       date:date,
       heading:heading,
       subHead:subHead,
      
     }])
  }
  console.log(data)
  return (
    <div className="App">
      <input type={"date"} onChange={handleDate}/>
      <input type={"text"} placeholder={"enter heading"}  onChange={handleHeading} />
      <input type={"text"} placeholder={"enter subHeading"} onChange={handleSubhead}/>
      <button type='submit' onClick={handleSubmit}>submit</button>

      <CardData data={data}/>
    </div>

    
  );
}

export default App;
