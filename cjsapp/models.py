from django.db import models

# Create your models here.

class UserCredentials(models.Model):
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100)  # Storing as plain text (not recommended for security)

    def __str__(self):
        return self.username
