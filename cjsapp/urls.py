# cjsapp/urls.py

from django.urls import path
from . import views  # Import views from the current app

urlpatterns = [
    path('', views.index, name='index'),  # URL for the index page  (for main page loading)
    path('register/', views.register_view, name='register'),  # URL for the login page
    path('index/',views.index, name='index'), #for include the index url
    path('login_quiz/',views.login_view, name='login_quiz'),
    path('quiz/',views.quiz_view, name='quiz'),
    path('scoreboard/', views.scoreboard_view, name='scoreboard'),
    path('insight/',views.insight_view, name='insight'),
    path('comres/',views.community_resources, name='comres'),
]