import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
    const isEdit = Boolean(id);

    // Fetch user data if in edit mode
    useEffect(() => {
        if (isEdit) {
            fetchUser();
        }
    }, [id]);

    // Fetch user data
    const fetchUser = async () => {
        try {
            const res = await axios.get(`http://localhost:3100/${id}`);
            setName(res.data.name);
            setEmail(res.data.email);
            setPwd(res.data.pwd);
        } catch (err) {
            console.error('Fetching error:', err);
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { name, email, pwd };
    
        // Basic validation (Uncommented)
        if (!name || !email || !pwd) {
            alert('Please fill in all fields.');
            return;
        }
    
        try {
            if (isEdit) {
                if (!id) {
                    console.error("Error: ID is missing in edit mode.");
                    return;
                }
                await axios.put(`http://localhost:3100/${id}`, data);
            } else {
                await axios.post('http://localhost:3100/', data); // Optional: Add trailing slash
            }
            navigate('/'); // Redirect to the home page after submission
        } catch (err) {
            console.error('Submitting error:', err);
            alert('An error occurred while submitting the form.');
        }
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <h2>{isEdit ? 'Edit User' : 'Add User'}</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                required
            />
            <button type="submit">{isEdit ? 'Update' : 'Add'}</button>
        </form>
        );
};

export default UserForm;