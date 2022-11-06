import React from 'react'

const About = ({title, description}) => {
  return (
     <div className='name_row'>
          <strong>{title}:</strong>
          <p style={{margin: 0}}>{description}</p>
        </div>
  )
}

export default About
