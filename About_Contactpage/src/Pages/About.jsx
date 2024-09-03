import React from "react";

export default function About() {
  return (
    <>
      <div className="about-h py-20 ">
        <h1 className="text-white text-5xl font-medium text-center">
          About Us
        </h1>
      </div>
      <div className="about-content py-4 px-4 flex  justify-center mt-2 mb-6">
        <div className="cont-vision ">
          <img
            src="assets/Images/Binoculars-1.png"
            alt="#"
            width="125"
            className="m-auto py-2 px-2"
          />
          <div className="flex justify-center">
            <h1 className="inline text-3xl font-bold text-black border-b-4 border-blue-500 border-solid">
              Our Vision
            </h1>
          </div>
          <h3 className="text-center text-xl font-normal text-black py-6 px-2 leading-relaxed">
            Our vision for IT consulting services is to provide businesses with
            the most advanced and innovative technology solutions that can help
            them achieve their goals and stay ahead of the competition. We
            understand that technology is rapidly changing, and we aim to help
            our clients keep up with the latest trends and development in the
            industry. Our IT consulting services are designed to be
            comprehensive and customized to each client’s unique needs. We
            believe that one size does not fit all when it comes to technology
            solutions, and we work closely with our clients to identify their
            specific challenges and opportunities.
          </h3>
        </div>
        <div className="cont-mission ">
          <img
            src="assets/Images/Stellar-1.png"
            alt="#"
            className="m-auto py-2 px-2"
            width="128"
          />
          <div className="flex justify-center">
            <h1 className="inline text-3xl font-bold text-black border-b-4 border-blue-500 border-solid">
              Our Mission
            </h1>
          </div>
          <h3 className="text-center text-xl font-normal text-black py-6 px-2 leading-relaxed">
            As an IT consulting services provider, our mission is to empower
            businesses with the latest and most effective technology solutions
            to help them achieve their goals and stay ahead in a constantly
            evolving digital landscape. Our team of experienced and skilled
            professionals is dedicated to delivering customized solutions to our
            clients based on their unique requirements and challenges. We strive
            to understand our clients’ businesses and provide tailored
            recommendations that align with their objectives, budgets, and
            timelines.
          </h3>
        </div>
      </div>
      <div className=" about-process mb-6 mt-10 ">
        <img
          src="assets/Images/Process-1.png"
          alt="#"
          width="125"
          className="m-auto py-2 px-2"
        />
        <div className="flex justify-center">
          <h1 className="inline text-3xl font-bold text-black border-b-4 border-blue-500 border-solid">
            Our Process
          </h1>
        </div>
      </div>
      <div className=" px-4 mb-6 ">
        <img src="assets/Images/process-development.gif" alt="#" />
      </div>

      <div className="card mb-6">
        <h1 className="text-4xl font-bold pl-10 ml-10 ">Why Choose Us ?</h1>
        <div className="row1 mb-10 card-h flex justify-center">
          <div className="card1 px-4 cardc rounded-xl py-6 mr-10">
            <img
              src="assets/Images/Data-Quality1.png"
              alt=""
              className=" pl-4  mb-2"
            />
            <h1 className=" pl-4  text-xl font-semibold ">Quality Service</h1>
            <h3 className=" pl-4 inline  text-medium font-semibold text-black">
              Include expertise, experience, attention to detail, and a focus on
              customer satisfaction.
            </h3>
          </div>
          <div className="card2  px-4 cardc rounded-xl py-6">
            <img
              src="assets/Images/Light-On1.png"
              alt=""
              className=" pl-4  mb-2"
            />
            <h1 className=" pl-4  text-xl font-semibold ">Valuable Ideas</h1>
            <h3 className=" pl-4 inline  text-medium font-semibold text-black">
              Provide ideas to clients that include creative problem-solving,
              strategic planning etc.
            </h3>
          </div>
        </div>
        <div className="row2 card-h flex justify-center">
          <div className="card3 px-4 cardc rounded-xl py-6 mr-10">
            <img
              src="assets/Images/Budget1.png"
              alt=""
              className=" pl-4 mb-2"
            />
            <h1 className=" pl-4 text-xl font-semibold ">Budget Friendly</h1>
            <h3 className=" pl-4 inline  text-medium font-semibold text-black">
              Competitive pricing, flexible payment plans, and helping clients
              optimize their budgets to achieve their goals.
            </h3>
          </div>
          <div className="card4 cardc rounded-xl px-4 py-6">
            <img
              src="assets/Images/Call-Squared1.png"
              alt=""
              className=" pl-4 mb-2"
            />
            <h1 className=" text-2xl  pl-4 font-semibold text-black">
              24 x 7 Support
            </h1>
            <h3 className="pl-4  text-medium font-semibold text-black pl">
              Include prompt and availability for emergencies, and support
              throughout the consulting.
            </h3>
          </div>
        </div>
      </div>
      <div className="about-form mb-6 flex ">
        <div
          className="item1 h-full mr-10 w-2/4 "
        >
          <div className="item1-title  w-full text-white text-3xl font-bold  py-10 pl-10 text-center" >Get in touch with us</div>
          <div className="item1-body text-justify w-1/2 m-auto  text-white text-xl font-semibold p-10">
            At our IT consulting services, we are always eager to hear from
            prospective clients who are interested in leveraging our expertise
            and experience to solve their business challenges.
          </div>
        </div>
        <div className="item2 h-full w-3/4">
          <div class=" container  md:p-6 lg:p-12">
            <form className=" w-full">
              <div class="">
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
                    <option value="" className="text-medium text-lg">
                      -- Please Choose an Option --
                    </option>
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
                  Your Message (Optional)
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
        </div>
      </div>
    </>
  );
}
