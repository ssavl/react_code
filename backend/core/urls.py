from django.urls import include, path
from .views import ArticleView

urlpatterns = [
    path('', ArticleView.as_view()),
#     path('auth/register/', include('rest_auth.registration.urls'))
]