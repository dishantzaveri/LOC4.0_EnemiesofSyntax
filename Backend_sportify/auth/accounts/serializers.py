from rest_framework import serializers
from .models import User

import re

email_pattern = re.compile(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)")

class RegisterSerializer(serializers.ModelSerializer):
	password=serializers.CharField(max_length=32,min_length=8,write_only = True)
	
	class Meta:
		model = User
		fields = ['username','email','password','first_name','last_name','phone']
		
	def validate(self,attrs):
		email = attrs.get('email',' ')

		if not email_pattern.match(email):
			raise serializers.ValidationError('Please enter a valid email!')
		return attrs
		
	def create(self,validated_data):
            validated_data['is_active'] = True
            return User.objects.create_user(**validated_data)

class LoginSerializer(serializers.ModelSerializer):
    password=serializers.CharField(max_length=32,min_length=8,write_only = True)
    
    class Meta:
        model = User
        fields = ['email','password']

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ['email','username','first_name','last_name','phone']