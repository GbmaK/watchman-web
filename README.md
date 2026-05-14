# Watchman Seguridad Integral — Sitio web

Sitio corporativo de [Watchman Seguridad Integral](https://watchman.cl), construido con Astro, Tailwind CSS v4 y TypeScript estricto.

---

## Stack

- **[Astro](https://astro.build)** 6.x — generación estática
- **[Tailwind CSS](https://tailwindcss.com)** v4 — configuración inline en `global.css`
- **TypeScript** modo strict
- **[astro-icon](https://github.com/natemoo-re/astro-icon)** + **@iconify-json/lucide** — íconos Lucide vía Iconify
- **[@fontsource-variable/inter](https://fontsource.org/fonts/inter)** — tipografía Inter Variable (self-hosted)
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** — sitemap automático

> **PNPM exclusivamente.** Este proyecto no usa npm ni yarn. Si encontrás documentación con `npm install foo`, traducila a `pnpm add foo`.

---

## Comandos

Todos los comandos se ejecutan desde `watchman-web/` con [pnpm](https://pnpm.io/installation):

| Comando | Acción |
| :--- | :--- |
| `pnpm install` | Instala dependencias |
| `pnpm dev` | Levanta dev server en `http://localhost:4321` |
| `pnpm build` | Compila el sitio estático en `./dist/` |
| `pnpm preview` | Sirve el build local en `http://localhost:4321` |
| `pnpm astro check` | Verifica tipos en archivos `.astro` |

### Deploy

El sitio compila a estático (`output: 'static'`, default). Funciona en cualquier host estático sin configuración adicional:

- **Vercel:** importar el repo, root directory `watchman-web/`, framework "Astro" autodetectado.
- **Netlify:** build command `pnpm build`, publish directory `dist/`.
- **Cloudflare Pages:** build command `pnpm build`, output directory `dist/`.

No requiere variables de entorno por ahora (el formulario simula envío). Cuando se conecte Resend (ver TODOs) hará falta `RESEND_API_KEY`.

---

## Estructura

```
watchman-web/
├── public/
│   ├── clients/                       # Logos clientes (kebab-case)
│   ├── Presentacion_Watchman2022.pdf  # Presentación corporativa
│   ├── favicon.svg                    # Favicon tipográfico W dorada
│   ├── og-image.svg                   # Open Graph image (1200×630)
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/         Navbar · Footer · WhatsAppFAB
│   │   ├── sections/       Las 12 secciones del sitio
│   │   └── ui/             Button · Logo · ServiceCard · StatCard · ContactForm · Reveal
│   ├── data/               Single source of truth para contenido editable
│   ├── icons/              (vacío) — espacio para SVGs custom si hace falta
│   ├── layouts/            BaseLayout.astro (HTML shell, SEO, JSON-LD)
│   ├── pages/              index.astro (single-page con anchors)
│   └── styles/             global.css (tokens, tipografía, helpers)
├── astro.config.mjs
└── package.json
```

---

## Cómo editar contenido

Todo el contenido editable vive en `src/data/`. No hace falta tocar componentes para cambiar textos, agregar clientes, servicios o ajustar metadata.

| Archivo | Qué contiene |
| :--- | :--- |
| [`src/data/site.ts`](src/data/site.ts) | Nombre, email, teléfono, dirección, año fundación, navegación, URL del PDF |
| [`src/data/services.ts`](src/data/services.ts) | Los 9 servicios (título, descripción, ícono Lucide) |
| [`src/data/stats.ts`](src/data/stats.ts) | 4 estadísticas del Hero contextual |
| [`src/data/team.ts`](src/data/team.ts) | Equipo (PLACEHOLDER — pendiente de cliente) |
| [`src/data/certifications.ts`](src/data/certifications.ts) | Acreditaciones (PLACEHOLDER — pendiente) |
| [`src/data/clients.ts`](src/data/clients.ts) | 11 clientes (logo, URL, nombre) |

### Agregar un cliente nuevo

1. Copiá el logo a `public/clients/nombre-en-kebab.png` (o `.svg`).
2. Agregá un objeto al array `clients` en `src/data/clients.ts`:

   ```ts
   {
     slug: 'nuevo-cliente',
     name: 'Nuevo Cliente S.A.',
     logo: '/clients/nuevo-cliente.png',
     url: 'https://nuevocliente.cl',  // o null si no hay sitio
   }
   ```

3. `pnpm build` — el grid se reorganiza solo.

### Cambiar textos de Misión/Visión, About, Servicios

Buscá el componente en `src/components/sections/` correspondiente. Los textos del sitio original están preservados literalmente.

---

## Decisiones técnicas

- **Single page con anchors** (`#quienes`, `#servicios`, `#clientes`, `#contacto`, `#carreras`) — igual que el sitio original, pero la estructura por sección permite migrar a multi-page fácilmente.
- **Tailwind v4 sin config file** — tokens definidos en `src/styles/global.css` con `@theme { ... }`. Las CSS variables (`:root`) son la fuente única de verdad y se mapean a utilidades Tailwind.
- **IntersectionObserver nativo** para animaciones de scroll (componente `Reveal.astro`) y para el counter de stats (`StatCard.astro`). Zero dependencias de animación. Respeta `prefers-reduced-motion`.
- **Mobile menu sin framework** — ~30 líneas de TS vanilla con `data-open` attribute, soporta Escape, click outside, body scroll lock.
- **`output: 'static'`** — 100% prerenderizado. Sin runtime server, sin edge functions necesarias.
- **JSON-LD `SecurityService`** en `BaseLayout` con `areaServed: Chile`, dirección postal, contacto. Mejor SEO local.

---

## TODOs pendientes (necesitan input del cliente)

Buscalos con `grep -r "TODO" src/`:

| Archivo | Pendiente |
| :--- | :--- |
| `src/data/team.ts` | Fotos + biografías reales del equipo gerencial/ejecutivo |
| `src/data/certifications.ts` | Logos y nombres de certificaciones reales |
| `src/components/sections/Coverage.astro` | Confirmar regiones de cobertura. Por ahora solo RM activa |
| `src/components/sections/Stats.astro` (`src/data/stats.ts`) | Confirmar si actualizar datos de criminalidad a 2026 |
| `src/data/site.ts` | Confirmar año de fundación (actual: 2008, basado en "16+ años" del brief) |
| `src/components/sections/Careers.astro` | Si se quiere upload de CV con backend (en lugar de mailto), hay que crear endpoint |
| `src/components/ui/ContactForm.astro` | Integrar con Resend (ver pasos abajo) |
| `src/components/layout/Footer.astro` | Agregar links a redes sociales cuando el cliente las provea |
| `public/og-image.svg` | Exportar a PNG 1200×630 para máxima compatibilidad con Twitter/X |
| `public/Presentacion_Watchman2022.pdf` | Actualizar cuando el cliente provea presentación 2026+ |

### Integrar formulario de contacto con Resend

El formulario actual simula el envío con un `setTimeout` de 1.5s. Para conectarlo a un email real:

```sh
pnpm add resend
```

1. Crear `src/pages/api/contact.ts` con un endpoint POST que reciba el form y llame a `resend.emails.send(...)` con `to: 'info@watchman.cl'`.
2. Definir `RESEND_API_KEY` en variables de entorno del host (Vercel/Netlify dashboard).
3. En `src/components/ui/ContactForm.astro`, reemplazar `simulateSubmit()` por:
   ```ts
   const res = await fetch('/api/contact', { method: 'POST', body: new FormData(form) });
   if (!res.ok) throw new Error('submit failed');
   ```
4. Cambiar `output: 'static'` a `output: 'hybrid'` en `astro.config.mjs` para habilitar el endpoint server-side.

### CMS Decap (futuro)

Los archivos de `src/data/*.ts` están estructurados con objetos planos (no anidados) para que cuando se contrate el upsell de Decap CMS:

1. Migrar cada array a colección de markdown/JSON.
2. Configurar `public/admin/config.yml` con los campos espejo.
3. Reemplazar los `import { x } from '...ts'` por `await getCollection('x')`.

Todos los archivos `data/*.ts` tienen el comentario `// TODO: Migrar a Decap CMS cuando se contrate el upsell.`

---

## Performance y accesibilidad

Objetivos Lighthouse:

- Performance ≥ 95
- Accessibility = 100
- Best Practices = 100
- SEO = 100

Verificar con `pnpm preview` (no con `pnpm dev`) corriendo Lighthouse desde Chrome DevTools en modo incógnito.

Características incluidas para llegar a esos targets:

- Tipografía self-hosted (Inter Variable WOFF2), sin Google Fonts ni FOUT
- Imágenes con `loading="lazy"` y `decoding="async"`
- Mapa de Google embebido con `loading="lazy"` (no afecta LCP)
- SVG inline para íconos (vía astro-icon) — cero requests adicionales
- `prefers-reduced-motion` respetado en Reveal, counter de stats y WhatsApp FAB
- Skip link, focus rings visibles, aria-labels en interacciones decorativas
- Contraste verificado: todos los pares de fondo/texto cumplen WCAG AAA

---

## Conocidos problemas locales

### `dev is not a function` al ejecutar `pnpm dev`

Causa: la extensión **Console Ninja** de VS Code (`wallabyjs.console-ninja`) reescribe archivos de `node_modules` para inyectar telemetría. Truncó `astro/dist/cli/dev/index.js`.

Solución rápida:
```sh
pnpm install --force
```

Solución permanente — desactivar Console Ninja en este workspace:
- VS Code → paleta `Ctrl+Shift+P` → **Console Ninja: Disable in current workspace**

---

## Licencia

Propiedad de Watchman Seguridad Integral. Todos los derechos reservados.
