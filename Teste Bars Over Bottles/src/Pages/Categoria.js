import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Components/Card/Card'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import NavBar from '../Components/NavBar/NavBar'
import Pagination from '../Components/Pagination/Pagination'
import GlobalStateContext from '../Global/GlobalStateContext'
import CategoriaStyled from '../Sass/Pages/Categoria/CategoriaStyled.css'

export default function Categoria() {
  const { states, constants } = useContext(GlobalStateContext)
  const params = useParams()
  const [parametroOrdenação, setParametroOrdenação] = useState()
  const [subCategoria, setSubCategoria] = useState('all')

  const getCart = () => {
    let cartList = localStorage.getItem("cart")
    const convertedCart = JSON.parse(cartList)
    convertedCart && states.setCart (convertedCart)
  }

  useEffect(() => {
   constants.getProducts()
   getCart()
  }, [])
  

  const onChangeOrdenação = (event) => {
    setParametroOrdenação(event.target.value)
  }

  const setCategoria = (categoria) => {
    setSubCategoria(categoria)
  }

  const filteredProducts = states.products.filter((product) => {
    if (subCategoria === 'all') {
      return product.name
    } else {
      return product.category
        .toLowerCase()
        .includes(subCategoria.toLowerCase())
    }
  })
    .sort((produtoAtual, proximoProduto) => {
      return (
        parametroOrdenação *
        (produtoAtual.price - proximoProduto.price)
      )
    })
    .map((product, index) => {
      return <Card key={index}
        product={product}
      />
    })

  return (
    <>
      <Header />
      <NavBar />
      <section className='container'>
        <h2>{params.id}</h2>
        <h3>Home - {params.id}</h3>
      </section>

      <section className='categoryParameters'>
        <h2 onClick={() => setCategoria('women')}>FEMININO</h2>
        <h2 onClick={() => setCategoria('man')}>MASCULINO</h2>
        <h2 onClick={() => setCategoria('acessories')}>ACESSÓRIOS</h2>
      </section>

      <div className='order'>
        <div className='select'>
          <label>ORDENAR: </label>
          <select
            value={parametroOrdenação}
            onChange={onChangeOrdenação}>

            <option value={1}>Crescente</option>
            <option value={-1}>Decrescente</option>
          </select>
        </div>

        <div className='quantidade'>
          <h3>VISUALIZAR: <span>{filteredProducts.length} </span></h3>
        </div>

      </div>

      <article className='displayCards2'>
        {filteredProducts.length >= 1 ? filteredProducts : <h3 className='alert'>Não foram encontrado produtos.</h3>}
      </article>

      <Pagination />
      <Footer />
    </>
  )
}
