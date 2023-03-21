import * as React from 'react'
import '../public/globals.css'
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
        overflow: 'hidden',
        ...props.style,
      }}
    >
      <ImageContainer
        imageUrl={props.activity.imageUrl}
        style={{ width: '100%' }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          position: 'absolute',
          fontFamily: 'var(--secondary)',
          fontSize: '20px',
          fontWeight: '600',
          color: 'var(--yellow)',
        }}
      >
        {props.activity.date}
      </div>
      <div
        style={{
          backgroundColor: props.color,
          zIndex: 10,
          padding: 20,
          color: 'var(--purple)',
          fontFamily: 'primary',
          fontSize: '28px',
          textAlign: 'left',
          lineHeight: '1.2em',
        }}
      >
        {props.activity.name}
      </div>
    </div>
  )
}

export var ActivityCardSmallComplete2 = (props) => {
  return (
    <div
      style={{
        width: 834,
        height: 267,
        backgroundColor: props.color,
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        ...props.style,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 25,
          color: 'var(--purple)',
          backgroundColor: props.color,
          gap: 20,
          width: 679,
          height: '100%',
        }}
      >
        <div
          style={{
            fontFamily: 'primary',
            fontSize: '28px',
            textAlign: 'left',
            lineHeight: '1.2em',
          }}
        >
          {props.activity.name}
        </div>
        <div
          style={{
            fontFamily: 'var(--secondary)',
            fontSize: '12px',
            textAlign: 'left',
          }}
        >
          {props.activity.description}
        </div>
      </div>
      <ImageContainer
        imageUrl={props.activity.imageUrl}
        style={{ height: '100%' }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          fontFamily: 'var(--secondary)',
          fontSize: '20px',
          fontWeight: '600',
          color: props.color,
          position: 'absolute',
          right: 0,
          bottom: 0,
          zIndex: 10,
        }}
      >
        {props.activity.date}
      </div>
    </div>
  )
}
