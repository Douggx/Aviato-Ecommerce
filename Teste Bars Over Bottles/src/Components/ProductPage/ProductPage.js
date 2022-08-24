import React, { useContext, useState } from 'react'
import GlobalStateContext from '../../Global/GlobalStateContext'
import '../../Sass/Components/ProductPage/ProductPage.css'

export default function ProductPage(props) {
    const { states, constants } = useContext(GlobalStateContext)
    const [color, setColor] = useState()
    const [size, setSize] = useState()
    const [quantity, setQuantity] = useState(1)

    const setCor = (cor) => {
        setColor(cor)
    }

    const onChangeSize = (event) => {
        setSize(event.target.value)
    }

    const quantitySetor = (quantidade) => {
        setQuantity(quantidade)
    }

    const addToCart = (itemId) => {
        const itemNoCarrinho = states.cart.find((item) => itemId === item.id);
        if (itemNoCarrinho) {
            const novosItensCarrinho = states.cart.map((item) => {
                if (itemId === item.id) {
                    return {
                        ...item,
                        quantidade: quantity,
                        color: color,
                        size: size
                    };
                } return item
            });
            states.setCart(novosItensCarrinho)
            localStorage.setItem("cart", JSON.stringify(novosItensCarrinho))

        } else {
            const itemAdicionado = states.products.find((item) => itemId === item.id);

            const novosItensCarrinho = [
                ...states.cart, { ...itemAdicionado, quantidade: quantity, color: color, size: size },
            ]
            states.setCart(novosItensCarrinho)
            localStorage.setItem("cart", JSON.stringify(novosItensCarrinho))
            alert('Produto adicionado no carrinho!')
        }
    }



    return (
        <section className='mainContainer'>

            <article className='productPhoto'>
                <img alt='product photo' src={props.product.photo && props.product?.photo}></img>
            </article>

            <section className='buyChoice'>
                <h2>{props.product.name && props.product?.name}</h2>
                <h1>{props.product.pridce && props.product?.price.toLocaleString(
                    "pt-BR",
                    { style: "currency", currency: "BRL" }
                )}</h1>

                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Curabitur eleifend cursus augue, et cursus turpis malesuada tincidunt.
                    <br />Donec lobortis sed metus vel rhoncus.  </h4>


                <hr className='hr' />


                <h3>CORES</h3>
                <label className='colors'>

                    <label className="checkbox">
                        <input type="radio" name="checkbox" id='blue' value='blue' onClick={() => setCor("blue")} />
                        <span></span>
                    </label>


                    <label className="checkbox1">
                        <input type="radio" name="checkbox" id='red' value='red' onClick={() => setCor("red")} />
                        <span></span>
                    </label>


                    <label className="checkbox2">
                        <input type="radio" name="checkbox" id='violet' value='violet' onClick={() => setCor("violet")} />
                        <span></span>
                    </label>


                    <label className="checkbox3">
                        <input type="radio" name="checkbox" id='green' value='green' onClick={() => setCor("green")} />
                        <span></span>
                    </label>

                </label>

                <h3>TAMANHOS</h3>
                <label className='sizes'>
                    <select
                        value={size}
                        onChange={onChangeSize}>
                        <option value=''>Escolha um tamanho</option>
                        <option value='P'>P</option>
                        <option value='M'>M</option>
                        <option value='G'>G</option>
                        <option value='XG'>XG</option>
                        <option value='XXG'>XXG</option>
                    </select>
                </label>

                <div className='buyNow'>

                    <div className='quantitySelector'>
                        <button onClick={() => quantitySetor(+quantity - +1)}>-</button>
                        <p>{quantity}</p>
                        <button onClick={() => quantitySetor(+quantity + +1)}>+</button>
                    </div>

                    <button className='btnBuy' onClick={() => addToCart(props.product.id)}>COMPRAR</button>
                </div>

                <hr className='hr2' />

                <h3>DESCRIÇÃO</h3>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec metus<br /> condimentum, euismod sem ut, varius nisl.
                    <br />Pellentesque tempus lorem nunc, ut consectetur magna tristique et.</h4>

                <hr className='hr2' />
                <section className='specifications'>
                    <h3>ESPECIFICAÇÕES</h3>
                    <h3>+</h3>
                </section>

                <hr className='hr3' />


            </section>


        </section>
    )
}
