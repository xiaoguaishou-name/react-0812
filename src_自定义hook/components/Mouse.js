import React from 'react'
import MouseUrl from '../assets/mouse.gif'
import usePosition from '../hook'
export default function Mouse() {
  const {x,y} = usePosition()
  return (
    <div>
      <img src={MouseUrl} style={{position:'absolute',left:x,top:y,width:100}}></img>
    </div>
  )
}
