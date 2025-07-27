import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./invoice.module.css";

const Invoice = () => {
    const [customerName, setCustomerName] = useState("");
    const [invoiceDate, setInvoiceDate] = useState(new Date());
    const [items, setItems] = useState("");
    const [subtotal, setSubtotal] = useState("");
    const [tax, setTax] = useState("");
    const [total, setTotal] = useState("");
    const navigate = useNavigate();

    const calculateTotal = () => {
        const sub = parseFloat(subtotal) || 0;
        const taxAmount = (sub * (parseFloat(tax) || 0)) / 100;
        setTotal((sub + taxAmount).toFixed(2));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!customerName || !total) {
            alert("Please enter company name and amount!");
            return;
          }
          calculateTotal();
        navigate(
            '/pay',
            {
                state: {
                    customerName,
                    total,
                },
            },
        );
    };

    return (
        <div className={styles.invoiceContainer}>
            <h2 className={styles.title}>Sales Invoice Management System</h2>
            <p className={styles.subtitle}>Efficient and user-friendly invoice management for businesses</p>

            <div className={styles.formCard}>
                <h3>Create New Invoice</h3>

                <form onSubmit={handleSubmit}>
                    <label>Customer Name:</label>
                    <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        required
                    />

                    <label>Invoice Date:</label>
                    <DatePicker
                        selected={invoiceDate}
                        onChange={(date) => setInvoiceDate(date)}
                        className="datepicker"
                    />

                    <label>Items:</label>
                    <textarea
                        rows="3"
                        value={items}
                        onChange={(e) => setItems(e.target.value)}
                        placeholder="Enter item details here..."
                        required
                    ></textarea>


                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label>Subtotal:</label>
                            <input
                                type="number"
                                value={subtotal}
                                onChange={(e) => {
                                    setSubtotal(e.target.value);
                                    calculateTotal();
                                }
                            }
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Tax (%) :</label>
                            <input
                                type="number"
                                value={tax}
                                onChange={(e) => {
                                    setTax(e.target.value);
                                    calculateTotal();
                                }}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Total:</label>
                            <input type="number" value={total} readOnly />
                        </div>
                    </div>

                    <button type="submit" className={styles.invoiceSubmitBtn}>
                        Generate Invoice
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Invoice;
