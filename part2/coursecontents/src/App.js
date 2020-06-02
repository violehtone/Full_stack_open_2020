import React from 'react'
import Course from './components/Course'

const App = ({ course }) => {
    let total = course.parts.map(course => course.exercises).reduce((a,b) => a+b, 0)

    return(
        <div>
            <h1> {course.name} </h1>
            <ul>
                {course.parts.map(course => 
                    <Course key = {course.id} course = {course} />
                    )}
            </ul>
                <b> Total of {total} exercises </b>
        </div>
    )}

export default App