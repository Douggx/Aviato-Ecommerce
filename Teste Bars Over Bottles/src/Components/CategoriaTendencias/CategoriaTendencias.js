import '../../Sass/Components/CategoriaTendencias/CategoriaTendencias.css'
import React from 'react'
import Figure1 from '../../Assets/picture1.png'
import Figure2 from '../../Assets/picture2.png'
import Figure3 from '../../Assets/picture3.png'
import { useNavigate } from 'react-router-dom'
import { goToCategory } from '../../Routes/Coordinator'

export default function CategoriaTendencias() {
  const navigate = useNavigate()
  return (
    <section className='wrapper'>
    <h2>TENDÊNCIAS</h2>

    <div className='row'>

        <div className='column'>
            <img alt='men dresses' src={Figure1} onClick={()=>goToCategory(navigate, 'camisas')}></img>
            <img alt='jewelery' src={Figure2} onClick={()=>goToCategory(navigate, 'acessórios')}></img>
        </div>
        <div className='other'>
        <img alt='women dresses' src={Figure3} onClick={()=>goToCategory(navigate, 'calças')}></img>
        </div>
    </div>

    <hr></hr>
    </section>
  )
}
