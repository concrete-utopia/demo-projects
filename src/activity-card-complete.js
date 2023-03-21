import * as React from 'react'
import '../public/globals.css'
import { Stamp } from '/src/cardcomponents/stamp.js'
import { DecorativeLines } from './cardcomponents/decorations.js'
import { Description } from './cardcomponents/description.js'
import { Name } from './cardcomponents/name.js'
import { Rating } from './cardcomponents/rating.js'
import { ImageContainer } from './cardcomponents/imagecontainer.js'

export var ActivityCardComplete = (props) => {
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Description
            description={props.activity.description}
            style={{
              padding: '5px 20px 14px 20px',
              borderRadius: '0px 0px 20px 0px',
              backgroundColor: props.color,
            }}
          />
          <Stamp
            name={props.activity.date}
            style={{ top: -160, left: 40, marginTop: -20 }}
            color={props.color}
          />
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
        <Rating
          rating={props.activity.rating}
          style={{
            padding: '25px 20px',
            borderRadius: 20,
            marginLeft: 20,
          }}
          color={props.color}
        />
      </div>
    </div>
  )
}
