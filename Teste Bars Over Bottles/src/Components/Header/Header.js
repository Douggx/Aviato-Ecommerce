import React, { useContext } from 'react'
import '../../Sass/Components/Header/Header.css';
import Telephone from '../../Assets/telephone.svg'
import Bag from '../../Assets/bag.svg'
import { goToHome } from '../../Routes/Coordinator';
import { useNavigate } from 'react-router-dom';
import GlobalStateContext from '../../Global/GlobalStateContext';

export default function Header() {
  const { states, constants } = useContext(GlobalStateContext)
  const navigate = useNavigate()

  const totalValue = () => {
    let valorTotal = 0;

    for (let produto of states.cart) {
      valorTotal += produto.price * produto.quantidade;
    }
    return valorTotal.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <header>
        <div className='phone'>
        <img alt='telephone icon' src={Telephone}></img>
        <h5>11 4191 4399</h5>
        </div>

        <h1 onClick={()=> goToHome(navigate)}>AVIATO</h1>

        <div className='bag'>
            <img alt='bag icon' src={Bag}></img>
            <span>({states.cart.length}) -</span><p>{totalValue()}</p>
        </div>
    </header>
  )
}
