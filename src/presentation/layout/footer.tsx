import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-green-800 text-white py-8">
            <div className="container mx-auto px-4 text-center flex items-center justify-between">
                <Image src="/ecofuturo_logo.png" alt="logo" width={220} height={110} />
                <p className="text-sm">Desenvolvido por EcoFive</p>
            </div>
        </footer>
    )
}

