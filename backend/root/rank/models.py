from django.db import models
# Create your models here.

class Customer(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Post(models.Model):
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)
    post_url = models.URLField()
    title = models.CharField(max_length=255)
    def __str__(self):
        return self.title


class Rank(models.Model):
    create_at = models.DateTimeField(auto_now=False, auto_now_add=True)
    post_url = models.URLField()
    rank = models.IntegerField()
    def __str__(self):
        return self.rank


