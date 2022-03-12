from django.urls import path
from django.urls.resolvers import URLPattern
from . import views
urlpatterns=[
	path('listcrickets',views.listcrickets,name='listcrickets'),
	path('listfootball',views.listfootball,name='listfootball'),
	path('listyoga',views.listyoga,name='listyoga'),
	path('listfitness',views.listfitness,name='listfitness'),
	path('retrievecricket/<str:pk>',views.retrievecrikets,name='retrievecricket'),
	path('retrievefootball/<str:pk>',views.retrievefootball,name='retrievefootball'),
	path('retrieveyoga/<str:pk>',views.retrieveyoga,name='retrieveyoga'),
	path('retrievefitness/<str:pk>',views.retrievefitness,name='retrievefitness'),
	path('listevents',views.listevents,name='listevents'),
	path('retrieveevents/<str:pk>',views.retrieveevents,name='retrieveevents'),
	path('updateevent/<str:pk>',views.updateevent,name='updateevent'),
	path('deleteevent/<str:pk>',views.deleteevent,name='deleteevent'),
	path('createevent',views.createevent,name='createevent'),
	path('retrievetimestamp',views.retrievetimestamp,name='retrievetimestamp'),
	path('createtimestamp',views.createtimestamp,name='createtimestamp'),
	path('retrieveprofile',views.retrieveprofile,name='retrieveprofile'),
	path('createprofile',views.createprofile,name='createprofile'),
	path('listallprofiles',views.listallprofiles,name='listallprofiles'),
	path('timestamplist',views.timestamplist,name='timestamplist'),
	path('listallvideos',views.listallvideos,name='listallvideos'),

]