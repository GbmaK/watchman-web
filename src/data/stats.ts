// TODO: Migrar a Decap CMS cuando se contrate el upsell.
// TODO: Confirmar con el cliente si actualizar a datos 2026.
// Datos del Sistema Táctico de Operación Policial de Carabineros de Chile (2022 vs 2021).

export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 70, prefix: '+', suffix: '%', label: 'Robos con violencia' },
  { value: 61, prefix: '+', suffix: '%', label: 'Robos con intimidación' },
  { value: 74, prefix: '+', suffix: '%', label: 'Robos con sorpresa' },
  { value: 44, prefix: '+', suffix: '%', label: 'Robos violentos de vehículos' },
];

export const statsSource =
  'Sistema Táctico de Operación Policial de Carabineros de Chile (2022 vs 2021).';
