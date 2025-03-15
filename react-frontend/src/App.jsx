import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

const App = () => {
    return (
        <Router>
            <div>
                <h1>User Management App</h1>
                <Routes>
                    <Route path="/" element={<UserForm isEdit={true} />} />
                    <Route path="/add" element={<UserForm isEdit={false} />} />
                    <Route path="/edit/:id" element={<UserForm isEdit={true} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;