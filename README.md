# Alejandro Vera — Portfolio 🚀

Portafolio personal de desarrollador web, diseñado para impresionar reclutadores y mostrar proyectos reales.

**[Ver demo en vivo →](https://alejandrovera.github.io/portfolio)**

---

## ✨ Características

- **Glassmorphism** con `backdrop-filter` real (efecto iOS auténtico)
- **Typewriter animado** que rota roles del desarrollador
- **Scroll reveal** suave con `IntersectionObserver`
- **100% responsive** — mobile, tablet y desktop
- **Menú hamburguesa** accesible con `aria-expanded`
- **Semántica HTML** correcta: `header`, `nav`, `main`, `section`, `article`, `footer`
- **Formulario de contacto** con validación en cliente
- **Reduced motion** respetado (`prefers-reduced-motion`)
- Código ligero: **0 dependencias**, solo HTML + CSS + JS vanilla

## 🛠 Stack

| Capa       | Tecnología         |
|------------|--------------------|
| Estructura | HTML5 semántico    |
| Estilos    | CSS3 (Custom Props, Grid, Flexbox, `backdrop-filter`) |
| Lógica     | JavaScript ES6+ vanilla |
| Tipografías | Google Fonts (Inter + Playfair Display) |
| Deploy     | GitHub Pages       |

## 📁 Estructura

```
portfolio/
├── index.html          # Entrada principal
├── css/
│   └── styles.css      # Estilos (design tokens + componentes)
├── js/
│   └── main.js         # Typewriter, nav, scroll reveal, form
├── assets/
│   ├── cv-alejandro-vera.pdf  # CV descargable
│   └── og-image.png    # Open Graph (redes sociales)
└── README.md
```

## 🚀 Despliegue en GitHub Pages

1. Sube el proyecto a un repositorio público en GitHub
2. Ve a **Settings → Pages**
3. En _Source_ selecciona `main` / `root`
4. Listo — tu portafolio estará en `https://<tu-usuario>.github.io/<repo>/`

## 🔧 Personalización rápida

| Qué cambiar | Dónde |
|---|---|
| Nombre y bio | `index.html` — secciones `hero` y `about` |
| Foto de perfil | reemplaza el SVG en `.avatar-img` con `<img src="assets/foto.jpg" alt="..." />` |
| Proyectos | `index.html` — sección `#projects` |
| Stack técnico | `index.html` — sección `#skills` |
| Colores | `css/styles.css` — bloque `:root` |
| Links sociales | `index.html` — sección `#contact` |

## 📝 Conventional Commits usados

```
feat: add hero section with typewriter animation
feat: add glass-card component with backdrop-filter
feat: add scroll-reveal with IntersectionObserver
feat: add mobile navigation with hamburger toggle
feat: add contact form with client-side validation
style: apply glassmorphism to skill and project cards
style: add blob background animations in hero
fix: correct nav active state logic on scroll
chore: add README and folder structure
```

---

Hecho con ❤️ por **Alejandro Vera** · [LinkedIn](https://linkedin.com/in/alejandrovera) · [GitHub](https://github.com/alejandrovera)
