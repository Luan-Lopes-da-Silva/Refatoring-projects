import {Outlet,Link} from 'react-router-dom'

import './rootLayout.module.scss'
export default function RootLayout(){
return(
<div>
  <header>
   <h1><Link to='/'>Cooking</Link></h1>
   <nav>
    <ul>
     <Link to="/desserts">Sobremesas</Link>
     <Link to="/new-reciep">Nova Receita</Link>
    </ul>
    <ul>
      <li><button>Cadastrar</button></li>
      <li><button>Login</button></li>
    </ul>
   </nav>
  </header>
  <main>
    <Outlet/>
  </main>
  <footer>
    Criado por Luan
  </footer>
</div>
)
}