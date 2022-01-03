import React from 'react'
import './VoiceItem.css'

function VoiceItem(props) {
 return (
     <div className="wbox_music">
         <p>{props.name}</p>
         <audio controls src={props.mp3}></audio>
     </div>
 )
}

export default VoiceItem