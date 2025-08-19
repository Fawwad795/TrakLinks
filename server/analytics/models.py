from django.db import models
from links.models import Link
from django.utils import timezone

class Click(models.Model):
    link = models.ForeignKey(Link, on_delete=models.CASCADE, related_name='clicks')
    ip_address = models.GenericIPAddressField()
    user_agent = models.TextField(blank=True)
    referrer = models.URLField(blank=True, null=True)
    country = models.CharField(max_length=100, blank=True)
    city = models.CharField(max_length=100, blank=True)
    device_type = models.CharField(max_length=50, blank=True)  # Mobile, Desktop, Tablet
    browser = models.CharField(max_length=50, blank=True)
    operating_system = models.CharField(max_length=50, blank=True)
    clicked_at = models.DateTimeField(default=timezone.now)
    
    class Meta:
        ordering = ['-clicked_at']
        verbose_name = 'Click'
        verbose_name_plural = 'Clicks'
    
    def __str__(self):
        return f"Click on {self.link.title} at {self.clicked_at}"

class LinkAnalytics(models.Model):
    """Aggregated analytics data for links"""
    link = models.OneToOneField(Link, on_delete=models.CASCADE, related_name='analytics')
    total_clicks = models.IntegerField(default=0)
    unique_clicks = models.IntegerField(default=0)
    last_clicked = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = 'Link Analytics'
        verbose_name_plural = 'Link Analytics'
    
    def __str__(self):
        return f"Analytics for {self.link.title}"
