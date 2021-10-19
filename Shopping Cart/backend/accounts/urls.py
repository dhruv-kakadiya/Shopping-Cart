from django.urls import path
from .views import SignUPView, LogInView

urlpatterns = [
    path("signup/", SignUPView.as_view(), name="signup"),
    path("login/", LogInView.as_view(), name="login"),
]
