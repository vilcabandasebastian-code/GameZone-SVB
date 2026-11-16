import {
  Card,
  CardContent,
  CardFooter
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function ProductCardSVB({ producto }) {
  return (
    <Card className="group overflow-hidden border-slate-200 py-0 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="overflow-hidden bg-slate-100">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(evento) => {
            evento.currentTarget.onerror = null
            evento.currentTarget.src = 'https://placehold.co/600x400?text=GameZone+SVB'
          }}
        />
      </div>

      <CardContent className="space-y-3">
        <Badge className="bg-cyan-100 text-cyan-800">
          {producto.categoria_nombre}
        </Badge>

        <h3 className="text-xl font-bold text-slate-900">
          {producto.nombre}
        </h3>

        <p className="min-h-12 text-sm text-slate-500">
          {producto.descripcion}
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-between gap-3 pb-5">
        <p className="text-2xl font-extrabold text-cyan-700">
          S/ {Number(producto.precio).toFixed(2)}
        </p>

        <Badge
          variant="outline"
          className={Number(producto.cantidad) > 0
            ? 'border-green-300 text-green-700'
            : 'border-red-300 text-red-700'}
        >
          {Number(producto.cantidad) > 0
            ? `Stock: ${producto.cantidad}`
            : 'Agotado'}
        </Badge>
      </CardFooter>
    </Card>
  )
}
