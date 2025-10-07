from django.urls import path
from . import views
from .views import api_posts

urlpatterns = [
    path("", views.index, name="index"),
    path("api/posts/", api_posts, name="api_posts"),
]

