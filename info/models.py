from django.db import models
from datetime import datetime

class Info(models.Model):
    name = models.CharField(max_length=50, default='non')
    pullups = models.CharField(max_length=50, default='non')
    situps = models.CharField(max_length=50, default='non')
    runtime = models.CharField(max_length=50, default='non')
    timestamp = models.DateTimeField(default=datetime.now)

    def __str__(self):
        return self.name