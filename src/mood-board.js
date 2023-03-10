import { DecorativeLines } from '/src/cardcomponents/decorations.js'
import { Description } from '/src/cardcomponents/description.js'
import { Rating } from '/src/cardcomponents/rating.js'
import { Stamp } from '/src/cardcomponents/stamp.js'
import { ImageContainer } from '/src/cardcomponents/imagecontainer.js'
import { Wonderer, Cryophile } from '/src/stickers.js'

export var MoodBoard = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'var(--off-white)',
        color: 'var(--purple)',
        fontFamily: 'primary-basic',
        fontSize: '20px',
      }}
    >
      <Cryophile
        style={{
          position: 'absolute',
          left: 1356,
          top: 763,
          width: 100,
          height: 100,
          borderRadius: '50px',
          zIndex: 100,
        }}
      />
      <Wonderer
        style={{
          position: 'absolute',
          left: 1428,
          top: 827.5,
          width: 100,
          height: 100,
          transform: 'rotate(-14deg)',
          zIndex: 100,
          contain: 'layout',
        }}
      />
      <DecorativeLines
        style={{
          width: 798,
          position: 'absolute',
          left: 179.5,
          top: 875,
        }}
      />
      <Description
        description='It was so cold, and we were so tired and defeated. There was nothing I could have wanted more.'
        style={{
          position: 'absolute',
          left: 259,
          top: 354.5,
          padding: '15px 20px 15px 20px',
          borderRadius: '0px 0px 20px 0px',
        }}
      />
      <ImageContainer
        imageUrl='https://cdn.utopia.app/editor/sample-assets/martini.jpg'
        style={{
          position: 'absolute',
          left: 528,
          top: 257,
        }}
      />
      <Stamp
        name='04 19 2011'
        style={{
          position: 'absolute',
          left: 179.5,
          top: 495,
        }}
        color='var(--orange)'
      />
      <Rating
        rating={5}
        style={{
          position: 'absolute',
          left: 1436,
          top: 235,
          padding: '25px 20px',
          borderRadius: 20,
        }}
        color='var(--orange)'
      />
      <span
        style={{
          position: 'absolute',
          wordBreak: 'break-word',
          left: 529,
          top: 996,
          width: 620,
          fontSize: '24px',
          fontFamily: 'var(--secondary)',
          lineHeight: '140%',
          height: 'max-content',
        }}
      >
        Not just any martini, and espresso martini! Because
        it's a long way back down...
      </span>
      <span
        style={{
          position: 'absolute',
          wordBreak: 'break-word',
          left: 179,
          top: 118,
          width: 680,
          fontSize: '44px',
          height: 156,
        }}
      >
        Drink a Martini On Mount Everest
      </span>
    </div>
  )
}
