import "./App.css";
import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "india",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
  });
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  console.log(formData);
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
        <br />
        <label htmlFor="country">Country</label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
        >
          <option value="india">India</option>
          <option value="canada">Canada</option>
          <option value="united states">United States</option>
          <option value="mexica">Mexico</option>
        </select>
        <br />
        <label htmlFor="streetAddress">Street Address</label>
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="B-25C"
          value={formData.streetAddress}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Malkapur"
          value={formData.city}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="state">State</label>
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Maharashtra"
          value={formData.state}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="postalCode">Postal Code</label>
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="4431011"
          value={formData.postalCode}
          onChange={changeHandler}
        />
        <fieldset>
          <legend>By Email</legend>
          <div className="flex">
            <input
              type="checkbox"
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>
          <div className="flex">
            <input
              type="checkbox"
              id="candidates"
              name="candidates"
              value={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>
          </div>
          <div className="flex">
            <input
              type="checkbox"
              id="offers"
              name="offers"
              value={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
