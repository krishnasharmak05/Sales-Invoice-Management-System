import { useLocation, useNavigate } from "react-router-dom";
import styles from "./PaymentsPage.module.css";


const PaymentPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { customerName, total } = location.state || { customerName: "Default Corp", total: 0 };

    const validate = () => {
        const cardNumber = document.querySelector('input[placeholder="Card Number"]').value;
        const expiryMonth = document.querySelector('input[placeholder="MM / YY"]').value;
        const cvv = document.querySelector('input[placeholder="CVV"]').value;
        const cardHolderName = document.querySelector('input[placeholder="Cardholder\'s Name"]').value;

        if (RegExp(/^\d{4}-\d{4}-\d{4}-\d{4}$/).test(cardNumber) === false) {
            alert("Please enter a valid card number.");
            return false;
        }
        if(RegExp(/^(1[0-2]|[1-9])\/(25|26|27|28|29|[3-4][0-9]|50)$/).test(expiryMonth) === false) {
            alert("Please enter a valid expiry month.");
            return false;
        }
        if ((cvv.length !== 3 && cvv.length !== 4) || isNaN(cvv)) {
            alert("Please enter a valid CVV.");
            return false;
        }
        if (!cardHolderName) {
            alert("Please enter the cardholder's name.");
            return false;
        }
        return true;
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>{customerName}</h2>
            </div>

            <div className={styles.paymentBox}>
                <div className={styles.leftPanel}>
                    <p className={styles.accountNumber}>Account number <strong>2342352311</strong></p>
                    <h3>Select a payment method</h3>
                    <ul className={styles.paymentMethods}>
                        <li key="Debit Card">💳 Debit Card</li>
                        <li key="Credit Card">💳 Credit Card</li>
                        <li>🏦 Netbanking</li>
                        <li>👛 Wallet</li>
                        <li>🔗 UPI</li>
                    </ul>
                </div>

                <div className={styles.rightPanel}>
                    <p className={styles.amountPayable}>Amount payable is <strong>₹{total}</strong></p>
                    <h3>Pay with Debit Card</h3>

                    <form className={styles.paymentForm} onSubmit={(e) => {
                        const validationIsSuccess = validate();
                        e.preventDefault();
                        if(!validationIsSuccess) return;
                        alert(`Payment of ₹${total} has been processed successfully!`);
                        navigate('/home');}
                    }>
                        <input type="text" placeholder="Card Number"  required/>
                        <div className={styles.cardDetails}>
                            <input type="text" placeholder="MM / YY" required/>
                            <input type="password" placeholder="CVV" required/>
                        </div>
                        <input type="text" placeholder="Cardholder's Name" />
                        <button className={styles.payButton}>Pay Now</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default PaymentPage;
