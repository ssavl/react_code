from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ArticleSerilizer
from .models import Articles


class ArticleView(APIView):

    def get(self, request):
        articles = Articles.objects.all()
        serializer = ArticleSerilizer(articles, many=True)
        return Response({"articles": serializer.data})

