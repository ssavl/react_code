from rest_framework.serializers import ModelSerializer
from .models import Articles
from user_app.models import MyUser


class UserSerializer(ModelSerializer):
    class Meta:
        model = MyUser
        fields = ('email', 'last_login', 'date_joined', 'is_staff')


class ArticleSerilizer(ModelSerializer):
    class Meta:
        model = Articles
        fields = '__all__'
