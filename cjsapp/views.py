
# Create your views here.
# cjsapp/views.py

from django.shortcuts import render,redirect

from .models import UserCredentials
from django.contrib import messages


def index(request):
    return render(request, 'index.html')  # Render the index page

def login_view(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]

        # Store the username and password in the database
        UserCredentials.objects.create(username=username, password=password)
        messages.success(request, "Your credentials have been stored successfully.")
        return redirect("login")  # Redirect to login page


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