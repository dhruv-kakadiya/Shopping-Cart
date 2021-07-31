from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Category
from .serializers import CategorySerializer


class CategoryAPIView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()


# class ProductAPIView(APIView):
#     def get(self, reques)
