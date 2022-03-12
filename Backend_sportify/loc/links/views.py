from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics,status
from rest_framework.decorators import api_view
# Create your views here.
from .models import cricket,football,yoga,fitness,events,allvideos,profile,timestamp
from .serializers import cricketserialzers,footballserialzers,yogaserialzers,fitnessserialzers,eventserialzers,profileserialzers,allvideosserailzers,timestampserailzers
from rest_framework.generics import get_object_or_404
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
def retrievetimestamp(request,pk=None):
	queryset = timestamp.objects.all()
	link= get_object_or_404(queryset, id=pk)
	serializer = timestampserailzers(link, context={"request": request})
	serializer_data = serializer.data
	return serializer_data

