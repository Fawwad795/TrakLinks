from django.urls import path
from . import views

app_name = 'links_redirect'

urlpatterns = [
    path('<str:short_code>/', views.RedirectView.as_view(), name='redirect'),
]
