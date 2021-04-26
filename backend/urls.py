from django.contrib import admin
from django.urls import path, include
from info import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'results', views.InfoViewSet, 'results')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
    
]
