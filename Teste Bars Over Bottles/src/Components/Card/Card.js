import React, { useContext } from 'react'
import '../../Sass/Components/Card/Card.css'
import Heart from '../../Assets/heart.png'
import { useNavigate } from 'react-router-dom'
import { goToProduct } from '../../Routes/Coordinator'
import GlobalStateContext from '../../Global/GlobalStateContext'

export default function Card(props) {
  const navigate = useNavigate()
  const { states, constants } = useContext(GlobalStateContext)

  const actualProduct = (navigate, name, id, category, price, available, photo) => {
    const produtoAtual = { name, id, category, price, available, photo }
    localStorage.setItem('cache produto', JSON.stringify(produtoAtual))
    states.setCurrentProduct(produtoAtual)
    goToProduct(navigate, props.product.id)


  }

  return (
    <article className='card'>
      <img className='photoCard' alt={props.product.name} onClick={() => actualProduct(navigate, props.product.name, props.product.id, props.product.category, props.product.price, props.product.available, props.product.photo)} src={props.product.photo} />
      <div className='details'>
        <h4 className='name'>{props.product.name}</h4>

        <div className='heart'>
          <h3 className='price'>{props.product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
          <img alt='heart' src={Heart} />
        </div>
      </div>
    </article>
  )
}
