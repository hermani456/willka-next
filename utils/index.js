import { maty, maca, jessi, berta } from "../public/assets/photos";
import {
  food,
  guard,
  home,
  minivan,
  cleaning,
  exterminator,
} from "../public/assets/img";
import {
  lasagna,
  pollopapas,
  cazuela,
  arrozcarne,
  arrozpollo,
} from "@/public/assets/food";
import { habitacion, banio, tv } from "@/public/assets/hospedaje";

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Servicios", href: "#servicios" },
  { name: "Equipo", href: "#equipo" },
  { name: "Contacto", href: "#contacto" },
];

export const servicios = [
  {
    id: 1,
    name: "Hospedaje",
    href: "hospedaje",
    imgSrc: home,
    imgAlt: "Foto del servicio hospedaje",
    description:
      "Ofrecemos un alojamiento cómodo y acogedor, garantizando una estancia placentera. Disfrute de instalaciones modernas y atención de primera, todo pensado para su confort y satisfacción.",
  },
  {
    id: 2,
    name: "Alimentación",
    href: "alimentacion",
    imgSrc: food,
    imgAlt: "Foto del servicio alimentación",
    description:
      "Brindamos deliciosas opciones culinarias preparadas con ingredientes frescos y de calidad. Sabores auténticos y atención dedicada para satisfacer todos sus paladares. Disfrute de una experiencia gastronómica incomparable.",
  },
  {
    id: 3,
    name: "Transporte",
    href: "transporte",
    imgSrc: minivan,
    imgAlt: "foto del servicio transporte",
    description:
      "Ofrecemos soluciones de transporte eficientes y seguras, adaptadas a sus necesidades. Viaje con comodidad y puntualidad, garantizando un traslado sin contratiempos. Confíe en nosotros para llegar a su destino.",
  },
  {
    id: 4,
    name: "Aseo y Limpieza",
    href: "aseo",
    imgSrc: cleaning,
    imgAlt: "foto del servicio limpieza",
    description:
      "Brindamos servicios de limpieza industrial de alto estándar, utilizando tecnología avanzada y productos especializados. Aseguramos espacios industriales impecables y seguros, optimizando la productividad y el bienestar de su entorno laboral.",
  },
  {
    id: 5,
    name: "Seguridad",
    href: "seguridad",
    imgSrc: guard,
    imgAlt: "foto del servicio seguridad",
    description:
      "Ofrecemos guardias capacitados para garantizar la protección de sus espacios y bienes. Seguridad confiable, responsiva y adaptada a sus necesidades.",
    descripcionFull:
      "Brindamos un servicio de guardias de seguridad altamente capacitados y dedicados a garantizar la protección y tranquilidad de su espacio, ya sea comercial, residencial o industrial. Con un enfoque en prevención y respuesta inmediata, nuestros profesionales están equipados con las herramientas y el entrenamiento necesario para abordar situaciones de riesgo, asegurando la integridad de los bienes y personas a su cargo. Opte por la paz mental: elija seguridad confiable, responsiva y personalizada para sus necesidades específicas.",
  },
  {
    id: 6,
    name: "Fumigación",
    href: "fumigacion",
    imgSrc: exterminator,
    imgAlt: "foto del servicio fumigación",
    description:
      "Ofrecemos una solución integral para mantener sus espacios limpios y libres de plagas. Con técnicas avanzadas y productos seguros, garantizamos ambientes higiénicos y protegidos. La limpieza y la salud de su espacio es nuestra prioridad.",
  },
];

export const equipo = [
  {
    name: "Matilde Alpiri",
    email: "gerencia@servicioswillka.cl",
    role: "Fundadora / CEO",
    imageUrl: maty,
    quote:
      '"Mi éxito no se mide por las veces que he ganado, sino por las veces que me he levantado después de caer."',
  },
  {
    name: "Macarena Araya",
    email: "finanzas@servicioswillka.cl",
    role: "Contador Auditor",
    imageUrl: maca,
    quote:
      '"El fracaso nunca ha sido un fin, sino una oportunidad para aprender y crecer."',
  },
  {
    name: "Jessica Contreras",
    email: "operaciones@servicioswillka.cl",
    role: "Jefa de Operaciones",
    imageUrl: jessi,
    quote:
      '"La pasión y la perseverancia han sido mis aliados más fuertes en este camino hacia el éxito."',
  },
  {
    name: "Berta Araya",
    email: "administracion@servicioswillka.cl",
    role: "Administradora de Contratos",
    imageUrl: berta,
    quote:
      '"No espero oportunidades, las creo con dedicación, esfuerzo y una visión clara de mis objetivos."',
  },
];

export const alimentacion = [
  {
    id: "alimento-1",
    name: "Lasaña con ensalada",
    description:
      "¡Disfruta de una combinación perfecta con la lasaña casera de Servicios Willka acompañada de una fresca ensalada! Sumérgete en el delicioso mundo de los sabores caseros con cada bocado de nuestra lasaña, mientras complementas tu experiencia con una ensalada fresca y colorida. ¡Una combinación que deleitará tu paladar y satisfará tus antojos! ",
    img: lasagna,
  },
  {
    id: "alimento-2",
    name: "Pollo a la plancha con papas rusticas",
    description:
      "¡Descubre una explosión de sabores con nuestro exquisito pollo a la plancha, acompañado de papas rústicas y consomé de pollo! En Servicios Willka, te ofrecemos una experiencia culinaria única, donde la calidad y el sabor se combinan para deleitar tu paladar.",
    img: pollopapas,
  },
  {
    id: "alimento-4",
    name: "Cazuela de vacuno con ensalada a la chilena",
    description:
      "¡Disfruta de un festín de sabores con nuestra deliciosa cazuela de vacuno acompañada de una refrescante ensalada a la chilena! En Servicios Willka, te llevamos a un viaje culinario que combina lo mejor de la tradición y el sabor casero.",
    img: cazuela,
  },
  {
    id: "alimento-5",
    name: "Carne mechada con arroz y ensalada",
    description:
      "¡Déjate conquistar por nuestro irresistible plato de arroz con exquisita carne mechada y fresca ensalada! En Servicios Willka, te invitamos a disfrutar de una experiencia culinaria llena de sabor y tradición.",
    img: arrozcarne,
  },
  {
    id: "alimento-6",
    name: "Arroz con pollo y consome de verduras",
    description:
      "¡No te pierdas nuestro delicioso arroz con pollo asado y consomé de verduras! En Servicios Willka, te ofrecemos una combinación perfecta de sabores caseros que te harán chuparte los dedos. Disfruta de nuestro jugoso pollo asado con arroz, acompañado de un reconfortante consomé de verduras que te hará sentir como en casa.",
    img: arrozpollo,
  },
];

export const hospedajes = [
  {
    id: "hospedaje-1",
    name: "Comodas habitaciones",
    description:
      "Disfruta de una estancia inolvidable en nuestras habitaciones, donde la comodidad y la tranquilidad son nuestra prioridad. Con un servicio excepcional y un ambiente acogedor, te garantizamos una experiencia de hospedaje única. ",
    img: habitacion,
  },
  {
    id: "hospedaje-2",
    name: "Baños privados",
    description:
      "Nuestras habitaciones ofrecen baños privados para que te sientas como en casa. Con una atención excepcional y un ambiente acogedor, te garantizamos una estancia relajante y tranquila.",
    img: banio,
  },
  {
    id: "hospedaje-3",
    name: "Televisión por cable",
    description:
      "Nuestras habitaciones están equipadas con televisión por cable para que disfrutes de tus programas favoritos.",
    img: tv,
  },
];
