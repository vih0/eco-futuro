"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { ContactModal } from "./contact-modal"
import Image from "next/image"

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const navItems = [
        { href: "#hero", label: "Início" },
        { href: "#motivos", label: "Motivos" },
        { href: "#atividades", label: "Atividades" },
    ]
    return (
        <header className="bg-green-800">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Image src="/ecofuturo_logo.png" alt="logo" width={220} height={110} />
                    <nav className="hidden md:block">
                        <ul className="flex space-x-4  text-white">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="hover:text-green-300">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="md:hidden">
                                <Menu className="h-6 w-6" color="white" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full bg-green-800 text-white">
                            <SheetTitle>Menu</SheetTitle>
                            <nav className="flex flex-col space-y-4 mt-8  text-white">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="text-2xl hover:text-green-300"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                <ContactModal />
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <div className="hidden md:block">
                        <ContactModal />
                    </div>
                </div>
            </div>
        </header>
    )
}

