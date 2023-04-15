import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ContactForm.css';
import { useNavigate, useParams } from 'react-router-dom';

const ContactForm = () => {
    const { id } = useParams();
    const isEdit = id !== undefined;

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        email: '',
    });

    useEffect(() => {
        if (isEdit) {
            // Fetch the contact data by id from the server and set the form data
            axios
                .get(`http://localhost/reactfirebase/Php/ReadOne.php?id=${id}`)
                .then((res) => {
                    const { name, phone, address, email } = res.data;
                    setFormData({ name, phone, address, email });
                })
                .catch((err) => {
                    console.error(err);
                    alert('Error fetching contact data');
                    navigate('/Home');
                });
        }
    }, [isEdit, id, navigate]);

    const handleChange = (e) => {

        setFormData({ ...formData, [e.target.name]: e.target.value });

    };

    const verified = () =>{
        const rule = /^[a-zA-Z ]{2,40}$/;

        if (formData.name.length > 15) {
            alert('Enter Valid Name');

            return false;
        } else if (formData.phone.length !== 10) {
            alert('Enter Valid Phone Number');

            return false;
        } else if (formData.address.length > 30) {
            alert('Address length should be less than 30');

            return false;
        }
        if (!rule.test(formData.name)) {
            alert('Enter a valid name');
            return false;
        }
        return true;

    }

    const handleSubmit = (e) => {

        if(verified()) {
            e.preventDefault();
            const data = new URLSearchParams();
            data.append('name', formData.name);
            data.append('phone', formData.phone);
            data.append('address', formData.address);
            data.append('email', formData.email);

            const url = isEdit
                ? `http://localhost/reactfirebase/Php/Update.php?id=${encodeURIComponent(id)}`
                : 'http://localhost/reactfirebase/Php/Create.php';

            axios
                .post(url, data)
                .then((res) => {
                    console.log("data is coming", res.data);
                    alert("Data Inserted Sucessfully");
                    setFormData({name: '', phone: '', address: '', email: ''});
                    navigate('/Home');
                })
                .catch((err) => {
                    console.error(err);
                    // alert for error
                    alert('Error storing data');
                });
        }

    };

    return (
        <div className="form">
            <div className="form-container">
                <h2>{isEdit ? 'Update Contact' : 'Add Contact'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter Number"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Enter Address"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            placeholder="Enter email"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit">{isEdit ? 'Update' : 'Submit'}</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
