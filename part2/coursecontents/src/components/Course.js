import React from 'react'

const Course = ( {course} ) => {
    return (
        <li key = {course.id}> {course.name} {course.exercises} </li>
    )}

export default Course