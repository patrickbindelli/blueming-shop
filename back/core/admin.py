from django.contrib import admin
from django.contrib import messages
from django import forms

from .models import Produto, TipoProduto, Venda, ProdutoVenda
# Register your models here.

@admin.register(TipoProduto)
class TipoProduto(admin.ModelAdmin):
  def total_items(self, obj):
    print("AAAAAAAAAAAAAAAAA")
  

@admin.register(Produto)
class ProdutoAdmin(admin.ModelAdmin):
  list_display = ('nome', 'preco', 'tipo', 'quantidade')
  list_filter = ('preco', 'tipo')

class ProdutoVendaInline(admin.TabularInline):
    model = Venda.produtos.through
    extra = 0
    fields = ('produto', 'quantidade')
    
class PostForm(forms.ModelForm):
  def clean(self):
      title = self.cleaned_data['title']
      if not title.istitle():
          raise forms.ValidationError({'title': "Not a proper titlecased string"})
          
@admin.register(Venda)
class VendaAdmin(admin.ModelAdmin):
  list_display = ('id', 'data', 'nome_cliente', 'telefone_cliente', 'valor')
  list_filter = ('data', )
  
  inlines = [ProdutoVendaInline, ]