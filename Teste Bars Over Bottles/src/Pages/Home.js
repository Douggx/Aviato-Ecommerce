import React, { useContext, useEffect } from 'react'
import CategoriaPopulares from '../Components/CategoriaPopulares/CategoriaPopulares'
import CategoriaTendencias from '../Components/CategoriaTendencias/CategoriaTendencias'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import NavBar from '../Components/NavBar/NavBar'
import PromoBanner from '../Components/PromoBanner/PromoBanner'
import GlobalStateContext from '../Global/GlobalStateContext'

export default function Home() {
  const { states, constants } = useContext(GlobalStateContext)

  const getCart = () => {
    let cartList = localStorage.getItem("cart")
    const convertedCart = JSON.parse(cartList)
    convertedCart && states.setCart (convertedCart)
  }

  useEffect(() => {
   getCart()
  
    
  }, [])
  


  return (
    <>
        <Header />
        <NavBar />
        <PromoBanner />
        <CategoriaTendencias />
        <CategoriaPopulares />
        <Footer />
    </>
  )
}
