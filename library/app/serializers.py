from rest_framework.serializers import HyperlinkedModelSerializer
from .models import Author, Book, Series


class AuthorModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'


class SeriesModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Series
        fields = '__all__'


class BookModelSerializer(HyperlinkedModelSerializer):
    # author = AuthorModelSerializer(many=True)
    # series = SeriesModelSerializer(many=True)
    class Meta:
        model = Book
        fields = '__all__'
