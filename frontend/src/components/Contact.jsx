import React from "react";
import {useState} from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
        Contact Us
      </h2>
      <p className="mb-3 lg:mb-7 font-light text-center sm:text-xl">
        {" "}
        Got a questssssion? Need assistance? We're here to help!{" "}
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1.5 text-sm font-medium">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow-sm border border-gray-300 text-black text-sm rounded-lg focus:border-primary-500 block w-full p-2.5"
            placeholder="Enter Your Name"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block mb-1.5 text-sm font-medium">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow-sm border border-gray-300 text-black text-sm rounded-lg focus:border-primary-500 block w-full p-2.5"
            placeholder="Enter Your Email"
            onChange={handleChange}
            required
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block mb-1.5 text-sm font-medium">Message: </label>
          <textarea
            id="message"
            rows="6"
            name="message"
            className="block p-2.5 w-full text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:border-primary-500"
            placeholder="Enter Your Message"
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
