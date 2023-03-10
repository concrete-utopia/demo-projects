import * as React from 'react'
import '../public/globals.css'
import { DecorativeLines } from './cardcomponents/decorations.js'
import { Name } from './cardcomponents/name.js'
import { Rating } from './cardcomponents/rating.js'
import { ImageContainer } from './cardcomponents/imagecontainer.js'

export var ActivityCardIncomplete = (props) => {
  return (
    <div
      style={{
        width: 834,
        height: 767,
        backgroundColor: props.color,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        ...props.style,
      }}
    >
      <div
        style={{
          width: '100%',
          height: 63,
          overflow: 'visible',
          zIndex: 10,
          backgroundColor: props.color,
        }}
      >
        <DecorativeLines />
      </div>
      <ImageContainer
        imageUrl={props.activity.imageUrl}
        style={{
          filter: 'blur(1rem)',
          transform: 'scale(1.1)',
        }}
      />
      <div
        style={{
          backgroundColor: props.color,
          width: '100%',
          display: 'flex',
          flexDirection: 'row-reverse',
          margin: '0px 0px 40px 20px',
          alignItems: 'flex-end',
          gap: 20,
          height: 120,
          zIndex: 10,
        }}
      >
        <Name
          text={props.activity.name}
          style={{ marginRight: 20 }}
        />
        <Rating style={{ opacity: 0 }} />
      </div>
    </div>
  )
}
