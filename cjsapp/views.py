
# Create your views here.
# cjsapp/views.py

from django.shortcuts import render

def index(request):
    return render(request, 'index.html')  # Render the index page

def login_view(request):
    return render(request, 'code.html')  # Render the login page

def quiz_view(request):
    return render(request, 'quiz.html')

def insight_view(request):
    return render(request, 'insight.html')

def community_resources(request):
    return render(request, 'comres.html')

from django.shortcuts import render
from .forms import ContactForm

'''def contact_view(request):
    form = ContactForm()
    return render(request, 'contact.html', {'form': form})'''