// import * as React from 'react'
import '../public/globals.css'
import { useState, useEffect, useCallback } from 'react'
import { Stamp } from '/src/cardcomponents/stamp.js'
import {
  CategoryItem,
  ClearCategoriesButton,
} from './category-item.js'

import { DecorativeLines } from './cardcomponents/decorations.js'
import { Description } from './cardcomponents/description.js'
import { Name } from './cardcomponents/name.js'
import { Rating } from './cardcomponents/rating.js'
import { ImageContainer } from './cardcomponents/imagecontainer.js'

export var App = () => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          width: '100%',
          background: 'var(--off-white)',
          zIndex: '100',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '44px 0px 25px',
          gap: '22px',
          boxShadow: '0px 2px 33px #674168',
          left: 0,
        }}
      >
        <div
          style={{
            width: '100%',
            color: 'var(--orange)',
            fontFamily: 'primary',
            textAlign: 'center',
            fontWeight: 400,
            fontStyle: 'normal',
            border: '0px solid rgb(255, 174, 52, 1)',
            fontSize: '22px',
            textShadow:
              '0px 1px 1px #646464, 0px 4px 1px rgba(0, 0, 0, 0.25)',
          }}
        >
          THINGS I WAANT TO DO
        </div>
        <div style={{ width: '130%' }}>
          <div
            style={{
              color: 'var(--orange)',
              fontFamily: 'primary',
              textAlign: 'center',
              fontWeight: 400,
              fontStyle: 'normal',
              border: '0px solid rgb(255, 174, 52, 1)',
              fontSize: '72px',
              lineHeight: '125%',
              textShadow:
                '0px 1px 1px #646464, 0px 8px 1px rgba(0, 0, 0, 0.25)',
              width: 1084,
              height: 90,
            }}
          >
            BBeffore I Go
          </div>
        </div>
        <div
          className='category-container'
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: '10px 0px 0px 19px',
            gap: 32,
            width: '100%',
            height: '69.5px',
            overflowX: 'scroll',
          }}
        >
          <ClearCategoriesButton
            style={{
              borderRadizus: '50px',
              padding: '0px 18px',
              borderRadius: 22,
            }}
          />
          <CategoryItem
            selected={false}
            name='rare'
            style={{
              padding: '13px 27px',
              borderRadius: 50,
            }}
          />
          <CategoryItem
            selected={false}
            name='nearby'
            style={{
              padding: '13px 27px',
              borderRadius: '50px',
            }}
          />
          <CategoryItem
            selected={false}
            name='aeronautic'
            style={{
              padding: '13px 27px',
              borderRadius: '50px',
            }}
          />
          <CategoryItem
            selected={false}
            name='odd'
            style={{
              padding: '13px 27px',
              borderRadius: '50px',
            }}
          />
          <CategoryItem
            selected={false}
            name='trending'
            style={{
              padding: '13px 27px',
              borderRadius: '50px',
            }}
          />
          <CategoryItem
            selected={false}
            name='risky'
            style={{
              padding: '13px 27px',
              borderRadius: '50px',
            }}
          />
        </div>
      </div>
      <Stamp
        name='06 05 2022'
        style={{
          position: 'absolute',
          top: 312,
          left: 564,
          zIndex: 1000,
        }}
        color='var(--yellow)'
      />
      <div
        style={{
          width: '100%',
          background: 'var(--orange)',
          overflowY: 'scroll',
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
        }}
      >
        <div
          style={{
            width: 834,
            height: 767,
            backgroundColor: 'var(--yellow)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <div
            style={{
              width: '100%',
              height: 63,
              overflow: 'visible',
              zIndex: 10,
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
                description='Not as attentive as a real Butler, and only being able to hold drinks seems more like a luxury than work. Nonethelesss, we will keep him.'
                style={{
                  padding: '5px 20px 14px 20px',
                  borderRadius: '0px 0px 20px 0px',
                }}
              />
            </div>
          </div>
          <ImageContainer
            imageUrl='https://cdn.utopia.app/editor/sample-assets/flamingo.jpg'
            style={{}}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row-reverse',
              margin: '0px 20px 40px 20px',
              alignItems: 'flex-end',
              gap: 20,
              height: 120,
              zIndex: 10,
            }}
          >
            <Name
              text='Hire a Pool Flamingo as a Butler'
              style={{ padding: 0 }}
            />
            <Rating
              rating={2}
              style={{
                padding: '25px 20px',
                borderRadius: 20,
              }}
              color='var(--yellow)'
            />
          </div>
        </div>
        <div
          style={{
            width: 834,
            height: 767,
            backgroundColor: 'var(--orange)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            paddingTop: '9px',
          }}
        >
          <div
            style={{
              width: '100%',
              height: 63,
              overflow: 'visible',
              zIndex: 10,
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
              <Stamp
                name='08 28 2021'
                style={{ top: -160, left: 40 }}
                color='var(--orange)'
              />
              <Description
                description='After hearing people rave about them, I just had to go see for myself. They even kept me up at night while I was staying in Iceland.'
                style={{
                  background: 'var(--orange)',
                  borderRadius: '0px 0px 0px 20px',
                  padding: '5px 20px 14px 20px',
                }}
              />
            </div>
          </div>
          <ImageContainer imageUrl='https://cdn.utopia.app/editor/sample-assets/northernlights.jpg' />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              margin: '0px 20px 40px 20px',
              alignItems: 'flex-end',
              gap: 20,
              height: 120,
              zIndex: 10,
            }}
          >
            <Name
              text='See the Northern Lights'
              style={{ padding: 0, textAlign: 'left' }}
            />
            <Rating
              rating={3}
              style={{
                padding: '25px 20px',
                borderRadius: 20,
              }}
              color='var(--orange)'
            />
          </div>
        </div>
        <div
          style={{
            width: 834,
            height: 767,
            backgroundColor: 'var(--yellow)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <div
            style={{
              width: '100%',
              height: 63,
              overflow: 'visible',
              zIndex: 10,
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
                description='Its always been a goal of mine to retire early, become an old geezer, and learn to sail a little boat in the bay. I dont know what else to do now.'
                style={{
                  padding: '5px 20px 14px 20px',
                  borderRadius: '0px 0px 20px 0px',
                }}
              />
              <Stamp
                name='07 17 2019'
                style={{
                  top: -160,
                  left: 40,
                  marginTop: -20,
                }}
                color='var(--yellow)'
              />
            </div>
          </div>
          <ImageContainer
            imageUrl='https://cdn.utopia.app/editor/sample-assets/boat.jpg'
            style={{}}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row-reverse',
              padding: '0px 20px 40px 20px',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              width: '100%',
              gap: 20,
              height: 120,
              zIndex: 10,
            }}
          >
            <Name
              text='Learn to Sail A Boat'
              style={{ padding: 0 }}
            />
            <Rating
              rating={4}
              style={{
                padding: '25px 20px',
                borderRadius: 20,
              }}
              color='var(--yellow)'
            />
          </div>
        </div>
      </div>
      <div
        style={{
          height: '80px',
          width: '100%',
          background: 'var(--off-white)',
          zIndex: '100',
          boxShadow: '0px -2px 33px #674168',
        }}
      />
    </div>
  )
}
