from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages
from django.contrib.auth.hashers import make_password, check_password
from django.contrib.auth import login, authenticate


from django.contrib.auth import login
from django.contrib.auth.hashers import check_password

def index(request):
    return render(request, 'index.html')

def register_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        if not username or not password:
            messages.error(request, "All fields are required!")
            return redirect('register')

        if User.objects.filter(username=username).exists():
            messages.error(request, "Username already exists!")
            return redirect('register')

        hashed_password = make_password(password)

        try:
            user = User(username=username, password=hashed_password)
            user.save()
            messages.success(request, 'Registration successful!')
            return redirect('index')
        except Exception as e:
            messages.error(request, f"Error saving user: {str(e)}")
            return redirect('register')

    return render(request, 'register.html')


from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.hashers import check_password
from .models import User  # Import your custom User model

def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        try:
            user = User.objects.get(username=username)
            if check_password(password, user.password):
                # Manually set session instead of using `login(request, user)`
                request.session['user_id'] = user.id  # Store user ID in session
                messages.success(request, "Login successful!")
                return redirect('quiz')
            else:
                messages.error(request, "Invalid username or password.")
        except User.DoesNotExist:
            messages.error(request, "Invalid username or password.")

    return render(request, 'login_quiz.html')

 

from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.hashers import check_password
from django.http import JsonResponse
from .models import User, Score  # Import Score model

def quiz_view(request):
    if request.method == 'POST':
        user_id = request.session.get('user_id')  # Get logged-in user ID
        if not user_id:
            return JsonResponse({'status': 'error', 'message': 'You need to log in first.'})

        mode = request.POST.get('mode')  # Get quiz mode
        score = int(request.POST.get('score'))  # Get quiz score

        user = User.objects.get(id=user_id)

        # Save score to database
        Score.objects.create(user=user, mode=mode, score=score)

        return JsonResponse({'status': 'success', 'message': 'Score saved successfully!'})

    return render(request, 'quiz.html')

    
'''
from django.shortcuts import render, redirect
from django.contrib import messages
from django.http import JsonResponse
from .models import User, Score
from django.contrib.auth.decorators import login_required

@login_required
def quiz_view(request):
    if request.method == 'POST':
        user_id = request.session.get('user_id')
        if not user_id:
            return JsonResponse({'status': 'error', 'message': 'You need to log in first.'})

        mode = request.POST.get('mode')
        score = int(request.POST.get('score'))

        try:
            user = User.objects.get(id=user_id)
            Score.objects.create(user=user, mode=mode, score=score)
            return JsonResponse({'status': 'success', 'message': 'Score saved successfully!'})
        except User.DoesNotExist:
            return JsonResponse({'status': 'error', 'message': 'User not found.'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': f'Error saving score: {str(e)}'})

    return render(request, 'quiz.html')
    
'''

'''

def scoreboard_view(request):
    scores = Score.objects.all().order_by('-score')[:10]  # Get top 10 scores

    return render(request, 'scoreboard.html', {'scores': scores})
'''


from django.shortcuts import render
from .models import Score

def scoreboard_view(request):
    scores = Score.objects.select_related('user').order_by('-score')[:10]  # Get top 10 scores
    return render(request, 'scoreboard.html', {'scores': scores})





def insight_view(request):
    return render(request, 'insight.html')

def community_resources(request):
    return render(request, 'comres.html')

