from rest_framework import serializers
from .models import Link

class LinkSerializer(serializers.ModelSerializer):
    short_url = serializers.ReadOnlyField()
    full_short_url = serializers.ReadOnlyField()
    click_count = serializers.ReadOnlyField()
    user_name = serializers.CharField(source='user.username', read_only=True)
    
    class Meta:
        model = Link
        fields = [
            'id', 'title', 'original_url', 'short_code', 'short_url', 'full_short_url',
            'internal_name', 'description', 'thumbnail', 'created_at', 'updated_at',
            'is_active', 'click_count', 'user_name'
        ]
        read_only_fields = ['short_code', 'created_at', 'updated_at']

class LinkCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields = ['title', 'original_url', 'internal_name', 'description', 'thumbnail']
        
    def validate_original_url(self, value):
        if not value.startswith(('http://', 'https://')):
            value = 'https://' + value
        return value
