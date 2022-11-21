import * as React from 'react'
import { Scene, Storyboard } from 'utopia-api'
import { App } from '/src/app.js'
import { DecorativeLines } from '/src/cardcomponents/decorations.js'
import { Description } from '/src/cardcomponents/description.js'
import { Name } from '/src/cardcomponents/name.js'
import { Rating } from '/src/cardcomponents/rating.js'
import { Stamp } from '/src/cardcomponents/stamp.js'
import { ImageContainer } from '/src/cardcomponents/imagecontainer.js'
import { Profile } from '/src/profile.js'
import { AquaMan } from '/src/stickers.js'
import { Wonderer, Cryophile } from '/src/stickers.js'
import { BirbWatcher } from '/src/stickers.js'

export var storyboard = (
  <Storyboard>
    <Scene
      style={{
        width: 834,
        position: 'absolute',
        left: -1312,
        top: -593,
      }}
      data-label='iPad Pro 11"'
    >
      <App style={{}} />
    </Scene>
    <DecorativeLines
      style={{
        width: 1162,
        position: 'absolute',
        left: -199,
        top: 1198,
      }}
    />
    <Description
      description='testing the card out la la la description'
      style={{
        position: 'absolute',
        left: -291,
        top: 578.5,
        padding: '5px 20px 14px 20px',
        borderRadius: '0px 0px 20px 0px',
      }}
    />
    <ImageContainer
      imageUrl='https://cdn.utopia.app/editor/sample-assets/martini.jpg'
      style={{ position: 'absolute', left: -198, top: 446 }}
    />
    <Stamp
      name='04 19 2011'
      style={{
        position: 'absolute',
        left: 585,
        top: 498.5,
      }}
      color='var(--orange)'
    />
    <Rating
      rating={5}
      style={{
        position: 'absolute',
        left: -291,
        top: 855,
        padding: '25px 20px',
        borderRadius: 20,
      }}
      color='var(--orange)'
    />
    <Name
      text='Drink a Martini on Mount Everest'
      style={{
        position: 'absolute',
        width: '700px',
        left: 126,
        top: 1056,
      }}
    />
    <div
      style={{
        backgroundColor: 'var(--off-white)',
        position: 'absolute',
        left: -103,
        top: 979,
        width: 966,
        height: 316,
        zIndex: -10,
      }}
    />
    <Scene
      style={{
        width: 834,
        height: 848,
        position: 'absolute',
        left: -270,
        top: -594.25,
        background: 'var(--yellow)',
      }}
      data-label='User Profile Page'
    >
      <Profile />
    </Scene>
    <Wonderer
      style={{
        position: 'absolute',
        left: 730,
        top: 796,
        width: 100,
        height: 100,
      }}
    />
    <Cryophile
      style={{
        position: 'absolute',
        left: 492,
        top: 736,
        width: 100,
        height: 100,
        borderRadius: '50px',
      }}
    />
  </Storyboard>
)
