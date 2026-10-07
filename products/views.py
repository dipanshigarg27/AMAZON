from django.shortcuts import render
from .image_data import images

def home(request):
    return render(request, "index.html", {"images": images})
