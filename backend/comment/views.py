from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .serializers import CommentSerializer
from .models import Comment
from rest_framework.permissions import IsAuthenticated, AllowAny



@api_view (['GET'])
@permission_classes([AllowAny])
def get_all_comments(request, video_id):
        comments = Comment.objects.all ()
        if video_id:
            comments=comments.filter(video_id=video_id)
        serializer = CommentSerializer(comments, many = True)
        return Response(serializer.data)
    

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_comment(request):
    if request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED) 
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_comment(request, pk):
     comment = get_object_or_404(Comment, pk=pk)
     if request.method == 'PUT':
          serializer=CommentSerializer(comment, data=request.data)
          if serializer.is_valid():
               serializer.save(user=request.user)
               return Response(serializer.data, status=status.HTTP_200_OK)
          return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
