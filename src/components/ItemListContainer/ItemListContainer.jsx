import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from "../ItemList/ItemList"
import Loading from '../Loading/Loading'
import { GetItems } from '../util/GetItems/GetItems'

const ItemListContainer = () => {
  const [listProduct,setListProduct] = useState([])
  const [loading,setLoading] = useState(true)
  const {idCategory} = useParams()
  
  useEffect(()=>{
    setLoading(true)
    GetItems((idCategory)? idCategory : 'all')
    .then(info => setListProduct(info))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
  },[idCategory])

  return (
    <section className="container d-flex justify-content-center  text-uppercase py-4">
      {
        loading ?
          < Loading />
        : 
          < ItemList items={listProduct}/>
      }
    </section>
  )
}

export default ItemListContainer