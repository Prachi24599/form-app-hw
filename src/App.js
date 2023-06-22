import "./App.css";
import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <div className="App">
      <form>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Prachi"
          value={formData.firstName}
          onChange={changeHandler}
        />

        <br />
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Polakhare"
          value={formData.lastName}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="email">Email address</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="pp@gmail.com"
          value={formData.email}
          onChange={changeHandler}
        />
      </form>
    </div>
  );
}

export default App;
