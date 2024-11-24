'use client'
import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const activities = [
    {
        title: "Restos de Alimentos",
        description: "Quando os restos de alimentos são descartados em aterros sanitários, eles se decompõem anaerobicamente e liberam metano. A compostagem ou digestão anaeróbica controlada pode reduzir essas emissões.",
        image: "/1.png"
    },
    {
        title: "Resíduos de Jardins e Poda",
        description: "Podas de árvores, folhas e outros resíduos vegetais também liberam metano quando se decompõem em aterros.",
        image: "/2.png"
    },
    {
        title: "Resíduos de Papel e Papelão",
        description: "A decomposição de papel e papelão em aterros libera metano. A reciclagem desses materiais pode reduzir significativamente as emissões de GEE.",
        image: "/3.png"
    },
    {
        title: "Resíduos Plásticos",
        description: "Embora os plásticos não liberem metano ao se decompor, sua produção e incineração liberam CO2 e outros poluentes. A produção de plásticos a partir de combustíveis fósseis contribui diretamente para as emissões de CO2.",
        image: "/4.png"
    },
    {
        title: "Resíduos Têxteis",
        description: "Tecidos naturais, como algodão e lã, podem liberar metano quando decompostos em aterros. A produção e o descarte de roupas sintéticas também contribuem para as emissões de CO2.",
        image: "/5.png"
    },
    {
        title: "Resíduos de Madeira",
        description: "Resíduos de madeira e produtos de madeira liberam metano e CO2 durante a decomposição em aterros. A reutilização ou reciclagem da madeira pode ajudar a mitigar essas emissões.",
        image: "/6.png"
    },
    {
        title: "Resíduos de Construção e Demolição",
        description: "Esses resíduos podem incluir materiais orgânicos, como madeira e papel, que liberam metano durante a decomposição. A gestão adequada desses resíduos é essencial para reduzir as emissões de GEE.",
        image: "/7.png"
    }
]


export function ActivitiesCarousel() {
    return (
        <Carousel className="w-4/5 mx-auto">
            <CarouselContent>
                {activities.map((activity, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex flex-col items-center p-6">
                                    <Image
                                        src={activity.image}
                                        alt={activity.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-64 object-cover mb-4 rounded-md"
                                    />
                                    <p className="text-xl font-semibold mb-2">{activity.title}</p>
                                    <p className="text-center text-muted-foreground overflow-y-hidden transition-all duration-300 ease-in-out">{activity.description}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

