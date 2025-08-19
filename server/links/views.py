from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Link
from .serializers import LinkSerializer, LinkCreateSerializer
from analytics.models import Click

class LinkListCreateView(generics.ListCreateAPIView):
    serializer_class = LinkSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return Link.objects.filter(user=self.request.user)
    
    def get_serializer_class(self):
        if self.request.method == 'POST':
            return LinkCreateSerializer
        return LinkSerializer
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class LinkDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = LinkSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return Link.objects.filter(user=self.request.user)

class UserLinksView(generics.ListAPIView):
    serializer_class = LinkSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return Link.objects.filter(user_id=user_id, is_active=True)

class RedirectView(APIView):
    """Handle short URL redirects and track analytics"""
    permission_classes = []  # Allow anonymous access
    
    def get(self, request, short_code):
        link = get_object_or_404(Link, short_code=short_code, is_active=True)
        
        # Record click analytics
        click = Click.objects.create(
            link=link,
            ip_address=self.get_client_ip(request),
            user_agent=request.META.get('HTTP_USER_AGENT', ''),
            referrer=request.META.get('HTTP_REFERER'),
            # TODO: Add device detection and geolocation
        )
        
        # Increment click count
        link.click_count += 1
        link.save()
        
        return HttpResponseRedirect(link.original_url)
    
    def get_client_ip(self, request):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip
