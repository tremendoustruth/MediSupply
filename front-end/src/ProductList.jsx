
import Product from "./Product";
import React from "react";
import styles from "./ProductList.module.css";
import { Link } from "react-router"

function ProductList({ products, onAddToCart }) {

    if (products.length === 0) {
        return <p>No products available.</p>
    }

    return (
        <div className={styles.listContainer}>
            
            <div className={styles.productList} >
                {products.map((product) => (
                    <Product
                        key={product._id}
                        id={product._id}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        url={product.url}
                        onAddToCart={onAddToCart}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductList