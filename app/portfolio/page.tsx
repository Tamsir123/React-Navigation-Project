import Image from "next/image"

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Site E-commerce",
      description: "Une boutique en ligne moderne avec une expérience utilisateur optimisée",
      image: "/e_commerce.svg?height=300&width=500",
    },
    {
      id: 2,
      title: "Application Mobile",
      description: "Une application mobile intuitive pour la gestion de tâches quotidiennes",
      image: "/app_mobile.webp?height=300&width=500",
    },
    {
      id: 3,
      title: "Plateforme Éducative",
      description: "Une plateforme d'apprentissage en ligne avec des fonctionnalités interactives",
      image: "/platform.avif?height=300&width=500",
    },
    {
      id: 4,
      title: "Dashboard Analytique",
      description: "Un tableau de bord pour visualiser et analyser les données d'entreprise",
      image: "/Dashboard.webp?height=300&width=500",
    },
  ]

  return (
    <div className="container py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Notre Portfolio</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          Découvrez nos projets récents et les solutions que nous avons développées
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.id} className="group relative overflow-hidden rounded-lg border">
            <Image
              src={project.image || "/placeholder.svg"}
              width={500}
              height={300}
              alt={project.title}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-white/80">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

