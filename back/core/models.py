from django.db import models
from django.core.validators import MinValueValidator
from django.contrib import messages
from django.core.exceptions import ValidationError
from django.forms.forms import NON_FIELD_ERRORS

class TipoProduto(models.Model):
  nome = models.CharField(max_length=50)
  
  def __str__(self) -> str:
    return self.nome
  
class Produto(models.Model): 
  nome = models.CharField(max_length=100)
  preco = models.DecimalField(max_digits=6, decimal_places=2)
  descricao = models.TextField(max_length=200)
  tipo = models.ForeignKey(TipoProduto, on_delete=models.CASCADE)
  quantidade = models.PositiveIntegerField(null=False, blank=False, default=0, validators=[MinValueValidator(0)])
  
  def __str__(self) -> str:
    return self.nome

class Venda(models.Model):
  data = models.DateTimeField()
  valor = models.DecimalField(max_digits=6, decimal_places=2)
  nome_cliente = models.CharField(max_length=100)
  telefone_cliente = models.CharField(max_length=11)
  produtos = models.ManyToManyField(Produto, through='ProdutoVenda')
            
  def __str__(self) -> str:
    return self.nome_cliente

class ProdutoVenda(models.Model):
  produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
  venda = models.ForeignKey(Venda, on_delete=models.CASCADE)
  quantidade = models.PositiveIntegerField(default=0)
  
  def __init__(self, *args, **kwargs):
    super(ProdutoVenda, self).__init__(*args, **kwargs)
    self.oldquantidade = self.quantidade
  
  def has_changed(self):
    for field in self.__important_fields:
        orig = '__original_%s' % field
        if getattr(self, orig) != getattr(self, field):
            return True
    return False
  
  def clean(self):
    if(self.produto.quantidade < self.quantidade):
       raise ValidationError("Quantidade insuficiente em estoque")
    
    if(self.oldquantidade != self.quantidade):
      nova_quantidade = self.quantidade - self.oldquantidade
      if(self.quantidade == 0):
        raise ValidationError("A quantidade não pode ser 0")
      self.produto.quantidade -= nova_quantidade
      self.produto.save()
  
  def save(self, *args, **kwargs):
    try:
      super().save(*args, **kwargs)
    except ValidationError as e:
      non_field_errors = e.message_dict[NON_FIELD_ERRORS]
  
  def __str__(self) -> str:
    return self.produto.nome