from django.contrib import admin
from .models import Info

class InfoAdmin(admin.ModelAdmin):
    list_display = ('name', "pullups", "situps", "runtime", "timestamp")

    admin.site.register(Info)
