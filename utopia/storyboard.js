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
import {
  AquaMan,
  Wonderer,
  Cryophile,
  BirbWatcher,
  RiskTaker,
} from '/src/stickers.js'
import { CategoryItem } from '/src/category-item.js'
import { Checkerboard } from '/src/cardcomponents/decorations.js'
import { Tropicologist } from '/src/stickers.js'

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
        left: 542,
        top: 866.5,
        width: 100,
        height: 100,
        borderRadius: 10,
      }}
    />
    <Scene
      style={{
        position: 'absolute',
        left: -2364,
        top: -593,
        width: 834,
        height: 642,
      }}
      data-label='Ode To This App'
    >
      <Checkerboard
        style={{
          position: 'absolute',
          left: 540,
          top: -174,
          width: 452,
          height: 816,
          transform: 'rotate(-24deg)',
          opacity: 0.3,
        }}
        color1='var(--purple)'
        color2='black'
      />
      <div
        style={{
          width: 834,
          height: 642,
          backgroundColor: 'var(--purple)',
          zIndex: 20,
        }}
      >
        <AquaMan
          style={{
            position: 'absolute',
            left: 757.5,
            top: 360,
            width: 100,
            height: 100,
            borderRadius: 50,
          }}
        />
        <Wonderer
          style={{
            position: 'absolute',
            left: 739,
            top: 513,
            width: 100,
            height: 100,
            borderRadius: 14,
            transform: 'rotate(12deg)',
          }}
        />
        <BirbWatcher
          style={{
            position: 'absolute',
            left: 646.5,
            top: 151,
            width: 134,
            height: 100,
            paddingTop: '11px',
            paddingBottom: '9px',
            paddingLeft: '12px',
            transform: 'rotate(-13deg)',
          }}
        />
        <RiskTaker
          style={{
            position: 'absolute',
            left: 736,
            top: 219,
            width: 90,
            height: 92,
            borderRadius: 15,
            paddingRight: '0px',
            transform: 'rotate(36deg)',
          }}
        />
        <Tropicologist
          style={{
            position: 'absolute',
            left: 694,
            top: -12,
            width: 100,
            height: 100,
            transform: 'rotate(19deg)',
          }}
        />
        <span
          style={{
            color: 'var(--yellow)',
            position: 'absolute',
            fontFamily: 'var(--secondary)',
            left: 58,
            top: 157,
            width: 663,
            height: 'min-content',
          }}
        >
          Before my time on earth is through
          <br />I want to see the world and all it has to
          offer
          <br />I want to climb mountains and become a bird
          watcher
          <br />
          <br />I want to try every type of food
          <br />
          And visit every single museum, no matter how crude
          <br />I want to learn a new language and speak it
          fluently <br />I want to dance and sing and be
          full of energy
          <br />
          <br />I want to go skydiving and bungee jumping
          too
          <br />I want to go scuba diving and see
          what&#x27;s underneath the blue
          <br />I want to go on safari and see animals in
          their natural habitat
          <br />I want to do all these things and more,
          it&#x27;s on my list, I&#x27;ll do it,
          <br />
          that&#x27;s that
          <br />
          <br />
          The world is full of endless possibilities
          <br />
          So many things to do and see, look at the stars,
          feel the breeze
          <br />I want to find the end of every single
          rainbow
          <br />
          And I want to do all these things,
          <br /> before I go.
        </span>
        <div
          style={{
            color: 'var(--purple)',
            fontFamily: 'var(--secondary)',
            fontSize: '1.5em',
            padding: '20px',
            position: 'absolute',
            width: 617,
            height: 'min-content',
            borderRadius: '0 10px 0 0',
            borderTopRightRadius: '50px',
            left: 0,
            top: 52,
            backgroundImage:
              'linear-gradient(0deg, #FFA500 70%, #FFD689 92%, #FFFFFF9E 100%)',
          }}
        >
          I have a list of things I want to do...
        </div>
      </div>
    </Scene>
  </Storyboard>
)
