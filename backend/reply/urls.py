from . import views
from django.urls import path
from reply import views

urlpatterns = [
    path('', views.user_reply),
    path('<comment_id>/', views.get_all_replies)
]
