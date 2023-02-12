from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer
from .models import Author, Book, Series


class AuthorModelSerializer(ModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'

class AuthorModelSerializer2(ModelSerializer):
    class Meta:
        model = Author
        fields = ['first_name']


class SeriesModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Series
        fields = '__all__'


class BookModelSerializer(ModelSerializer):
    # author = AuthorModelSerializer(many=True)
    # series = SeriesModelSerializer(many=True)
    class Meta:
        model = Book
        fields = '__all__'
