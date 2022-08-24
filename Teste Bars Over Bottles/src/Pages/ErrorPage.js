import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import NavBar from '../Components/NavBar/NavBar'
import GlobalStateContext from '../Global/GlobalStateContext'
import { goToHome } from '../Routes/Coordinator'
import '../Sass/Components/ErroPage/ErrorPage.css'

export default function () {
    const navigate = useNavigate()
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
    <section className='errorSection'>
    <h2>Parece que algo está faltando..</h2><h2>Clique <span onClick={()=>goToHome(navigate)}>aqui</span> para voltar para a página inicial.</h2>
    </section>
    <Footer />
    </>
  )
}
