export default {
  header: {
    nav: [
      {
        label: 'Locations <span class="text-[16px] ml-px">▾</span>',
        href: "/locations",
      },
      {
        label: "Products",
        href: "/products",
      },
      {
        label: "Services ",
        href: "/services",
      },
      {
        label: "Industries",
        href: "/industries",
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
        label: "Call Now",
        href: "tel:+13212179445",
        icon: "phone",
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
        "Florida’s #1 <br class='block'/> Port-O-Potty Service <br class='hidden md:block'/>  for",
      services:[
        'Construction',
        'Events',
        'Festivals',
        'Commercial',
        'Government',
        'Municipal'
      ],
      description:
        "Clean units, on-time delivery and pickup, and <br class='hidden md:block'/> competitive pricing for job sites and events across <br class='hidden md:block'/> Florida and Georgia.",
      buttons: [
        {
          icon: "phone",
          label: "Call Now",
          href: "tel:+13212179445",
          text: "text-white",
          back: "bg-accent hover:bg-accent/90",
        },
        {
          icon: "calendar",
          label: "Book Now",
          href: "/en/#quote-section",
          text: "text-white",
          back: "bg-primary hover:bg-primary/90 dark:bg-primary-dark hover:dark:bg-primary-dark/90",
        },
      ],
    },
    services: {
      description: "Our Rental Services",
      title: "Reliable solutions for sites, events, and projects.",
      items: [
        {
          title: "Port O Potty Rental",
          description: "Comfort and convenience, wherever you are.",
          description2:
            "Clean, cost-effective portable restroom solutions for construction sites, events, commercial projects, and government jobs.",
          href: "/en/services?section=portable-toilet-rental",
          image: "service-1",
        },
        {
          title: "Dumpster Rental",
          description: "Clean spaces start with the right solution.",
          description2:
            "Efficient dumpster rental solutions with 20- and 30-yard options for construction, cleanouts, and events.",
          href: "/en/services?section=dumpster-rental",
          image: "service-2",
        },
        {
          title: "Septic & RV Pump-Out",
          description: "Efficient and dependable pump-out services.",
          description2:
            "Reliable septic and RV pump-out services ensuring proper sanitation and uninterrupted operations across all job sites.",
          href: "/en/services?section=septic-rv-pump-out",
          image: "service-3",
        },
      ],
      button: "Learn More",
    },
    areas: {
      description: "Reliable service across every location",
      title: "Areas We Proudly Serve",
      items: [
        {
          icon: "location",
          iconDark: "location-dark",
          title: "Locations",
          text: "Multiple Service Locations",
          description: "Florida & Georgia",
        },
        {
          icon: "inventory",
          iconDark: "inventory-dark",
          title: "Inventory",
          text: "Large Rental Inventory",
          description: "Ready for projects of all sizes",
        },
        {
          icon: "customer",
          iconDark: "customer-dark",
          title: "Current Customers",
          text: '<span class="font-bold text-[28px] md:text-[40px] leading-[129%] md:leading-[120%]">10,000+</span> ',
          description: "Rentals Completed",
        },
      ],
      buttons: [
        {
          label: "View Service Areas",
          back: "bg-primary dark:bg-primary-dark hover:bg-primary/90 hover:dark:bg-primary-dark/90",
          text: "text-white",
          href: "/en/locations",
        },
        {
          icon: "phone",
          label: "Call Now",
          back: "bg-accent hover:bg-accent/90",
          text: "text-white",
          href: "#",
        },
      ],
    },
    why: {
      subtitle: "Dependable solutions, every time",
      description:
        "At Quality Portable Rental Service, we deliver clean, reliable, on-time rental solutions with transparent pricing and inventory ready for projects of any size nationwide.",
      title: "Why Choose Quality Portable Rental Service",
      items: [
        {
          icon: "clock",
          title: "On-Time Delivery & Pickup",
          description:
            "We deliver and pick up equipment on time, every time. Our team coordinates logistics carefully so your project or event runs smoothly without delays.",
        },
        {
          icon: "check",
          title: "Cleanliness you can trust",
          description:
            "All units are cleaned, serviced, and inspected before delivery to ensure a sanitary and professional experience at every site.",
        },
        {
          icon: "rayo",
          title: "Ready when you need it",
          description:
            "With a strong inventory of portable toilets, ADA units, high-rise options, dumpsters, and accessories, we’re prepared to support projects of all sizes.",
        },
        {
          icon: "dolar",
          title: "No hidden fees",
          description:
            "We provide competitive pricing with clear communication, so you know exactly what to expect from start to finish.",
        },
      ],
    },
    equipment: {
      subtitle: "Portable Sanitation & Waste Solutions",
      title: "Our Rental Equipment",
      list: [
        {
          image: "equipment-1",
          title: "Regular Portable Toilet",
          href: "/en/products/#regular-portable-toilet",
          label: "Learn More",
        },
        {
          image: "equipment-2",
          title: "Wheelchair Accessible Portable Toilet",
          href: "/en/products/#wheelchair-accessible",
          label: "Learn More",
        },
        {
          image: "equipment-3",
          title: "Construction Portable Toilet",
          href: "/en/products/#construction-portable",
          label: "Learn More",
        },
        {
          image: "equipment-4",
          title: "Holding Tank",
          href: "/en/products/#holding-tank",
          label: "Learn More",
        },
        {
          image: "equipment-5",
          title: "Dumpster 20 yrd",
          href: "/en/products/#dumpster-rental",
          label: "Learn More",
        },
      ],
    },
    started: {
      title: "Ready to Get Started?",
      description:
        "Get a fast, free quote for your project or event. Our team is ready to help with availability, pricing, and next steps.",
      button: "Call Now",
    },
    industries: {
      description: "solution for various industries",
      title: "Industries We Serve",
      paragraph:
        "Reliable sanitation and waste solutions for construction, events, commercial, and government <br class='hidden md:block'/> projects, delivering clean equipment, dependable service, and professional coordination.",
      button: {
        label: "See All Industries",
        href: "/en/industries",
      },
      items: [
        {
          title: "Construction Sites",
          description:
            "Sanitation and waste solutions for construction projects of any size, including ADA and high-rise units.",
          image: "construction",
          button: {
            label: "Learn More",
            href: "/en/industries/#construction",
          },
        },
        {
          title: "Events & Festivals",
          description:
            "Clean, reliable portable sanitation solutions for private gatherings and large public events.",
          image: "events",
          button: {
            label: "Learn More",
            href: "/en/industries/#events-festivals",
          },
        },
        {
          title: "Commercial Projects",
          description:
            "Flexible sanitation and waste services for businesses, renovations, and temporary commercial operations.",
          image: "commercial",
          button: {
            label: "Learn More",
            href: "/en/industries/#commercial",
          },
        },
        {
          title: "Government & Municipal",
          description:
            "Reliable rental solutions with professional coordination for city, county, and federal projects.",
          image: "government",
          button: {
            label: "Learn More",
            href: "/en/industries/#government-municipal",
          },
        },
      ],
    },
    form: {
      subtitle: "Book Now",
      title: "Get a Free Quote in Orlando",
      description:
        "Contact our team today for pricing, availability, and rental options tailored to your project or event.",
      buttons: [
        {
          icon: "phone",
          label: "Call Now",
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
      title: "Locations",
      description:
        "We proudly serve multiple locations across Florida <br class='hidden md:block'/> and Georgia, offering fast delivery, local pricing, <br class='hidden md:block'/> and reliable rental availability for every project",
      buttons: [
        {
          icon: "phone",
          label: "Call Now",
          href: "tel:+13212179445",
          text: "text-white",
          back: "bg-accent hover:bg-accent/90",
        },
        {
          icon: "calendar",
          label: "Book Now",
          href: "#quote-section",
          text: "text-white",
          back: "bg-primary hover:bg-primary/90 dark:bg-primary-dark hover:dark:bg-primary-dark/90",
        },
      ],
    },
    service: {
      subtitle: "Service Area",
      title:
        "We provide rental service across <br class='hidden md:block'/> Florida and Georgia.",
      description: "Select a location to get local pricing and availability.",
      items: [
        {
          title: "Florida Service Areas",
          areas: [
            {
              label: "Orlando",
              href: "/en/locations/orlando-fl",
            },
            {
              label: "Tampa",
              href: "/en/locations/tampa-fl",
            },
            {
              label: "Melbourne",
              href: "/en/locations/melbourne-fl",
            },
            {
              label: "Fort Myers",
              href: "/en/locations/fort-myers-fl",
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
          title: "Georgia Service Areas",
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
          title: "Alabama Service Areas",
          areas: [
            {
              label: "Very soon!",
              href: "#",
            },
          ],
        },
      ],
    },
    areas: {
      description: "Reliable service across every location",
      title: "Areas We Proudly Serve",
      items: [
        {
          icon: "location",
          iconDark: "location-dark",
          title: "Locations",
          text: "Multiple Service Locations",
          description: "Florida & Georgia",
        },
        {
          icon: "inventory",
          iconDark: "inventory-dark",
          title: "Inventory",
          text: "Large Rental Inventory",
          description: "Ready for projects of all sizes",
        },
        {
          icon: "customer",
          iconDark: "customer-dark",
          title: "Current Customers",
          text: '<span class="font-bold text-[28px] md:text-[40px] leading-[129%] md:leading-[120%]">10,000+</span> ',
          description: "Rentals Completed",
        },
      ],
      buttons: [
        {
          label: "View Service Areas",
          back: "bg-primary dark:bg-primary-dark hover:bg-primary/90 hover:dark:bg-primary-dark/90",
          text: "text-white",
          href: "services",
        },
        {
          icon: "phone",
          label: "Call Now",
          back: "bg-accent hover:bg-accent/90",
          text: "text-white",
          href: "#",
        },
      ],
    },
    equipment: {
      subtitle: "Portable Sanitation & Waste Solutions",
      title: "Our Rental Equipment",
      list: [
        {
          image: "equipment-1",
          title: "Regular Portable Toilet",
          href: "/en/products/#regular-portable-toilet",
          label: "Learn More",
        },
        {
          image: "equipment-2",
          title: "Wheelchair Accessible Portable Toilet",
          href: "/en/products/#wheelchair-accessible",
          label: "Learn More",
        },
        {
          image: "equipment-3",
          title: "Construction Portable Toilet",
          href: "/en/products/#construction-portable",
          label: "Learn More",
        },
        {
          image: "equipment-4",
          title: "Holding Tank",
          href: "/en/products/#holding-tank",
          label: "Learn More",
        },
        {
          image: "equipment-5",
          title: "Dumpster 20 yrd",
          href: "/en/products/#dumpster-rental",
          label: "Learn More",
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
          "Reliable portable toilet, dumpster, and pump-out services in Orlando, delivering clean equipment and on-time service since 2011.",
        buttons: [
          {
            icon: "phone",
            label: "Call Now",
            href: "tel:+13212179445",
            text: "text-white",
            back: "bg-accent hover:bg-accent/90",
          },
          {
            icon: "calendar",
            label: "Book Now",
            href: "#quote-section",
            text: "text-white",
            back: "bg-primary hover:bg-primary/90 dark:bg-primary-dark hover:dark:bg-primary-dark/90",
          },
        ],
      },
      info: {
        image: "orlando-services",
        subtitle: "Quality service, every time.",
        title: "Portable Toilet & Rental Services in Orlando",
        description:
          "Quality Portable Rental Service provides reliable portable toilet and waste rental solutions in Orlando, Florida, supporting construction sites, commercial projects, special events, and municipal needs. Our services include standard and ADA portable toilets, high-rise units, hand wash stations, holding tanks, 10 and 20-yard dumpster rentals, and septic & RV pump-out services. <br/> <br/>Since 2011, we have delivered clean equipment, dependable scheduling, and transparent pricing with no hidden fees. Our local Orlando team ensures timely delivery, efficient coordination, and responsive customer support, helping projects of any size run smoothly from start to finish. Trusted across Central Florida, we remain committed to quality, reliability, and professional service.",
      },
      equipment: {
        subtitle: "Portable Sanitation & Waste Solutions",
        title: "Our Rental Equipment",
        list: [
          {
            image: "equipment-1",
            title: "Regular Portable Toilet",
            href: "/en/products/#regular-portable-toilet",
            label: "Learn More",
          },
          {
            image: "equipment-2",
            title: "Wheelchair Accessible Portable Toilet",
            href: "/en/products/#wheelchair-accessible",
            label: "Learn More",
          },
          {
            image: "equipment-3",
            title: "Construction Portable Toilet",
            href: "/en/products/#construction-portable",
            label: "Learn More",
          },
          {
            image: "equipment-4",
            title: "Holding Tank",
            href: "/en/products/#holding-tank",
            label: "Learn More",
          },
          {
            image: "equipment-5",
            title: "Dumpster 20 yrd",
            href: "/en/products/#dumpster-rental",
            label: "Learn More",
          },
        ],
      },
      testimonials: {
        subtitle: "Testimonials",
        title: "What Our Customers Say",
        metric: {
          icon: "customer",
          iconDark: "customer-dark",
          title: "Current Customers",
          text: '<span class="font-bold text-[40px] leading-[120%]">10,000+</span> ',
          description: "Rentals Completed",
        },
        items: [
          {
            image: "customer-1",
            time: "2 weeks ago",
            description:
              "Always a great experience doing business here. Always Clean and on time.",
            name: "City Automotive Group",
          },
          {
            image: "customer-2",
            time: "3 weeks ago",
            description:
              "Great service every time. Thank you so much for helping me with my event.",
            name: "Tech Store",
          },
          {
            image: "customer-3",
            time: "1 week ago",
            description:
              "Very professional work. They cleaned the toilets periodically. I liked that!",
            name: "Aqua Venue & Studio",
          },
        ],
      },
      form: {
        subtitle: "Book Now",
        title: "Get a Free Quote in Orlando",
        description:
          "Contact our team today for pricing, availability, and rental options tailored to your project or event.",
        buttons: [
          {
            icon: "phone",
            label: "Call Now",
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
          "Reliable portable toilet, dumpster, and pump-out services in Melbourne, delivering clean equipment and on-time service since 2011.",
        buttons: [
          {
            icon: "phone",
            label: "Call Now",
            href: "tel:+13212179445",
            text: "text-white",
            back: "bg-accent hover:bg-accent/90",
          },
          {
            icon: "calendar",
            label: "Book Now",
            href: "#quote-section",
            text: "text-white",
            back: "bg-primary hover:bg-primary/90 dark:bg-primary-dark hover:dark:bg-primary-dark/90",
          },
        ],
      },
      info: {
        image: "melbourne-services",
        subtitle: "Quality service, every time.",
        title: "Reliable Portable Toilet Rentals in Melbourne",
        description:
          "Quality Portable Rental Service provides reliable portable toilet and waste rental solutions in Melbourne, Florida, supporting construction projects, commercial work, and special events. Our services include standard and ADA portable toilets, high-rise units, hand wash stations, holding tanks, 10 and 20-yard dumpster rentals, and septic & RV pump-out services.<br/> <br/> Since 2011, we have delivered clean equipment, dependable scheduling, and transparent pricing with no surprises. Our local Melbourne team ensures timely delivery, smooth coordination, and responsive customer support, helping projects of any size run efficiently from start to finish. Customers across Florida and Georgia trust us for consistent service and professional rental solutions.",
      },
      equipment: {
        subtitle: "Portable Sanitation & Waste Solutions",
        title: "Our Rental Equipment",
        list: [
          {
            image: "equipment-1",
            title: "Regular Portable Toilet",
            href: "/en/products/#regular-portable-toilet",
            label: "Learn More",
          },
          {
            image: "equipment-2",
            title: "Wheelchair Accessible Portable Toilet",
            href: "/en/products/#wheelchair-accessible",
            label: "Learn More",
          },
          {
            image: "equipment-3",
            title: "Construction Portable Toilet",
            href: "/en/products/#construction-portable",
            label: "Learn More",
          },
          {
            image: "equipment-4",
            title: "Holding Tank",
            href: "/en/products/#holding-tank",
            label: "Learn More",
          },
          {
            image: "equipment-5",
            title: "Dumpster 20 yrd",
            href: "/en/products/#dumpster-rental",
            label: "Learn More",
          },
        ],
      },
      testimonials: {
        subtitle: "Testimonials",
        title: "What Our Customers Say",
        metric: {
          icon: "customer",
          iconDark: "customer-dark",
          title: "Current Customers",
          text: '<span class="font-bold text-[40px] leading-[120%]">10,000+</span> ',
          description: "Rentals Completed",
        },
        items: [
          {
            image: "customer-1",
            time: "2 weeks ago",
            description:
              "Always a great experience doing business here. Always Clean and on time.",
            name: "City Automotive Group",
          },
          {
            image: "customer-2",
            time: "3 weeks ago",
            description:
              "Great service every time. Thank you so much for helping me with my event.",
            name: "Tech Store",
          },
          {
            image: "customer-3",
            time: "1 week ago",
            description:
              "Very professional work. They cleaned the toilets periodically. I liked that!",
            name: "Aqua Venue & Studio",
          },
        ],
      },
      form: {
        subtitle: "Book Now",
        title: "Get a Free Quote in Melbourne",
        description:
          "Contact our team today for pricing, availability, and rental options tailored to your project or event.",
        buttons: [
          {
            icon: "phone",
            label: "Call Now",
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
          "Reliable portable toilet, dumpster, and pump-out services in Tampa, delivering clean equipment and on-time service since 2011.",
        buttons: [
          {
            icon: "phone",
            label: "Call Now",
            href: "tel:+13212179445",
            text: "text-white",
            back: "bg-accent hover:bg-accent/90",
          },
          {
            icon: "calendar",
            label: "Book Now",
            href: "#quote-section",
            text: "text-white",
            back: "bg-primary hover:bg-primary/90 dark:bg-primary-dark hover:dark:bg-primary-dark/90",
          },
        ],
      },
      info: {
        image: "tampa-services",
        subtitle: "Quality service, every time.",
        title: "Trusted Portable Sanitation Services in Tampa",
        description:
          "Quality Portable Rental Service provides reliable portable sanitation and waste rental services in Tampa, Florida, supporting construction projects, commercial work, and special events. We offer a complete range of solutions, including standard and ADA portable toilets, high-rise units, hand wash stations, holding tanks, 10 and 20-yard dumpster rentals, and septic & RV pump-out services. <br/> <br/> Since 2011, we have delivered clean equipment, on-time logistics, and dependable customer support. Our experienced team ensures smooth coordination, clear communication, and consistent service standards, helping customers complete projects efficiently and without complications. Trusted by contractors, businesses, and event organizers, we remain committed to quality, reliability, and transparent service.",
      },
      equipment: {
        subtitle: "Portable Sanitation & Waste Solutions",
        title: "Our Rental Equipment",
        list: [
          {
            image: "equipment-1",
            title: "Regular Portable Toilet",
            href: "/en/products/#regular-portable-toilet",
            label: "Learn More",
          },
          {
            image: "equipment-2",
            title: "Wheelchair Accessible Portable Toilet",
            href: "/en/products/#wheelchair-accessible",
            label: "Learn More",
          },
          {
            image: "equipment-3",
            title: "Construction Portable Toilet",
            href: "/en/products/#construction-portable",
            label: "Learn More",
          },
          {
            image: "equipment-4",
            title: "Holding Tank",
            href: "/en/products/#holding-tank",
            label: "Learn More",
          },
          {
            image: "equipment-5",
            title: "Dumpster 20 yrd",
            href: "/en/products/#dumpster-rental",
            label: "Learn More",
          },
        ],
      },
      testimonials: {
        subtitle: "Testimonials",
        title: "What Our Customers Say",
        metric: {
          icon: "customer",
          iconDark: "customer-dark",
          title: "Current Customers",
          text: '<span class="font-bold text-[40px] leading-[120%]">10,000+</span> ',
          description: "Rentals Completed",
        },
        items: [
          {
            image: "customer-1",
            time: "2 weeks ago",
            description:
              "Always a great experience doing business here. Always Clean and on time.",
            name: "City Automotive Group",
          },
          {
            image: "customer-2",
            time: "3 weeks ago",
            description:
              "Great service every time. Thank you so much for helping me with my event.",
            name: "Tech Store",
          },
          {
            image: "customer-3",
            time: "1 week ago",
            description:
              "Very professional work. They cleaned the toilets periodically. I liked that!",
            name: "Aqua Venue & Studio",
          },
        ],
      },
      form: {
        subtitle: "Book Now",
        title: "Get a Free Quote in Tampa",
        description:
          "Contact our team today for pricing, availability, and rental options tailored to your project or event.",
        buttons: [
          {
            icon: "phone",
            label: "Call Now",
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
          "Reliable portable toilet, dumpster, and pump-out services in Fort Myers, delivering clean equipment and dependable service since 2011.",
        buttons: [
          {
            icon: "phone",
            label: "Call Now",
            href: "tel:+13212179445",
            text: "text-white",
            back: "bg-accent hover:bg-accent/90",
          },
          {
            icon: "calendar",
            label: "Book Now",
            href: "#quote-section",
            text: "text-white",
            back: "bg-primary hover:bg-primary/90 dark:bg-primary-dark hover:dark:bg-primary-dark/90",
          },
        ],
      },
      info: {
        image: "fort-services",
        subtitle: "Quality service, every time.",
        title: "Local Portable Toilet & Waste Rental Solutions in Fort Myers",
        description:
          "Quality Portable Rental Service provides reliable portable toilet and waste rental solutions in Fort Myers, serving contractors, businesses, and event organizers since 2011. We offer a complete range of services, including standard and ADA portable toilets, high-rise units, hand wash stations, holding tanks, dumpster rentals, and septic & RV pump-out services. <br/> <br/> Our experienced team focuses on delivering clean equipment, dependable scheduling, and responsive customer support. With flexible inventory and clear pricing, we ensure smooth coordination for projects of any size and duration. Customers across Fort Myers trust us for consistent service, professional operations, and reliable rental solutions from start to finish.",
      },
      equipment: {
        subtitle: "Portable Sanitation & Waste Solutions",
        title: "Our Rental Equipment",
        list: [
          {
            image: "equipment-1",
            title: "Regular Portable Toilet",
            href: "/en/products/#regular-portable-toilet",
            label: "Learn More",
          },
          {
            image: "equipment-2",
            title: "Wheelchair Accessible Portable Toilet",
            href: "/en/products/#wheelchair-accessible",
            label: "Learn More",
          },
          {
            image: "equipment-3",
            title: "Construction Portable Toilet",
            href: "/en/products/#construction-portable",
            label: "Learn More",
          },
          {
            image: "equipment-4",
            title: "Holding Tank",
            href: "/en/products/#holding-tank",
            label: "Learn More",
          },
          {
            image: "equipment-5",
            title: "Dumpster 20 yrd",
            href: "/en/products/#dumpster-rental",
            label: "Learn More",
          },
        ],
      },
      testimonials: {
        subtitle: "Testimonials",
        title: "What Our Customers Say",
        metric: {
          icon: "customer",
          iconDark: "customer-dark",
          title: "Current Customers",
          text: '<span class="font-bold text-[40px] leading-[120%]">10,000+</span> ',
          description: "Rentals Completed",
        },
        items: [
          {
            image: "customer-1",
            time: "2 weeks ago",
            description:
              "Always a great experience doing business here. Always Clean and on time.",
            name: "City Automotive Group",
          },
          {
            image: "customer-2",
            time: "3 weeks ago",
            description:
              "Great service every time. Thank you so much for helping me with my event.",
            name: "Tech Store",
          },
          {
            image: "customer-3",
            time: "1 week ago",
            description:
              "Very professional work. They cleaned the toilets periodically. I liked that!",
            name: "Aqua Venue & Studio",
          },
        ],
      },
      form: {
        subtitle: "Book Now",
        title: "Get a Free Quote in Fort Myers",
        description:
          "Contact our team today for pricing, availability, and rental options tailored to your project or event.",
        buttons: [
          {
            icon: "phone",
            label: "Call Now",
            href: "tel:+13212179445",
          },
        ],
        image: "#",
      },
    },
    alabama: {
      hero: {
        subtitle: "Expanding our service area",
        title: "We Are Coming Soon <br/> to Alabama, State.",
        image: "alabama-hero",
      },
      testimonials: {
        subtitle: "Testimonials",
        title: "What Our Customers Say",
        metric: {
          icon: "customer",
          iconDark: "customer-dark",
          title: "Current Customers",
          text: '<span class="font-bold text-[40px] leading-[120%]">10,000+</span> ',
          description: "Rentals Completed",
        },
        items: [
          {
            image: "customer-1",
            time: "2 weeks ago",
            description:
              "Always a great experience doing business here. Always Clean and on time.",
            name: "City Automotive Group",
          },
          {
            image: "customer-2",
            time: "3 weeks ago",
            description:
              "Great service every time. Thank you so much for helping me with my event.",
            name: "Tech Store",
          },
          {
            image: "customer-3",
            time: "1 week ago",
            description:
              "Very professional work. They cleaned the toilets periodically. I liked that!",
            name: "Aqua Venue & Studio",
          },
        ],
      },
      form: {
        subtitle: "Book Now",
        title: "Get a Free Quote in Alabama",
        description:
          "Contact our team today for pricing, availability, and rental options tailored to your project or event.",
        buttons: [
          {
            icon: "phone",
            label: "Call Now",
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
      title: "Products",
      description:
        "Reliable portable toilet, dumpster, and pump-out <br class='hidden md:block'/> services in Fort Myers, delivering clean equipment <br class='hidden md:block'/> and dependable service since 2011.",
      buttons: [
        {
          icon: "phone",
          label: "Call Now",
          href: "tel:+13212179445",
          text: "text-white",
          back: "bg-accent hover:bg-accent/90",
        },
        {
          icon: "calendar",
          label: "Book Now",
          href: "#quote-section",
          text: "text-white",
          back: "bg-primary hover:bg-primary/90 dark:bg-primary-dark hover:dark:bg-primary-dark/90",
        },
      ],
    },
    services: {
      subtitle: "Reliable sanitation, every time",
      title: 'Quality Portable <br class="hidden md:block"/>  Rental Service',
      description:
        'Quality Portable Rental Service provides reliable event and construction toilet rentals <br class="hidden md:block"/> offering lean, cost-effective, and well-maintained units for a wide range of needs. From construction <br class="hidden md:block"/> sites to large events, our rental options are designed to deliver dependable sanitation solutions <br class="hidden md:block"/> with on-time delivery and pickup.',
      items: [
        {
          title: "Regular Portable Toilet",
          id: "regular-portable-toilet",
          lists: [
            "Ideal for construction sites",
            "Very cost-effective",
            "Superior ventilation system",
            "Spacious interior",
            "Two tissue rolls included",
            "Optional hand sanitizer",
          ],
          image: "equipment-1",
        },
        {
          title: "Wheelchair Accessible Portable Toilet",
          id: "wheelchair-accessible",
          lists: [
            "Roomy design for increased movement",
            "Ground-level entry",
            "Side rails for handicap assistance",
            "Wide door for easy access",
          ],
          image: "equipment-2",
        },
        {
          title: "Construction Portable Toilet",
          id: "construction-portable",
          lists: [
            "Ideal for construction sites",
            "Very cost-effective",
            "Superior ventilation system",
            "Spacious interior",
            "Two tissue rolls included",
            "Optional hand sanitizer",
          ],
          image: "equipment-3",
        },
        {
          title: "High-Rise Construction Portable Toilet",
          id: "high-rise-construction",
          lists: [
            "Designed for high-rise construction projects",
            "Easily lifted by crane and / or elevator",
            "Suitable for ground-level and high-rise use",
            "Heavy-duty casters",
            "Easily movable by one person",
          ],
          image: "product-4",
        },
        {
          title: "Holding Tank",
          id: "holding-tank",
          lists: [
            "250-gallon capacity",
            "Ideal for bulk waste storage",
            "Durable walls for all weather conditions",
            "Perfect for office trailer placement",
            "Recessed ports for easy plumbing connections",
          ],
          image: "product-5",
        },
        {
          title: "Hand Wash Station",
          id: "hand-wash",
          lists: [
            "60-gallon water capacity / up to 3,800 pumps",
            "Paper towels and soap provided",
            "Great for large events",
            "Versatile placement options",
            "Fully self-contained unit",
          ],
          image: "product-6",
        },
        {
          title: "Dumpster Rental <br/> (20 Yard)",
          id: "dumpster-rental",
          lists: [
            "20-yard capacity",
            "Great for large events",
            "Versatile placement options",
            "Designed for efficient waste management",
          ],
          image: "product-7",
        },
        {
          title: "RV & Septic Pump-Out Service",
          id: "septic-rv",
          lists: [
            "In addition to rental equipment, we also provide RV and septic pump-out services to support job sites and mobile units.",
          ],
          image: "product-8",
        },
      ],
    },
    form: {
      subtitle: "Book Now",
      title: "Get a Free Quote",
      description:
        "Contact our team today for pricing, availability, and rental options tailored to your project or event.",
      buttons: [
        {
          icon: "phone",
          label: "Call Now",
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
      title: "Services",
      description:
        "Reliable portable sanitation, waste, and pump-out <br class='hidden md:block' /> solutions for construction sites, events, and <br class='hidden md:block' /> commercial projects, delivered clean, on time, and <br class='hidden md:block' /> hassle-free.",
      buttons: [
        {
          icon: "phone",
          label: "Call Now",
          href: "tel:+13212179445",
          text: "text-white",
          back: "bg-accent hover:bg-accent/90",
        },
        {
          icon: "calendar",
          label: "Book Now",
          href: "#quote-section",
          text: "text-white",
          back: "bg-primary hover:bg-primary/90 dark:bg-primary-dark hover:dark:bg-primary-dark/90",
        },
      ],
    },
    items: [
      {
        title: "Port O Potty Rental",
        id: "portable-toilet-rental",
        description: "Comfort and convenience, wherever you are.",
        section: {
          subtitle: "Port O Potty Rental",
          title: "Portable sanitation solutions for job sites and events",
          description:
            "We provide portable toilet rentals for construction sites and events, offering clean and cost-effective units suitable for short-term and long-term needs. Our inventory includes standard portable toilets, wheelchair-accessible (ADA) units, high-rise construction toilets, hand wash stations, and holding tanks.",
          image: "service-1",
          list: [
            "Construction site trailers",
            "Events & festivals",
            "Commercial projects",
            "Government jobs",
          ],
        },
      },
      {
        title: "Dumpster Rental",
        id: "dumpster-rental",
        description: "Clean spaces start with the right solution.",
        section: {
          subtitle: "Dumpster Rental",
          title: "Efficient waste solutions for projects of any size",
          description:
            "Our dumpster rental service includes 20-yard and 30-yard dumpsters, ideal for construction debris, cleanouts, and waste generated during events or projects. We coordinate delivery and pickup to keep your site organized and efficient.",
          image: "service-2",
          list: ["20-yard dumpsters", "30-yard dumpsters"],
        },
      },
      {
        title: "Septic & RV Pump-Out",
        id: "septic-rv-pump-out",
        description: "Efficient and dependable pump-out services.",
        section: {
          subtitle: "Septic & RV Pump-Out",
          title: "Pump-out service to keep operations running smoothly",
          description:
            "We offer septic and RV pump-out services to support job sites, trailers, and mobile units. This service helps maintain proper sanitation and ensures uninterrupted operations throughout your project or rental period.",
          image: "service-3",
          list: [
            "Construction site trailers",
            "RVs and motorhomes",
            "Temporary facilities",
            "Long-term job sites",
          ],
        },
      },
    ],
    form: {
      subtitle: "Book Now",
      title: "Get a Free Quote",
      description:
        "Contact our team today for pricing, availability, and rental options tailored to your project or event.",
      buttons: [
        {
          icon: "phone",
          label: "Call Now",
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
      title: "Industries We Serve",
      description:
        "Reliable sanitation and waste solutions for <br/ class='hidden md:block' /> construction, events, commercial, and government  <br/ class='hidden md:block' /> projects, delivering clean equipment, dependable  <br/ class='hidden md:block' />  service, and professional coordination.",
      buttons: [
        {
          icon: "phone",
          label: "Call Now",
          href: "tel:+13212179445",
          text: "text-white",
          back: "bg-accent hover:bg-accent/90",
        },
        {
          icon: "calendar",
          label: "Book Now",
          href: "#quote-section",
          text: "text-white",
          back: "bg-primary hover:bg-primary/90 dark:bg-primary-dark hover:dark:bg-primary-dark/90",
        },
      ],
    },
    types: [
      {
        back: "bg-white dark:bg-back-dark",
        image: "construction-2",
        subtitle: "Supporting construction projects of all sizes",
        id: "construction",
        title: "Construction",
        description:
          "We support construction projects of all sizes with clean, durable portable toilets, including standard units, ADA-accessible options, and high-rise toilets designed for multi-story builds. Hand wash stations, holding tanks, dumpster rentals, and pump-out services are available to support ongoing operations.",
        common: "Common uses",
        items: [
          "Commercial construction",
          "Residential developments",
          "Long-term job sites",
          "Office trailers",
        ],
      },
      {
        back: "bg-back dark:bg-[#11152A]",
        image: "events-2",
        subtitle: "Comfort and cleanliness for every gathering",
        id: "events-festivals",
        title: "Events & Festivals",
        description:
          "From private gatherings to large public events, we provide portable toilets, ADA units, hand wash stations, and waste solutions to ensure a clean and comfortable experience for attendees.",
        common: "Common uses",
        items: [
          "Festivals & outdoor events",
          "Weddings & private events",
          "Community gatherings",
          "Sporting events",
        ],
      },
      {
        back: "bg-white dark:bg-back-dark",
        image: "commercial-2",
        subtitle: "Reliable sanitation for commercial projects",
        id: "commercial",
        title: "Commercial",
        description:
          "We work with businesses and property managers to provide portable sanitation and waste management solutions for temporary needs, renovations, and commercial operations.",
        common: "Common uses",
        items: [
          "Commercial renovations",
          "Property maintenance",
          "Temporary business locations",
          "Retail and office projects",
        ],
      },
      {
        back: "bg-back dark:bg-[#11152A]",
        image: "government-2",
        subtitle: "Trusted partner for municipal operations",
        id: "government-municipal",
        title: "Government & Municipal",
        description:
          "Quality Portable Rental Service supports city, county, and federal projects with dependable rental equipment and professional coordination. Our team understands the requirements of government work and delivers consistent service.",
        common: "Common uses",
        items: [
          "Municipal projects",
          "Public works",
          "Government construction sites",
          "Community programs",
        ],
      },
    ],
    form: {
      subtitle: "Book Now",
      title: "Get a Free Quote",
      description:
        "Contact our team today for pricing, availability, and rental options tailored to your project or event.",
      buttons: [
        {
          icon: "phone",
          label: "Call Now",
          href: "tel:+13212179445",
        },
      ],
      image: "#",
    },
  },
  footer: {
    description:
      "Trusted since 2011, we provide portable sanitation and waste solutions across Florida and Georgia, delivering clean units, on-time service, and reliable support for construction, events, and commercial projects.",
    service: {
      title: "Services",
      items: [
        {
          title: "Port O Potty Rental",
          href: "/en/services?section=portable-toilet-rental",
        },
        {
          title: "Dumpster Rental",
          href: "/en/services?section=dumpster-rental",
        },
        {
          title: "Septic & RV Pump-Out",
          href: "/en/services?section=septic-rv-pump-out",
        },
      ],
    },
    nav: {
      title: "Main Menu",
      items: [
        {
          label: "Locations",
          href: "/locations",
        },
        {
          label: "Products",
          href: "/products",
        },
        {
          label: "Industries",
          href: "/industries",
        },
      ],
    },
    contact: {
      title: "Book Now",
      items: [
        {
          icon: "mail-1",
          text: "qualityportablerental@gmail.com",
          href: "https://mail.google.com/mail/?view=cm&fs=1&to=qualityportablerental@gmail.com",
        },
        {
          icon: "phone-1",
          text: "+1 (321) 217-9445",
          href: "tel:+13212179445",
        },
        {
          icon: "clock",
          text: "Mon - Fri: 7AM - 7PM",
          href: "#",
        },
      ],
    },
  },
};
