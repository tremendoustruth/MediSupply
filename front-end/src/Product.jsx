import React from "react";
import { useState, useEffect } from "react"
import { Link } from "react-router";
import styles from "./Product.module.css";



function Product({ title, description, price, url, id }) {
    return <div className={styles.productCard}>
        <p> {title} </p>
        <p>{description}</p>
        <p>{price}</p>
    </div>
}


export default Product