import { Button } from '@/components/ui/button'

export default function CategoryFilterSVB({
  categorias,
  categoriaSeleccionada,
  onSeleccionar
}) {
  return (
    <div className="mb-8 flex flex-wrap gap-3">
      <Button
        variant={categoriaSeleccionada === 'todas' ? 'default' : 'outline'}
        onClick={() => onSeleccionar('todas')}
      >
        Todas
      </Button>

      {categorias.map((categoria) => (
        <Button
          key={categoria.id}
          variant={categoriaSeleccionada === categoria.id ? 'default' : 'outline'}
          onClick={() => onSeleccionar(categoria.id)}
        >
          {categoria.nombre}
        </Button>
      ))}
    </div>
  )
}
