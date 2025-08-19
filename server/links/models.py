from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
import string
import random

class Link(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='links')
    title = models.CharField(max_length=200)
    original_url = models.URLField(max_length=2000)
    short_code = models.CharField(max_length=10, unique=True, blank=True)
    internal_name = models.CharField(max_length=100, help_text="Internal name for easy identification")
    description = models.TextField(blank=True, help_text="Optional description of the link")
    thumbnail = models.ImageField(upload_to='thumbnails/', blank=True, null=True)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    click_count = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Link'
        verbose_name_plural = 'Links'
    
    def save(self, *args, **kwargs):
        if not self.short_code:
            self.short_code = self.generate_short_code()
        super().save(*args, **kwargs)
    
    def generate_short_code(self):
        length = 6
        characters = string.ascii_letters + string.digits
        while True:
            code = ''.join(random.choice(characters) for _ in range(length))
            if not Link.objects.filter(short_code=code).exists():
                return code
    
    @property
    def short_url(self):
        return f"traklinks.io/{self.short_code}"
    
    @property
    def full_short_url(self):
        return f"http://127.0.0.1:8000/r/{self.short_code}"
    
    def __str__(self):
        return f"{self.title} ({self.short_url})"
