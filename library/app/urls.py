from django.urls import path
from .views import NewApiView

app_name = 'authors'
urlpatterns = [
    path('', NewApiView.as_view())
]
