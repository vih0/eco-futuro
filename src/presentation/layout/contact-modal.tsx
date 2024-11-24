"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export function ContactModal() {
    const [email, setEmail] = useState("")
    const [cep, setCep] = useState("")
    const [wasteType, setWasteType] = useState("")
    const { toast } = useToast()
    const [isOpen, setIsOpen] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", { email, wasteType })
        toast({
            title: "Formulário enviado!",
            description: "Entraremos em contato em breve.",
        })
        setEmail("")
        setWasteType("")
        setIsOpen(false)
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className="text-white border-white hover:bg-green-700">
                    Saiba Mais
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-slate-50 rounded-md">
                <DialogHeader>
                    <DialogTitle>Entre em Contato</DialogTitle>
                    <DialogDescription>
                        Preencha o formulário abaixo para mais informações.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="seu@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="cep">Cep da sua região</Label>
                        <Input
                            id="cep"
                            type="number"
                            placeholder="xxxxx-xxx"
                            value={cep}
                            onChange={(e) => setCep(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="waste-type">Tipo de Lixo</Label>
                        <Select value={wasteType} onValueChange={setWasteType} required>
                            <SelectTrigger>
                                <SelectValue placeholder="Selecione o tipo de lixo" />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-50">
                                <SelectItem value="organic">Orgânico</SelectItem>
                                <SelectItem value="plastic">Plástico</SelectItem>
                                <SelectItem value="paper">Papel</SelectItem>
                                <SelectItem value="glass">Vidro</SelectItem>
                                <SelectItem value="electronic">Eletrônico</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button type="submit" className="w-full">Enviar</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}

