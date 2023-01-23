import * as React from 'react'
import { Scene, Storyboard } from 'utopia-api'
import { App } from '/src/app.js'
import {
  DecorativeLines,
  Checkerboard,
} from '/src/cardcomponents/decorations.js'
import { Description } from '/src/cardcomponents/description.js'
import { Name } from '/src/cardcomponents/name.js'
import { Rating } from '/src/cardcomponents/rating.js'
import { Stamp } from '/src/cardcomponents/stamp.js'
import { ImageContainer } from '/src/cardcomponents/imagecontainer.js'
import { Profile } from '/src/profile.js'
import { Ode } from '/src/ode.js'
import { Comp } from '/src/comp.js'
import {
  AquaMan,
  Wonderer,
  Cryophile,
  BirbWatcher,
  RiskTaker,
  Tropicologist,
} from '/src/stickers.js'
import { CategoryItem } from '/src/category-item.js'

export var storyboard = (
  <Storyboard>
    <Scene
      style={{
        width: 834,
        position: 'absolute',
        left: -1372,
        top: -593,
      }}
      data-label='My List'
    >
      <App style={{}} />
    </Scene>
    <DecorativeLines
      style={{
        width: 947,
        position: 'absolute',
        left: -392,
        top: 308,
      }}
    />
    <Description
      description='testing the card out la la la description'
      style={{
        position: 'absolute',
        left: -444,
        top: -389.5,
        padding: '5px 20px 14px 20px',
        borderRadius: '0px 0px 20px 0px',
      }}
    />
    <ImageContainer
      imageUrl='https://cdn.utopia.app/editor/sample-assets/martini.jpg'
      style={{
        position: 'absolute',
        left: -392,
        top: -450,
      }}
    />
    <Stamp
      name='04 19 2011'
      style={{
        position: 'absolute',
        left: 61.5,
        top: -523.5,
      }}
      color='var(--orange)'
    />
    <Rating
      rating={5}
      style={{
        position: 'absolute',
        left: -445,
        top: -110,
        padding: '25px 20px',
        borderRadius: 20,
      }}
      color='var(--orange)'
    />
    <div
      style={{
        backgroundColor: 'var(--off-white)',
        position: 'absolute',
        left: -276,
        top: 119.5,
        width: 750,
        height: 324,
        zIndex: -10,
      }}
    >
      <Name
        text='Drink a Martini on Mount Everest'
        style={{
          position: 'absolute',
          width: '500px',
          left: 10,
          top: 55,
        }}
      />
    </div>
    <Scene
      style={{
        width: 834,
        height: 848,
        position: 'absolute',
        left: -2296,
        top: 239.25,
        background: 'var(--yellow)',
      }}
      data-label='User Profile Page'
    >
      <Profile />
    </Scene>
    <Wonderer
      style={{
        position: 'absolute',
        left: -235.5,
        top: -270,
        width: 100,
        height: 100,
        transform: 'rotate(-14deg)',
      }}
    />
    <Cryophile
      style={{
        position: 'absolute',
        left: -169,
        top: -209.5,
        width: 100,
        height: 100,
        borderRadius: '50px',
      }}
    />
    <Scene
      style={{
        position: 'absolute',
        left: -2296,
        top: -593,
        width: 834,
        height: 642,
      }}
      data-label='Ode To This App'
    >
      <Ode />
    </Scene>
    <Scene
      style={{
        position: 'absolute',
        left: -390,
        top: 655,
        width: 834,
        height: 1028,
      }}
    >
      <Comp />
    </Scene>
  </Storyboard>
)
