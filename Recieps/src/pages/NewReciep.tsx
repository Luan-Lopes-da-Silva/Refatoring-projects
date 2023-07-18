import style from'./newReciep.module.scss'

export default function NewReciep(){
return(
<div>
<form>
<div className={style.inputs}>
  <div>
    <label htmlFor="name">Nome Receita</label>
    <input type="text"/>
  </div>
  <div>
  <label htmlFor="author">Nome do autor da receita</label>
  <input type="text" />
  </div>

</div>
<div className={style.text}>
    <label htmlFor="steps">Passo a passo</label>
    <textarea id="steps" cols={30} rows={10}></textarea>
  </div>
</form>
</div>  
)
}