#from django.contrib import admin

from django.urls import path,re_path,include
from .views import *
from rest_framework.routers import DefaultRouter
router = DefaultRouter()

router.register("client" ,clientViewSet, basename="client")
#from line 10 to 16,21,22,23are for token only
from rest_framework import permissions
from rest_framework_simplejwt.views import TokenVerifyView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)
urlpatterns = [
    #path('admin/', admin.site.urls),
    # path('api-auth/', include('rest_framework.urls')),
    
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),

    path('register/',user_registerAPIView.as_view(),name='api/register'),





]+router.urls


