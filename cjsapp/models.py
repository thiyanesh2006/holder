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


class Score(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Link to user
    score = models.IntegerField()
    mode = models.CharField(max_length=50)  # Easy, Medium, Hard
    created_at = models.DateTimeField(auto_now_add=True)  # Timestamp

    def __str__(self):
        return f"{self.user.username} - {self.score} - {self.mode}"

    class Meta:
        db_table = 'quiz_scores'
    
