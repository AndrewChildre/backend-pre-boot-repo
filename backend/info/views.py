from django.shortcuts import render
from rest_framework import viewsets
from .serializers import InfoSerializers
from .models import Info

class InfoViewSet(viewsets.ModelViewSet):
    serializer_class = InfoSerializers
    queryset = Info.objects.all()
