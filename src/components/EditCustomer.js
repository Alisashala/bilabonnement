import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditCustomer() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [customer, setCustomer] = useState({
        fullName: '',
        email: '',
        region: '',
        price: '',
        brand: '',
        model: '',
        braendstof: '',
        kml: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:8080/api/customers/${id}`)
            .then(response => setCustomer(response.data))
            .catch(error => console.error('Error fetching customer:', error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/api/customers/${id}`, customer)
            .then(() => navigate('/customers'))
            .catch(error => console.error('Error updating customer:', error));
    };

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setCustomer({ ...customer, [e.target.name]: value });
    };

    return (
        <div>
            <h2>Edit Registration</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Full Name:</label>
                    <input
                        name="fullName"
                        value={customer.fullName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>CPR:</label>
                    <input
                        type="number"
                        name="cpr"
                        value={customer.cpr}
                        onChange={handleChange}
                    />
                </div>
                <div>
            <label>Region:</label>
            <input
              name="region"
              value={customer.region}
              onChange={handleChange}
            
            />
          </div>
          <div>
            <label>Price:</label>
            <input
              name="price"
              value={customer.price}
              onChange={handleChange}
              
            />
          </div>
          <div>
            <label>Brand:</label>
            <input
              name="brand"
              value={customer.brand}
              onChange={handleChange}
              
            />
          </div>
          <div>
            <label>Model:</label>
            <input
              name="model"
              value={customer.model}
              onChange={handleChange}
              
            />
          </div>
          <div>
            <label>Brændstof:</label>
            <input
              name="braendstof"
              value={customer.braendstof}
              onChange={handleChange}
              
            />
          </div>
          <div>
            <label>Km/l:</label>
            <input
              name="kml"
              value={customer.kml}
              onChange={handleChange}
              
            />
          </div>
                <button type="submit">Update Registration</button>
            </form>
        </div>

    );
}

export default EditCustomer;