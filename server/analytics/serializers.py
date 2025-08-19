from rest_framework import serializers
from .models import Click, LinkAnalytics

class ClickSerializer(serializers.ModelSerializer):
    link_title = serializers.CharField(source='link.title', read_only=True)
    link_short_url = serializers.CharField(source='link.short_url', read_only=True)
    
    class Meta:
        model = Click
        fields = [
            'id', 'link', 'link_title', 'link_short_url', 'ip_address', 
            'user_agent', 'referrer', 'country', 'city', 'device_type', 
            'browser', 'operating_system', 'clicked_at'
        ]
        read_only_fields = ['clicked_at']

class LinkAnalyticsSerializer(serializers.ModelSerializer):
    link_title = serializers.CharField(source='link.title', read_only=True)
    
    class Meta:
        model = LinkAnalytics
        fields = [
            'id', 'link', 'link_title', 'total_clicks', 'unique_clicks',
            'last_clicked', 'created_at', 'updated_at'
        ]
