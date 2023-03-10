import * as React from 'react'
import '../public/globals.css'
import { DecorativeLines } from './cardcomponents/decorations.js'
import { Name } from './cardcomponents/name.js'
import { Rating } from './cardcomponents/rating.js'
import { ImageContainer } from './cardcomponents/imagecontainer.js'

export var ActivityCardSmallIncomplete = (props) => {
  return (
    <div
      style={{
        width: 834,
        height: 267,
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          height: 290,
          backgroundImage: `url(${props.activity.imageUrl})`,
          backgroundSize: '110%',
          backgroundPosition: '50%',
          filter: 'blur(1rem)',
          margin: '-5px -10px -10px -5px',
          ...props.style,
        }}
      ></div>
      <Name
        text={props.activity.name}
        style={{
          position: 'relative',
          top: -200,
          zIndex: 100,
          color: props.color,
          textAlign: 'center',
          padding: '0 70px',
        }}
      />
    </div>
  )
}
