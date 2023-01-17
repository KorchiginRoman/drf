from rest_framework.viewsets import ModelViewSet
from .models import Author, Book, Series
from .serializers import AuthorModelSerializer, BookModelSerializer, SeriesModelSerializer


class AuthorModelViewSet(ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorModelSerializer


class BookModelViewSet(ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookModelSerializer


class SeriesModelViewSet(ModelViewSet):
    queryset = Series.objects.all()
    serializer_class = SeriesModelSerializer
