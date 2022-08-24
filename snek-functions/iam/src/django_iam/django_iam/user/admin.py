from django.contrib import admin
from .models import User, Alias

# admin.site.unregister(User)
admin.site.register(User)
admin.site.register(Alias)

