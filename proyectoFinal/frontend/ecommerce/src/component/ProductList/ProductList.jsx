import Product from "../Product/Product"


const ProductList = ({products=[]}) => {
    return (
        <div className="productsSection">
            {
                products.map(prod=><Product key={prod.id} prod={prod} />)
            }
        </div>
    )
}

export default ProductList

