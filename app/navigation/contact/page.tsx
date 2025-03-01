import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <div className="container py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contactez-Nous</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          Nous sommes là pour répondre à vos questions et discuter de vos projets
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-bold">Adresse</h3>
              <p className="text-muted-foreground">123 Avenue des Développeurs, 75000 Paris, France</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Mail className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-bold">Email</h3>
              <p className="text-muted-foreground">contact@navigation-simple.fr</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Phone className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-bold">Téléphone</h3>
              <p className="text-muted-foreground">+33 1 23 45 67 89</p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.76457410133!2d2.2769948739278364!3d48.85894658138325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sfr!2sfr!4v1708956421489!5m2!1sfr!2sfr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="space-y-4 p-6 border rounded-lg">
          <h2 className="text-2xl font-bold">Envoyez-nous un message</h2>
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nom
                </label>
                <Input id="name" placeholder="Votre nom" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Votre email" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Sujet
              </label>
              <Input id="subject" placeholder="Sujet de votre message" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea id="message" placeholder="Votre message" rows={5} />
            </div>
            <Button type="submit" className="w-full">
              Envoyer le message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

