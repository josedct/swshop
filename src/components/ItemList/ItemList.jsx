import Item from '../Item/Item'

const ItemList = ({items}) => {
  const dirproductos = 'https://reactcoder.consultoriainformaticaon.com/productos'
  
  return (
    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-5">
      {
        items.map( product => 
          <Item 
            key={product.MODELO} 
            id={product.MODELO} 
            title={product.NOMBRE} 
            precio={product.PRECIO} 
            url={`${dirproductos}/${product.MODELO}/${product.IMG[0]}`} 
          />)
      }
    </div>
  )
}

export default ItemList