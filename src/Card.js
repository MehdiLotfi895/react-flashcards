import { useState } from "react"
import "./Card.css"
const list=[{q:'what language is react bassed on?',answer:"javaScript",id:1},{q:'what are the buliding blocks of react apps?',answer:"component",id:2},{q:
    'whats the name of the syntax we use to describe a ui in react?',answer:"jsx", id:3},
    {q:'how to pass data from parent to child component?',answer:"props", id:4},{q:'how to give coponents memory?',answer:"useState hook",id:5}, {q:'what do we call an input element that is completely synchronised with state?',answer:"controlled element",id:6}
  
  ]

function Card(){
    const[selectId,setSelectId]=useState(null)
   return(
    <>
      <div className="main">
        {
            list.map((value)=>{
                    if(value.id==selectId){
                        return(<div className="container" onClick={()=>{setSelectId(null)}}style={{backgroundColor:"red",color:"white"}}>{value.answer}</div>)
                    }
                    else{
                        return(<div className="container" onClick={()=>{setSelectId(value.id)}}> {value.q}</div>)
                    }
                
            })
        }

      </div>
      

    </>
        
   )
}

export default Card
