import { UserProPic } from './pro-pic.js'
import {
  AquaMan,
  Wonderer,
  BirbWatcher,
  Mixologist,
  Tropicologist,
  RiskTaker,
  Cryophile,
} from './stickers.js'
import {
  DecorativeLines,
  Checkerboard,
} from './cardcomponents/decorations.js'

export var Profile = (props) => {
  return (
    <div>
      <div
        style={{
          width: '100%',
          background: 'var(--off-white)',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '44px 0px 25px',
          gap: '26px',
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
          Things I want to do
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
            }}
          >
            BBeffore I Go
          </div>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          ...props.style,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            flexBasis: 0,
            justifyContent: 'space-between',
            padding: '40px 52px 40px 40px',
          }}
        >
          <UserProPic
            style={{
              borderRadius: '50%',
              border: '6px solid var(--purple)',
              overflow: 'hidden',
              background: 'var(--orange)',
              position: 'relative',
              flexBasis: 160,
              height: 160,
            }}
            color='var(--purple)'
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              paddingTop: '0px',
            }}
          >
            <div
              style={{
                color: 'var(--purple)',
                fontFamily: 'primary',
                fontSize: '38px',
              }}
            >
              McKayyyla Lannkau
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--secondary)',
                  color: 'var(--purple)',
                  fontWeight: 700,
                  fontSize: 18,
                  lineHeight: '144%',
                  marginBottom: 5,
                  position: 'relative',
                  height: 26,
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <div>Primary Location: </div>
                <div>New York City, USA</div>
              </div>
              <div
                style={{
                  fontFamily: 'var(--secondary)',
                  color: 'var(--purple)',
                  fontWeight: 700,
                  fontSize: 18,
                  lineHeight: '144%',
                  marginBottom: 5,
                  position: 'relative',
                  height: 26,
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <div>Living Since: </div>
                <div>1999</div>
              </div>
              <div
                style={{
                  fontFamily: 'var(--secondary)',
                  color: 'var(--purple)',
                  fontWeight: 700,
                  fontSize: 18,
                  lineHeight: '144%',
                  marginBottom: 5,
                  position: 'relative',
                  height: 26,
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <div>Life Level: </div>
                <div>Advanced</div>
              </div>
            </div>
          </div>
        </div>
        <DecorativeLines />
        <Checkerboard
          style={{
            height: 335,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 40,
            padding: 40,
          }}
          color1='var(--yellow)'
          color2='var(--orange)'
        >
          <Cryophile
            style={{
              boxShadow:
                '0px 2px 4px 5px rgb(0, 0, 0, 0.12)',
              borderRadius: '50%',
            }}
          />
          <BirbWatcher
            style={{
              width: 121,
              boxShadow:
                '0px 2px 4px 5px rgb(0, 0, 0, 0.12)',
              padding: '10px 0px 10px 10px',
              height: 100,
              contain: 'layout',
            }}
          />
          <RiskTaker
            style={{
              boxShadow:
                '0px 2px 4px 5px rgb(0, 0, 0, 0.12)',
              transform: 'rotate(42deg)',
              borderRadius: '5px',
            }}
          />
          <Mixologist
            style={{
              transform: 'rotate(5deg)',
              boxShadow:
                '0px 2px 4px 5px rgb(0, 0, 0, 0.12)',
              padding: '5px 0',
            }}
          />
          <AquaMan
            style={{
              borderRadius: '50%',
              boxShadow:
                '0px 2px 4px 5px rgb(0, 0, 0, 0.12)',
            }}
          />
          <Wonderer
            style={{
              transform: 'rotate(-15deg)',
              boxShadow:
                '0px 2px 4px 5px rgb(0, 0, 0, 0.12)',
              borderRadius: '0 0 30% 30% ',
            }}
          />
          <Tropicologist
            style={{
              borderRadius: '30px 30px 0 0',
              boxShadow:
                '0px 2px 4px 5px rgb(0, 0, 0, 0.12)',
              paddingTop: 5,
            }}
          />
        </Checkerboard>
      </div>
    </div>
  )
}
