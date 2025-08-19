from django.contrib import admin
from django.utils.html import format_html
from django.urls import reverse
from django.utils.safestring import mark_safe
from .models import Link

@admin.register(Link)
class LinkAdmin(admin.ModelAdmin):
    list_display = ['title', 'short_url_display', 'original_url_display', 'click_count', 'user', 'created_at', 'is_active']
    list_filter = ['is_active', 'created_at', 'user']
    search_fields = ['title', 'original_url', 'short_code', 'internal_name']
    readonly_fields = ['short_code', 'click_count', 'created_at', 'updated_at', 'short_url_display', 'full_short_url_display']
    list_per_page = 25
    date_hierarchy = 'created_at'
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('user', 'title', 'internal_name'),
            'classes': ('wide',)
        }),
        ('URL Information', {
            'fields': ('original_url', 'short_code', 'short_url_display', 'full_short_url_display'),
            'classes': ('wide',)
        }),
        ('Content', {
            'fields': ('description', 'thumbnail'),
            'classes': ('wide',)
        }),
        ('Statistics & Status', {
            'fields': ('click_count', 'is_active', 'created_at', 'updated_at'),
            'classes': ('collapse', 'wide')
        }),
    )
    
    def short_url_display(self, obj):
        if obj.short_code:
            return format_html(
                '<a href="{}" target="_blank" style="color: #6366f1; text-decoration: none;">{}</a>',
                obj.full_short_url,
                obj.short_url
            )
        return '-'
    short_url_display.short_description = 'Short URL'
    
    def full_short_url_display(self, obj):
        if obj.short_code:
            return format_html(
                '<a href="{}" target="_blank" style="color: #6366f1; text-decoration: none;">{}</a>',
                obj.full_short_url,
                obj.full_short_url
            )
        return '-'
    full_short_url_display.short_description = 'Full Short URL'
    
    def original_url_display(self, obj):
        if len(obj.original_url) > 50:
            return format_html(
                '<span title="{}">{}</span>',
                obj.original_url,
                obj.original_url[:50] + '...'
            )
        return obj.original_url
    original_url_display.short_description = 'Original URL'
    
    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.select_related('user')
    
    actions = ['activate_links', 'deactivate_links']
    
    def activate_links(self, request, queryset):
        updated = queryset.update(is_active=True)
        self.message_user(request, f'{updated} links were activated.')
    activate_links.short_description = 'Activate selected links'
    
    def deactivate_links(self, request, queryset):
        updated = queryset.update(is_active=False)
        self.message_user(request, f'{updated} links were deactivated.')
    deactivate_links.short_description = 'Deactivate selected links'
