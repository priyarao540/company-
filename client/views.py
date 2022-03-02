from django.shortcuts import render
from urllib import response
from django.shortcuts import render,HttpResponse
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet
from rest_framework.permissions import *
from .models import *

from rest_framework.generics import GenericAPIView # for line 25 till  38
from rest_framework import status # for line 25 till  38(genric based api )

from rest_framework.response import Response
from .serializers import *

# Create your views here.


class clientViewSet(ModelViewSet):
    serializer_class   = clientSerializer
    permission_classes = (IsAdminUser,)

    def get_queryset(self):
        return client.objects.all()



class user_registerAPIView(GenericAPIView):
    serializer_class = RegisterSerializer
    permission_classes =(AllowAny,)


    def post(self,request):
        user = request.data
        serializer = RegisterSerializer(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        user_data = serializer.data
        
        print(user_data)
        return Response({"status":"success","message":"User Registered Successfully"},status=status.HTTP_201_CREATED)

