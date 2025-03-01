import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Bienvenue sur notre site
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Découvrez notre projet de navigation simple et élégant avec Next.js
              </p>
            </div>
            <div className="space-x-4">
             <Link href="/navigation/services">
                <Button>Découvrir nos services</Button>
              </Link>
              <Link href="/navigation/contact">
                <Button variant="outline">Nous contacter</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Notre approche</h2>
              <p className="text-muted-foreground md:text-xl">
                Nous créons des expériences web modernes et intuitives en utilisant les dernières technologies. Notre
                objectif est de rendre la navigation simple et agréable pour tous les utilisateurs.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/website.jpg"
                width={600}
                height={400}
                alt="Illustration de notre approche"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

