import Product from "../Product/Product"


const ProductList = ({products=[]}) => {
    return (
        
        products.map(prod=><Product key={prod.id} prod={prod} />)
    )
}

export default ProductList

