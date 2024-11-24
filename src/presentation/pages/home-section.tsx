'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/presentation/layout/header"
import { Footer } from "@/presentation/layout/footer"
import { ActivitiesCarousel } from "../layout/activites-carossel"
import { Toaster } from "@/components/ui/toaster"
import { EcoChatbot } from "../layout/eco-chatbot"
import { CarbonFootprintCalculator } from "../layout/footprint-calculator"

export function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-100 to-green-200">
      <Header />
      <section className="flex-grow">
        <section id="hero" className="container mx-auto px-4 py-20 text-center">
          <h1 className="mb-6 text-4xl font-bold text-green-800">Redução da Emissão de CO2</h1>
          <p className="mx-auto max-w-3xl text-lg text-green-700">
            A redução da emissão de CO2 é uma necessidade urgente e crucial para o futuro do nosso planeta. O dióxido de carbono (CO2) é um dos principais gases de efeito estufa que contribuem para o aquecimento global e as mudanças climáticas. As razões para diminuir a emissão de CO2 são multifacetadas e de extrema importância para a saúde ambiental, econômica e social do mundo.
          </p>
        </section>

        <section id="motivos" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-green-800">Principais motivos para diminuir a emissão de CO2</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Mudanças Climáticas e Impactos Ambientais</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    A principal razão para reduzir as emissões de CO2 é mitigar os efeitos das mudanças climáticas. A concentração crescente de CO2 na atmosfera intensifica o efeito estufa, levando ao aumento das temperaturas globais. Esse aquecimento global provoca derretimento das calotas polares, elevação do nível do mar, e eventos climáticos extremos como furacões, secas e inundações. Esses fenômenos têm efeitos devastadores nos ecossistemas, ameaçando a biodiversidade e colocando em risco inúmeras espécies de plantas e animais.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Saúde Pública</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    A poluição do ar, resultante das emissões de CO2 e outros poluentes, tem impactos diretos na saúde humana. A exposição contínua a altos níveis de poluição do ar pode causar doenças respiratórias, cardiovasculares e até câncer. Reduzir as emissões de CO2 contribui para a melhoria da qualidade do ar, resultando em uma população mais saudável e uma redução nos custos de saúde pública.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Sustentabilidade Econômica</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    A transição para uma economia de baixo carbono também traz benefícios econômicos significativos. Investir em energias renováveis, eficiência energética e tecnologias limpas pode criar empregos e estimular o crescimento econômico. Além disso, reduzir a dependência de combustíveis fósseis protege as economias das flutuações nos preços do petróleo e gás, promovendo uma maior estabilidade econômica a longo prazo.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="atividades" className="py-20 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-green-800">Descarte indevido que contribui para emissão de CO²</h2>
          </div>
          <div className="w-full">
            <ActivitiesCarousel />
          </div>
        </section>
        <section id="calculadora" className="py-20 bg-white">
          <div className="container mx-auto px-4 w-full">
            <h2 className="mb-12 text-center text-3xl font-bold text-green-800">Calcule Sua Pegada de Carbono</h2>
            <p className="text-center mb-8 text-green-700 max-w-2xl mx-auto">
              Entender sua pegada de carbono é o primeiro passo para reduzir suas emissões de CO2. Use nossa calculadora simples para estimar seu impacto mensal e descubra áreas onde você pode fazer a diferença.
            </p>
            <CarbonFootprintCalculator />
          </div>
        </section>
      </section>
      <Footer />
      <EcoChatbot />
      <Toaster />
    </div>
  )
}

