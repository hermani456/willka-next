import { maty, maca, jessi, berta } from "../public/assets/photos";
import {
  food,
  guard,
  home,
  minivan,
  cleaning,
  exterminator,
} from "../public/assets/img";

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
    imgSrc: home,
    imgAlt: "Foto del servicio hospedaje",
    href: "/hospedaje",
    description:
      "Ofrecemos un alojamiento cómodo y acogedor, garantizando una estancia placentera. Disfrute de instalaciones modernas y atención de primera, todo pensado para su confort y satisfacción.",
  },
  {
    id: 2,
    name: "Alimentación",
    imgSrc: food,
    imgAlt: "Foto del servicio alimentación",
    href: "/alimentacion",
    description:
      "Brindamos deliciosas opciones culinarias preparadas con ingredientes frescos y de calidad. Sabores auténticos y atención dedicada para satisfacer todos sus paladares. Disfrute de una experiencia gastronómica incomparable.",
  },
  {
    id: 3,
    name: "Transporte",
    imgSrc: minivan,
    imgAlt: "foto del servicio transporte",
    href: "/transporte",
    description: "Ofrecemos soluciones de transporte eficientes y seguras, adaptadas a sus necesidades. Viaje con comodidad y puntualidad, garantizando un traslado sin contratiempos. Confíe en nosotros para llegar a su destino.",
  },
  {
    id: 4,
    name: "Aseo y Limpieza",
    imgSrc: cleaning,
    imgAlt: "foto del servicio limpieza",
    href: "/aseo_limpieza",
    description: "Brindamos servicios de limpieza industrial de alto estándar, utilizando tecnología avanzada y productos especializados. Aseguramos espacios industriales impecables y seguros, optimizando la productividad y el bienestar de su entorno laboral.",
  },
  {
    id: 5,
    name: "Seguridad",
    imgSrc: guard,
    imgAlt: "foto del servicio seguridad",
    href: "/seguridad",
    description:
      "Ofrecemos guardias capacitados para garantizar la protección de sus espacios y bienes. Seguridad confiable, responsiva y adaptada a sus necesidades.",
    descripcionFull:
      "Brindamos un servicio de guardias de seguridad altamente capacitados y dedicados a garantizar la protección y tranquilidad de su espacio, ya sea comercial, residencial o industrial. Con un enfoque en prevención y respuesta inmediata, nuestros profesionales están equipados con las herramientas y el entrenamiento necesario para abordar situaciones de riesgo, asegurando la integridad de los bienes y personas a su cargo. Opte por la paz mental: elija seguridad confiable, responsiva y personalizada para sus necesidades específicas.",
  },
  {
    id: 6,
    name: "Fumigación",
    imgSrc: exterminator,
    imgAlt: "foto del servicio fumigación",
    href: "/fumigacion",
    description: "Ofrecemos una solución integral para mantener sus espacios limpios y libres de plagas. Con técnicas avanzadas y productos seguros, garantizamos ambientes higiénicos y protegidos. La limpieza y la salud de su espacio es nuestra prioridad.",
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
    email: "recursoshumanos@servicioswillka.cl",
    role: "Administradora de RRHH",
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
