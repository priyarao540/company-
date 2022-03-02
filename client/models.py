from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class client(models.Model):
    user = models.ForeignKey(to=User,on_delete=models.CASCADE)
    client_id = models.IntegerField(primary_key=True)
    c_name = models.CharField(max_length=255,default="mukesh")
    c_email = models.CharField(max_length=255,unique=True)
    c_phone  = models.CharField(max_length=15,default="987654321")

    
# Create your models here.
