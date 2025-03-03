import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen md:py-16 py-28 bg-[url('/new/bg.png')] bg-cover bg-center text-white flex items-center justify-center p-8">
      <div className="md:max-w-5xl md:mt-0 mt-36 w-full grid grid-cols-1 md:grid-cols-2 gap-10 border border-[#93C7F3] p-8">
        {/* Contact Form */}
        <div>
          <h2 className="text-lg text-[#93C7F3] mb-2">Names</h2>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 bg-black border border-[#93C7F3] text-white mb-4"
          />
          <h2 className="text-lg text-[#93C7F3] mb-2">Your Email</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-black border border-[#93C7F3] text-white mb-4"
          />
          <h2 className="text-lg text-[#93C7F3] mb-2">Your Testimonial Message</h2>
          <textarea
            placeholder="Message Here"
            className="w-full p-3 bg-black border border-[#93C7F3] text-white mb-4 h-32"
          ></textarea>
          <button className="w-full bg-[#93C7F3] text-black py-3 text-lg font-bold">
            SEND TESTIMONY
          </button>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-lg text-[#93C7F3] uppercase mb-2">Testimonials</h3>
          <h2 className="text-5xl font-bold">
            Get In <span className="text-[#93C7F3]">Touch.</span>
          </h2>
          <p className="text-gray-400 mt-4 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            facilisis quam eget ex blandit cursus.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-[#93C7F3] text-2xl">📍</span>
              <p className="text-gray-400">
                <span className="font-bold text-white">Office Address</span>
                <br /> 99th, Arround St. Pku City, 28292, Riau Indonesia
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-[#93C7F3] text-2xl">📞</span>
              <p className="text-gray-400">
                <span className="font-bold text-white">Call Us</span>
                <br /> + (827) 123 - 456 - 7891
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-[#93C7F3] text-2xl">✉️</span>
              <p className="text-gray-400">
                <span className="font-bold text-white">Mail Us</span>
                <br /> info@evaniayogastudio.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
