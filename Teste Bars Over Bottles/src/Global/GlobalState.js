import React, { useState } from 'react'
import GlobalStateContext from './GlobalStateContext'
import axios from 'axios'

const GlobalState = (props) => {
  const [products, setProducts] = useState([])
  const [currentProduct, setCurrentProduct] = useState({})
  const [cart, setCart] = useState([])

  const getProducts = () => {
    axios
    .get(`/api/products.json`, 
    )
    .then( res => {
      console.log(res)
      setProducts(res.data)
    }) 
    .catch((err) => console.log(err))
  }

  // const getProducts = () => {
  //   axios
  //     .get(`https://bob-teste-front-end.herokuapp.com/api/products.json`, {
  //       headers: {
  //         "Content-Type": "application/json;charset=UTL-8",
  //         "Access-Control-Allow-Origin": "true",
  //         Accept: "application/json, text/plain, */*, application/jsonp",
  //         "Access-Control-Allow-Headers": "Content-Type, Content-Length, Accept-Encoding"
  //       }
  //     }
  //     )
  //     .then(res => {
  //       console.log(res)
  //       setProducts(res.data)
  //     })
  //     .catch((err) => console.log(err))
  // }

  // const getProducts = () => {
  //   axios
  //   .get(`https://cors-anywhere.herokuapp.com/https://bob-teste-front-end.herokuapp.com/api/products.json`)
  //   .then( res => {
  //     console.log(res)
  //     setProducts(res.data)
  //   }) 
  //   .catch((err) => console.log(err))
  // }



  // 
  const states = {
    products, setProducts, currentProduct, setCurrentProduct, cart, setCart
  }

  const constants = {
    getProducts
  }



  return (
    <GlobalStateContext.Provider value={{ states, constants }}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState