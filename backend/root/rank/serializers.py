from rest_framework import serializers
from .models import Rank, Post

class RankSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rank
        fields = ("id", "customer", "post_url", "title", "keyword", "checked_at", "rank")

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ("id", "customer", "post_url", "title", "keyword", "created_at")
    