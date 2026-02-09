
<high_level_design>
# 1. Brand & Art Direction Overview

This portfolio website embodies a modern, clean, and professional aesthetic with a bold, high-impact design approach. The visual style is characterized by:

- **Contemporary Minimalism**: Clean layouts with generous white space, allowing content to breathe
- **Bold Typography**: Extra-large, black headlines (6xl-8xl sizes) combined with thin, light body text for dramatic contrast
- **Vibrant Accent System**: A bright cyan/turquoise accent color (#00E5FF / rgb(0, 229, 255)) used strategically for emphasis and interactive elements
- **Sophisticated Animation**: Smooth fade-ins, translate-y animations, and hover scale effects create a polished, dynamic experience
- **Professional Photography**: High-quality portrait and project imagery with subtle overlay effects
- **Neumorphic Cards**: Service and stat cards feature subtle borders with hover effects that lift and accent-border on interaction
- **Gradient Backgrounds**: Subtle gradient overlays in hero and accent areas add depth without overwhelming

The overall aesthetic is business-professional with tech-forward sensibilities, balancing bold statement typography with restrained color usage and clean layouts.

---

# 2. Color Palette (Light Theme)

| Token | HEX / RGB | Usage | Notes |
|-------|-----------|-------|-------|
| `--background` | `#FFFFFF` / `rgb(255, 255, 255)` | Primary page background | Pure white for main content areas |
| `--secondary` | `#F5F5F5` / `rgb(245, 245, 245)` | Alternate section background | Light gray for section differentiation |
| `--foreground` | `#0A0A0A` / `rgb(10, 10, 10)` | Primary text color | Near-black for maximum contrast |
| `--accent` | `#00E5FF` / `rgb(0, 229, 255)` | Brand accent color | Bright cyan for CTAs, highlights, headings |
| `--accent-foreground` | `#000000` / `rgb(0, 0, 0)` | Text on accent backgrounds | Black text for accent buttons |
| `--muted-foreground` | `rgba(10, 10, 10, 0.6-0.8)` | Secondary text | 60-80% opacity foreground for descriptions |
| `--card` | `#FFFFFF` / `rgb(255, 255, 255)` | Card backgrounds | White background for cards |
| `--border` | `#E5E5E5` / `rgb(229, 229, 229)` | Borders and dividers | Light gray border |
| `--gradient-hero` | Linear gradient (subtle) | Hero section overlay | Subtle gradient background |
| `--gradient-accent` | Cyan-based gradient | Accent glow effects | Used for blur/glow behind images |
| `--shadow-lg` | Complex shadow | Elevated elements | Multi-layer shadow for depth |
| `--shadow-accent` | Cyan-tinted shadow | Accent hover effects | Cyan glow on button hover |

---

# 3. Typography Scale (Exact Cloning)

**Primary Font Family**: System font stack (likely `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`)

## Headings

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| H1 (Hero) | `6rem` (96px) lg, `7rem` (112px) xl, `8rem` (128px) | `font-black` (900) | `1.1` (tight) | Normal | Main hero headline |
| H2 (Section) | `3rem` (48px) lg, `3.75rem` (60px) | `font-black` (900) | `1.2` | Normal | Section headers |
| H3 (Cards) | `1.5rem` (24px) | `font-bold` (700) | `1.3` | Normal | Card/service titles |
| Tagline | `1.25rem` (20px) lg, `1.5rem` (24px) | `font-light` (300) | `1.5` | Normal | Hero subtitle |

## Body Text

| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| Body Large | `1.125rem` (18px) | Regular (400) | `1.75` (relaxed) | About section paragraphs |
| Body Default | `1rem` (16px) | Regular (400) | `1.625` | Standard body text |
| Small | `0.875rem` (14px) | `font-medium` (500) | `1.4` | Stat labels, tags |

## Special Typography

- **Accent Words**: Same size as surrounding text, `text-accent` color, `font-black` or `font-bold`
- **Category Labels**: `text-sm`, `font-semibold`, `text-accent`, uppercase styling
- **Numbers (Stats)**: `4xl-5xl`, `font-black`, `text-accent`

---

# 4. Spacing & Layout Grid

## Container System
- **Max Width**: `1280px` (max-w-6xl) for most sections, `896px` (max-w-4xl) for about/contact
- **Horizontal Padding**: `1.5rem` (24px) - `px-6`
- **Vertical Section Padding**: `6rem` (96px) - `py-24`

## Grid System
- **Services Grid**: 2 columns on md+, 1 column mobile - `grid-cols-1 md:grid-cols-2 gap-8`
- **Projects Grid**: 2 columns on md+, 1 column mobile - `grid-cols-1 md:grid-cols-2 gap-8`
- **Stats Grid**: 2 columns base, 4 columns md+ - `grid-cols-2 md:grid-cols-4 gap-6`
- **Hero Grid**: 2 columns lg+, stacked mobile - `lg:grid-cols-2 gap-12`
- **Contact Grid**: 2 columns md+, stacked mobile - `md:grid-cols-2 gap-12`

## Spacing Scale
- **Component Gap**: `2rem` (32px) - `gap-8`
- **Card Padding**: `2rem` (32px) - `p-8`
- **Internal Spacing**: `1.5rem` (24px) - `gap-6`, `mb-6`
- **Section Margin Bottom**: `3rem` (48px) - `mb-12`, `4rem` (64px) - `mb-16`
- **Element Margin Bottom**: `0.75rem` (12px) - `mb-3`, `1.5rem` (24px) - `mb-6`

---

# 5. Visual Effects & Treatments

## Shadows
```css
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
--shadow-accent: 0 10px 30px -5px rgba(0, 229, 255, 0.3)
```

## Border Radius
- **Cards**: `1rem` (16px) - `rounded-2xl`
- **Buttons**: `9999px` - `rounded-full`
- **Icon Containers**: `0.75rem` (12px) - `rounded-xl`, `0.5rem` (8px) - `rounded-lg`
- **Images**: `1rem` (16px) - `rounded-2xl`

## Borders
- **Default**: `1px solid var(--border)` - `border border-border`
- **Hover Accent**: `1px solid var(--accent)` - `hover:border-accent`
- **Profile Image**: `4px solid var(--border)` - `border-4 border-border`

## Gradients
```css
/* Hero gradient background */
background: linear-gradient(subtle gradient);

/* Accent glow */
background: accent-based gradient, blur-2xl, opacity-30

/* Image overlays */
background: linear-gradient(to top, rgba(0,0,0,0.6), transparent)
```

## Filters & Effects
- **Blur**: `blur-2xl` for glow effects
- **Backdrop Blur**: `backdrop-blur-sm` on floating elements
- **Opacity Levels**: 0.1, 0.3, 0.5, 0.6, 0.8, 1.0

## Animations & Transitions

### Duration
- **Fast**: `300ms` - hover micro-interactions
- **Medium**: `500ms` - card hover, border changes
- **Slow**: `600-800ms` - fade-in, translate animations

### Easing
- `ease-out` for entrance animations
- Default `ease` for hover states

### Transform Effects
- **Hover Scale**: `scale-105` (1.05), `scale-110` (1.1)
- **Hover Translate**: `translate-y-1` (down), `-translate-y-1` (up), `-translate-y-2` (up more), `-translate-y-3` (up most)
- **Hover Rotate**: `rotate-3` (3deg)
- **Initial Translate**: `translate-y-10` (40px down) for fade-in animations

### Keyframe Animations
- **Fade In**: opacity 0→1, translate-y 10→0, duration 600-800ms
- **Bounce**: For scroll indicator
- **Pulse**: For glow effects on image containers
- **Animate on Scroll**: Elements start with `opacity-0 translate-y-10`, animate to `opacity-100 translate-y-0` on viewport entry

---

# 6. Component Styles

## Buttons

### Primary CTA Button
```
Background: var(--accent)
Color: var(--accent-foreground)
Padding: 1rem 2rem (py-4 px-8)
Border Radius: rounded-full
Font: text-lg font-semibold
Hover: shadow-accent, scale-105
Transition: 300ms
Icon: Arrow down with group-hover:translate-y-1
```

### Secondary Button (Contact Submit)
```
Background: var(--accent)
Color: white
Padding: Standard form button
Border Radius: standard
Font: font-semibold
Hover: shadow effect
Icon: Send arrow
```

## Cards

### Service Cards
```
Background: var(--card)
Padding: 2rem (p-8)
Border: 1px solid var(--border)
Border Radius: rounded-2xl
Hover Effects:
  - border-accent
  - shadow-lg
  - translate-y-3 (lift up)
  - Icon: bg-accent, text-accent-foreground, scale-110, rotate-3
Transition: 500ms all
```

### Project Cards
```
Background: var(--card)
Border: 1px solid var(--border)
Border Radius: rounded-2xl
Image Height: 16rem (h-64)
Hover Effects:
  - Image scale-110 (700ms)
  - shadow-lg
  - translate-y-3, scale-[1.02]
  - External link icon appears (opacity 0→100)
Overlay: Gradient from black/60 to transparent
Transition: 500ms
```

### Stat Cards
```
Background: var(--card)
Padding: 1.5rem (p-6)
Border: 1px solid var(--border)
Border Radius: rounded-xl
Hover Effects:
  - border-accent
  - shadow-lg
  - translate-y-2
  - Number scale-110
Number: 4xl-5xl, font-black, text-accent
Label: text-sm, text-muted-foreground, font-medium
Transition: 500ms
```

### Contact Info Cards
```
Background: var(--card)
Padding: 1rem (p-4)
Border: 1px solid var(--border)
Border Radius: rounded-xl
Hover Effects:
  - border-accent
  - shadow-lg
  - translate-y-1
  - Icon bg changes to accent, text to accent-foreground, scale-110
Icon Container: 3rem x 3rem, bg-accent/10, rounded-lg
Transition: 300-500ms
```

## Icon Containers

### Service Icons
```
Size: 4rem x 4rem (w-16 h-16)
Background: accent/10
Border Radius: rounded-xl
Icon Size: 2rem (w-8 h-8)
Color: var(--accent)
Hover: bg-accent, text-accent-foreground, scale-110, rotate-3
Transition: 300ms
```

### Contact Icons
```
Size: 3rem x 3rem (w-12 h-12)
Background: accent/10
Border Radius: rounded-lg
Icon Size: 1.25rem (w-5 h-5)
Color: var(--accent)
Hover: bg-accent, text-accent-foreground, scale-110
Transition: 300ms
```

## Images

### Profile Image
```
Max Width: 28rem (max-w-md)
Border: 4px solid var(--border)
Border Radius: rounded-2xl
Shadow: shadow-lg
Hover: scale-105
Container Glow: Absolute gradient blur-2xl, opacity-30→50, pulse animation
Transition: 500ms
```

### Project Images
```
Height: 16rem (h-64)
Object Fit: cover
Hover: scale-110
Overlay: Gradient to-top from black/60
Transition: 700ms
External Link Badge: Absolute top-right, w-12 h-12, bg-accent/80, backdrop-blur-sm, rounded-full, opacity 0→100 on hover, scale-110
```

## Forms

### Input Fields
```
Border: 1px solid var(--border)
Border Radius: standard
Padding: standard form padding
Focus: border-accent
Background: var(--card)
```

### Textarea
```
Min Height: Tall enough for message
Border: 1px solid var(--border)
Border Radius: standard
Padding: standard
Focus: border-accent
```

## Navigation/Scroll Indicator
```
Position: absolute bottom-8 left-1/2 -translate-x-1/2
Animation: bounce
Color: muted-foreground
Hover: text-accent
Icon: Arrow down, w-8 h-8
Opacity: Fade-in animation delayed 1.5s
Transition: colors
```

## Mission Box (Highlighted Content)
```
Background: var(--card)
Border: 1px solid var(--border)
Border Radius: rounded-xl
Padding: 1.5rem (p-6)
Margin: 2rem vertical (my-8)
Hover: shadow-lg, translate-y-1
Title: text-2xl, font-bold, text-accent
List Items: Bullet with accent color, hover translate-x-2
Transition: 500ms
```

---

# 7. Site Sections

The website follows this exact structural flow:

1. **Hero Section**
   - Full viewport height (`min-h-screen`)
   - Background gradient overlay
   - Two-column grid (lg+): Text left, profile image right
   - Animated name display (staggered word animation)
   - CTA button "Trabajemos juntos"
   - Scroll indicator at bottom center

2. **About Section** (`#about`)
   - Light gray background (`bg-secondary`)
   - Centered content, max-width 896px
   - Section title "Sobre mí"
   - Personal introduction paragraphs
   - Highlighted mission box with bullet points
   - 4-column stats grid (2 cols mobile, 4 desktop)

3. **Services Section** (`#services`)
   - White background (`bg-background`)
   - Centered content, max-width 1280px
   - Section title "Lo que ofrezco"
   - 2-column grid of 6 service cards:
     - Automatización y Productividad
     - Identidad Visual y Diseño
     - Marketing Digital y Contenido
     - Presencia Web Profesional
     - Chatbots Inteligentes
     - Agentes Telefónicos IA

4. **Portfolio Section** (`#portfolio`)
   - Light gray background (`bg-secondary`)
   - Centered content, max-width 1280px
   - Section title "Proyectos destacados"
   - 2-column grid of 4 project cards:
     - Salvatore Restaurant (external link)
     - Barbería del Cristo (external link)
     - JG Suplementación (external link)
     - Asistente Virtual IA (no link)

5. **Contact Section** (`#contact`)
   - White background (`bg-background`)
   - Centered content, max-width 896px
   - Section title "Hablemos de tu proyecto"
   - 2-column grid (md+):
     - Left: Contact info cards (email, phone)
     - Right: Contact form (name, email, message fields + submit button)

6. **Footer**
   - Copyright text
   - WhatsApp floating button (bottom-right, green, fixed)
   - "Edit with Lovable" badge (bottom-right)

**Scroll Behavior**: Smooth scroll, sections animate in on viewport entry with fade-in and translate-y effects.
</high_level_design>

<theme>
light
</theme>

<sections>
<clone_section>
    <file_path>src/components/sections/hero-section.tsx</file_path>
    <design_instructions>
Create a modern hero section with split layout featuring a large typographic name treatment on the left and professional headshot on the right. The section should have a clean white/light background with subtle gradient animations. Left side contains: "Jaime" in black, "Bernaldez" in vibrant cyan (#00D9FF), and "Reina" in black, using ultra-bold font weights (900) at 6xl-8xl responsive sizes. Include a gray subtitle "Optimizando negocios para impulsar ventas, ahorrar tiempo y lograr resultados reales" and a cyan rounded CTA button labeled "Trabajemos juntos" with down arrow icon. Right side displays the professional headshot with rounded corners, subtle border, and hover scale effects. Add an animated bouncing down arrow at bottom center. Implement staggered fade-in animations for text elements with 200ms delays. Use Inter font family with tight letter spacing (-0.02em for headlines).
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/749d15a1-642f-4874-8096-1f7da3d06e6a-portfoliojb-lovable-app/assets/images/jaime-profile-Bx0Wy3VD-1.png"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/about-section.tsx</file_path>
    <design_instructions>
Create an "Sobre mí" (About Me) section with light gray background (#F5F5F5). Section header uses same typographic treatment as hero - "Sobre" in black, "mí" in cyan. Content area max-width 4xl centered with 6-column responsive padding. Include introductory paragraph about Jaime Bernáldez Reina as a professional. Add a highlighted card component with subtle border, rounded corners, and hover lift effect containing "Mi misión principal" heading in cyan with bullet points using cyan dot markers and hover translate-x animations. Follow with additional descriptive paragraphs. Bottom of section features a 2x4 responsive grid of statistics cards: "10+" (Proyectos en fase beta), "15+" (Herramientas dominadas), "500+" (Horas de práctica real), "100%" (Compromiso). Each stat card has white background, border, rounded corners, cyan accent numbers in 4xl-5xl size, hover border color change to cyan, shadow on hover, and -translate-y lift animation. Cards use group hover for scale effects on numbers.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/services-section.tsx</file_path>
    <design_instructions>
Create a "Lo que ofrezco" (Services) section with white background and "ofrezco" in cyan accent. Use max-width 6xl container with section heading and subtitle "Servicios profesionales adaptados a tus necesidades" in muted gray. Implement a 2-column responsive grid (stacks on mobile) with 6 service cards. Each card features: light cyan background icon container (64x64px) with rounded corners at top-left, service icon (Settings, Palette, TrendingUp, Globe, Bot, Headphones from Lucide), bold 2xl heading, and descriptive paragraph in gray. Cards have white/card background, subtle border, rounded-2xl corners, hover effects including border color change to cyan, shadow elevation, -translate-y-3 lift, and icon rotation/scale on hover. Services include: Automatización y Productividad, Identidad Visual y Diseño, Marketing Digital y Contenido, Presencia Web Profesional, Chatbots Inteligentes, Agentes Telefónicos IA. Implement staggered fade-in animations on scroll.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/portfolio-section.tsx</file_path>
    <design_instructions>
Create a "Proyectos destacados" (Featured Projects) section with light gray background. "destacados" in cyan accent color. Max-width 6xl container with subtitle "Una selección de trabajos que definen mi experiencia". Implement 2-column responsive grid with 4 project cards. Each card structure: top image area (h-64) with overflow hidden, gradient overlay (black/60 to transparent), hover scale effect on image (1.1x), external link icon in top-right appearing on hover with cyan background circle. Bottom content area includes: category tag in cyan (Desarrollo Web, E-Commerce, Caso de Éxito), bold 2xl project title, descriptive paragraph. Cards are clickable links (except AI Assistant) with hover effects: shadow elevation, -translate-y-3 lift, scale-[1.02] transform. Projects: Salvatore Restaurant (with preview image), Barbería del Cristo (with preview image), JG Suplementación (with preview image), Asistente Virtual IA (with AI robot image). All project images use object-cover and transition-transform duration-700ms.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/749d15a1-642f-4874-8096-1f7da3d06e6a-portfoliojb-lovable-app/assets/images/salvatore-preview-D0rEDc1k-2.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/749d15a1-642f-4874-8096-1f7da3d06e6a-portfoliojb-lovable-app/assets/images/barberia-preview-jz-3uBVC-3.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/749d15a1-642f-4874-8096-1f7da3d06e6a-portfoliojb-lovable-app/assets/images/jg-preview-k1GQ-NxW-4.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/749d15a1-642f-4874-8096-1f7da3d06e6a-portfoliojb-lovable-app/assets/images/ai-assistant-robot-BwZAYOQn-5.jpg"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/contact-section.tsx</file_path>
    <design_instructions>
Create a "Hablemos de tu proyecto" (Contact) section with white background and "proyecto" in cyan. Max-width 4xl container with subtitle "Estoy disponible para nuevas oportunidades y colaboraciones". Two-column responsive layout (stacks on mobile): Left column contains "Información de contacto" heading with two info cards - email (jaimebernaldezimpulsa@gmail.com) with Mail icon and phone (722 785 142) with Phone icon. Cards have light background, rounded corners, border, padding, flex layout with icon container (light cyan background, hover cyan fill), hover effects including border color change, shadow, and -translate-y lift. Right column contains contact form with "Nombre" and "Email" fields side-by-side, "Mensaje" textarea below, and cyan "Enviar mensaje" button with Send icon. Form inputs have subtle borders, rounded corners, focus states with cyan ring. Button full-width on mobile, hover effects with darker cyan background and scale transform. All interactive elements use group hover patterns and transition-all duration-300-500ms.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/footer.tsx</file_path>
    <design_instructions>
Create a minimal footer section with light gray background (#F5F5F5) and centered text. Single line of content: "© 2025 Jaime Bernaldez Reina. Todos los derechos reservados." in medium gray color. Padding: py-8 for vertical spacing. Text should be center-aligned with small font size (text-sm). Include subtle top border in light gray for visual separation from contact section. Optionally add a WhatsApp floating button in bottom-right corner with green circular background (#25D366), WhatsApp icon, fixed position (fixed bottom-6 right-6), z-50 index, hover scale effect, and shadow. The footer should maintain consistent spacing and typography with the rest of the site.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>
</sections>
