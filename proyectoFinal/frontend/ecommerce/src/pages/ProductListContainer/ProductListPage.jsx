import axios from 'axios'
import { useState, useEffect } from 'react'
import ProductList from "../../component/ProductList/ProductList"


const ProductListPage=()=>{

    // const [loading, setLoading] = useState(true);
    const [products,setProducts]=  useState([])

    const getProducts=  async()=>{
        let responseProducts = await axios ('http://localhost:8080/api/productos')
        let {data} =responseProducts
        setProducts(data)
        // setLoading(false)
    }

    useEffect(()=>{
        getProducts()
    },[])

    console.log(products)
    return (

            <main>
        <div className="ItemListContainer">
            
            <div className="shopSection">
            <p className="shopTitle">

                <ProductList products={products.products}/>
            </p>

            </div>
        </div>
        </main>
        
    )

}

export default ProductListPage