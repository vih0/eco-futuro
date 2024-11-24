"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageSquare, X, Minimize2, Maximize2 } from 'lucide-react'

type Message = {
    text: string
    sender: 'user' | 'bot'
}

const initialMessages: Message[] = [
    { text: "Olá! Eu sou o EcoBot. Como posso ajudar você com questões sobre redução de emissões de CO2?", sender: 'bot' }
]

const suggestions = [
    "Como reciclar corretamente?",
    "Dicas para economizar energia",
    "Transporte sustentável",
    "Alimentação e CO2"
]

export function EcoChatbot() {
    const [messages, setMessages] = useState<Message[]>(initialMessages)
    const [input, setInput] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const [isMinimized, setIsMinimized] = useState(false)
    const scrollAreaRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
        }
    }, [messages])

    const handleSendMessage = (text: string) => {
        if (text.trim() === "") return

        const userMessage: Message = { text, sender: 'user' }
        setMessages(prev => [...prev, userMessage])
        setInput("")
        setIsTyping(true)

        // Simular resposta do bot
        setTimeout(() => {
            const botResponse = getBotResponse(text)
            setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }])
            setIsTyping(false)
        }, 1500)
    }

    const getBotResponse = (userInput: string): string => {
        const lowerInput = userInput.toLowerCase()
        if (lowerInput.includes("reciclagem") || lowerInput.includes("reciclar")) {
            return "Reciclar é uma ótima maneira de reduzir emissões de CO2! Separe seus resíduos em categorias como plástico, papel, vidro e metal. Procure pontos de coleta seletiva em sua cidade."
        } else if (lowerInput.includes("transporte") || lowerInput.includes("carro")) {
            return "Usar transporte público, bicicleta ou caminhar são excelentes formas de reduzir emissões de CO2. Se precisar usar carro, considere caronas compartilhadas ou veículos elétricos."
        } else if (lowerInput.includes("energia") || lowerInput.includes("eletricidade")) {
            return "Para reduzir o consumo de energia, use lâmpadas LED, desligue aparelhos quando não estiverem em uso e opte por eletrodomésticos com boa eficiência energética."
        } else if (lowerInput.includes("alimentação") || lowerInput.includes("comida")) {
            return "Uma dieta baseada em plantas geralmente tem uma pegada de carbono menor. Tente reduzir o consumo de carne, especialmente carne vermelha, e opte por alimentos locais e sazonais."
        } else {
            return "Desculpe, não entendi completamente. Pode reformular sua pergunta sobre redução de emissões de CO2? Ou escolha uma das sugestões abaixo."
        }
    }

    return (
        <div className={`fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${isMinimized ? 'h-12' : 'h-[489px]'}`}>
            <div className="bg-green-600 text-white p-2 flex justify-between items-center">
                <div className="flex items-center">
                    <MessageSquare className="mr-2" size={20} />
                    <h3 className="font-bold">EcoBot</h3>
                </div>
                <div>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMinimized(!isMinimized)}
                        className="text-white hover:text-green-200"
                    >
                        {isMinimized ? <Maximize2 size={20} /> : <Minimize2 size={20} />}
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setMessages(initialMessages)}
                        className="text-white hover:text-green-200"
                    >
                        <X size={20} />
                    </Button>
                </div>
            </div>
            {!isMinimized && (
                <>
                    <ScrollArea className="h-64 p-4" ref={scrollAreaRef}>
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'
                                    }`}
                            >
                                <span
                                    className={`inline-block p-2 rounded-lg ${message.sender === 'user'
                                        ? 'bg-green-500 text-white'
                                        : 'bg-gray-200 text-gray-800'
                                        }`}
                                >
                                    {message.text}
                                </span>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="text-left">
                                <span className="inline-block p-2 rounded-lg bg-gray-200 text-gray-800">
                                    <span className="typing-animation">...</span>
                                </span>
                            </div>
                        )}
                    </ScrollArea>
                    <div className="p-4 border-t">
                        <div className="flex space-x-2 mb-2">
                            <Input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(input)}
                                placeholder="Digite sua pergunta..."
                            />
                            <Button onClick={() => handleSendMessage(input)}>Enviar</Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {suggestions.map((suggestion, index) => (
                                <Button
                                    key={index}
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleSendMessage(suggestion)}
                                >
                                    {suggestion}
                                </Button>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

