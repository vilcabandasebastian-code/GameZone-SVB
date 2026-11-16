import { useState, useEffect } from 'react'
import HeaderSVB from '../componentsSVB/HeaderSVB'
import ProductListSVB from '../componentsSVB/ProductListSVB'
import CategoryFilterSVB from '../componentsSVB/CategoryFilterSVB'
import {
  obtenerProductosSVB,
  obtenerCategoriasSVB
} from '../servicesSVB/apiSVB'

export default function InicioSVB() {
  const [productos, setProductos] = useState([])
  const [categorias, setCategorias] = useState([])
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todas')
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let activo = true

    async function cargarDatosSVB() {
      try {
        const [listaProductos, listaCategorias] = await Promise.all([
          obtenerProductosSVB(),
          obtenerCategoriasSVB()
        ])

        if (activo) {
          setProductos(listaProductos)
          setCategorias(listaCategorias)
          setError('')
        }
      } catch {
        if (activo) {
          setError(
            'No se pudieron obtener los datos. Verifica que Django esté funcionando.'
          )
        }
      } finally {
        if (activo) {
          setCargando(false)
        }
      }
    }

    cargarDatosSVB()

    return () => {
      activo = false
    }
  }, [])

  const productosFiltrados = categoriaSeleccionada === 'todas'
    ? productos
    : productos.filter(
        (producto) => producto.categoria === categoriaSeleccionada
      )

  return (
    <div id="inicioSVB" className="min-h-screen bg-slate-100">
      <HeaderSVB />

      <section className="bg-gradient-to-r from-slate-950 to-blue-900 px-6 py-20 text-center text-white">
        <h2 className="text-4xl font-extrabold md:text-5xl">
          Bienvenido a GameZone SVB
        </h2>

        <p className="mt-4 text-lg text-slate-200">
          Descubre consolas, videojuegos y accesorios.
        </p>

        <p className="mt-4 text-sm text-cyan-300">
          Catálogo conectado con Django REST Framework
        </p>
      </section>

      <main id="catalogoSVB" className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="mb-3 text-3xl font-bold">
          Nuestro catálogo
        </h2>

        <p className="mb-8 text-slate-500">
          Selecciona una categoría para explorar nuestros productos.
        </p>

        {cargando ? (
          <div className="rounded-lg bg-white p-10 text-center">
            <p className="text-lg font-semibold text-cyan-700">
              Cargando productos...
            </p>
          </div>
        ) : error ? (
          <div className="rounded-lg bg-red-50 p-8 text-center">
            <p className="text-red-700">
              {error}
            </p>
          </div>
        ) : (
          <>
            <CategoryFilterSVB
              categorias={categorias}
              categoriaSeleccionada={categoriaSeleccionada}
              onSeleccionar={setCategoriaSeleccionada}
            />

            <p className="mb-5 text-sm text-slate-500">
              Mostrando {productosFiltrados.length} productos
            </p>

            <ProductListSVB productos={productosFiltrados} />
          </>
        )}
      </main>

      <footer className="bg-slate-950 p-6 text-center text-white">
        GameZone SVB © 2026
      </footer>
    </div>
  )
}
