import * as React from 'react'
import '../public/globals.css'
import { Name } from './cardcomponents/name.js'
import { ImageContainer } from './cardcomponents/imagecontainer.js'

export var ActivityCardSmallComplete = (props) => {
  return (
    <div
      style={{
        width: 834,
        height: 267,
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          {props.activity.date}
        </div>
      </div>
      <ImageContainer
        imageUrl={props.activity.imageUrl}
        style={{ transform: 'scale(1.1)' }}
      />
      <div
        style={{
          backgroundColor: props.color,
          width: '100%',
          display: 'flex',
          flexDirection: 'row-reverse',
          margin: '0px 0px 40px 20px',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          height: 120,
          zIndex: 10,
        }}
      >
        <Name
          text={props.activity.name}
          style={{ marginRight: 20 }}
        />
      </div>
    </div>
  )
}
