from rest_framework import serializers
from .models import Produto, TipoProduto, Banda

class ProdutoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Produto
    fields = ('id', 'nome', 'preco', 'tipo', 'banda', 'imagem')  

class TipoSerializer(serializers.ModelSerializer):
  class Meta:
    model = TipoProduto
    fields = ('id', 'nome')  
    
  
class BandaSerializer(serializers.ModelSerializer):
  class Meta:
    model = Banda
    fields = ('id', 'nome')  