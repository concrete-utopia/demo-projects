import * as React from 'react'
import '../public/globals.css'
import { Name } from './cardcomponents/name.js'

export var ActivityCardSmallIncomplete = (props) => {
  return (
    <div
      style={{
        width: 834,
        height: 267,
        overflow: 'hidden',
        backgroundImage: `url(${props.activity.imageUrl})`,
        backgroundSize: '100%',
        backgroundPosition: '50%',
      }}
    >
      <div
        style={{
          width: '100%',
          height: 267,
          backgroundImage: `url(${props.activity.imageUrl})`,
          backgroundSize: '100%',
          backgroundPosition: '50%',
          filter: 'blur(1rem)',
        }}
      />
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

export var ActivityCardSmallIncomplete2 = (props) => {
  return (
    <div
      style={{
        width: 834,
        height: 267,
        overflow: 'hidden',
        backgroundImage: `url(${props.activity.imageUrl})`,
        backgroundSize: '100%',
        backgroundPosition: '50%',
        borderTop: `3px solid ${props.color}`,
      }}
    >
      <div
        style={{
          width: '100%',
          height: 267,
          backgroundImage: `url(${props.activity.imageUrl})`,
          backgroundSize: '100%',
          backgroundPosition: '50%',
          filter: 'blur(1rem)',
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '20px 40px 20px 25px',
          color: 'var(--purple)',
          backgroundColor: props.color,
          gap: 20,
          fontFamily: 'primary',
          fontSize: '28px',
          textAlign: 'left',
          lineHeight: '1.2em',
          position: 'absolute',
          top: 0,
          borderBottomRightRadius: 20,
        }}
      >
        {props.activity.name}
      </div>
    </div>
  )
}
