from django.contrib import admin
from .models import Ressource


# Re-register GroupAdmin
admin.site.register(Ressource)