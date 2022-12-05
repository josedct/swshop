import { useState, useEffect } from "react"

const ItemCount = ({stock, initial, onAdd = ()=>{}}) => {
  const [count, setCount] = useState(initial)
  const [stateInc, setStateInc] = useState(false)
  const [stateDec, setStateDec] = useState(true) 
  const [stockCant, setStockCant] = useState(stock[stock.length - 1].CANTIDAD)

  const tallaSeleccionada = (event)=>{
      setStockCant(event.target.value);
      setCount(1)
  }

  const increment = ()=>{
    setCount((count<stockCant)? count+1 : count)
  }
  
  const decrement = ()=>{
    setCount((count<2)? count : count-1)
  }

  useEffect(()=>{
    setStateInc((count<stockCant) ? false : true)
    setStateDec((count<2) ? true : false )
  })


  return (
    <div className="container">
      <div className="row p-2 bg-light d-flex justify-content-center">
            <h4 className="text-center text-uppercase">Tallas</h4>
            {    
                stock.map(opc =>
                    <div key={opc.TALLA} className="col-2 p-0 m-1">
                        <input type="radio" className="btn-check" name="options" id={opc.TALLA} autoComplete="off" defaultChecked={true} onClick={tallaSeleccionada} value={opc.CANTIDAD} disabled={(opc.CANTIDAD>0)? false : true}/>
                        <label className={`btn btn-outline-warning w-100 text-dark ${(opc.CANTIDAD>0)? "" :"text-decoration-line-through bg-dark bg-opacity-25"}`} htmlFor={opc.TALLA}>{`${opc.TALLA}`}</label>
                    </div>
                )
            }
            <h6 className="text-center text-uppercase text-muted">Disponibildad: {stockCant}</h6>
      </div>

      <div className="row p-4 justify-content-center">
        <div className="col d-flex justify-content-center ">
          <div className="input-group mx-3 w-75">
            <button className="btn btn-outline-warning text-dark" type="button" onClick={decrement} disabled={stateDec}>
              <i className="bi bi-dash-circle"></i>
            </button>
            <input type="text" className="form-control text-center" placeholder="" aria-label="Example text with two button addons" value={count} disabled readOnly/>
            <button className="btn btn-outline-warning text-dark" type="button" onClick={increment} disabled={stateInc}>
              <i className="bi bi-plus-circle"></i>
            </button>
          </div>
        </div>
          <div className="row p-4">
            <div className="col d-flex justify-content-center">
              <button  className="btn btn-warning mx-3 text-uppercase w-75" type="button" onClick={()=>onAdd(count)}>agregar al carrito</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ItemCount