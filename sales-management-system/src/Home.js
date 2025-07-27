import React, { useState } from 'react';
import styles from './Home.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';

function Home() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const invoices = [
        { company: "ABC Company", dueDate: "18/01/2026", amount: "9760.00" },
        { company: "XYZ Consulting", dueDate: "07/02/2026", amount: "7770.00" },
        { company: "BCD LLC", dueDate: "12/06/2025", amount: "1570.00" },
        { company: "LMN Ltd", dueDate: "21/07/2025", amount: "5570.00" },
    ];

    return (
        <div className={styles.homeContainer}>
            <div className={styles.sidebar}>
                <div className={styles.title}>
                    <h1>Invoice Systems Ltd.</h1>
                    <span
                        className={`${styles.materialSymbolsOutlined} ${styles.collapseIcon}  ${isCollapsed ? 'collapsed' : ''}`}
                        title="Collapse sidebar"
                        onClick={() => {
                            setIsCollapsed(true)
                        }}
                    >
                        {!isCollapsed && <ArrowBackIosIcon />}
                    </span>
                    <span
                        className={`${styles.materialSymbolsOutlined} ${styles.expandIcon}  ${!isCollapsed ? 'expanded' : ''}`}
                        title="Expand sidebar"
                        onClick={() => {
                            setIsCollapsed(false)
                        }
                        }
                        style={{ display: isCollapsed ? 'inline' : 'none' }}
                    >
                        {isCollapsed && <ArrowForwardIosIcon />}
                    </span>
                </div>
                <nav>
                    <Link to="/home">Overview</Link>
                    <Link to="/charts">Charts</Link>
                    <Link to="/support">Support</Link>
                </nav>
                <Link to="/login" style={{ display: isCollapsed ? 'none' : 'block' }}>
                    <button type="submit" onClick={()=>{
                        localStorage.removeItem("auth");
                    }}>Logout</button>
                </Link>
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h2>Invoice Management</h2>
                    <div className={styles.searchContainer}>
                        <input type="search" placeholder="Search Invoices" />
                        <button className={styles.searchIcon}>
                            <SearchOutlined />
                        </button>
                    </div>
                </div>
                <div className={styles.gridContainer}>
                    {invoices.map((invoice, index) => (
                        <div className={styles.card} key={index}>
                            <h3 className={styles.cardTitle}>{invoice.company}</h3>
                            <p className={styles.cardinfo}>
                                Due: {invoice.dueDate} &mdash; ₹ {invoice.amount}
                            </p>
                            <div className={styles.statusLabel}>Bill</div>
                            <div className={styles.actionButton}>
                                <Link to="/invoice" className={styles.button}>Enter Bill</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;