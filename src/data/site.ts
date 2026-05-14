// TODO: Migrar a Decap CMS cuando se contrate el upsell.
// Config global del sitio. Single source of truth para metadata, contacto y links.

export const site = {
  name: 'Watchman Seguridad Integral',
  shortName: 'Watchman',
  url: 'https://watchman.cl',
  locale: 'es-CL',
  tagline: 'La seguridad de tu empresa, en manos expertas',
  description:
    'Watchman Seguridad Integral: 16+ años entregando soluciones de seguridad privada a empresas chilenas y multinacionales. Seguridad física, electrónica, inteligencia, gestión de riesgo y diseño de Salas SOC.',

  contact: {
    email: 'info@watchman.cl',
    phone: '+56 9 5613 3904',
    phoneRaw: '56956133904',
    whatsappUrl: 'https://wa.me/56956133904',
    address: {
      street: 'Badajoz 100, Oficina 620',
      district: 'Las Condes',
      city: 'Santiago',
      country: 'Chile',
      countryCode: 'CL',
    },
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.886!2d-70.572!3d-33.413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI0JzQ2LjgiUyA3MMKwMzQnMTcuNyJX!5e0!3m2!1ses!2scl!4v1700000000000',
  },

  // Año fundación — TODO: confirmar con cliente. 16+ años de trayectoria mencionados en brief.
  foundedYear: 2008,

  presentationPdf: '/Presentacion_Watchman2022.pdf',

  nav: [
    { label: '¿Quiénes somos?', href: '#quienes' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Clientes', href: '#clientes' },
    { label: 'Contacto', href: '#contacto' },
  ],
} as const;
