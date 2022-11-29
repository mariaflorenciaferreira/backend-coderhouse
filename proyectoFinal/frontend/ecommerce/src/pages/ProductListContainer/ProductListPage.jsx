import axios from 'axios'
import { useState, useEffect } from 'react'
import ProductList from "../../component/ProductList/ProductList"


const ProductListPage=()=>{

    const [products,setProducts]=  useState([])

    const getProducts=  async()=>{
        let responseProducts = await axios ('http://localhost:8080/api/productos')
        let {data} =responseProducts
        setProducts(data)
    }

    useEffect(()=>{
        getProducts()
    },[])

    console.log(products)
    return (
        <div>
            <ProductList products={products.products}/>
        </div>
    )

}

export default ProductListPage