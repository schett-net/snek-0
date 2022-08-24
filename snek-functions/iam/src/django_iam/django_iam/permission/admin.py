from django.contrib import admin
from .models import Permission


# Re-register GroupAdmin
admin.site.register(Permission)