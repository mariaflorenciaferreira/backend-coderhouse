
const Product = ({prod}) => {
    return (
        <div className="product">
                <div className="imgContainer">
                <img
                        src={prod.img}
                        alt="foto producto"
                        className="productImg"

                />
        </div>

            
                <h5 className="productName"> {prod.title}</h5>
                <h3 className="productName"> {prod.description}</h3>
                <p className="productPrice">${prod.price}</p>

        </div>   



    )
}

export default Product


