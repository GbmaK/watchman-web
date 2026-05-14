// TODO: Migrar a Decap CMS cuando se contrate el upsell.

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export const services: Service[] = [
  {
    slug: 'seguridad-fisica',
    title: 'Seguridad Física',
    description: 'Personal especializado para protección de instalaciones, bienes y personas.',
    icon: 'shield',
  },
  {
    slug: 'seguridad-electronica',
    title: 'Seguridad Electrónica',
    description: 'CCTV, control de acceso, alarmas y sistemas integrados de última generación.',
    icon: 'cctv',
  },
  {
    slug: 'investigacion-antecedentes',
    title: 'Investigación de Antecedentes',
    description: 'Verificación exhaustiva de personal, proveedores y contrapartes.',
    icon: 'search',
  },
  {
    slug: 'analisis-inteligencia',
    title: 'Análisis de Inteligencia',
    description: 'Recopilación y procesamiento de información estratégica para tomar decisiones informadas.',
    icon: 'brain',
  },
  {
    slug: 'manejo-crisis',
    title: 'Asesorías de Manejo de Crisis',
    description: 'Gestión de comunicaciones en situaciones críticas y reputacionales.',
    icon: 'megaphone',
  },
  {
    slug: 'seguridad-ppi',
    title: 'Seguridad PPI',
    description: 'Protección de personas importantes y escolta ejecutiva.',
    icon: 'user-check',
  },
  {
    slug: 'analisis-riesgo',
    title: 'Análisis Integral de Riesgo',
    description: 'Evaluación y mitigación integral de amenazas operativas y patrimoniales.',
    icon: 'target',
  },
  {
    slug: 'salas-soc',
    title: 'Diseño y Configuración de Salas SOC',
    description: 'Centros de operaciones de seguridad llave en mano.',
    icon: 'monitor-dot',
  },
  {
    slug: 'contra-inteligencia',
    title: 'Estudios de Contra Inteligencia',
    description: 'Detección y neutralización de amenazas internas y filtraciones.',
    icon: 'eye-off',
  },
];
