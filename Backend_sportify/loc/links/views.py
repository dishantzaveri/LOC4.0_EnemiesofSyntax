from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics,status
from rest_framework.decorators import api_view
from django.http import JsonResponse
from rest_framework.generics import GenericAPIView
from rest_framework import status
from .models import User
from django.contrib.auth import login, authenticate
# Create your views here.
from .models import cricket,football,yoga,fitness,events,allvideos,profile,timestamp,User
from .serializers import cricketserialzers,footballserialzers,yogaserialzers,fitnessserialzers,eventserialzers,profileserialzers,allvideosserailzers,timestampserailzers,LoginSerializer, RegisterSerializer
from rest_framework.generics import get_object_or_404
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

class RegisterAPI(GenericAPIView):
    
    serializer_class = RegisterSerializer
    
    def post(self,request,*args,**kwargs):
        data = request.data
        serializer = self.serializer_class(data=data)
        serializer.is_valid(raise_exception = True)
        user = serializer.save()
        token = Token.objects.create(user=user)

        return Response({'Success':'Your account is successfully created'},status=status.HTTP_201_CREATED)

class LoginAPI(GenericAPIView):
    serializer_class = LoginSerializer
    
    def post(self,request,*args,**kwargs ):
        password = request.data['password']
        email = request.data['email']
        user = authenticate(email = email, password = password)
        if user:
            serializer = self.serializer_class(user)
            token = Token.objects.get(user=user)
            return JsonResponse({"token" : token.key,"username" : user.username, "email" : user.email, "name" : f"{user.first_name} {user.last_name}"},status = status.HTTP_200_OK)
        return JsonResponse({"error" : "Invalid Credentials"},status = status.HTTP_404_NOT_FOUND)

@api_view(['GET'])

def listcrickets(request):
        links=cricket.objects.all()
        serializer=cricketserialzers(links,many=True,context={"request":request})
        response_dict=serializer.data
        return Response(response_dict)



@api_view(['GET'])
def listfootball(request):
        links=football.objects.all()
        serializer=footballserialzers(links,many=True,context={"request":request})
        response_dict={"data":serializer.data}
        return Response(response_dict)

@api_view(['GET'])
def listyoga(request):
        links=yoga.objects.all()
        serializer=yogaserialzers(links,many=True,context={"request":request})
        response_dict={"data":serializer.data}
        return Response(response_dict)
@api_view(['GET'])
def listfitness(request):
        links=fitness.objects.all()
        serializer=fitnessserialzers(links,many=True,context={"request":request})
        response_dict={"data":serializer.data}
        return Response(response_dict)


@api_view(['GET'])
def retrievecrikets(request,pk=None):
        queryset = cricket.objects.all()
        link= get_object_or_404(queryset, id=pk)
        serializer = cricketserialzers(link, context={"request": request})

        serializer_data = serializer.data

        return Response({"data": serializer_data})

@api_view(['GET'])
def retrievefootball(request,pk=None):
        queryset = football.objects.all()
        link= get_object_or_404(queryset, id=pk)
        serializer = footballserialzers(link, context={"request": request})

        serializer_data = serializer.data

        return Response({"data": serializer_data})

@api_view(['GET'])
def retrieveyoga(request,pk=None):
        queryset = yoga.objects.all()
        link= get_object_or_404(queryset, id=pk)
        serializer = yogaserialzers(link, context={"request": request})

        serializer_data = serializer.data

        return Response({"data": serializer_data})

@api_view(['GET'])
def retrievefitness(request,pk=None):
        queryset = fitness.objects.all()
        link= get_object_or_404(queryset, id=pk)
        serializer = fitnessserialzers(link, context={"request": request})

        serializer_data = serializer.data

        return Response({"data": serializer_data})


@api_view(['GET'])
def listevents(request):
        links=events.objects.all()
        serializer=eventserialzers(links,many=True,context={"request":request})
        response_dict={"data":serializer.data}
        return Response(response_dict)

@api_view(['GET'])
def retrieveevents(request,pk=None):
        queryset = events.objects.all()
        link= get_object_or_404(queryset, id=pk)
        serializer = eventserialzers(link, context={"request": request})

        serializer_data = serializer.data

        return serializer_data

@api_view(['GET','PUT'])
@permission_classes([IsAuthenticated])
def updateevent(request, pk):
    try:
        model = events.objects.get(pk=pk)
    except:
        return Response('Not Found')
    if request.method == 'PUT':
        serializer = eventserialzers(model, request.data)
        if serializer.is_valid():
            serializer.save()
            return Response ("Updated")
        else:
            return Response ("Failed")

@api_view(['DELETE'])
def deleteevent(request, pk):
    item = events.objects.get(pk=pk)
    item.delete()
    return Response("Deleted")

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createevent(request):
    try:
        serializer=eventserialzers(data=request.data,context={"request":request})
        serializer.is_valid(raise_exception=True)
        serializer.save()
        dict_response={"error":False,"message":"event is Saved Successfully"}
    except:
        dict_response={"error":True,"message":"Error During Saving Patient Data"}
    return Response(dict_response)
@api_view(['GET'])
def listallvideos(request):
    links=allvideos.objects.all()
    serializer=allvideosserailzers(links,many=True,context={"request":request})
    response_dict=serializer.data
    return Response(response_dict)

@api_view(['GET'])
def timestamplist(request):
    links=timestamp.objects.all()
    serializer=timestampserailzers(links,many=True,context={"request":request})
    response_dict=serializer.data
    return Response(response_dict)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def listallprofiles(request):
    links=profile.objects.all()
    serializer=profileserialzers(links,many=True,context={"request":request})
    response_dict=serializer.data
    return Response(response_dict)

@api_view(['POST'])
def createprofile(request):
    try:
        serializer= profileserialzers(data=request.data,context={"request":request})
        serializer.is_valid(raise_exception=True)
        serializer.save()
        dict_response={"error":False,"message":"event is Saved Successfully"}
    except:
        dict_response={"error":True,"message":"Error During Saving Patient Data"}
    return Response(dict_response)

@api_view(['GET'])
def retrieveprofile(request,pk=None):
    queryset = profile.objects.all()
    link= get_object_or_404(queryset, id=pk)
    serializer = profileserialzers(link, context={"request": request})
    serializer_data = serializer.data
    return serializer_data

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createtimestamp(request):
    try:
        serializer= timestampserailzers(data=request.data,context={"request":request})
        serializer.is_valid(raise_exception=True)
        serializer.save()
        dict_response={"error":False,"message":"event is Saved Successfully"}
    except:
        dict_response={"error":True,"message":"Error During Saving Patient Data"}
    return Response(dict_response)
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def retrievetimestamp(request,pk=None):
    queryset = timestamp.objects.all()
    link= get_object_or_404(queryset, id=pk)
    serializer = timestampserailzers(link, context={"request": request})
    serializer_data = serializer.data
    return serializer_data




