# cjsapp/urls.py

from django.urls import path
from . import views  # Import views from the current app

urlpatterns = [
    path('', views.index, name='index'),  # URL for the index page  (for main page loading)
    path('login/', views.login_view, name='login'),  # URL for the login page
    path('index/',views.index, name='index'), #for include the index url
    path('quiz/',views.quiz_view, name='quiz'),
    path('insight/',views.insight_view, name='insight'),
    path('comres/',views.community_resources, name='comres'),
]