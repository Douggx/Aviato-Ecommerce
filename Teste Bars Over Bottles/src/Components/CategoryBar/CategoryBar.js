import React from 'react'
import '../../Sass/Components/CategoryBar/CategoryBar.css'

export default function CategoryBar(props) {
    
  return (
    <section className='blackWrapper'>
        <h3>Home - {props.category} - {props.name}</h3>
    </section>
  )
}
