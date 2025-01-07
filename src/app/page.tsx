import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <Card className="mx-auto max-w-md">
        <CardHeader>
          <CardTitle>Test des composants</CardTitle>
          <CardDescription>
            Vérifions que shadcn/ui fonctionne correctement
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name">Votre nom</label>
            <Input id="name" placeholder="Entrez votre nom" />
          </div>
          <Button>Cliquez-moi !</Button>
        </CardContent>
      </Card>
    </main>
  )
}
