from rest_framework import serializers
from .models import cricket,football,yoga,fitness,events,allvideos,profile,timestamp

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
