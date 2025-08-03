import { HeroAnimationTest } from '@/components/hero/hero-animation-test'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 space-y-12">
        
        {/* Header */}
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Portfolio Mathieu Gonon
          </h1>
          <p className="text-lg text-gray-600">
            Développeur FullStack • Expert IA • CEO TechPath
          </p>
        </header>

        {/* Hero Animation Test */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>🎯 Test Hero Section Interactive</CardTitle>
              <CardDescription>
                Prototype de l&apos;animation Dev ↔ IA avec React Spring
              </CardDescription>
            </CardHeader>
            <CardContent>
              <HeroAnimationTest />
            </CardContent>
          </Card>
        </section>

        {/* Stack Validation */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>✅ Stack Technique Validé</CardTitle>
              <CardDescription>
                Tâche 12 - Shadcn/ui + React Spring installés et fonctionnels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800">Frontend</h3>
                  <ul className="text-sm text-blue-600 mt-2">
                    <li>✅ Next.js 15.4.5</li>
                    <li>✅ React 19.1.0</li>
                    <li>✅ TypeScript 5.9.2</li>
                    <li>✅ TailwindCSS v4.1.11</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold text-purple-800">UI & Animations</h3>
                  <ul className="text-sm text-purple-600 mt-2">
                    <li>✅ Shadcn/ui (Button, Card, Dialog, Input)</li>
                    <li>✅ React Spring 10.0.1</li>
                    <li>✅ tw-animate-css</li>
                    <li>✅ Neutral theme configuré</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-2 flex-wrap">
                <Button>Test Button Primary</Button>
                <Button variant="outline">Test Button Outline</Button>
                <Button variant="secondary">Test Button Secondary</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Next Steps */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>🚀 Prochaines Étapes</CardTitle>
              <CardDescription>
                Plan TaskMaster - Tâche 13 : Layout responsive + navigation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>📱 Navigation mobile-first</li>
                <li>🎨 Hero section définitive avec images Mathieu</li>
                <li>📄 Sections: À propos, Expériences, Compétences</li>
                <li>⚡ Optimisations performance</li>
              </ul>
            </CardContent>
          </Card>
        </section>

      </div>
    </div>
  );
}
