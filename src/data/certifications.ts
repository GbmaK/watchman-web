// TODO: Reemplazar con logos y nombres de certificaciones reales provistos por el cliente.
// TODO: Migrar a Decap CMS cuando se contrate el upsell.

export interface Certification {
  slug: string;
  name: string;
  issuer: string | null;
  logo: string | null;
}

// Placeholders — el cliente debe proveer las certificaciones reales.
export const certifications: Certification[] = [
  { slug: 'cert-1', name: 'Certificación pendiente', issuer: null, logo: null },
  { slug: 'cert-2', name: 'Certificación pendiente', issuer: null, logo: null },
  { slug: 'cert-3', name: 'Certificación pendiente', issuer: null, logo: null },
  { slug: 'cert-4', name: 'Certificación pendiente', issuer: null, logo: null },
  { slug: 'cert-5', name: 'Certificación pendiente', issuer: null, logo: null },
  { slug: 'cert-6', name: 'Certificación pendiente', issuer: null, logo: null },
];
