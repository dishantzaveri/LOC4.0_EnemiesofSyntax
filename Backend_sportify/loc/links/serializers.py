from rest_framework import serializers
from .models import cricket,football,yoga,fitness,events,allvideos,profile,timestamp,User

import re

email_pattern = re.compile(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)")

class RegisterSerializer(serializers.ModelSerializer):
	password=serializers.CharField(max_length=32,min_length=8,write_only = True)
	
	class Meta:
		model = User
		fields = ['username','email','password']
		
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

class cricketserialzers(serializers.ModelSerializer):
	class Meta:
		model = cricket 
		fields = '__all__'

class footballserialzers(serializers.ModelSerializer):
	class Meta:
		model = football 
		fields = '__all__'

class yogaserialzers(serializers.ModelSerializer):
	class Meta:
		model = yoga 
		fields = '__all__'

class fitnessserialzers(serializers.ModelSerializer):
	class Meta:
		model = fitness 
		fields = '__all__'

class eventserialzers(serializers.ModelSerializer):
	class Meta:
		model = events
		fields = '__all__'

class profileserialzers(serializers.ModelSerializer):
	class Meta:
		model = profile
		fields = '__all__'

class allvideosserailzers(serializers.ModelSerializer):
	class Meta:
		model = allvideos
		fields = '__all__'
class timestampserailzers(serializers.ModelSerializer):
	class Meta:
		model = timestamp
		fields = '__all__'
