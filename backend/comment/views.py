from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .serializers import CommentSerializer
from .models import Comment
from rest_framework.permissions import IsAuthenticated, AllowAny


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_comment(request):
    serializer = CommentSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save(user=request.user)
    return Response(serializer.data, status=status.HTTP_201_CREATED) 

@api_view (['GET'])
@permission_classes([AllowAny])
def get_all_comments(request, video_id):
    comment = get_object_or_404(Comment, video_id=video_id)
    serializer = CommentSerializer(comment)
    return Response(serializer.data)
   
