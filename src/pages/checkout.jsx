/* eslint-disable no-unused-vars */
import { useState } from "react"
import React from 'react'

const Checkout = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
     setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = async (e) => {
     e.preventDefault();
     // submission logic here
  };
  return (
    <div> 
    <h1>Checkout</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default Checkout