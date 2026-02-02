import styles from "./Payment.module.css"

function Payment() {
    return (
        <section className={styles.card}>
            <h2 className={styles.title}>Payment Information</h2>

            <div className={styles.field}>
                <label className={styles.label}>Cardholder Name*</label>
                <span className={styles.value}>VaniTomBush</span>
            </div>

            <div className={styles.field}>
                <label className={styles.label}>Card Number*</label>
                <span className={styles.value}> 1234 5678 9012 3456</span>
            </div>

            <div className={styles.field}>
                <label className={styles.label}>Expiration*</label>
                <span className={styles.value}>10/29</span>
            </div>

            <div className={styles.field}>
                <label className={styles.label}>CVV*</label>
                <span className={styles.value}>201</span>
            </div>
        </section>
    );
}

export default Payment