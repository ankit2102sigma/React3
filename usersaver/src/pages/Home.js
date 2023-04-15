import React from 'react';
import { Link } from 'react-router-dom';
import ContactTable from '../Component/View';

import  './Home.css'

const Home = () => {
    return (
        <div className="container-Home">
            <h1>Contacts</h1>
            <ContactTable />
            <Link to="/ContactForm"><button>Create Contact</button></Link>
        </div>
    );
};

export default Home;

