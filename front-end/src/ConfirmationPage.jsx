import { Link } from "react-router-dom";
import styles from "./ConfirmationPage.module.css"
import OrderSummary from "./OrderSummary.jsx";

function ConfirmationPage({ cartItems = [], subtotal = 0 }) {
    return (
        <div className={styles.page}>
            <div className={styles.check}>
                ✓
            </div>
            <h1 className={styles.confirm}></h1>
            Order Confirmed!
            <OrderSummary cartItems={cartItems} subtotal={subtotal} showPlaceOrder={false} />

            <Link className={styles.backLink} to="/">
                Back to Shopping
            </Link>
        </div>
    )
}

export default ConfirmationPage;