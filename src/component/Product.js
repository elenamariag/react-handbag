import React from "react";

function Product ({span, image, title, price}) {
    return (
        <article>
            <span className="span-name">{span}</span>
            <img src={image} alt="bag-name"/>
            <p className="product-name">{title}</p>
            <h4 className="product-price">{price}</h4>
        </article>
    )

}

export default Product;