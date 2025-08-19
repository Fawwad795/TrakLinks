from django.contrib import admin
from django.utils.html import format_html
from .models import Click, LinkAnalytics

@admin.register(Click)
class ClickAdmin(admin.ModelAdmin):
    list_display = ['link_title', 'country', 'city', 'device_type', 'browser', 'clicked_at']
    list_filter = ['device_type', 'browser', 'operating_system', 'country', 'clicked_at']
    search_fields = ['link__title', 'country', 'city', 'ip_address']
    readonly_fields = ['clicked_at', 'link_url']
    list_per_page = 50
    date_hierarchy = 'clicked_at'
    
    fieldsets = (
        ('Link Information', {
            'fields': ('link', 'link_url'),
            'classes': ('wide',)
        }),
        ('User Information', {
            'fields': ('ip_address', 'user_agent', 'referrer'),
            'classes': ('wide',)
        }),
        ('Location Data', {
            'fields': ('country', 'city'),
            'classes': ('wide',)
        }),
        ('Device Information', {
            'fields': ('device_type', 'browser', 'operating_system'),
            'classes': ('wide',)
        }),
        ('Timestamp', {
            'fields': ('clicked_at',),
            'classes': ('wide',)
        }),
    )
    
    def link_title(self, obj):
        return obj.link.title
    link_title.short_description = 'Link Title'
    
    def link_url(self, obj):
        if obj.link:
            return format_html(
                '<a href="{}" target="_blank" style="color: #6366f1;">{}</a>',
                obj.link.full_short_url,
                obj.link.short_url
            )
        return '-'
    link_url.short_description = 'Short URL'
    
    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.select_related('link', 'link__user')

@admin.register(LinkAnalytics)
class LinkAnalyticsAdmin(admin.ModelAdmin):
    list_display = ['link_title', 'total_clicks', 'unique_clicks', 'last_clicked', 'updated_at']
    list_filter = ['last_clicked', 'created_at']
    search_fields = ['link__title', 'link__short_code']
    readonly_fields = ['created_at', 'updated_at']
    
    fieldsets = (
        ('Link Information', {
            'fields': ('link',),
            'classes': ('wide',)
        }),
        ('Analytics Data', {
            'fields': ('total_clicks', 'unique_clicks', 'last_clicked'),
            'classes': ('wide',)
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse', 'wide')
        }),
    )
    
    def link_title(self, obj):
        return obj.link.title
    link_title.short_description = 'Link Title'
    
    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.select_related('link')
