import React, { Component } from 'react'
import CatUrl from '../assets/cat.gif'
import usePosition from '../hook'
export default function Cat () {
  let {x,y} = usePosition()
  x += 200
  y -= 50
    return (
      <div>
        <img src={CatUrl} style={{position:'absolute',left:x,top:y}}></img>
      </div>
    )
  
}
