import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CategoryBar from '../Components/CategoryBar/CategoryBar'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import ProductPage from '../Components/ProductPage/ProductPage'
import ProductsSuggestion from '../Components/ProductsSuggestion/ProductsSuggestion'
import GlobalStateContext from '../Global/GlobalStateContext'

export default function Produto() {
  const { states, constants } = useContext(GlobalStateContext)

  const getProdutoAtual = () => {
    let productActually = localStorage.getItem('cache produto')
    const convertedProduct = JSON.parse(productActually)
    convertedProduct && states.setCurrentProduct(convertedProduct)
  }

  const getCart = () => {
    let cartList = localStorage.getItem("cart")
    const convertedCart = JSON.parse(cartList)
    convertedCart && states.setCart (convertedCart)
  }

  useEffect(() => {
    constants.getProducts()
    getProdutoAtual()
    getCart()

  }, [])


  return (
    <>
      <Header />
      <CategoryBar
        category={states.currentProduct.category}
        name={states.currentProduct.name} />
      <ProductPage product={states.currentProduct} />
      <ProductsSuggestion />
      <Footer />
    </>

  )
}
