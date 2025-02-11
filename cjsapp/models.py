from django.db import models

# Create your models here.

class User(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=255)  # Later, we will hash passwords

    def __str__(self):
        return self.username
    class Meta:
        db_table='users_table'
    
