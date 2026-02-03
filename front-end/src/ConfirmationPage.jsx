import { Link } from "react-router-dom";
import styles from "./ConfirmationPage.module.css"

function ConfirmationPage() {
    return (
        <div className={styles.page}>
            <div className={styles.check}>
                ✓
            </div>
            <h1 className={styles.confirm}>
                Order Confirmed!
            </h1>
            <Link className={styles.backLink} to="/">
                Back to Shopping
            </Link>
        </div>
    )
}

export default ConfirmationPage;