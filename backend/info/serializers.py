from rest_framework import serializers
from .models import Info

class InfoSerializers(serializers.ModelSerializer):
    class Meta:
        model = Info
        fields = ('id', 'name', 'pullups', 'situps', 'runtime', 'timestamp')
