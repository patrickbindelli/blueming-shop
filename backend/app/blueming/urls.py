from django.urls import path, include
from . import views

urlpatterns = [
    path('produtos/', views.ProdutoView.as_view()),
    path('tipos/', views.TipoView.as_view()),
    path('bandas/', views.BandaView.as_view()),
]
