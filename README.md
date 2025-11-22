# Jorge Jacome - Portfolio

Modern, high-performance portfolio built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for styling
- 📘 **TypeScript** for type safety
- 🎭 **Framer Motion** for animations
- 📱 **Fully Responsive** design
- ♿ **Accessible** components
- 🎯 **SEO Optimized**
- 📊 **JSON-based data** - Easy to update
- 🧩 **Reusable components** - Well-organized architecture

## 📁 Project Structure

```
portfolio-nextjs/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   └── SkillBar.tsx
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   └── layout/            # Layout components
│       ├── Navigation.tsx
│       └── Footer.tsx
├── data/                  # JSON data files
│   ├── profile.json
│   ├── experience.json
│   ├── skills.json
│   └── projects.json
└── public/                # Static assets

```

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/jorgejac1/jjacome.git
cd portfolio-nextjs
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Update Personal Information

Edit the JSON files in the `/data` directory:

- `profile.json` - Personal info, contact details
- `experience.json` - Work experience, positions, awards
- `skills.json` - Technical skills, proficiency levels
- `projects.json` - Portfolio projects, descriptions

### Modify Styling

Tailwind configuration is in `tailwind.config.ts`. Customize:
- Colors (primary theme colors)
- Animations
- Breakpoints
- Custom utilities

### Add New Sections

1. Create component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Update navigation in `components/layout/Navigation.tsx`

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

```bash
npm run build
npm start
```

## 🎨 Technologies Used

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contact

- **Email**: jorgejac97@gmail.com
- **LinkedIn**: [jorge-jacome](https://linkedin.com/in/jorge-jacome)
- **GitHub**: [jorgejac1](https://github.com/jorgejac1)
- **Website**: [jjacome.com](https://jjacome.com)

---

Built with ❤️ by Jorge Jacome
