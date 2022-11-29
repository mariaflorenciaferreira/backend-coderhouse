import axios from 'axios'
import { useState, useEffect } from 'react'
import ProductList from "../../component/ProductList/ProductList"


const ProductListPage=()=>{

    const [loading, setLoading] = useState(true);
    const [products,setProducts]=  useState([])


    const getProducts=  async()=>{

        try {
                let responseProducts = await axios ('http://localhost:8080/api/productos')
                let {data} =responseProducts
                setProducts(data)

        } catch (error) {
            console.log(error)
        
        }finally{
            setLoading(false)
        }     
    }


    useEffect(()=>{
        getProducts()
    },[])

    return (

        <main>
            
            <div className="ItemListContainer">
                
                <div className="shopSection">
                <p className="shopTitle">

                {loading ?<p>cargando</p> : <ProductList products={products.products}/>}

                    
                </p>

                </div>
            </div>
        </main>
        
    )

}

export default ProductListPage