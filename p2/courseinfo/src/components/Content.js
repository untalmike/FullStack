import React from 'react'
import Part from './Part'

const Content = ({courses}) => {
    const course = courses.map((course) => {
      const {id, name, parts} = course
      return {id, name, parts}
    })

    return (
    <div>
      {course.map(course => {
        const {id, name, parts} = course
        return(
          <section key={id}>
            <h2>{name}</h2>
            <Part parts={parts} />
          </section>
        )
      })}
    </div>
  )
}

export default Content