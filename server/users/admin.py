from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User
from django.utils.html import format_html
from .models import Profile, Subscription

class ProfileInline(admin.StackedInline):
    model = Profile
    can_delete = False
    verbose_name_plural = 'Profile'
    fk_name = 'user'
    
    fieldsets = (
        ('Personal Information', {
            'fields': ('bio', 'avatar', 'website', 'company', 'location', 'phone_number', 'date_of_birth'),
            'classes': ('wide',)
        }),
        ('Preferences', {
            'fields': ('email_notifications', 'marketing_emails', 'analytics_emails'),
            'classes': ('wide',)
        }),
    )

class SubscriptionInline(admin.StackedInline):
    model = Subscription
    can_delete = False
    verbose_name_plural = 'Subscription'
    fk_name = 'user'

class CustomUserAdmin(BaseUserAdmin):
    inlines = (ProfileInline, SubscriptionInline)
    
    def get_inline_instances(self, request, obj=None):
        if not obj:
            return list()
        return super().get_inline_instances(request, obj)

# Re-register UserAdmin
admin.site.unregister(User)
admin.site.register(User, CustomUserAdmin)

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'display_name', 'company', 'location', 'created_at']
    list_filter = ['created_at', 'email_notifications', 'marketing_emails']
    search_fields = ['user__username', 'user__first_name', 'user__last_name', 'user__email', 'company']
    readonly_fields = ['created_at', 'updated_at']
    
    fieldsets = (
        ('User Information', {
            'fields': ('user',),
            'classes': ('wide',)
        }),
        ('Personal Information', {
            'fields': ('bio', 'avatar', 'website', 'company', 'location', 'phone_number', 'date_of_birth'),
            'classes': ('wide',)
        }),
        ('Preferences', {
            'fields': ('email_notifications', 'marketing_emails', 'analytics_emails'),
            'classes': ('wide',)
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse', 'wide')
        }),
    )
    
    def display_name(self, obj):
        return obj.display_name
    display_name.short_description = 'Display Name'

@admin.register(Subscription)
class SubscriptionAdmin(admin.ModelAdmin):
    list_display = ['user', 'plan', 'is_active', 'links_limit', 'started_at', 'expires_at']
    list_filter = ['plan', 'is_active', 'started_at']
    search_fields = ['user__username', 'user__email']
    readonly_fields = ['started_at']
    
    fieldsets = (
        ('User Information', {
            'fields': ('user',),
            'classes': ('wide',)
        }),
        ('Subscription Details', {
            'fields': ('plan', 'is_active', 'links_limit'),
            'classes': ('wide',)
        }),
        ('Dates', {
            'fields': ('started_at', 'expires_at'),
            'classes': ('wide',)
        }),
    )
    
    actions = ['activate_subscriptions', 'deactivate_subscriptions']
    
    def activate_subscriptions(self, request, queryset):
        updated = queryset.update(is_active=True)
        self.message_user(request, f'{updated} subscriptions were activated.')
    activate_subscriptions.short_description = 'Activate selected subscriptions'
    
    def deactivate_subscriptions(self, request, queryset):
        updated = queryset.update(is_active=False)
        self.message_user(request, f'{updated} subscriptions were deactivated.')
    deactivate_subscriptions.short_description = 'Deactivate selected subscriptions'
