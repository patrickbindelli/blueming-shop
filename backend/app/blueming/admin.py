from django.contrib import admin
from django.contrib import messages
from django import forms

from .models import Produto, TipoProduto, Venda, ProdutoVenda, Banda

@admin.register(TipoProduto)
class TipoProduto(admin.ModelAdmin):
  list_display = ('nome', )

@admin.register(Banda)
class Banda(admin.ModelAdmin):
  list_display = ('nome', )

@admin.register(Produto)
class ProdutoAdmin(admin.ModelAdmin):
  list_display = ('nome', 'preco', 'tipo', 'banda', 'quantidade')
  list_filter = ('preco', 'tipo', 'banda')
  readonly_fields = ('image_preview', )

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