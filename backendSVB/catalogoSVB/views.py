from rest_framework.generics import ListAPIView
from .models import Categoria, Producto
from .serializersSVB import (
    CategoriaSerializer,
    ProductoSerializer
)


class CategoriaListSVB(ListAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer


class ProductoListSVB(ListAPIView):
    queryset = Producto.objects.select_related('categoria').all()
    serializer_class = ProductoSerializer
