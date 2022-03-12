from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
# Create your models here.

class allvideos(models.Model):
	id = models.AutoField(primary_key=True)
	title = models.CharField(max_length=1000,default='')
	description = models.CharField(max_length=1000,default='')
	link = models.CharField(max_length=1000,default='')
	sports_type = models.CharField(max_length=1000,default='')

class cricket(models.Model):
	id=models.AutoField(primary_key=True)
	title = models.CharField(max_length=1000,default='')
	description = models.CharField(max_length=1000,default='')
	sports_type = models.CharField(max_length=1000,default='')
	completed = models.BooleanField(default=False)
	link = models.CharField(max_length=1000,default='')

class football(models.Model):
	id =models.AutoField(primary_key=True)
	title = models.CharField(max_length=1000,default='')
	description = models.CharField(max_length=1000,default='')
	sports_type = models.CharField(max_length=1000,default='')
	completed = models.BooleanField(default=False)
	link = models.CharField(max_length=1000,default='')

class yoga(models.Model):
	id =models.AutoField(primary_key=True)
	title = models.CharField(max_length=1000,default='')
	description = models.CharField(max_length=1000,default='')
	sports_type = models.CharField(max_length=1000,default='')
	completed = models.BooleanField(default=False)
	link = models.CharField(max_length=1000,default='')

class fitness(models.Model):
	id =models.AutoField(primary_key=True)
	title = models.CharField(max_length=1000,default='')
	description = models.CharField(max_length=1000,default='')
	sports_type = models.CharField(max_length=1000,default='')
	completed = models.BooleanField(default=False)
	link = models.CharField(max_length=1000,default='')

class events(models.Model):
	id = models.AutoField(primary_key=True)
	title=models.CharField(max_length=1000,default='')
	location = models.CharField(max_length=1000,default='')
	photo = models.ImageField(upload_to = 'events/',blank = True)
	sports = models.CharField(max_length=1000,default='')
	Timing = models.CharField(max_length=1000,default='')
	phone = models.BigIntegerField(default=9767297781,validators=[MinValueValidator(10000000), MaxValueValidator(10000000000)])
	description = models.CharField(max_length=1000,default='')

class profile(models.Model):
	id = models.AutoField(primary_key=True)
	name = models.CharField(max_length=1000,default='')
	weight = models.CharField(max_length=1000,default='')
	photo = models.ImageField(upload_to = 'events/',blank = True)
	age = models.IntegerField(default=0)
	sports = models.CharField(max_length=1000,default='')
class timestamp(models.Model):
 	id =models.AutoField(primary_key=True)
 	timestamp = models.CharField(max_length=1000,default='')
 	completed = models.BooleanField(default=False)
 	title = models.CharField(max_length=1000,default='')
 	link = models.CharField(max_length=1000,default='')
