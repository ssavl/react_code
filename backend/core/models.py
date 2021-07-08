from django.db import models
from user_app.models import MyUser


class Articles(models.Model):
    title = models.CharField(max_length=255, blank=True, null=True)
    text = models.TextField(max_length=255, blank=True, null=True)
    date = models.DateTimeField(auto_now=True, blank=True, null=True)
    img = models.ImageField(upload_to='static/media', blank=True, null=True)
    author = models.ForeignKey(MyUser, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.title


