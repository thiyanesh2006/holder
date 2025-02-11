# Generated by Django 5.1.5 on 2025-02-07 03:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cjsapp', '0003_alter_usercredentials_username'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=100, unique=True)),
                ('password', models.CharField(max_length=255)),
            ],
        ),
        migrations.DeleteModel(
            name='UserCredentials',
        ),
    ]
