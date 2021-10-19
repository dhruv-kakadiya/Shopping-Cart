from rest_framework.response import Response
from rest_framework.views import APIView
import io
import datetime
from rest_framework.parsers import JSONParser
from django.http import JsonResponse
from .models import User
from .serializers import UserSerializer

import jwt
from backend.settings import SECRET_KEY


def get_parsed_data(data):
    json_data = data
    stream = io.BytesIO(json_data)
    parsed_data = JSONParser().parse(stream)
    print("parsed_data: ", parsed_data)
    return parsed_data


def check_token(request):
    if request.method == "POST":
        encoded = get_parsed_data(request.body)
        encoded = encoded["token"]
        decoded = jwt.decode(encoded, SECRET_KEY, algorithms="HS256")
        print("decoded: ", decoded)
        return JsonResponse({"user": decoded})


def get_token(id, username):
    key = SECRET_KEY
    dt = datetime.datetime.now() + datetime.timedelta(days=2)
    encoded = jwt.encode(
        {"id": id, "username": username, "exp": dt}, key, algorithm="HS256"
    )
    print("encoded token :", encoded)
    return encoded


class SignUPView(APIView):
    def post(self, request):
        user = get_parsed_data(request.body)
        exist_user = None
        try:
            exist_user = User.objects.get(email=user["email"])
        except User.DoesNotExist:
            try:
                exist_user = User.objects.get(username=user["username"])
            except User.DoesNotExist:
                exist_user = None
            if exist_user is not None:
                return Response({"msg": "Username Already Exists!"}, status=403)

        if exist_user is not None:
            return Response({"msg": "Email Address Already Exists!"}, status=403)

        serializer = UserSerializer(data=user)
        if serializer.is_valid():
            serializer.save()
            id = User.objects.filter(email=user["email"])[0].id
            token = get_token(id, user["username"])
            res = {
                "id": id,
                "token": token,
                "username": user["username"],
            }
            return Response(res)
        return Response({"msg": "Some Error Occured !"}, status=403)


class LogInView(APIView):
    def post(self, request):
        parsed_data = get_parsed_data(request.body)
        email = parsed_data["email"]
        password = parsed_data["password"]

        user = None
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            user = None

        if user is None:
            return Response({"msg": "User Not Exists !"}, status=403)
        if user.password != password:
            return Response({"msg": "Wrong Password !"}, status=403)

        token = get_token(user.id, user.username)
        res = {
            "id": user.id,
            "token": token,
            "username": user.username,
        }
        return Response(res)
