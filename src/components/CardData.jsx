import React from 'react'

const CardData = ({data}) => {
    // console.log(data)
    // const {date,heading,subHeading,id}= data
  return (
    <div>
      {data.map((elem)=>(
          <div key={elem.id} style={{"backgroundColor": "yellow","width":"30%","margin":"auto"}}>
              <h2>{elem.date}</h2>
              <h3>{elem.heading}</h3>
              <h3>{elem.subHead}</h3>
          </div>
      ))}
    </div>
  )
}

export default CardData