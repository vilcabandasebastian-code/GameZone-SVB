import ProductCardSVB from './ProductCardSVB'

export default function ProductListSVB({ productos }) {
  if (productos.length === 0) {
    return (
      <p className="py-12 text-center text-slate-500">
        No se encontraron productos en esta categoría.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {productos.map((producto) => (
        <ProductCardSVB
          key={producto.id}
          producto={producto}
        />
      ))}
    </div>
  )
}
