from dataclasses import field

from django.forms import ValidationError
from .models import client, models
from rest_framework import serializers
from django.contrib.auth.models import User

class clientSerializer(serializers.ModelSerializer):
    class Meta:
        model = client
        fields = '__all__'


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'username',
            'email',
            'password',
            'first_name'
            )
        
    def validate(self, attrs):
        username = attrs['username']
        email = attrs['email']

        user = None

        try:
            user = User.objects.get(username=username)

        except:
            pass

        # if user:
        #     raise ValidationError(
        #         "username already exists"
        #     )
        
        # if username.isalnum():
        #     raise ValidationError(
        #         "Username is not alphanumeric "
        #     )
        
        return attrs


    def create(self, v_data):
        return User.objects.create_user(**v_data)