from django.db import models


# from uuid import uuid4

class Author(models.Model):
    # id = models.UUIDField(default=uuid4, primary_key=True)
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    birthday_year = models.PositiveIntegerField()


class Series(models.Model):
    name = models.CharField(max_length=128)
    publishing_house = models.CharField(max_length=32, null=True)


class Book(models.Model):
    name = models.CharField(max_length=256)
    author = models.ManyToManyField(Author)
    series = models.ManyToManyField(Series)
