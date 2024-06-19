from django.urls import path

from . import views
from .views import *

urlpatterns = [
    path("", main_calc, name='main_calc'),

]
