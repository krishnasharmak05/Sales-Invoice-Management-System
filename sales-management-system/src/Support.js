import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SupportForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [issue, setIssue] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Your request for support has been submitted. You will get a response to your email.');
        navigate('/home');
    };

    return (
        <div style={styles.container}>
            <h2>Support</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" style={styles.label}>Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={styles.input}
                />

                <label htmlFor="email" style={styles.label}>Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={styles.input}
                />

                <label htmlFor="issue" style={styles.label}>Describe your issue:</label>
                <textarea
                    id="issue"
                    name="issue"
                    value={issue}
                    onChange={(e) => setIssue(e.target.value)}
                    rows="5"
                    required
                    style={styles.input}
                />

                <button type="submit" style={styles.button}>Submit</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        width: '50%',
        margin: '50px auto',
        padding: '20px',
        paddingRight: '40px',
        background: 'white',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    label: {
        fontWeight: 'bold',
        display: 'block',
        marginTop: '10px',
    },
    input: {
        width: '100%',
        padding: '10px',
        marginTop: '5px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    button: {
        width: '100%',
        padding: '10px 0px 10px 10px',
        background: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        marginTop: '15px',
        cursor: 'pointer',
    },
};

export default SupportForm;
