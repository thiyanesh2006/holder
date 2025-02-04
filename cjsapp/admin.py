from django.contrib import admin

# Register your models here.

from .models import UserCredentials  # Import the model

# Register the model
@admin.register(UserCredentials)
class UserCredentialsAdmin(admin.ModelAdmin):
    list_display = ('username', 'password')  # Show these fields in the admin panel
