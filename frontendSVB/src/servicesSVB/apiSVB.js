const API_URL_SVB = 'http://127.0.0.1:8000/api'

async function consultarSVB(ruta) {
  const respuesta = await fetch(`${API_URL_SVB}/${ruta}/`)

  if (!respuesta.ok) {
    throw new Error(`Error HTTP: ${respuesta.status}`)
  }

  return await respuesta.json()
}

export async function obtenerProductosSVB() {
  return await consultarSVB('productos')
}

export async function obtenerCategoriasSVB() {
  return await consultarSVB('categorias')
}
