import React from 'react'
import '../../Sass/Components/Footer/Footer.css'
import Facebook from '../../Assets/facebook.png'
import Twitter from '../../Assets/twitter.png'
import Instagram from '../../Assets/instagram.png'
import Whatsapp  from '../../Assets/whatsapp.png'
import Pinterest from '../../Assets/pinterest.png'

export default function Footer() {
    return (
        <footer>

            <nav className='menuList'>

                <div className='menuHelp'>
                    <p>CONTATO</p>
                    <p>FRETES E ENTREGA</p>
                    <p>COMO COMPRAR</p>
                    <p>TROCAS E DEVOLUÇÕES</p>
                </div>

                <div className='menuAbout'>
                    <p>SOBRE</p>
                    <p>NA MIDIA</p>
                    <p>SEGURANÇA</p>
                    <p>POLÍTICAS</p>
                </div>

                <div className='cadastro'>
                    <p>CADASTRE-SE E RECEBA NOSSAS NOVIDADES</p>
                    <button>CADASTRAR</button>
                </div>

            </nav>

            <hr></hr>

            <div className='bottomMenu'>

            <p>COPYRIGHT © 2019</p>

            <ul className='navBottom'>
                <li>FAQ</li>
                <li>MINHA CONTA</li>
                <li>MEUS PEDIDOS</li>
            </ul>

            <div className='socialMedia'>
            <img alt='facebook logo' src={Facebook} />
            <img alt='twitter logo' src={Twitter}/>
            <img alt='instagram logo' src={Instagram}/>
            <img alt='whatsapp logo' src={Whatsapp}/>
            <img alt='pinterest logo'src={Pinterest}/>
        
            </div>

            </div>
        </footer>
    )
}
