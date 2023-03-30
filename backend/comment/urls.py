from . import views
from django.urls import path
from comment import views

urlpatterns = [
    path('<video_id>/', views.get_all_comments),
    path('', views.user_comment),
    path('update/<int:pk>/', views.update_comment)
]
