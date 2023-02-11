from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .models import Author, Book, Series
from .serializers import AuthorModelSerializer, BookModelSerializer, SeriesModelSerializer
from rest_framework.pagination import LimitOffsetPagination
from rest_framework import mixins, viewsets


class AuthorCustomViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                          viewsets.GenericViewSet):
    # permission_classes = [IsAuthenticated]
    queryset = Author.objects.all()
    serializer_class = AuthorModelSerializer


class BookPagination(LimitOffsetPagination):
    default_limit = 10


class BookModelViewSet(ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Book.objects.all()
    serializer_class = BookModelSerializer
    # pagination_class = BookPagination

    # def get_queryset(self):
    #     return Book.objects.filter(book_name__contains='Пиратский Остров')


class SeriesPagination(LimitOffsetPagination):
    default_limit = 20


class SeriesModelViewSet(ModelViewSet):
    queryset = Series.objects.all()
    serializer_class = SeriesModelSerializer
    pagination_class = SeriesPagination
    filterset_fields = ['name', 'publishing_house']

    def destroy(self, request, **kwargs):
        return Response({'data': 'Удаление закрыто!'})
