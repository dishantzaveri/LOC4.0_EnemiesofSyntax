from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib.auth.base_user import BaseUserManager	
from django.contrib.auth.models import AbstractUser
from rest_framework.authtoken.models import Token
#from django.core.validators import MaxValueValidator, MinValueValidator
# Create your models here.

class UserManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifier
    for authentication instead of usernames.
    """
    def create_user(self, email, password, **extra_fields):
        """
        Create and save a User with the given email and password.
        """
        if not email:
            raise ValueError('The Email must be set')
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        """
        Create and save a superuser with the given email and password.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        return self.create_user(email, password, **extra_fields)

class User(AbstractUser):
    email = models.EmailField(("Email Address"),primary_key=True)
    phone = models.BigIntegerField(default=9767297781,validators=[MinValueValidator(10000000), MaxValueValidator(10000000000)])

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS=[]

    objects = UserManager()

    def __str__(self):
        return self.email

    @property
    def token(self):
        token = Token.objects.get(user=User.objects.get(self.id))
        return token

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
	height = models.CharField(max_length=1000,default='')
	photo = models.ImageField(upload_to = 'events/',blank = True)
	age = models.IntegerField(default=0)
	sports = models.CharField(max_length=1000,default='')
	phone = models.BigIntegerField(default=9767297781,validators=[MinValueValidator(10000000), MaxValueValidator(10000000000)])
class timestamp(models.Model):
 	id =models.AutoField(primary_key=True)
 	timestamp = models.CharField(max_length=1000,default='')
 	completed = models.BooleanField(default=False)
 	title = models.CharField(max_length=1000,default='')
 	link = models.CharField(max_length=1000,default='')
