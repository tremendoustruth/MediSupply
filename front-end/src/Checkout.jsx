
import ShippingCard from "./ShippingCard.jsx"
import OrderSummary from "./OrderSummary.jsx"
import Payment from "./Payment.jsx"
import styles from "./Checkout.module.css"
import { Link } from "react-router-dom";

function Checkout({ cartItems = [], subtotal = 0, cartCount = 0 }) {
    return <>

        <Link className={styles.backLink} to="/">
            ← Back to Shopping
        </Link>
        <ShippingCard className={styles.leftColumn} />
        <Payment className={styles.leftColumn} />
        <OrderSummary className={styles.rightColumn} cartItems={cartItems} subtotal={subtotal} cartCount={cartCount} />
    </>

}

export default Checkout;
