import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function Form({ closeModal }) {
    let api = import.meta.env.VITE_API_BASE_URL;

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        location: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
        } else if (formData.phone.length !== 10) {
            newErrors.phone = 'Phone number must be exactly 10 digits';
        }
        if (!formData.email) newErrors.email = 'Email is required';
        if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email address is invalid';
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            try {
                const data = new FormData();
                data.append('name', formData.name);
                data.append('phone', formData.phone);
                data.append('email', formData.email);
                data.append('location', formData.location);
                data.append('message', formData.message);

                const response = await fetch(api, {
                    method: 'POST',
                    body: data,
                });

                if (response.ok) {
                    const responseData = await response.json();
                    console.log('Server response:', responseData);

                    await Swal.fire({
                        title: 'Success!',
                        text: 'Thank you for submitting the form. The Healing Gloves team will get back to you soon.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                    setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        message: '',
                        location: ''
                    });
                    setErrors({});
                    closeModal();
                } else {
                    const errorText = await response.text();
                    console.error('Server response:', errorText);
                    await Swal.fire({
                        title: 'Error!',
                        text: 'Something went wrong. Please try again later.',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                }
            } catch (error) {
                console.error('Fetch error:', error);
                await Swal.fire({
                    title: 'Error!',
                    text: 'An error occurred. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        }
    };
    return (
        <form
            className='sm:w-full max-w-md sm:p-6 p-3 bg-white shadow-lg bg-opacity-100 rounded border-2 border-gray-100'
            onSubmit={handleSubmit}
        >
            <h1 className="text-blue-900 md:text-xl xl:text-2xl xxl:text-2xl text-lg font-bold text-center sm:mb-6 mb-3">Request an Appointment</h1>

            <div className="mb-6">
                <input


                    id="name"
                    type="text"
                    placeholder=" Name*"
                    value={formData.name}
                    onChange={handleChange}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name && 'border-red-500'}`}
                />
                {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
            </div>

            <div className="mb-6">
                <input
                    id="phone"
                    type="tel"
                    placeholder="Phone number*"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.phone && 'border-red-500'}`}
                />
                {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone}</p>}
            </div>

            <div className="mb-6">
                <input
                    id="email"
                    type="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email && 'border-red-500'}`}
                />
                {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
            </div>

            <div className="mb-6">
                <select
                    id="location"
                    value={formData.location}
                    onChange={handleChange}
                    className={`bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.location && 'border-red-500'}`}
                >
                    <option value="" disabled>Location</option>
                    <option value="Polyclinic">Polyclinic (Sohna)</option>
                    <option value="Medharbour">Medharbour (Sector 51, Gurgaon)</option>
                    <option value="SCI Hospital">SCI Hospital (Golf course Road Gurgaon)</option>
                    <option value="Saya Medical">Sayaamed (Sector 43 Gurgaon)</option>
                </select>
                {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
            </div>

            <div className="mb-6">
                <textarea
                    id="message"
                    placeholder="Enter Your Message*"
                    value={formData.message}
                    onChange={handleChange}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-16 resize-none ${errors.message && 'border-red-500'}`}
                />
                {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
            </div>

            <div className="flex items-center justify-center">
                <button
                    className="bg-[#FB3D9D] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}