import React from 'react'

function card(props) {
  return (
    <div id="parent">
         <div className="card">
            <img src={props.img} alt="" />
            <h2>{props.Title}</h2>
            <p>This is a simple card made using HTML and CSS.</p>
            <button>Read More</button>
         </div>
    </div>
  )
}

export default card
