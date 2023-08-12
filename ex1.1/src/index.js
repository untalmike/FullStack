import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 1.1 Step 1
 * @param {*} props 
 * @returns 
 */
const Header = ({ course }/* props */) => {
  /**
   * Excercise 1.5
   */
    const {name} = course
  return (
    // <h1>{props.course}</h1>  
    <h1>{name}</h1>  
  )
}


/**
 * 1.2 Step 2
 * @param {*} props 
 * @returns 
 */
const Part = ({part, index}) => {
  {/* {props.part}{props.excercise} */}
  {/**
    * Excercise 1.4 & 1.5
  */}
  return (
    <p key={index}>
        {part.name} {part.excercises}
    </p>
  )
}

const Content = ({ course /* parts */}) => {
  /** Excercise 1.5 */
  const {parts} = course
  return (
    <div>
      {/* <Part part={props.part1.name} excercise={props.part3.excercises} />
      <Part part={props.part2.name} excercise={props.part3.excercises} />
      <Part part={props.part3.name} excercise={props.part3.excercises} /> */}

      {/**
       * Excercise 1.4
       */}
      {parts.map((part, i) => {
        return (
          <Part 
            key={i}
            part={part}
            index={i} />
        )
      })}
    </div>
  )
}

// const Content = (props) => {
//   return (
//     <>
//       <p>
//         {props.part1}{props.excercises1}
//       </p>
//       <p>
//         {props.part2}{props.excercises2}
//       </p>
//       <p>
//         {props.part3}{props.excercises3}
//       </p>
//     </>
//   )
// }

const Total = ({course /* parts */}) => {
  /** Excercise 1.5 */
  const { parts } = course
  const Total = parts.reduce((prev, curr) => prev + curr.excercises, 0);
  return(
    /**
     * Excercise 1.3
     * <p>Number of excercises {props.excercises1 + props.excercises2 + props.excercises3}</p>
     */

    /**
     * Excercise 1.4
     * <p>Number of excercises {props.excercises}</p> 
     */
    <div>
      <p>Number of excercises {Total}</p>
    </div>
  )
}

const App = () => {  
  // const part1 = "Fundamentals of React"
  // const excercises1 = 10
  // const part2 = "Using props to pass data"
  // const excercises2 = 7
  // const part3 = "State of a component"
  // const excercises3 = 14

  /**
   * Excercise 1.3
   */
  // const part1 = {
  //   name: "Fundamentals of React",
  //   excercises: 10
  // }
  
  // const part2 = {
  //   name: "Using props to pass data",
  //   excercises: 7
  // }

  // const part3 = {
  //   name: "State of a component",
  //   excercises: 14
  // }
  /**
   * Step 1.4
   */
  // const course = 'Half Stack application development'
  // const parts = [
  //   {
  //     name: "Fundamentals of React",
  //     excercises: 10
  //   },
  //   {
  //     name: "Using props to pass data",
  //     excercises: 7
  //   },
  //   {
  //     name: "State of a component",
  //     excercises: 14
  //   }
  // ]

  /**
   * Step 1.5
   */
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: "Fundamentals of React",
        excercises: 10
      },
      {
        name: "Using props to pass data",
        excercises: 7
      },
      {
        name: "State of a component",
        excercises: 14
      }
    ]
  }
  
  return(
    <div>
      <Header 
        course={course}
      />
      <Content 
        // Excercise 1.3
        // parts1={part1}
        // part2={part2}
        // part3={part3}

        // Excercise 1.4
        // parts={parts}

        // Excercise 1.5
        course={course}
      />
      <Total 
        // excercises1={part1.excercises}
        // excercises2={part2.excercises}
        // excercises3={part3.excercises}

        // Excercise 1.3
        // excercises={part1.excercises + part2.excercises + part3.excercises}

        // Excercise 1.4
        // parts={parts}

        // Excercise 1.5
        course={course}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))