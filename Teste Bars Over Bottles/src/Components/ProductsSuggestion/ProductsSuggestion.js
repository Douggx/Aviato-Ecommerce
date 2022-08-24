import React, { useContext } from 'react'
import '../../Sass/Components/ProductsSuggestion/ProductsSuggestion.css'
import GlobalStateContext from '../../Global/GlobalStateContext'
import Card from '../Card/Card'

export default function ProductsSuggestion() {
    const { states, constants } = useContext(GlobalStateContext)

    const mappedProducts = states.products.slice(0, 4).map((product) => {
        return <Card 
        key={product.id}
        product={product}/>
    })

  return (
    <article className='relacionados'>
        <h1>Produtos Relacionados</h1>
        <section className='displayRelationed'>
        {mappedProducts}
        </section>
    </article>
  )
}
