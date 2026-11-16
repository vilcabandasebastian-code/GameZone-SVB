from django.urls import path
from .views import CategoriaListSVB, ProductoListSVB

urlpatterns = [
    path(
        'categorias/',
        CategoriaListSVB.as_view(),
        name='categoriasSVB'
    ),
    path(
        'productos/',
        ProductoListSVB.as_view(),
        name='productosSVB'
    ),
]
