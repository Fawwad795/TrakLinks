from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Profile, Subscription

class ProfileSerializer(serializers.ModelSerializer):
    user_email = serializers.CharField(source='user.email', read_only=True)
    username = serializers.CharField(source='user.username', read_only=True)
    
    class Meta:
        model = Profile
        fields = [
            'id', 'user', 'username', 'user_email', 'bio', 'avatar', 'website', 
            'company', 'location', 'phone_number', 'date_of_birth', 
            'email_notifications', 'marketing_emails', 'analytics_emails',
            'created_at', 'updated_at'
        ]
        read_only_fields = ['user', 'created_at', 'updated_at']

class SubscriptionSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)
    
    class Meta:
        model = Subscription
        fields = [
            'id', 'user', 'username', 'plan', 'is_active', 
            'started_at', 'expires_at', 'links_limit'
        ]
        read_only_fields = ['user', 'started_at']
