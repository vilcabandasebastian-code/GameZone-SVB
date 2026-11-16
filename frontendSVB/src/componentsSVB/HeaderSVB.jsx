import { Gamepad2 } from 'lucide-react'

export default function HeaderSVB() {
  return (
    <header className="bg-slate-950 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <div className="flex items-center gap-3">
          <Gamepad2 className="text-cyan-400" size={36} />
          <div>
            <h1 className="text-2xl font-bold">
              GameZone SVB
            </h1>
            <p className="text-sm text-slate-300">
              Tu tienda virtual gamer
            </p>
          </div>
        </div>

        <nav className="flex gap-6">
          <a href="#inicioSVB" className="hover:text-cyan-400">
            Inicio
          </a>
          <a href="#catalogoSVB" className="hover:text-cyan-400">
            Catálogo
          </a>
        </nav>
      </div>
    </header>
  )
}
