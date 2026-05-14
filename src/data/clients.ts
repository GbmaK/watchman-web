// TODO: Migrar a Decap CMS cuando se contrate el upsell.
import type { ImageMetadata } from 'astro';

// Importamos los logos como assets para que Astro los optimice (WebP + resize).
import hacienda from '../assets/clients/hacienda.png';
import nidoAguilas from '../assets/clients/nido-aguilas.png';
import siemens from '../assets/clients/siemens.png';
import aguaSanta from '../assets/clients/agua-santa.png';
import acermet from '../assets/clients/acermet.png';
import hotelMagnolia from '../assets/clients/hotel-magnolia.png';
import dbsCosmetics from '../assets/clients/dbs-cosmetics.png';
import eecol from '../assets/clients/eecol.png';
import nahmias from '../assets/clients/nahmias.svg';
import transelec from '../assets/clients/transelec.png';
import vitel from '../assets/clients/vitel.png';

export interface Client {
  slug: string;
  name: string;
  logo: ImageMetadata;
  url: string | null;
}

export const clients: Client[] = [
  { slug: 'hacienda',       name: 'Ministerio de Hacienda',   logo: hacienda,      url: 'https://www.hacienda.cl/' },
  { slug: 'nido-aguilas',   name: 'Nido de Águilas',          logo: nidoAguilas,   url: 'https://www.nido.cl/' },
  { slug: 'siemens',        name: 'Siemens',                  logo: siemens,       url: 'https://new.siemens.com/cl/es.html' },
  { slug: 'agua-santa',     name: 'Agua Santa Constructora',  logo: aguaSanta,     url: null },
  { slug: 'acermet',        name: 'Acermet',                  logo: acermet,       url: 'https://acermet.cl/' },
  { slug: 'hotel-magnolia', name: 'Hotel Magnolia',           logo: hotelMagnolia, url: 'https://hotelmagnolia.cl/' },
  { slug: 'dbs-cosmetics',  name: 'DBS Cosmetics',            logo: dbsCosmetics,  url: 'https://dbs.cl/' },
  { slug: 'eecol',          name: 'Eecol',                    logo: eecol,         url: 'https://eecol.cl/' },
  { slug: 'nahmias',        name: 'Constructora Nahmias',     logo: nahmias,       url: 'https://www.nahmias.cl/' },
  { slug: 'transelec',      name: 'Transelec',                logo: transelec,     url: 'https://www.transelec.cl/' },
  { slug: 'vitel',          name: 'Vitel Energía',            logo: vitel,         url: 'https://www.vitel.cl/' },
];
