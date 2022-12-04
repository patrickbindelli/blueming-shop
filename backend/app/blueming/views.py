from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ProdutoSerializer, TipoSerializer, BandaSerializer
from .models import Produto, TipoProduto, Banda

class ProdutoView(APIView):
  def get(self, request, format=None):
    queryset = Produto.objects.all()
    serializer = ProdutoSerializer(queryset, many=True)
    return Response(serializer.data)
  
class TipoView(APIView):
  def get(self, request, format=None):
    queryset = TipoProduto.objects.all()
    serializer = TipoSerializer(queryset, many=True)
    return Response(serializer.data)
  
class BandaView(APIView):
  def get(self, request, format=None):
    queryset = Banda.objects.all()
    serializer = BandaSerializer(queryset, many=True)
    return Response(serializer.data)