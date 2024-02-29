import logo from "../public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { MdOutlinePhone, MdOutlineMail, MdOutlinePlace } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black min-h-[50vh] relative">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between font-museomoderno gap-5">
          <div className="flex flex-col justify-center items-center gap-3 w-full sm:w-1/4 ">
            <div className="flex flex-col justify-center items-center">
              <Image
                src={logo}
                alt="Logo Servicios Willka"
                width={55}
                height={55}
              />
              <h3 className="text-white text-2xl text-center">
                Servicios Willka
              </h3>
            </div>
            <p className="text-gray-300 font-palanquin text-center">
              Calidad y confianza en cada uno de nuestros servicios.
            </p>
          </div>
          <div>
            <h3 className="text-white text-2xl">Navegación</h3>
            <ul className="text-gray-300 font-palanquin">
              <Link href="/">
                <li>Inicio</li>
              </Link>
              <Link href="/#servicios">
                <li>Servicios</li>
              </Link>
              <Link href="/#equipo">
                <li>Equipo</li>
              </Link>
              <Link href="/#contacto">
                <li>Contacto</li>
              </Link>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-2xl">Servicios</h3>
            <ul className="text-gray-300 font-palanquin">
              <Link href="hospedaje">
                <li>Hospedaje</li>
              </Link>
              <Link href="alimentacion">
                <li>Alimentación</li>
              </Link>
              <Link href="transporte">
                <li>Transporte</li>
              </Link>
              <Link href="aseo">
                <li>Aseo y Limpieza</li>
              </Link>
              <Link href="seguridad">
                <li>Seguridad</li>
              </Link>
              <Link href="fumigacion">
                <li>Fumigación</li>
              </Link>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-2xl">Contacto</h3>
            <ul className="text-gray-300 font-palanquin">
              <li className="flex items-center gap-2">
                <MdOutlinePhone /> +56995273144
              </li>
              <li className="flex items-center gap-2">
                <MdOutlineMail />
                <a href="mailto:ventas@servicioswillka.cl">
                  {" "}
                  ventas@servicioswillka.cl
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MdOutlinePlace />
                Aldunate 215, Pozo Almonte
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full pb-4 text-center text-sm text-gray-300 bottom-0 absolute">
        <p>© 2023 Copyright: Servicios Willka</p>
      </div>
    </footer>
  );
};

export default Footer;
