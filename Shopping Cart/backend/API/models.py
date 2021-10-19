from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=500)
    image = models.ImageField(null=True, blank=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=500)
    subName = models.CharField(max_length=500)
    image1 = models.CharField(max_length=1000)
    image2 = models.CharField(max_length=1000)
    image3 = models.CharField(max_length=1000)
    image4 = models.CharField(max_length=1000)
    image5 = models.CharField(max_length=1000)
    company = models.CharField(max_length=100)
    star = models.FloatField(default=0.0)
    quantity = models.IntegerField(default=0)
    actualPrice = models.IntegerField(default=0)
    discountedPrice = models.IntegerField(default=0)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
