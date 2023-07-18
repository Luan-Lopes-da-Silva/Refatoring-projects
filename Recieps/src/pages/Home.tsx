import {Link} from 'react-router-dom'
import recieps from '../db.json'
export default function Home(){
  
return(
<div>
  {recieps.recieps.length<1?(
  <h2>Ainda não temos nenhuma receita cadastrada...</h2>  
  ):(
  <h2>Já tem elementos</h2>
  )}
</div>  
)  
}