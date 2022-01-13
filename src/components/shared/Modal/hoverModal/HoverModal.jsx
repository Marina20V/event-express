import React, {useState} from 'react';

export default function HoverModal() {

  const [desc, setDesc] = useState('');


  const renderLikeList = () =>{
    return <div className="likes__list" >
      {/* {props} */}
    </div>
  }
 const  handleLeave=()=>{
    return setDesc('');
  }
  const handleHover=()=>{
    return setDesc(renderLikeList())
  }
  
   
  return(
    <div className="likes__wrapper" >
      <div className="likes__relavance" onMouseOver={handleHover} onFocus={(e)=>e.target.value} onMouseLeave={handleLeave}>
        Summary
        {desc}
      </div>
    </div>
  )
}