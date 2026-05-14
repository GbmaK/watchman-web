// TODO: Reemplazar con fotos y bios reales del equipo provistas por el cliente.
// TODO: Migrar a Decap CMS cuando se contrate el upsell.

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  bio: string;
  photo: string | null;
  linkedIn?: string;
}

export const team: TeamMember[] = [
  {
    slug: 'placeholder-1',
    name: 'Nombre pendiente',
    role: 'Cargo pendiente',
    bio: 'Biografía pendiente. El cliente proveerá una descripción profesional de cada integrante del equipo gerencial y ejecutivo.',
    photo: null,
  },
  {
    slug: 'placeholder-2',
    name: 'Nombre pendiente',
    role: 'Cargo pendiente',
    bio: 'Biografía pendiente. El cliente proveerá una descripción profesional de cada integrante del equipo gerencial y ejecutivo.',
    photo: null,
  },
  {
    slug: 'placeholder-3',
    name: 'Nombre pendiente',
    role: 'Cargo pendiente',
    bio: 'Biografía pendiente. El cliente proveerá una descripción profesional de cada integrante del equipo gerencial y ejecutivo.',
    photo: null,
  },
];
