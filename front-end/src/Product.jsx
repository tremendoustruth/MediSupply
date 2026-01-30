import React from "react";
import { useState, useEffect } from "react"
import { Link } from "react-router";
// import styles from "./Product.module.css";



function Product({ products, onAddToCart }) {
    const product = products[0]; //defining product to be added to cart
    const title = products[0].title
    const description = products[0].description
    const price = products[0].price
    return <>
        <p> {title} </p>
        <p>{description}</p>
        <p>{price}</p>
         <button onClick={() => onAddToCart(product)}>
        Add to Cart
      </button> {/* Example button to add to cart */}
    </>
}


export default Product