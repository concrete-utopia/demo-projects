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
import { DiscoverActivities } from '/src/discoveractivities.js'
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
        height: 'max-content',
      }}
      data-label='My List'
    >
      <App style={{ width: 834, height: 2676 }} />
    </Scene>
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
        left: -438,
        top: -589,
        width: 834,
        height: 2188,
      }}
      data-label='Discover List'
    >
      <DiscoverActivities />
    </Scene>
    <Scene
      style={{
        position: 'absolute',
        left: -3516,
        top: -593,
        width: 1120,
        height: 1224,
        background: 'white',
        backgroundColor: '#eeeeea',
      }}
      data-label='Mood Board'
    >
      <Wonderer
        style={{
          position: 'absolute',
          left: 751.5,
          top: 115,
          width: 100,
          height: 100,
          transform: 'rotate(-14deg)',
          zIndex: 100,
        }}
      />
      <Cryophile
        style={{
          position: 'absolute',
          left: 828,
          top: 54.5,
          width: 100,
          height: 100,
          borderRadius: '50px',
          zIndex: 100,
        }}
      />
      <DecorativeLines
        style={{
          width: 879,
          position: 'absolute',
          left: 120.5,
          top: 896,
        }}
      />
      <Description
        description='testing the card out la la la description'
        style={{
          position: 'absolute',
          left: 79,
          top: 298.5,
          padding: '5px 20px 14px 20px',
          borderRadius: '0px 0px 20px 0px',
        }}
      />
      <ImageContainer
        imageUrl='https://cdn.utopia.app/editor/sample-assets/martini.jpg'
        style={{
          position: 'absolute',
          left: 121,
          top: 276,
        }}
      />
      <Stamp
        name='04 19 2011'
        style={{
          position: 'absolute',
          left: 864.5,
          top: 318,
        }}
        color='var(--orange)'
      />
      <Rating
        rating={5}
        style={{
          position: 'absolute',
          left: 53,
          top: 519,
          padding: '25px 20px',
          borderRadius: 20,
        }}
        color='var(--orange)'
      />
      <Name
        text='Drink a Martini on Mount Everest'
        style={{
          position: 'absolute',
          width: '500px',
          left: 458,
          top: 1011,
        }}
      />
    </Scene>
  </Storyboard>
)
