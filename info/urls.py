from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import InfoViewSet

router = DefaultRouter()

router.register('results', InfoViewSet, 'results')

router.urls