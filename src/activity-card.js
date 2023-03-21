/** @jsx jsx */
import { jsx } from '@emotion/react'
import '../public/globals.css'
import { useState, useCallback } from 'react'
import { ActivityCardComplete } from '/src/activity-card-complete.js'
import { ActivityCardIncomplete } from '/src/activity-card-incomplete.js'

export var ActivityCard = (props) => {
  const [completed, setCompleted] = useState(true)
  const toggleComplete = useCallback(
    () => setCompleted((completed) => !completed),
    [],
  )

  const color =
    props.activity.id % 2
      ? 'var(--yellow)'
      : 'var(--orange)'

  return (
    <div
      data-label='Activity Card'
      onClick={toggleComplete}
      style={{ overflow: 'hidden' }}
      css={{ '&:hover': { cursor: 'pointer' } }}
    >
      {
        // @utopia/conditional=true
        completed ? (
          <ActivityCardComplete
            activity={props.activity}
            color={color}
          />
        ) : (
          <ActivityCardIncomplete
            activity={props.activity}
            color={color}
          />
        )
      }
    </div>
  )
}
