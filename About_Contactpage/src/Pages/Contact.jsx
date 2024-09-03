import React from "react";
export default function Contact() {
  return (
    <>
      <div class="contact-form container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <div className="flex flex-wrap flex-col contact-title">
          <h2 class="text-5xl font-semibold	 mb-4 text-white c-title m-auto">
            Contact Us
          </h2>
          <h5 class="text-2xl font-medium w-3/4 mb-4 text-white c-title text-center m-auto">
            At our IT consulting services, we are always eager to hear from
            prospective clients who are interested in leveraging our expertise
            and experience to solve their business challenges.
          </h5>
        </div>
        <form className="form-body w-1/2 m-auto">
          <div class="mb-4">
            <label
              class="block uppercase tracking-wide text-white text-lg font-sans mb-2"
              for="name"
            >
              Name
            </label>
            <input
              class="form-input block w-full pl-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div class="mb-4">
            <label
              class="block uppercase tracking-wide text-white text-lg font-sans  mb-2"
              for="email"
            >
              Email
            </label>
            <input
              class="form-input block w-full pl-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div class="mb-4">
            <label
              class="block uppercase tracking-wide text-white text-lg font-sans  mb-2"
              for="name"
            >
              Mobile
            </label>
            <input
              class="form-input block w-full pl-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div class="mb-4">
            <label
              class="block uppercase tracking-wide text-white text-lg font-sans  mb-2"
              for="services"
            >
              Services
            </label>
            <div class="relative">
              <select
                class="form-select block w-full h-full pl-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="services"
              >
                <option value="" className="text-medium text-lg">-- Please Choose an Option --</option>
                <option value="general">Web Development</option>
                <option value="support">Mobile App Development</option>
                <option value="ui/ux">UI/UX designing</option>
                <option value="digital marketing">Digital Marketing</option>
                <option value="seo&smo">SEO , SMO & PPC</option>
                <option value="e-commerce">E-Commerce</option>
                <option value="logo-designing">Logo Designing</option>
              </select>
            </div>
          </div>
          <div class="mb-4">
            <label
              class="block uppercase tracking-wide text-white text-lg font-sans mb-2"
              for="message"
            >
              Message
            </label>
            <textarea
              class="form-textarea block w-full pl-3 py-6 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="message"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            class="form-btn  text-white font-bold py-2 px-8 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

