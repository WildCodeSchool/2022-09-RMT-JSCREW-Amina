import React from "react";

function Contact() {
  const handleSubmit = (event) => event.preventDefault();
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white mt-32"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-4 text-center">
          <p className="text-4xl text-center font-bold inline border-b-4 border-gray-500">
            CONTACT
          </p>
          <p className="py-6 text-center">
            N'hésitez pas à me contacter, je vous répondrai dans les plus brefs
            délais.
          </p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            action="submit"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              required
              type="text"
              name="name"
              placeholder="Taper votre nom"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              required
              type="text"
              name="email"
              placeholder="Tapez votre email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Ecrire votre message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <button
              type="button"
              className="button-home text-white  px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              ENVOYER
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
