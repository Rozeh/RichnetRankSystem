from django.db import models

# Create your models here.
class Rank(models.Model):
    customer = models.CharField(max_length=255)
    post_url = models.URLField()
    title = models.CharField(max_length=255)
    keyword = models.CharField(max_length=255)
    rank = models.CharField(max_length=255)
    checked_at = models.DateTimeField(auto_now=False, auto_now_add=True)

    def __str__(self):
        return self.title

class Post(models.Model):
    customer = models.CharField(max_length=255)
    post_url = models.URLField()
    title = models.CharField(max_length=255)
    keyword = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)

    def __str__(self):
        return self.customer
  