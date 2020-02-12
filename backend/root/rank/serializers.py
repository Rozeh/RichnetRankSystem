from rest_framework import serializers
from .models import Rank, Post, Customer

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('id', 'name')

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'created_at', 'post_url')

class RankSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rank
        fields = ('id', 'created_at', 'post_url', 'rank')

