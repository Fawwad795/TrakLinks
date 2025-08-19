from django.urls import path
from . import views

app_name = 'analytics'

urlpatterns = [
    path('clicks/', views.ClickListView.as_view(), name='click-list'),
    path('link/<int:link_id>/clicks/', views.LinkClicksView.as_view(), name='link-clicks'),
    path('link/<int:link_id>/analytics/', views.LinkAnalyticsView.as_view(), name='link-analytics'),
]
