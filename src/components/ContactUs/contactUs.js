import { useState } from "react";

export default function ContactUs() {

  return (

    <div className="w-full flex items-center justify-center">
      <div className="bg-white px-4 lg:px-20 pb-8 lg:pb-0 lg:pt-4 w-full rounded ">
        <h2 className="text-2xl text-primary font-bold mb-8">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-black font ">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="border p-2 w-full text-black focus:outline-none focus:border-secondary focus:border-2 rounded-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-black">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border p-2 w-full focus:outline-none text-black focus:border-secondary focus:border-2 rounded-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-black">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="border text-black p-2 w-full focus:outline-none focus:border-secondary focus:border-2 rounded-sm"
              required
            ></textarea>
          </div>
          <div className="flex items-start text-center">
            <button
              type="submit"
              className="bg-primary text-white mt-4 w-60 p-2 px-4 rounded nav-button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>


  );
}
