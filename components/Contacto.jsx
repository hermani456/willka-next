"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextAnimate from "@/components/TextAnimate";

export default function Contacto() {
  const notify = () =>
    toast.success("Mensaje enviado", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_MAIL_SERVICE,
        process.env.NEXT_PUBLIC_MAIL_TEMPLATE,
        form.current,
        process.env.NEXT_PUBLIC_MAIL_USER
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
        e.target.reset(),
        notify()
      );
  };

  return (
    <section
      className="bg-gradient-to-r from-blue-950 to-black px-6 py-24 sm:py-20 lg:px-8 font-montserrat"
      id="contacto"
    >
      <div className="mx-auto max-w-2xl text-center">
        <TextAnimate
          once
          text="Contactanos"
          className="text-3xl sm:text-4xl lg:text-6xl  text-center font-museomoderno font-bold tracking-tight text-white"
          Wrapper="h2"
        />
        <TextAnimate
          once
          text="Te responderemos a la brevedad."
          className="mt-2  text-lg leading-8 text-orange-600"
          Wrapper="p"
        />
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Nombre
            </label>
            <div className="mt-2.5">
              <input
                required
                type="text"
                name="nombre"
                id="nombre"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="apellido"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Apellido
            </label>
            <div className="mt-2.5">
              <input
                required
                type="text"
                name="apellido"
                id="apellido"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="empresa"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Empresa
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="empresa"
                id="empresa"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                required
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="numero-telefono"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Telefono
            </label>
            <div className="mt-2.5">
              <input
                required
                type="tel"
                name="numero-telefono"
                id="numero-telefono"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="mensaje"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Mensaje
            </label>
            <div className="mt-2.5">
              <textarea
                required
                name="mensaje"
                id="mensaje"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-orange-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            Enviar
          </button>
          <ToastContainer />
        </div>
      </form>
    </section>
  );
}
