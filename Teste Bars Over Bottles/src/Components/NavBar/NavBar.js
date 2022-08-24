import React from 'react'
import { goToCategory, goToHome } from '../../Routes/Coordinator'
import '../../Sass/Components/NavBar/NavBar.css'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
    const navigate = useNavigate()
    return (
        <nav>
            <ul className='menu'>
                <li onClick={()=>goToHome(navigate)}>HOME</li>
                <li onClick={()=>goToCategory(navigate, 'camisas')}>CAMISAS</li>
                <li onClick={()=>goToCategory(navigate, 'blusas')}>BLUSAS</li>
                <li onClick={()=>goToCategory(navigate, 'calças')}>CALÇAS</li>
                <li onClick={()=>goToCategory(navigate, 'acessórios')}>ACESSÓRIOS</li>
                <li onClick={()=>goToCategory(navigate, 'outlet')}>OUTLET</li>
            </ul>
        </nav>
    )
}
