from django.urls import path
from .views import CategoryAPIView

urlpatterns = [
    path("get-categories/", CategoryAPIView.as_view(), name="get-categories"),
    path("add-category/", CategoryAPIView.as_view(), name="add-category"),
]
