import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styling/EditCustomer.css';

function EditCustomer() {
    // Henter kunde-ID fra URL-parametre ved hjælp af useParams-hook
    const { id } = useParams();

    // Hook der mulliggøre navigation mellem sider
    const navigate = useNavigate();

    // Tilstand til at gemme kundeoplysninger
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

    // Effekt-hook til at hente kundeoplysninger baseret på ID ved komponentindlæsning
    useEffect(() => {
        axios.get(`http://localhost:8080/api/customers/${id}`)
            .then(response => setCustomer(response.data))
            .catch(error => console.error('Error fetching customer:', error));
    }, [id]);

     // Funktion til at håndtere indsendelse af opdaterede kundeoplysninger
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/api/customers/${id}`, customer)
            .then(() => navigate('/customers'))
            .catch(error => console.error('Error updating customer:', error));
    };

        // Funktion til at håndtere ændringer i inputfelterne
    const handleChange = (e) => {
        // Afgør om input er en afkrydsningsfelttype
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        // Opdaterer kundeoplysningerne baseret på det ændrede input
        setCustomer({ ...customer, [e.target.name]: value });
    };

    return (
        <div className="edit-customer-container">
            <div className="edit-customer-box">
                <h2>Edit Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Full Name</label>
                        <input
                            name="fullName"
                            value={customer.fullName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>CPR</label>
                        <input
                            type="number"
                            name="cpr"
                            value={customer.cpr}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Region</label>
                        <input
                            name="region"
                            value={customer.region}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Price</label>
                        <input
                            name="price"
                            value={customer.price}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Brand</label>
                        <input
                            name="brand"
                            value={customer.brand}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Model</label>
                        <input
                            name="model"
                            value={customer.model}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Fuel</label>
                        <input
                            name="braendstof"
                            value={customer.braendstof}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Km/l</label>
                        <input
                            name="kml"
                            value={customer.kml}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Update Registration</button>
                </form>
            </div>
        </div>
    );
}

export default EditCustomer;
