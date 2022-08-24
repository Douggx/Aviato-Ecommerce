import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalStateContext from '../../Global/GlobalStateContext'
import { goToProduct } from '../../Routes/Coordinator'
import '../../Sass/Components/CategoriaPopulares/CategoriaPopulares.css'
import Card from '../Card/Card'

export default function CategoriaPopulares() {
    const { states, constants } = useContext(GlobalStateContext)
    const navigate = useNavigate()

    useEffect(() => {
      constants.getProducts()
      
    }, [])

    const renderProducts = states.products.map((product) => {
        return <Card 
        key={product.id}
        product={product}
        />
    })
    

    return (
        <section className='populares'>
            <h2>POPULARES</h2>

            <article className='displayCards'>
            {renderProducts}

            </article>

        <button onClick={()=> goToProduct(navigate, 'blusas')}>VER MAIS PRODUTOS</button>

        </section>
    )
}
