from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Click, LinkAnalytics
from .serializers import ClickSerializer, LinkAnalyticsSerializer
from links.models import Link

class ClickListView(generics.ListAPIView):
    serializer_class = ClickSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        # Only show clicks for user's links
        user_links = Link.objects.filter(user=self.request.user)
        return Click.objects.filter(link__in=user_links)

class LinkClicksView(generics.ListAPIView):
    serializer_class = ClickSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        link_id = self.kwargs['link_id']
        # Ensure the link belongs to the requesting user
        try:
            link = Link.objects.get(id=link_id, user=self.request.user)
            return Click.objects.filter(link=link)
        except Link.DoesNotExist:
            return Click.objects.none()

class LinkAnalyticsView(generics.RetrieveAPIView):
    serializer_class = LinkAnalyticsSerializer
    permission_classes = [IsAuthenticated]
    
    def get_object(self):
        link_id = self.kwargs['link_id']
        link = Link.objects.get(id=link_id, user=self.request.user)
        analytics, created = LinkAnalytics.objects.get_or_create(link=link)
        return analytics
