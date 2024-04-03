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
import { officeCleaning, industrial, publicos } from "@/public/assets/aseo";
import { van, fordTransfer, pasajeros, aeropuerto, trabajadores, turistas } from "@/public/assets/transporte";
import { camaras, seguridad2, seguridad3 } from "@/public/assets/seguridad";
import { fumigacion2, fumigacion3, fumigacion4 } from "@/public/assets/fumigacion";

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

export const aseo = [
  {
    id: "aseo-1",
    name: "Limpieza de oficinas",
    description: "Nuestro equipo altamente capacitado se encargará de mantener tus espacios impecables y organizados, utilizando técnicas y productos de limpieza de última generación que garantizan resultados de calidad superior. Desde la limpieza de escritorios y superficies hasta la desinfección de áreas comunes y la gestión de residuos, nos ocupamos de cada detalle para crear un entorno de trabajo saludable y agradable.",
    img: officeCleaning,
  },
  {
    id: "aseo-2",
    name: "Limpieza industrial",
    description: "Optimiza la eficiencia y seguridad de tu planta industrial con los servicios de limpieza especializados de Servicios Willka. Nos especializamos en ofrecer soluciones integrales de limpieza para todo tipo de instalaciones industriales, garantizando un ambiente limpio, seguro y productivo para tu equipo de trabajo.\nNuestro equipo de profesionales altamente capacitados utiliza técnicas avanzadas y equipos especializados para abordar las necesidades específicas de limpieza de tu planta. Desde la remoción de residuos industriales hasta la limpieza de maquinaria y equipos, nos aseguramos de mantener tus instalaciones en óptimas condiciones, cumpliendo con los más altos estándares de calidad y seguridad.",
    img: industrial,
  },
  {
    id: "aseo-3",
    name: "Limpieza de espacios públicos",
    description: "Transforma tus espacios públicos en áreas limpias, acogedoras y seguras con los servicios de limpieza especializados de Servicios Willka. Nos dedicamos a mantener parques, plazas, áreas recreativas y otros espacios públicos en óptimas condiciones, creando entornos agradables para residentes y visitantes por igual. Nuestro equipo de profesionales altamente capacitados utiliza técnicas avanzadas y productos eco-amigables para realizar la limpieza y mantenimiento de espacios públicos de manera efectiva y respetuosa con el medio ambiente. Desde la recolección de residuos hasta la limpieza de mobiliario urbano y áreas verdes, nos aseguramos de que cada rincón de tu comunidad luzca impecable.",
    img: publicos,
  },
];

export const transporte = [
  {
    id: "transporte-1",
    name: "Traslados al aeropuerto",
    description:
      "Nuestro servicio de traslados al aeropuerto te ofrece comodidad y puntualidad para que llegues a tu destino de manera segura y sin contratiempos. Con conductores profesionales y vehículos modernos y equipados, te garantizamos un viaje placentero y sin estrés. Confía en nosotros para tus traslados al aeropuerto y disfruta de un servicio de calidad superior.",
    img: aeropuerto,
  },
  {
    id: "transporte-2",
    name: "Viajes turísticos",
    description:
      "Descubre los destinos más emblemáticos de la región con nuestros viajes turísticos personalizados. Con guías expertos y vehículos cómodos, te llevamos a explorar los lugares más fascinantes y pintorescos de la zona. Disfruta de una experiencia inolvidable con nuestro servicio de viajes turísticos.",
    img: turistas,
  },
  // {
  //   id: "transporte-3",
  //   name: "Traslados corporativos",
  //   description:
  //     "Optimiza la movilidad de tu empresa con nuestros traslados corporativos eficientes y seguros. Con conductores profesionales y vehículos de lujo, te ofrecemos un servicio de traslados exclusivo y personalizado para tus ejecutivos y empleados. Confía en nosotros para tus traslados corporativos y garantiza la puntualidad y comodidad de tu equipo.",
  //   img: fordTransfer,
  // },
  {
    id: "transporte-4",
    name: "Traslado de trabajadores",
    description:
      "Facilita el traslado de tus trabajadores con nuestro servicio de traslado especializado. Con conductores profesionales y vehículos seguros, te ofrecemos una solución eficiente y cómoda para el transporte de tu personal. Confía en nosotros para garantizar la movilidad de tu equipo de trabajo.",
    img: trabajadores,
  }
];

export const seguridad = [
  {
    id: "seguridad-1",
    name: "Guardias de seguridad",
    description:
      "Nuestro equipo de guardias de seguridad altamente capacitados se encarga de proteger tus espacios y bienes, garantizando la seguridad y tranquilidad de tu entorno. Con un enfoque en la prevención y la respuesta inmediata, nuestros profesionales están equipados con las herramientas y el entrenamiento necesarios para abordar situaciones de riesgo y asegurar la integridad de los bienes y personas a su cargo. Confía en nosotros para la protección de tus espacios y disfruta de la paz mental que brinda un servicio de seguridad confiable y personalizado.",
    img: seguridad2,
  },
  {
    id: "seguridad-2",
    name: "Monitoreo 24/7",
    description:
      "Nuestro servicio de monitoreo 24/7 te ofrece una protección continua y efectiva para tus espacios y bienes. Con tecnología de vanguardia y un equipo de profesionales altamente capacitados, te garantizamos una vigilancia constante y una respuesta rápida ante cualquier incidente. Confía en nosotros para la seguridad de tus espacios y disfruta de la tranquilidad que brinda un servicio de monitoreo confiable y eficiente.",
    img: camaras,
  },
  {
    id: "seguridad-3",
    name: "Sistemas de seguridad",
    description:
      "Nuestros sistemas de seguridad avanzados te ofrecen una protección integral para tus espacios y bienes. Con tecnología de última generación y un equipo de expertos en seguridad, te brindamos soluciones personalizadas y efectivas para garantizar la seguridad de tu entorno. Desde sistemas de videovigilancia hasta alarmas de intrusión, nos aseguramos de que tus espacios estén protegidos las 24 horas del día. Confía en nosotros para la instalación y el mantenimiento de tus sistemas de seguridad y disfruta de la tranquilidad que brinda una protección confiable y avanzada.",
    img: seguridad3,
  },
];

export const fumigacion = [
  {
    id: "fumigacion-1",
    name: "Fumigación de espacios",
    description:
      "Nuestro servicio de fumigación de espacios te ofrece una solución integral para eliminar plagas y mantener tus espacios limpios y seguros. Con técnicas avanzadas y productos seguros, garantizamos la erradicación de insectos y roedores, protegiendo la salud y el bienestar de tu entorno. Confía en nosotros para la fumigación de tus espacios y disfruta de un ambiente higiénico y protegido.",
    img: fumigacion2,
  },
  {
    id: "fumigacion-2",
    name: "Fumigación de preventiva",
    description: "¡Protege tu hogar o negocio antes de que las plagas se conviertan en un problema! En Servicios Willka ofrecemos fumigación preventiva para mantener alejadas a las plagas antes de que invadan tu espacio. Nuestro equipo de expertos en control de plagas utiliza métodos seguros y efectivos para crear barreras protectoras que mantendrán tu entorno libre de insectos y roedores no deseados. ¡No esperes a que las plagas se conviertan en una molestia, toma acción ahora con nuestra fumigación preventiva!",
    img: fumigacion4,
  },
];