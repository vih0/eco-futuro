"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function CarbonFootprintCalculator() {
    const [electricity, setElectricity] = useState("")
    const [carKm, setCarKm] = useState("")
    const [flights, setFlights] = useState("")
    const [result, setResult] = useState<{ total: number; savings: number } | null>(null)

    const calculateFootprint = () => {
        const electricityEmissions = parseFloat(electricity) * 0.5 // 0.5 kg CO2 per kWh
        const carEmissions = parseFloat(carKm) * 0.2 // 0.2 kg CO2 per km
        const flightEmissions = parseFloat(flights) * 200 // 200 kg CO2 per flight (rough estimate)

        const totalEmissions = electricityEmissions + carEmissions + flightEmissions
        const savingsTarget = calculateSavingsTarget(totalEmissions)
        setResult({ total: totalEmissions, savings: savingsTarget })
    }

    const calculateSavingsTarget = (currentFootprint: number): number => {
        // Meta: reduzir em 20% as emissões atuais
        const targetReduction = currentFootprint * 0.2;
        return Math.round(targetReduction * 100) / 100; // Arredonda para 2 casas decimais
    }

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Calculadora de Pegada de Carbono</CardTitle>
                <CardDescription>Estime sua pegada de carbono mensal</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={(e) => { e.preventDefault(); calculateFootprint(); }} className="space-y-4">
                    <div>
                        <Label htmlFor="electricity">Consumo de Eletricidade (kWh/mês)</Label>
                        <Input
                            id="electricity"
                            type="number"
                            value={electricity}
                            onChange={(e) => setElectricity(e.target.value)}
                            placeholder="Ex: 300"
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="car-km">Quilômetros dirigidos de carro</Label>
                        <Input
                            id="car-km"
                            type="number"
                            value={carKm}
                            onChange={(e) => setCarKm(e.target.value)}
                            placeholder="Ex: 500"
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="flights">Número de voos (ida e volta)</Label>
                        <Input
                            id="flights"
                            type="number"
                            value={flights}
                            onChange={(e) => setFlights(e.target.value)}
                            placeholder="Ex: 1"
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full">Calcular</Button>
                </form>
                {result !== null && (
                    <div className="mt-4 p-4 bg-green-100 rounded-md">
                        <p className="text-center text-green-800 font-semibold mb-2">
                            Sua pegada de carbono estimada é de {result.total.toFixed(2)} kg CO2 por mês.
                        </p>
                        <p className="text-center text-green-700">
                            Meta de redução: Tente diminuir suas emissões em pelo menos {result.savings.toFixed(2)} kg CO2 por mês.
                        </p>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}

