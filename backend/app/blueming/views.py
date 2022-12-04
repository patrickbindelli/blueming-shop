from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ProdutoSerializer, TipoSerializer, BandaSerializer
from .models import Produto, TipoProduto, Banda

class ProdutoView(APIView):
  def get(self, request, format=None):
    search = request.query_params['search']
    types = request.query_params['types']
    bands = request.query_params['bands']
    
    if(types != ''):
      types = types.split(',')
    else:
      types = []
      
    if(bands != ''):
      bands = bands.split(',')
    else:
      bands = []
    
    queryset = Produto.objects.all()
    
    if(len(types) > 0):
       queryset = queryset.filter(nome = search, id__in=types)
    
    if(len(bands) > 0):
       queryset = Produto.objects.filter(nome = search, banda__in=bands)
    
    if(search != ''):
      queryset = Produto.objects.filter(nome__contains = search)
   
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