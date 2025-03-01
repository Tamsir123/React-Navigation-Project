import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  return (
    <div className="container py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nos Services</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          Découvrez notre gamme complète de services conçus pour répondre à vos besoins
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Développement Web</CardTitle>
            <CardDescription>Création de sites web modernes et réactifs</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/dev.png"
              width={350}
              height={200}
              alt="Développement Web"
              className="rounded-lg mb-4 w-full"
            />
            <p className="text-muted-foreground">
              Nous utilisons les dernières technologies pour créer des sites web performants et adaptés à tous les
              appareils.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Design UX/UI</CardTitle>
            <CardDescription>Interfaces utilisateur intuitives et esthétiques</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/design.png"
              width={350}
              height={500}
              alt="Design UX/UI"
              className="rounded-lg mb-4 w-full"
            />
            <p className="text-muted-foreground">
              Nous concevons des interfaces utilisateur qui sont à la fois belles et faciles à utiliser, améliorant
              l'expérience globale.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Optimisation SEO</CardTitle>
            <CardDescription>Amélioration de la visibilité en ligne</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/seo.png"
              width={350}
              height={400}
              alt="Optimisation SEO"
              className="rounded-lg mb-4 w-full"
            />
            <p className="text-muted-foreground">
              Nous optimisons votre présence en ligne pour améliorer votre classement dans les moteurs de recherche.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

