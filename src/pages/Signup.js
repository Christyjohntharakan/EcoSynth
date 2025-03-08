import React from 'react';

const Signup = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Signup</h1>
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <input type="text" placeholder="Name" required style={{ padding: '10px', margin: '10px', width: '80%' }} />
                <input type="email" placeholder="Email" required style={{ padding: '10px', margin: '10px', width: '80%' }} />
                <input type="password" placeholder="Password" required style={{ padding: '10px', margin: '10px', width: '80%' }} />
                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none' }}>
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;
