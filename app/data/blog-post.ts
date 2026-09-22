export type BlogPost = {
  slug: string;
  href: string;
  label: string;
  title: string;
  number: string;
  description: string;
  paragraphs: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "actualidad-tecnologica",
    href: "/blog/actualidad-tecnologica",
    label: "Actualidad tecnológica",
    title: "Actualidad tecnológica: IA, Nube y Automatización",
    number: "01",
    description: "Cómo la IA, la nube y la automatización están cambiando todo.",
    paragraphs: [
      "La tecnología evoluciona a gran velocidad y abre nuevas posibilidades para resolver necesidades reales. La inteligencia artificial, la nube y la automatización están transformando la manera de crear productos y servicios.",
      "Mantenerse al día permite tomar mejores decisiones, identificar oportunidades y participar con criterio en la construcción de un entorno digital más útil y responsable.",
    ],
  },
  {
    slug: "areas-de-formacion",
    href: "/blog/areas-de-formacion",
    label: "Áreas de formación",
    title: "Áreas de formación en TI e Innovación Digital",
    number: "02",
    description: "Desarrollo, datos, redes, ciberseguridad e innovación.",
    paragraphs: [
      "La formación en tecnologías de la información reúne conocimientos de desarrollo de software, redes, datos, ciberseguridad e innovación. Cada área aporta herramientas para comprender y transformar el mundo digital.",
      "Explorar distintas especialidades ayuda a construir un perfil versátil, capaz de colaborar, aprender continuamente y diseñar soluciones con impacto.",
    ],
  },
  {
    slug: "historias-que-inspiran",
    href: "/blog/historias-que-inspiran",
    label: "Historias que inspiran",
    title: "Historias que inspiran de nuestra comunidad",
    number: "03",
    description: "Proyectos reales que muestran el poder de compartir ideas.",
    paragraphs: [
      "Los proyectos y experiencias de nuestra comunidad muestran que las ideas crecen cuando se comparten. Cada reto superado deja aprendizajes que pueden inspirar a otras personas a comenzar.",
      "Conocer estas historias nos recuerda que la curiosidad, la colaboración y la constancia son parte esencial de cualquier camino de innovación.",
    ],
  }
];