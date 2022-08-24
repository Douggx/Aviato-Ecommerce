import React from 'react'
import '../../Sass/Components/PromoBanner/PromoBanner.css'
import Banner from '../../Assets/Banner1.jpg'
import { useNavigate } from 'react-router-dom'
import { goToCategory } from '../../Routes/Coordinator'

export default function PromoBanner() {
  const navigate = useNavigate()
  return (
    <article className='banner'>
        <img alt='homem olhando, aviso promocional' onClick={()=>goToCategory(navigate, 'acessórios')} src={Banner}></img>
    </article>
  )
}
