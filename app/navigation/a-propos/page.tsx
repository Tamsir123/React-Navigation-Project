import Image from "next/image"

export default function APropos() {
  return (
    <div className="container py-12 md:py-24">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">À Propos de Nous</h1>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Bienvenue dans notre équipe passionnée de créateurs et de développeurs. Nous sommes dédiés à la création
              d'expériences web exceptionnelles qui combinent design élégant et fonctionnalités innovantes.
            </p>
            <p>
              Notre mission est de transformer des idées complexes en solutions numériques simples et intuitives. Nous
              croyons que la technologie doit être accessible à tous et que chaque projet mérite une attention
              particulière.
            </p>
            <p>
              Avec plus de 5 ans d'expérience dans le domaine, notre équipe a développé une expertise solide dans la
              création de sites web, d'applications et de solutions digitales sur mesure.
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/website.jpg?height=600&width=800"
            width={800}
            height={600}
            alt="Notre équipe"
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Nos Valeurs</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-muted-foreground">
              Nous explorons constamment de nouvelles technologies et approches pour offrir des solutions
              avant-gardistes.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-bold mb-2">Qualité</h3>
            <p className="text-muted-foreground">
              Nous nous engageons à fournir un travail de la plus haute qualité, avec une attention méticuleuse aux
              détails.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-bold mb-2">Collaboration</h3>
            <p className="text-muted-foreground">
              Nous croyons en la puissance du travail d'équipe et de la communication transparente avec nos clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

