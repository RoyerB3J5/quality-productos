export default {
  header: {
    nav: [
      {
        label: "Productos",
        href: "/products",
      },
      {
        label: "Servicios",
        href: "/services",
      },
      {
        label: "Industrias",
        href: "/industries",
      },
      {
        label: 'Ubicaciones <span class="text-[16px] ml-px">▾</span>',
        href: "/locations",
      },
      {
        label: "Nosotros",
        href: "#why-us",
      },
    ],
    locations: [
      {
        label: "Orlando, FL",
        href: "orlando-fl",
      },
      {
        label: "Melbourne, FL",
        href: "melbourne-fl",
      },
      {
        label: "Tampa, FL",
        href: "tampa-fl",
      },
      {
        label: "Fort Myers, FL",
        href: "fort-myers-fl",
      },
      {
        label: "Alabama",
        href: "alabama",
      },
    ],
    buttons: [
      {
        label: "Llamar Ya",
        href: "tel:+13212179445",
        icon: "phone",
        background: "bg-primary",
      },
    ],
  },
  main: {
    hero: {
      imagesLoop: [
        {
          img: "hero-main",
        },
        {
          img: "location-hero",
        },
        {
          img: "orlando-hero",
        },
        {
          img: "melbourne-hero",
        },
        {
          img: "tampa-hero",
        },
        {
          img: "fort-hero",
        },
        {
          img: "products-hero",
        },
        {
          img: "services-hero",
        },
        {
          img: "industries-hero",
        },
      ],
      title:
        "Baños Portátiles <br class='block'/> #1 en Florida <br class='hidden md:block'/>  para",
      services: [
        "Construcción",
        "Eventos",
        "Festivales",
        "Comercial",
        "Gubernamental",
        "Municipal",
      ],
      description:
        "Unidades limpias, entrega y recogida puntuales, y <br class='hidden md:block'/> precios competitivos para obras y eventos en <br class='hidden md:block'/> Florida y Georgia.",
      buttons: [
        {
          icon: "phone",
          label: "Llamar Ya",
          href: "tel:+13212179445",
          text: "text-white",
          back: "bg-accent hover:bg-accent/90 w-full sm:w-auto",
        },
        {
          icon: "calendar",
          label: "Agendar Ya",
          href: "/es/#quote-section",
          text: "text-white",
          back: "bg-primary hover:bg-primary/90 dark:bg-secondary-dark hover:dark:bg-secondary-dark/90 w-full sm:w-auto",
        },
      ],
    },
    services: {
      description: "Nuestros Servicios de Alquiler",
      title: "Soluciones confiables para obras, eventos y proyectos.",
      items: [
        {
          title: "Alquiler de Baños Portátiles",
          description: "Comodidad y servicio donde lo necesites.",
          description2:
            "Soluciones limpias y rentables de baños portátiles para sitios de construcción, eventos, proyectos comerciales y trabajos gubernamentales.",
          href: "/es/services?section=portable-toilet-rental",
          image: "service-1",
        },
        {
          title: "Alquiler de Contenedores",
          description: "Espacios limpios empiezan con la solución correcta.",
          description2:
            "Soluciones eficientes de alquiler de contenedores con opciones de 20 y 30 yardas para construcción, limpiezas y eventos",
          href: "/es/services?section=dumpster-rental",
          image: "service-2",
        },
        {
          title: "Vaciado de Septic y RV",
          description: "Servicios de vaciado eficientes y fiables.",
          description2:
            "Vaciados y mantenimiento eficientes para septic y RV, con personal profesional y respuesta rápida.",
          href: "/es/services?section=septic-rv-pump-out",
          image: "service-3",
        },
      ],
      button: "Más Info",
    },
    areas: {
      description: "Servicio confiable en todas las ubicaciones",
      title: "Zonas que Atendemos con Orgullo",
      items: [
        {
          icon: "location",
          iconDark: "location-dark",
          title: "Ubicaciones",
          text: "Varias zonas de servicio",
          description: "Florida y Georgia",
        },
        {
          icon: "inventory",
          iconDark: "inventory-dark",
          title: "Inventario",
          text: "Gran stock de alquiler",
          description: "Listo para proyectos de cualquier tamaño",
        },
        {
          icon: "customer",
          iconDark: "customer-dark",
          title: "Clientes Actuales",
          text: '<span class="font-bold text-[28px] md:text-[40px] leading-[129%] md:leading-[120%]">10,000+</span> ',
          description: "Rentals Completed",
        },
      ],
      buttons: [
        {
          label: "Áreas Servicio",
          back: "bg-primary dark:bg-primary-dark hover:bg-primary/90 hover:dark:bg-primary-dark/90 w-full sm:w-auto",
          text: "text-white",
          href: "/es/locations",
        },
        {
          icon: "phone",
          label: "Llamar Ya",
          back: "bg-accent hover:bg-accent/90 w-full sm:w-auto",
          text: "text-white",
          href: "tel:+13212179445",
        },
      ],
    },
    why: {
      subtitle: "Soluciones confiables, siempre",
      description:
        "En Quality Portable Rental Service ofrecemos unidades limpias, entregas a tiempo y tarifas claras, con inventario listo para proyectos de cualquier tamaño.",
      title: "Por qué elegir Quality Portable Rental Service",
      items: [
        {
          icon: "clock",
          title: "Entregas y recogidas puntuales",
          description:
            "Entregamos y recogemos el equipo a tiempo, coordinando la logística para que su proyecto o evento no sufra demoras.",
        },
        {
          icon: "check",
          title: "Limpieza en la que confía",
          description:
            "Todas las unidades se limpian, revisan e inspeccionan antes de la entrega para garantizar una experiencia sanitaria y profesional.",
        },
        {
          icon: "rayo",
          title: "Listos cuando los necesite",
          description:
            "Con amplio inventario de baños portátiles, unidades ADA, opciones para altura, contenedores y accesorios, estamos listos para proyectos de cualquier tamaño.",
        },
        {
          icon: "dolar",
          title: "Sin cargos ocultos",
          description:
            "Ofrecemos precios competitivos y comunicación clara, para que sepa exactamente qué esperar de principio a fin.",
        },
      ],
    },
    equipment: {
      subtitle: "Soluciones de Saneamiento y Gestión de Residuos Portátiles",
      title: "Nuestro Equipo de Alquiler",
      list: [
        {
          image: "equipment-1",
          title: "Baño Portátil-Eventos",
          href: "/es/products/#event-portable-toilet",
          label: "Más Info",
        },
        {
          image: "equipment-2",
          title: "Baño Portátil Accesible",
          href: "/es/products/#wheelchair-accessible",
          label: "Más Info",
        },
        {
          image: "equipment-3",
          title: "Baño Portátil para Construcción",
          href: "/es/products/#construction-portable",
          label: "Más Info",
        },
        {
          image: "equipment-4",
          title: "Tanque de Retención",
          href: "/es/products/#holding-tank",
          label: "Más Info",
        },
        {
          image: "equipment-5",
          title: "Contenedor 20 yd",
          href: "/es/products/#dumpster-rental",
          label: "Más Info",
        },
      ],
    },
    started: {
      title: "¿Listo para Comenzar?",
      description:
        "Obtenga una cotización rápida y gratuita para su proyecto o evento. Nuestro equipo le ayudará con disponibilidad, precios y siguientes pasos.",
      button: "Llamar Ahora",
    },
    industries: {
      description: "Soluciones para diversas industrias",
      title: "Industrias que Atendemos",
      paragraph:
        "Soluciones confiables de saneamiento y gestión de residuos para proyectos de construcción, eventos, comerciales y gubernamentales, <br class='hidden md:block'/> ofreciendo equipos limpios, servicio confiable y coordinación profesional.",
      button: {
        label: "Todas Industrias",
        href: "/es/industries",
      },
      items: [
        {
          title: "Obras de Construcción",
          description:
            "Soluciones de saneamiento y residuos para proyectos de cualquier tamaño, incluyendo unidades ADA y para altura.",
          image: "construction",
          button: {
            label: "Más Info",
            href: "/es/industries/#construction",
          },
        },
        {
          title: "Eventos y Festivales",
          description:
            "Soluciones portátiles limpias y fiables para reuniones privadas y grandes eventos públicos.",
          image: "events",
          button: {
            label: "Más Info",
            href: "/es/industries/#events-festivals",
          },
        },
        {
          title: "Proyectos Comerciales",
          description:
            "Servicios flexibles de saneamiento y residuos para empresas, renovaciones y operaciones temporales.",
          image: "commercial",
          button: {
            label: "Más Info",
            href: "/es/industries/#commercial",
          },
        },
        {
          title: "Gobierno y Municipal",
          description:
            "Soluciones de alquiler fiables con coordinación profesional para proyectos municipales y gubernamentales.",
          image: "government",
          button: {
            label: "Más Info",
            href: "/es/industries/#government-municipal",
          },
        },
      ],
    },
    form: {
      subtitle: "Reserva Ahora",
      title: "Obtén Cotización Gratis ",
      description:
        "Contacta a nuestro equipo hoy para precios, disponibilidad y opciones de alquiler adaptadas a tu proyecto o evento.",
      buttons: [
        {
          icon: "phone",
          label: "Llamar Ya",
          href: "tel:+13212179445",
        },
      ],
      image: "#",
    },
  },
  locationsPage: {
    hero: {
      imagesLoop: [
        {
          img: "location-hero",
        },
        {
          img: "orlando-hero",
        },
        {
          img: "melbourne-hero",
        },
        {
          img: "tampa-hero",
        },
        {
          img: "fort-hero",
        },
        {
          img: "products-hero",
        },
        {
          img: "services-hero",
        },
        {
          img: "industries-hero",
        },
        {
          img: "hero-main",
        },
      ],
      title: "Ubicaciones",
      description:
        "Atendemos con orgullo múltiples ubicaciones en Florida <br class='hidden md:block'/> y Georgia, ofreciendo entregas rápidas, precios locales y disponibilidad confiable para cada proyecto",
      buttons: [
        {
          icon: "phone",
          label: "Llamar Ya",
          href: "tel:+13212179445",
          text: "text-white",
          back: "bg-accent hover:bg-accent/90 w-full sm:w-auto",
        },
        {
          icon: "calendar",
          label: "Reservar",
          href: "#quote-section",
          text: "text-white",
          back: "bg-primary hover:bg-primary/90 dark:bg-primary-dark hover:dark:bg-primary-dark/90 w-full sm:w-auto",
        },
      ],
    },
    service: {
      subtitle: "Área de Servicio",
      title:
        "Ofrecemos servicio de alquiler en <br class='hidden md:block'/> Florida y Georgia.",
      description:
        "Seleccione una ubicación para obtener precios y disponibilidad locales.",
      items: [
        {
          title: "Áreas Servicio Florida",
          areas: [
            {
              label: "Orlando",
              href: "/es/locations/orlando-fl",
            },
            {
              label: "Tampa",
              href: "/es/locations/tampa-fl",
            },
            {
              label: "Melbourne",
              href: "/es/locations/melbourne-fl",
            },
            {
              label: "Fort Myers",
              href: "/es/locations/fort-myers-fl",
            },
            {
              label: "Jacksonville",
              href: "#",
            },
            {
              label: "Ocala",
              href: "#",
            },
          ],
        },
        {
          title: "Áreas Servicio Georgia",
          areas: [
            {
              label: "Atlanta",
              href: "#",
            },
            {
              label: "Oakwood",
              href: "#",
            },
          ],
        },
        {
          title: "Áreas Servicio Alabama",
          areas: [
            {
              label: "Muy Pronto!",
              href: "/es/services/alabama",
            },
          ],
        },
      ],
    },
    areas: {
      description: "Servicio confiable en todas las ubicaciones",
      title: "Zonas que Atendemos con Orgullo",
      items: [
        {
          icon: "location",
          iconDark: "location-dark",
          title: "Ubicaciones",
          text: "Varias zonas de servicio",
          description: "Florida y Georgia",
        },
        {
          icon: "inventory",
          iconDark: "inventory-dark",
          title: "Inventario",
          text: "Gran stock de alquiler",
          description: "Listo para proyectos de cualquier tamaño",
        },
        {
          icon: "customer",
          iconDark: "customer-dark",
          title: "Clientes Actuales",
          text: '<span class="font-bold text-[28px] md:text-[40px] leading-[129%] md:leading-[120%]">10,000+</span> ',
          description: "Rentals Completed",
        },
      ],
      buttons: [
        {
          label: "Ver Áreas de Servicio",
          back: "bg-primary",
          text: "text-white",
          href: "services",
        },
        {
          icon: "phone",
          label: "Llamar Ahora",
          back: "bg-accent",
          text: "text-white",
          href: "tel:+13212179445",
        },
      ],
    },
    equipment: {
      subtitle: "Soluciones de Saneamiento y Gestión de Residuos Portátiles",
      title: "Nuestro Equipo de Alquiler",
      list: [
        {
          image: "equipment-1",
          title: "Baño Portátil-Eventos",
          href: "/es/products/#event-portable-toilet",
          label: "Más Info",
        },
        {
          image: "equipment-2",
          title: "Baño Portátil Accesible",
          href: "/es/products/#wheelchair-accessible",
          label: "Más Info",
        },
        {
          image: "equipment-3",
          title: "Baño Portátil para Construcción",
          href: "/es/products/#construction-portable",
          label: "Más Info",
        },
        {
          image: "equipment-4",
          title: "Tanque de Retención",
          href: "/es/products/#holding-tank",
          label: "Más Info",
        },
        {
          image: "equipment-5",
          title: "Contenedor 20 yd",
          href: "/es/products/#dumpster-rental",
          label: "Más Info",
        },
      ],
    },
  },
  locations: {
    "orlando-fl": {
      hero: {
        imagesLoop: [
          {
            img: "orlando-hero",
          },
          {
            img: "melbourne-hero",
          },
          {
            img: "tampa-hero",
          },
          {
            img: "fort-hero",
          },
          {
            img: "products-hero",
          },
          {
            img: "services-hero",
          },
          {
            img: "industries-hero",
          },
          {
            img: "hero-main",
          },
          {
            img: "location-hero",
          },
        ],
        title: "Orlando, Florida",
        description:
          "Servicios fiables de baños portátiles, contenedores y vaciado en Orlando, con equipo limpio y servicio puntual desde 2011.",
        buttons: [
          {
            icon: "phone",
            label: "Llamar Ya",
            href: "tel:+13212179445",
            text: "text-white",
            back: "bg-accent hover:bg-accent/90 w-full sm:w-auto",
          },
          {
            icon: "calendar",
            label: "Agendar Ya",
            href: "#quote-section",
            text: "text-white",
            back: "bg-primary hover:bg-primary/90 dark:bg-primary-dark hover:dark:bg-primary-dark/90 w-full sm:w-auto",
          },
        ],
      },
      info: {
        image: "orlando-services",
        subtitle: "Servicio de calidad, siempre.",
        title: "Servicios de Baños Portátiles y Alquiler en Orlando",
        description:
          "Quality Portable Rental Service ofrece soluciones fiables de baños portátiles y residuos en Orlando, apoyando obras, proyectos comerciales, eventos y necesidades municipales. Incluimos unidades estándar y ADA, opciones para altura, lavamanos, tanques de retención, contenedores de 20 y 30 yardas, y servicios de vaciado para septic y RV. <br/> <br/>Desde 2011, entregamos equipos limpios, programación fiable y precios transparentes sin cargos ocultos. Nuestro equipo local de Orlando garantiza entregas puntuales, coordinación eficiente y atención al cliente ágil, facilitando el éxito de proyectos de cualquier tamaño.",
      },
      equipment: {
        subtitle: "Soluciones de Saneamiento y Gestión de Residuos Portátiles",
        title: "Nuestro Equipo de Alquiler",
        list: [
          {
            image: "equipment-1",
            title: "Baño Portátil-Eventos",
            href: "/es/products/#event-portable-toilet",
            label: "Más Info",
          },
          {
            image: "equipment-2",
            title: "Baño Portátil Accesible",
            href: "/es/products/#wheelchair-accessible",
            label: "Más Info",
          },
          {
            image: "equipment-3",
            title: "Baño Portátil para Construcción",
            href: "/es/products/#construction-portable",
            label: "Más Info",
          },
          {
            image: "equipment-4",
            title: "Tanque de Retención",
            href: "/es/products/#holding-tank",
            label: "Más Info",
          },
          {
            image: "equipment-5",
            title: "Contenedor 20 yd",
            href: "/es/products/#dumpster-rental",
            label: "Más Info",
          },
        ],
      },
      testimonials: {
        subtitle: "Testimonios",
        title: "Lo Que Dicen Nuestros Clientes",
        metric: {
          icon: "customer",
          iconDark: "customer-dark",
          title: "Clientes Actuales",
          text: '<span class="font-bold text-[40px] leading-[120%]">10,000+</span> ',
          description: "Alquileres Completados",
        },
        items: [
          {
            image: "customer-1",
            time: "Hace 2 semanas",
            description:
              "Siempre una gran experiencia al hacer negocios aquí. Siempre limpio y a tiempo.",
            name: "City Automotive Group",
          },
          {
            image: "customer-2",
            time: "Hace 3 semanas",
            description:
              "Gran servicio siempre. Muchas gracias por ayudarme tan bien con mi evento.",
            name: "Tech Store",
          },
          {
            image: "customer-3",
            time: "Hace 1 semana",
            description:
              "Trabajo muy profesional. Limpiaban los baños periódicamente. ¡Me gustó mucho eso!",
            name: "Aqua Venue & Studio",
          },
        ],
      },
      form: {
        subtitle: "Reserva Ahora",
        title: "Obtén una Cotización Gratis en Orlando",
        description:
          "Contacta a nuestro equipo hoy para precios, disponibilidad y opciones de alquiler adaptadas a tu proyecto o evento.",
        buttons: [
          {
            icon: "phone",
            label: "Llamar Ya",
            href: "tel:+13212179445",
          },
        ],
        image: "#",
      },
    },
    "melbourne-fl": {
      hero: {
        imagesLoop: [
          {
            img: "melbourne-hero",
          },
          {
            img: "tampa-hero",
          },
          {
            img: "fort-hero",
          },
          {
            img: "products-hero",
          },
          {
            img: "services-hero",
          },
          {
            img: "industries-hero",
          },
          {
            img: "hero-main",
          },
          {
            img: "location-hero",
          },
          {
            img: "orlando-hero",
          },
        ],
        title: "Melbourne, Florida",
        description:
          "Servicios confiables de baños portátiles, contenedores y vaciado en Melbourne, con equipo limpio y servicio puntual desde 2011.",
        buttons: [
          {
            icon: "phone",
            label: "Llamar Ya",
            href: "tel:+13212179445",
            text: "text-white",
            back: "bg-accent hover:bg-accent/90 w-full sm:w-auto",
          },
          {
            icon: "calendar",
            label: "Agendar Ya",
            href: "#quote-section",
            text: "text-white",
            back: "bg-primary hover:bg-primary/90 dark:bg-primary-dark hover:dark:bg-primary-dark/90 w-full sm:w-auto",
          },
        ],
      },
      info: {
        image: "melbourne-services",
        subtitle: "Servicio de calidad, siempre.",
        title: "Alquiler de Baños Portátiles en Melbourne",
        description:
          "Quality Portable Rental Service ofrece soluciones fiables de baños portátiles y residuos en Melbourne, apoyando proyectos de construcción, trabajos comerciales y eventos especiales. Incluimos unidades estándar y ADA, opciones para altura, lavamanos, tanques de retención, contenedores y vaciados para septic y RV. <br/> <br/> Desde 2011, entregamos equipos limpios, programación fiable y precios transparentes. Nuestro equipo local en Melbourne garantiza entregas puntuales, coordinación fluida y atención al cliente profesional.",
      },
      equipment: {
        subtitle: "Soluciones de Saneamiento y Gestión de Residuos Portátiles",
        title: "Nuestro Equipo de Alquiler",
        list: [
          {
            image: "equipment-1",
            title: "Baño Portátil-Eventos",
            href: "/es/products/#event-portable-toilet",
            label: "Más Info",
          },
          {
            image: "equipment-2",
            title: "Baño Portátil Accesible",
            href: "/es/products/#wheelchair-accessible",
            label: "Más Info",
          },
          {
            image: "equipment-3",
            title: "Baño Portátil para Construcción",
            href: "/es/products/#construction-portable",
            label: "Más Info",
          },
          {
            image: "equipment-4",
            title: "Tanque de Retención",
            href: "/es/products/#holding-tank",
            label: "Más Info",
          },
          {
            image: "equipment-5",
            title: "Contenedor 20 yd",
            href: "/es/products/#dumpster-rental",
            label: "Más Info",
          },
        ],
      },
      testimonials: {
        subtitle: "Testimonios",
        title: "Lo Que Dicen Nuestros Clientes",
        metric: {
          icon: "customer",
          iconDark: "customer-dark",
          title: "Clientes Actuales",
          text: '<span class="font-bold text-[40px] leading-[120%]">10,000+</span> ',
          description: "Alquileres Completados",
        },
        items: [
          {
            image: "customer-1",
            time: "Hace 2 semanas",
            description:
              "Siempre una gran experiencia al hacer negocios aquí. Siempre limpio y a tiempo.",
            name: "City Automotive Group",
          },
          {
            image: "customer-2",
            time: "Hace 3 semanas",
            description:
              "Gran servicio siempre. Muchas gracias por ayudarme tan bien con mi evento.",
            name: "Tech Store",
          },
          {
            image: "customer-3",
            time: "Hace 1 semana",
            description:
              "Trabajo muy profesional. Limpiaban los baños periódicamente. ¡Me gustó mucho eso!",
            name: "Aqua Venue & Studio",
          },
        ],
      },
      form: {
        subtitle: "Reserva Ahora",
        title: "Obtén una Cotización Gratis en Melbourne",
        description:
          "Contacta a nuestro equipo hoy para precios, disponibilidad y opciones de alquiler adaptadas a tu proyecto o evento.",
        buttons: [
          {
            icon: "phone",
            label: "Llamar Ya",
            href: "tel:+13212179445",
          },
        ],
        image: "#",
      },
    },
    "tampa-fl": {
      hero: {
        imagesLoop: [
          {
            img: "tampa-hero",
          },
          {
            img: "fort-hero",
          },
          {
            img: "products-hero",
          },
          {
            img: "services-hero",
          },
          {
            img: "industries-hero",
          },
          {
            img: "hero-main",
          },
          {
            img: "location-hero",
          },
          {
            img: "orlando-hero",
          },
          {
            img: "melbourne-hero",
          },
        ],
        title: "Tampa, Florida",
        description:
          "Servicios fiables de baños portátiles, contenedores y vaciado en Tampa, con equipo limpio y servicio puntual desde 2011.",
        buttons: [
          {
            icon: "phone",
            label: "Llamar Ya",
            href: "tel:+13212179445",
            text: "text-white",
            back: "bg-accent hover:bg-accent/90 w-full sm:w-auto",
          },
          {
            icon: "calendar",
            label: "Agendar Ya",
            href: "#quote-section",
            text: "text-white",
            back: "bg-primary hover:bg-primary/90 dark:bg-primary-dark hover:dark:bg-primary-dark/90 w-full sm:w-auto",
          },
        ],
      },
      info: {
        image: "tampa-services",
        subtitle: "Servicio de calidad, siempre.",
        title: "Servicios de Saneamiento Portátil en Tampa",
        description:
          "Quality Portable Rental Service ofrece servicios fiables de saneamiento y gestión de residuos en Tampa, apoyando proyectos de construcción, trabajos comerciales y eventos especiales. Ofrecemos unidades estándar y ADA, opciones para altura, lavamanos, tanques de retención, contenedores de 20 y 30 yardas, y servicios de vaciado para septic y RV. <br/> <br/> Desde 2011, garantizamos equipos limpios, logística puntual y soporte al cliente confiable, ayudando a completar proyectos con eficiencia y transparencia.",
      },
      equipment: {
        subtitle: "Soluciones de Saneamiento y Gestión de Residuos Portátiles",
        title: "Nuestro Equipo de Alquiler",
        list: [
          {
            image: "equipment-1",
            title: "Baño Portátil-Eventos",
            href: "/es/products/#event-portable-toilet",
            label: "Más Info",
          },
          {
            image: "equipment-2",
            title: "Baño Portátil Accesible",
            href: "/es/products/#wheelchair-accessible",
            label: "Más Info",
          },
          {
            image: "equipment-3",
            title: "Baño Portátil para Construcción",
            href: "/es/products/#construction-portable",
            label: "Más Info",
          },
          {
            image: "equipment-4",
            title: "Tanque de Retención",
            href: "/es/products/#holding-tank",
            label: "Más Info",
          },
          {
            image: "equipment-5",
            title: "Contenedor 20 yd",
            href: "/es/products/#dumpster-rental",
            label: "Más Info",
          },
        ],
      },
      testimonials: {
        subtitle: "Testimonios",
        title: "Lo Que Dicen Nuestros Clientes",
        metric: {
          icon: "customer",
          iconDark: "customer-dark",
          title: "Clientes Actuales",
          text: '<span class="font-bold text-[40px] leading-[120%]">10,000+</span> ',
          description: "Alquileres Completados",
        },
        items: [
          {
            image: "customer-1",
            time: "Hace 2 semanas",
            description:
              "Siempre una gran experiencia al hacer negocios aquí. Siempre limpio y a tiempo.",
            name: "City Automotive Group",
          },
          {
            image: "customer-2",
            time: "Hace 3 semanas",
            description:
              "Gran servicio siempre. Muchas gracias por ayudarme tan bien con mi evento.",
            name: "Tech Store",
          },
          {
            image: "customer-3",
            time: "Hace 1 semana",
            description:
              "Trabajo muy profesional. Limpiaban los baños periódicamente. ¡Me gustó mucho eso!",
            name: "Aqua Venue & Studio",
          },
        ],
      },
      form: {
        subtitle: "Reserva Ahora",
        title: "Obtén una Cotización Gratis en Tampa",
        description:
          "Contacta a nuestro equipo hoy para precios, disponibilidad y opciones de alquiler adaptadas a tu proyecto o evento.",
        buttons: [
          {
            icon: "phone",
            label: "Llamar Ya",
            href: "tel:+13212179445",
          },
        ],
        image: "#",
      },
    },
    "fort-myers-fl": {
      hero: {
        imagesLoop: [
          {
            img: "fort-hero",
          },
          {
            img: "products-hero",
          },
          {
            img: "services-hero",
          },
          {
            img: "industries-hero",
          },
          {
            img: "hero-main",
          },
          {
            img: "location-hero",
          },
          {
            img: "orlando-hero",
          },
          {
            img: "melbourne-hero",
          },
          {
            img: "tampa-hero",
          },
        ],
        title: "Fort Myers, Florida",
        description:
          "Servicios fiables de baños portátiles, contenedores y vaciado en Fort Myers, con equipos limpios y servicio constante desde 2011.",
        buttons: [
          {
            icon: "phone",
            label: "Llamar Ya",
            href: "tel:+13212179445",
            text: "text-white",
            back: "bg-accent hover:bg-accent/90 w-full sm:w-auto",
          },
          {
            icon: "calendar",
            label: "Agendar Ya",
            href: "#quote-section",
            text: "text-white",
            back: "bg-primary hover:bg-primary/90 dark:bg-primary-dark hover:dark:bg-primary-dark/90 w-full sm:w-auto",
          },
        ],
      },
      info: {
        image: "fort-services",
        subtitle: "Servicio de calidad, siempre.",
        title:
          "Soluciones Locales de Baños Portátiles y Alquiler en Fort Myers",
        description:
          "Quality Portable Rental Service ofrece soluciones fiables de baños portátiles y gestión de residuos en Fort Myers, atendiendo a contratistas, empresas y organizadores de eventos desde 2011. Brindamos unidades estándar y ADA, opciones para altura, lavamanos, alquiler de contenedores y servicios de vaciado para septic y RV. <br/> <br/> Nuestro equipo experimentado se enfoca en entregar equipos limpios, programación confiable y soporte al cliente ágil, asegurando coordinación fluida en proyectos de cualquier tamaño.",
      },
      equipment: {
        subtitle: "Soluciones de Saneamiento y Gestión de Residuos Portátiles",
        title: "Nuestro Equipo de Alquiler",
        list: [
          {
            image: "equipment-1",
            title: "Baño Portátil-Eventos",
            href: "/es/products/#event-portable-toilet",
            label: "Más Info",
          },
          {
            image: "equipment-2",
            title: "Baño Portátil Accesible",
            href: "/es/products/#wheelchair-accessible",
            label: "Más Info",
          },
          {
            image: "equipment-3",
            title: "Baño Portátil para Construcción",
            href: "/es/products/#construction-portable",
            label: "Más Info",
          },
          {
            image: "equipment-4",
            title: "Tanque de Retención",
            href: "/es/products/#holding-tank",
            label: "Más Info",
          },
          {
            image: "equipment-5",
            title: "Contenedor 20 yd",
            href: "/es/products/#dumpster-rental",
            label: "Más Info",
          },
        ],
      },
      testimonials: {
        subtitle: "Testimonios",
        title: "Lo Que Dicen Nuestros Clientes",
        metric: {
          icon: "customer",
          iconDark: "customer-dark",
          title: "Clientes Actuales",
          text: '<span class="font-bold text-[40px] leading-[120%]">10,000+</span> ',
          description: "Alquileres Completados",
        },
        items: [
          {
            image: "customer-1",
            time: "Hace 2 semanas",
            description:
              "Siempre una gran experiencia al hacer negocios aquí. Siempre limpio y a tiempo.",
            name: "City Automotive Group",
          },
          {
            image: "customer-2",
            time: "Hace 3 semanas",
            description:
              "Gran servicio siempre. Muchas gracias por ayudarme tan bien con mi evento.",
            name: "Tech Store",
          },
          {
            image: "customer-3",
            time: "Hace 1 semana",
            description:
              "Trabajo muy profesional. Limpiaban los baños periódicamente. ¡Me gustó mucho eso!",
            name: "Aqua Venue & Studio",
          },
        ],
      },
      form: {
        subtitle: "Reserva Ahora",
        title: "Obtén una Cotización Gratis en Fort Myers",
        description:
          "Contacta a nuestro equipo hoy para precios, disponibilidad y opciones de alquiler adaptadas a tu proyecto o evento.",
        buttons: [
          {
            icon: "phone",
            label: "Llamar Ya",
            href: "tel:+13212179445",
          },
        ],
        image: "#",
      },
    },
    alabama: {
      hero: {
        subtitle: "Ampliando nuestra área de servicio",
        title: "Próximamente en el estado de Alabama",
        image: "alabama-hero",
      },
      testimonials: {
        subtitle: "Testimonios",
        title: "Lo Que Dicen Nuestros Clientes",
        metric: {
          icon: "customer",
          iconDark: "customer-dark",
          title: "Clientes Actuales",
          text: '<span class="font-bold text-[40px] leading-[120%]">10,000+</span> ',
          description: "Alquileres Completados",
        },
        items: [
          {
            image: "customer-1",
            time: "Hace 2 semanas",
            description:
              "Siempre una gran experiencia al hacer negocios aquí. Siempre limpio y a tiempo.",
            name: "City Automotive Group",
          },
          {
            image: "customer-2",
            time: "Hace 3 semanas",
            description:
              "Gran servicio siempre. Muchas gracias por ayudarme tan bien con mi evento.",
            name: "Tech Store",
          },
          {
            image: "customer-3",
            time: "Hace 1 semana",
            description:
              "Trabajo muy profesional. Limpiaban los baños periódicamente. ¡Me gustó mucho eso!",
            name: "Aqua Venue & Studio",
          },
        ],
      },
      form: {
        subtitle: "Reserva Ahora",
        title: "Obtén una Cotización Gratis en Alabama",
        description:
          "Contacta a nuestro equipo hoy para precios, disponibilidad y opciones de alquiler adaptadas a tu proyecto o evento.",
        buttons: [
          {
            icon: "phone",
            label: "Llamar Ya",
            href: "tel:+13212179445",
          },
        ],
        image: "#",
      },
    },
  },
  products: {
    hero: {
      imagesLoop: [
        {
          img: "products-hero",
        },
        {
          img: "services-hero",
        },
        {
          img: "industries-hero",
        },
        {
          img: "hero-main",
        },
        {
          img: "location-hero",
        },
        {
          img: "orlando-hero",
        },
        {
          img: "melbourne-hero",
        },
        {
          img: "tampa-hero",
        },
        {
          img: "fort-hero",
        },
      ],
      title: "Productos",
      description:
        "Servicios fiables de baños portátiles, contenedores y vaciado <br class='hidden md:block'/> en Fort Myers, con equipos limpios <br class='hidden md:block'/> y servicio confiable desde 2011.",
      buttons: [
        {
          icon: "phone",
          label: "Llamar Ya",
          href: "tel:+13212179445",
          text: "text-white",
          back: "bg-accent hover:bg-accent/90 w-full sm:w-auto",
        },
        {
          icon: "calendar",
          label: "Agendar Ya",
          href: "#quote-section",
          text: "text-white",
          back: "bg-primary hover:bg-primary/90 dark:bg-primary-dark hover:dark:bg-primary-dark/90 w-full sm:w-auto",
        },
      ],
    },
    services: {
      subtitle: "Saneamiento fiable, siempre",
      title:
        'Servicio de Alquiler <br class="hidden md:block"/> Portátil de Calidad',
      description:
        'Quality Portable Rental Service ofrece alquileres fiables de baños para eventos y construcción <br class="hidden md:block"/> ofreciendo unidades eficientes, económicas y bien mantenidas para una amplia gama de necesidades. Desde obras <br class="hidden md:block"/> hasta grandes eventos, nuestras opciones de alquiler están diseñadas para proporcionar soluciones de saneamiento confiables <br class="hidden md:block"/> con entrega y recogida puntuales.',
      items: [
        {
          title: "Baño Portátil-Eventos",
          id: "event-portable-toilet",
          lists: [
            "Ideal para obras de construcción",
            "Muy rentable",
            "Sistema de ventilación superior",
            "Interior espacioso",
            "Incluye dos rollos de papel",
            "Opcional: desinfectante de manos",
          ],
          image: "equipment-1",
        },
        {
          title: "Baño Portátil - Silla de Ruedas",
          id: "wheelchair-accessible",
          lists: [
            "Diseño amplio para mayor movilidad",
            "Acceso a nivel de suelo",
            "Barras laterales para asistencia",
            "Puerta ancha para fácil acceso",
          ],
          image: "equipment-2",
        },
        {
          title: "Baño Portátil - Construcción",
          id: "construction-portable",
          lists: [
            "Ideal para obras de construcción",
            "Muy rentable",
            "Sistema de ventilación superior",
            "Interior espacioso",
            "Incluye dos rollos de papel",
            "Opcional: desinfectante de manos",
          ],
          image: "equipment-3",
        },
        {
          title: "Baño Portátil - Construcción en Altura",
          id: "high-rise-construction",
          lists: [
            "Diseñado para proyectos en altura",
            "Fácil de elevar con grúa y/o ascensor",
            "Apto para uso a nivel de suelo y en altura",
            "Ruedas de alta resistencia",
            "Fácil de mover por una sola persona",
          ],
          image: "product-4",
        },
        {
          title: "Tanque de Retención",
          id: "holding-tank",
          lists: [
            "Capacidad de 250 galones",
            "Ideal para almacenamiento de residuos a granel",
            "Paredes duraderas para cualquier clima",
            "Perfecto para colocación junto a oficinas móviles",
            "Puertos empotrados para conexiones de fontanería",
          ],
          image: "product-5",
        },
        {
          title: "Estación de Lavado de Manos",
          id: "hand-wash",
          lists: [
            "Capacidad de 60 galones / hasta 3,800 usos",
            "Toallas de papel y jabón incluidos",
            "Ideal para grandes eventos",
            "Opciones versátiles de colocación",
            "Unidad totalmente autónoma",
          ],
          image: "product-6",
        },
        {
          title: "Alquiler Contenedor (20 yardas)",
          id: "dumpster-rental",
          lists: [
            "Capacidad de 20 yardas",
            "Ideal para grandes eventos",
            "Opciones versátiles de colocación",
            "Diseñado para una gestión eficiente de residuos",
          ],
          image: "product-7",
        },
        {
          title: "Servicio Vaciado para RV y Sépticos",
          id: "septic-rv",
          lists: [
            "Además del alquiler, ofrecemos servicios de vaciado para RV y sépticos, apoyando obras y unidades móviles.",
          ],
          image: "product-8",
        },
      ],
    },
    form: {
      subtitle: "Reserva Ahora",
      title: "Obtén una Cotización Gratis",
      description:
        "Contacta a nuestro equipo hoy para precios, disponibilidad y opciones de alquiler adaptadas a tu proyecto o evento.",
      buttons: [
        {
          icon: "phone",
          label: "Llamar Ya",
          href: "tel:+13212179445",
        },
      ],
      image: "#",
    },
  },
  services: {
    hero: {
      imagesLoop: [
        {
          img: "services-hero",
        },
        {
          img: "industries-hero",
        },
        {
          img: "hero-main",
        },
        {
          img: "location-hero",
        },
        {
          img: "orlando-hero",
        },
        {
          img: "melbourne-hero",
        },
        {
          img: "tampa-hero",
        },
        {
          img: "fort-hero",
        },
        {
          img: "products-hero",
        },
      ],
      title: "Servicios",
      description:
        "Soluciones confiables de saneamiento portátil, residuos y vaciado <br class='hidden md:block' /> para obras, eventos y proyectos <br class='hidden md:block' /> comerciales, entregadas limpias, a tiempo y <br class='hidden md:block' /> sin inconvenientes.",
      buttons: [
        {
          icon: "phone",
          label: "Llama Ya",
          href: "tel:+13212179445",
          text: "text-white",
          back: "bg-accent hover:bg-accent/90 w-full sm:w-auto",
        },
        {
          icon: "calendar",
          label: "Reserva",
          href: "#",
          text: "text-white",
          back: "bg-primary hover:bg-primary/90 dark:bg-primary-dark hover:dark:bg-primary-dark/90 w-full sm:w-auto",
        },
      ],
    },
    items: [
      {
        title: "Alquiler de Baños Portátiles",
        id: "portable-toilet-rental",
        description: "Comodidad y conveniencia, donde la necesites.",
        section: {
          subtitle: "Alquiler de Baños Portátiles",
          title: "Soluciones de saneamiento portátil para obras y eventos",
          description:
            "Ofrecemos alquileres de baños portátiles para obras y eventos, con unidades limpias y económicas para necesidades a corto y largo plazo. Nuestro inventario incluye baños portátiles estándar, unidades accesibles (ADA), baños para construcción en altura, estaciones de lavamanos y tanques de retención.",
          image: "service-1",
          list: [
            "Remolques en obra",
            "Festivales y eventos",
            "Proyectos comerciales",
            "Trabajos gubernamentales",
          ],
        },
      },
      {
        title: "Alquiler de Contenedores",
        id: "container-rental",
        description: "Espacios limpios comienzan con la solución correcta.",
        section: {
          subtitle: "Alquiler de Contenedores",
          title:
            "Soluciones eficientes de residuos para proyectos de cualquier tamaño",
          description:
            "Nuestro servicio de alquiler de contenedores incluye modelos de 20 y 30 yardas, ideales para escombros de construcción, limpiezas y residuos generados durante eventos o proyectos. Coordinamos entrega y recogida para mantener tu sitio organizado y eficiente.",
          image: "service-2",
          list: ["Contenedores de 20 yardas", "Contenedores de 30 yardas"],
        },
      },
      {
        title: "Vaciado de Septic y RV",
        id: "septic-rv-pump-out",
        description: "Servicios de vaciado eficientes y confiables.",
        section: {
          subtitle: "Vaciado de Septic y RV",
          title: "Servicio de vaciado para mantener operaciones fluidas",
          description:
            "Ofrecemos servicios de vaciado para septic y RV para apoyar obras, remolques y unidades móviles. Este servicio ayuda a mantener el saneamiento adecuado y garantiza operaciones ininterrumpidas durante tu proyecto o período de alquiler.",
          image: "service-3",
          list: [
            "Remolques en obra",
            "RVs y motorhomes",
            "Instalaciones temporales",
            "Obras a largo plazo",
          ],
        },
      },
    ],
    form: {
      subtitle: "Reserva Ahora",
      title: "Obtén una Cotización Gratis",
      description:
        "Contacta a nuestro equipo hoy para precios, disponibilidad y opciones de alquiler adaptadas a tu proyecto o evento.",
      buttons: [
        {
          icon: "phone",
          label: "Llamar Ya",
          href: "tel:+13212179445",
        },
      ],
      image: "#",
    },
  },
  industries: {
    hero: {
      imagesLoop: [
        {
          img: "industries-hero",
        },
        {
          img: "hero-main",
        },
        {
          img: "location-hero",
        },
        {
          img: "orlando-hero",
        },
        {
          img: "melbourne-hero",
        },
        {
          img: "tampa-hero",
        },
        {
          img: "fort-hero",
        },
        {
          img: "products-hero",
        },
        {
          img: "services-hero",
        },
      ],
      title: "Industrias que Atendemos",
      description:
        "Soluciones confiables de saneamiento y gestión de residuos para <br/ class='hidden md:block' /> construcción, eventos, comercio y proyectos <br/ class='hidden md:block' /> gubernamentales, entregando equipos limpios, servicio <br/ class='hidden md:block' /> dependable y coordinación profesional.",
      buttons: [
        {
          icon: "phone",
          label: "Llamar Ya",
          href: "tel:+13212179445",
          text: "text-white",
          back: "bg-accent hover:bg-accent/90 w-full sm:w-auto",
        },
        {
          icon: "calendar",
          label: "Reserva Ya",
          href: "#quote-section",
          text: "text-white",
          back: "bg-primary hover:bg-primary/90 dark:bg-primary-dark hover:dark:bg-primary-dark/90 w-full sm:w-auto",
        },
      ],
    },
    types: [
      {
        back: "bg-white dark:bg-back-dark",
        image: "construction-2",
        subtitle: "Apoyamos proyectos de construcción de todos los tamaños",
        id: "construction",
        title: "Construcción",
        description:
          "Apoyamos proyectos de construcción de todos los tamaños con baños portátiles limpios y duraderos, incluyendo unidades estándar, opciones accesibles (ADA) y baños para construcción en altura. Estaciones de lavado, tanques de retención, alquileres de contenedores y servicios de vaciado están disponibles.",
        common: "Usos comunes",
        items: [
          "Construcción comercial",
          "Desarrollos residenciales",
          "Proyectos de obra a largo plazo",
          "Oficinas móviles",
        ],
      },
      {
        back: "bg-back dark:bg-[#11152A]",
        image: "events-2",
        subtitle: "Comodidad y limpieza en cada reunión",
        id: "events-festivals",
        title: "Eventos y Festivales",
        description:
          "De reuniones privadas a grandes eventos públicos, proporcionamos baños portátiles, unidades ADA, estaciones de lavado y soluciones de residuos para garantizar una experiencia limpia y cómoda para asistentes.",
        common: "Usos comunes",
        items: [
          "Festivales y eventos al aire libre",
          "Bodas y eventos privados",
          "Reuniones comunitarias",
          "Eventos deportivos",
        ],
      },
      {
        back: "bg-white dark:bg-back-dark",
        image: "commercial-2",
        subtitle: "Saneamiento confiable para proyectos comerciales",
        id: "commercial",
        title: "Comercial",
        description:
          "Trabajamos con empresas y gestores de propiedades para proporcionar soluciones de saneamiento portátil y gestión de residuos para necesidades temporales, renovaciones y operaciones comerciales.",
        common: "Usos comunes",
        items: [
          "Renovaciones comerciales",
          "Mantenimiento de propiedades",
          "Ubicaciones comerciales temporales",
          "Proyectos comerciales y de oficina",
        ],
      },
      {
        back: "bg-back dark:bg-[#11152A]",
        image: "government-2",
        subtitle: "Socio confiable para operaciones municipales",
        id: "government-municipal",
        title: "Gobierno y Municipal",
        description:
          "Quality Portable Rental Service apoya proyectos municipales, estatales y federales con equipos de alquiler confiables y coordinación profesional. Nuestro equipo entiende los requisitos del trabajo gubernamental y entrega servicio consistente.",
        common: "Usos comunes",
        items: [
          "Proyectos municipales",
          "Obras públicas",
          "Sitios de construcción gubernamental",
          "Programas comunitarios",
        ],
      },
    ],
    form: {
      subtitle: "Reserva Ahora",
      title: "Obtén una Cotización Gratis",
      description:
        "Contacta a nuestro equipo hoy para precios, disponibilidad y opciones de alquiler adaptadas a tu proyecto o evento.",
      buttons: [
        {
          icon: "phone",
          label: "Llamar Ya",
          href: "tel:+13212179445",
        },
      ],
      image: "#",
    },
  },
  footer: {
    description:
      "Confiables desde 2011, ofrecemos soluciones portátiles de saneamiento y gestión de residuos en Florida y Georgia, entregando unidades limpias, servicio puntual y soporte fiable para obras, eventos y proyectos comerciales.",
    service: {
      title: "Servicios",
      items: [
        {
          title: "Alquiler Baños Portátiles",
          href: "es/services?section=portable-toilet-rental",
        },
        {
          title: "Alquiler Contenedores",
          href: "es/services?section=dumpster-rental",
        },
        {
          title: "Vaciado Septic y RV",
          href: "es/services?section=septic-rv-pump-out",
        },
      ],
    },
    nav: {
      title: "Menú Principal",
      items: [
        {
          label: "Ubicaciones",
          href: "locations",
        },
        {
          label: "Productos",
          href: "products",
        },
        {
          label: "Industrias",
          href: "industries",
        },
      ],
    },
    contact: {
      title: "Contacto",
      items: [
        {
          icon: "mail-1",
          text: "info@qualityportablerentalservice.com",
          href: "https://mail.google.com/mail/?view=cm&fs=1&to=info@qualityportablerentalservice.com",
        },
        {
          icon: "phone-1",
          text: "+1 (321) 217-9445",
          href: "tel:+13212179445",
        },
        {
          icon: "clock",
          text: "Lun - Vie: 7AM - 7PM",
          href: "#",
        },
      ],
    },
  },
};
