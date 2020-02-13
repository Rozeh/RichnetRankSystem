from rest_framework import viewsets
from .serializers import RankSerializer, PostSerializer
from .models import Rank, Post
from django.views.decorators.csrf import csrf_exempt

class RankViewSet(viewsets.ModelViewSet):
    queryset = Rank.objects.all()
    serializer_class = RankSerializer
    
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer