import animationConsultoria from "../assets/lotties/consultoria.json";
import animationMktdigital from "../assets/lotties/mktdigital.json";
import animationProgramador from "../assets/lotties/programador.json";
import homePage from "../assets/empresas/homePage.jpg";

export const MessageDev = "Transformando el mundo del Marketing Digital y Desarrollo de Sistemas";

export const Nosotros = {
  "titlePrincipal": "Fundada en 2023, Incentiva Groups es líder en marketing digital y desarrollo de sistemas. Nuestra misión es impulsar el crecimiento y expansión de las empresas en el mundo digital.",
  "titleSecundary": "Nuestra misión es ayudar a las empresas a crecer y expandirse en el mundo digital.",
  "description": "Con un equipo de profesionales altamente capacitados, ofrecemos soluciones innovadoras y creativas para satisfacer las necesidades de nuestros clientes. Nuestros servicios incluyen marketing digital, desarrollo de aplicaciones web y móviles, diseño gráfico y mucho más. En Incentiva Groups, nos esforzamos por brindar un servicio excepcional y resultados sobresalientes en cada proyecto que emprendemos. ¡Únete a nosotros y descubre el poder del marketing digital!"
};

export const porQueElegirnos = {
  experienciaYExpertise: "Nuestro equipo está compuesto por profesionales altamente capacitados y con amplia experiencia en sus respectivos campos.",
  innovacionConstante: "Estamos siempre al tanto de las últimas tendencias y tecnologías emergentes para ofrecer soluciones de vanguardia a nuestros clientes.",
  compromisoConLaExcelencia: "Nos esforzamos por la excelencia en todo lo que hacemos, desde el diseño hasta la implementación y el seguimiento de resultados."
};

export const fortalezas = [
  {
    title: "Calidad Superior",
    imagen: animationProgramador,
    descripcion: "Nos enfocamos en producir metales de la más alta calidad, utilizando técnicas avanzadas y estrictos controles de calidad."
  },
  {
    title: "Experiencia y Conocimiento",
    imagen: animationProgramador,
    descripcion: "Más de 50 años de experiencia en la industria nos avalan como líderes en el sector."
  },
  {
    title: "Capacidad de Exportación",
    imagen: animationProgramador,
    descripcion: "Amplia capacidad para exportar nuestros productos a nivel global, garantizando calidad y puntualidad en la entrega."
  },
  {
    title: "Servicio al Cliente",
    imagen: animationProgramador,
    descripcion: "Atención personalizada y soporte técnico especializado para asegurar la satisfacción de nuestros clientes."
  }
];


export const datosAdicionales = {
  "titleMobileDeveloper": "Transforma tu visión en una experiencia móvil cautivadora en iOS y Android. Simplifica tu alcance y destaca en todas partes con nuestras aplicaciones multiplataforma.",
  "titleMarketingDigital": "Potencia tu presencia digital con estrategias innovadoras y resultados tangibles. Desde SEO hasta SEM, maximizamos tu impacto en línea y hacemos que tu marca brille en cada plataforma.",
};



export const servicios = [
  {
    nombre: "Marketing Digital",
    imagen: animationMktdigital,
    code: "marketing_digital",
    servicios: [
      "Estrategias de Marketing en Redes Sociales",
      "Optimización de Motores de Búsqueda (SEO)",
      "Publicidad en Línea (SEM)",
      "Marketing de Contenidos"
    ]
  },
  {
    nombre: "Desarrollo de Sistemas",
    imagen: animationProgramador,
    code: "desarrollo_sistemas",
    servicios: [
      "Diseño y Desarrollo de Sitios Web",
      "Aplicaciones Móviles Personalizadas",
      "Sistemas de Gestión de Contenidos (CMS)",
      // "Desarrollo de E-commerce"
    ]
  },
  {
    nombre: "Consultoría y Estrategia",
    imagen: animationConsultoria,
    code: "consultoria_estrategia",
    servicios: [
      "Análisis de Mercado y Competencia",
      "Planificación Estratégica Digital",
      "Auditorías de Sitios Web y SEO",
      "Capacitación y Talleres"
    ]
  }
];



export const planesConsultoriaEstrategia = [
  {
    nombre: "Plan Básico",
    descripcion: "Perfecto para startups o pequeñas empresas que necesitan orientación inicial en su estrategia digital.",
    opciones: [
      "Análisis de mercado básico",
      "Estrategia de marketing inicial",
      "Sesiones de consultoría mensuales"
    ],
    costo: "$500/mes"
  },
  {
    nombre: "Plan Medio",
    descripcion: "Ideal para empresas en crecimiento que requieren un enfoque más completo en su estrategia digital.",
    opciones: [
      "Análisis detallado de mercado y competencia",
      "Desarrollo de estrategia digital personalizada",
      "Sesiones de consultoría quincenales"
    ],
    costo: "$1000/mes"
  },
  {
    nombre: "Plan Empresas",
    descripcion: "Para empresas establecidas que buscan una consultoría estratégica integral. Contáctanos para un plan personalizado.",
    opciones: [
      "Auditorías exhaustivas de marketing y estrategias existentes",
      "Desarrollo de estrategias a largo plazo y tácticas de implementación",
      "Sesiones de consultoría personalizadas según las necesidades del cliente"
    ],
    costo: "Contáctanos"
  }
];

export const HOME_INITIAL = {
  imagen: homePage,
  titulo: "Hierro Plus",
  //un sub titulo breve de que se trata la empresa
  subtitulo: "Metales de calidad para tus proyectos",
  //la descipcion debe de ser sobre una metalurgica
  descripcion: "Somos una empresa dedicada a la comercialización de productos de hierro y acero. Nuestro compromiso es ofrecer productos de alta calidad y durabilidad para satisfacer las necesidades de nuestros clientes. ¡Descubre la diferencia con Hierro Plus!",
};

export const menuOptions = [
  {
    id: 1,
    nombre: "Pizza Margherita",
    descripcion: "Pizza clásica con salsa de tomate, mozzarella y albahaca fresca.",
    precio: '50.000',
    imagen: "https://i.pinimg.com/564x/b2/66/2f/b2662f6b6783fe90648a6aae183fcb88.jpg"
  },
  {
    id: 2,
    nombre: "Pizza Pepperoni",
    descripcion: "Pizza con salsa de tomate, mozzarella y rodajas de pepperoni.",
    precio: '45.000',
    imagen: "https://i.pinimg.com/564x/75/88/de/7588ded0bc16dde34b5c66c87317eda1.jpg"
  },
  {
    id: 3,
    nombre: "Pizza Vegetariana",
    descripcion: "Pizza con salsa de tomate, mozzarella y una variedad de verduras frescas.",
    precio: '55.000',
    imagen: "https://i.pinimg.com/564x/18/ed/55/18ed556b336c1e3d2c4d4c383447298e.jpg"
  },
  {
    id: 4,
    nombre: "Papas Fritas Clásicas",
    descripcion: "Papas fritas doradas y crujientes, servidas con ketchup.",
    precio: '20.000',
    imagen: "https://i.pinimg.com/564x/a3/25/8d/a3258d438b54a19f5a051fcd6e67f75d.jpg"
  },
  {
    id: 5,
    nombre: "Papas Fritas con Queso",
    descripcion: "Papas fritas cubiertas con una mezcla de quesos fundidos.",
    precio: '25.000',
    imagen: "https://i.pinimg.com/564x/2b/85/c3/2b85c3f5233135e68691667987a7a283.jpg"
  },
  {
    id: 6,
    nombre: "Papas Fritas con Bacon",
    descripcion: "Papas fritas cubiertas con queso y trozos de bacon crujiente.",
    precio: '30.000',
    imagen: "https://i.pinimg.com/564x/01/5a/50/015a50d1714615bd64824cf05ccc0242.jpg"
  },
  {
    id: 7,
    nombre: "Hamburguesa Clásica",
    descripcion: "Hamburguesa con carne de res, lechuga, tomate, cebolla y mayonesa.",
    precio: '15.000',
    imagen: "https://i.pinimg.com/564x/e8/0c/a0/e80ca05018241477767f8cf69c95a0c5.jpg"
  },
  {
    id: 8,
    nombre: "Hamburguesa con Queso",
    descripcion: "Hamburguesa clásica con una loncha de queso cheddar fundido.",
    precio: '25.000',
    imagen: "https://i.pinimg.com/564x/31/4f/f2/314ff2d7d70a3e0094aa3507e3efc2bf.jpg"
  },
  {
    id: 9,
    nombre: "Hamburguesa BBQ",
    descripcion: "Hamburguesa con salsa BBQ, queso cheddar, cebolla frita y bacon.",
    precio: '35.000',
    imagen: "https://i.pinimg.com/564x/c6/90/d0/c690d061674e94b8e2205f8b854023cc.jpg"
  },
  {
    id: 10,
    nombre: "Hamburguesa Vegetariana",
    descripcion: "Hamburguesa con un patty vegetal, lechuga, tomate y cebolla.",
    precio: '25.000',
    imagen: "https://i.pinimg.com/564x/8e/2c/a3/8e2ca3c1a990666ad6c69579c6079d26.jpg"
  }
];

export const burgerOptions = [
  {
    id: 1,
    nombre: "Hamburguesa Clásica",
    descripcion: "Hamburguesa con carne de res, lechuga, tomate, cebolla y mayonesa.",
    precio: "45.000",
     imagen: "https://i.pinimg.com/564x/e8/0c/a0/e80ca05018241477767f8cf69c95a0c5.jpg"
  },
  {
    id: 2,
    nombre: "Hamburguesa con Queso",
    descripcion: "Hamburguesa clásica con una loncha de queso cheddar fundido.",
    precio: "50.000",
    imagen: "https://i.pinimg.com/564x/31/4f/f2/314ff2d7d70a3e0094aa3507e3efc2bf.jpg"
  },
  {
    id: 3,
    nombre: "Hamburguesa BBQ",
    descripcion: "Hamburguesa con salsa BBQ, queso cheddar, cebolla frita y bacon.",
    precio: "55.000",
   imagen: "https://i.pinimg.com/564x/c6/90/d0/c690d061674e94b8e2205f8b854023cc.jpg"
  },
  {
    id: 4,
    nombre: "Hamburguesa Vegetariana",
    descripcion: "Hamburguesa con un patty vegetal, lechuga, tomate y cebolla.",
    precio: "40.000",
    imagen: "https://i.pinimg.com/564x/a9/9f/d5/a99fd5e32d71ffdb6448409c96019c21.jpg"
  },
  {
    id: 5,
    nombre: "Hamburguesa Doble Queso",
    descripcion: "Hamburguesa con dos patties de res y doble queso cheddar fundido.",
    precio: "60.000",
    imagen: "https://www.foodrepublic.com/wp-content/uploads/2012/03/033_FR11785.jpg"
  }
];



export const friesOptions = [
  {
    id: 1,
    nombre: "Papas Fritas Clásicas",
    descripcion: "Papas fritas doradas y crujientes, servidas con ketchup.",
    precio: "15.000",
    imagen: "https://i.pinimg.com/564x/01/5a/50/015a50d1714615bd64824cf05ccc0242.jpg"
  },
  {
    id: 2,
    nombre: "Papas Fritas con Queso",
    descripcion: "Papas fritas cubiertas con una mezcla de quesos fundidos.",
    precio: "20.000",
    imagen: "https://i.pinimg.com/564x/2b/85/c3/2b85c3f5233135e68691667987a7a283.jpg"
  },
  {
    id: 3,
    nombre: "Papas Fritas con Bacon",
    descripcion: "Papas fritas cubiertas con queso y trozos de bacon crujiente.",
    precio: "25.000",
    imagen: "https://i.pinimg.com/564x/a3/25/8d/a3258d438b54a19f5a051fcd6e67f75d.jpg"
  },
  {
    id: 4,
    nombre: "Papas Fritas Curly",
    descripcion: "Papas fritas en forma de espiral, sazonadas a la perfección.",
    precio: "18.000",
    imagen: "https://i.pinimg.com/736x/0d/9d/cb/0d9dcb2eac9dbf9d1c36363b39a84510.jpg"
  },
  {
    id: 5,
    nombre: "Papas Fritas Deluxe",
    descripcion: "Papas fritas con queso cheddar, tocino, crema agria y cebollino.",
    precio: "30.000",
    imagen: "https://i.pinimg.com/564x/1f/76/58/1f76582144e108bdcfefa078d1a1c019.jpg"
  }
];
