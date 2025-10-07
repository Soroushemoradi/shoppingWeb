from django.shortcuts import render
from .models import Post
from rest_framework.response import Response
from rest_framework.decorators import api_view


def index(request):
    posts = Post.objects.all()
    return render(request, "pishi/index.html", {"posts": posts})



@api_view(["GET"])
def api_posts(request):
    data = [{"title": p.title, "content": p.content} for p in Post.objects.all()]
    return Response(data)


