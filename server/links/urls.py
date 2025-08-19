from django.urls import path
from . import views

app_name = 'links'

urlpatterns = [
    path('', views.LinkListCreateView.as_view(), name='link-list-create'),
    path('<int:pk>/', views.LinkDetailView.as_view(), name='link-detail'),
    path('user/<int:user_id>/', views.UserLinksView.as_view(), name='user-links'),
]
