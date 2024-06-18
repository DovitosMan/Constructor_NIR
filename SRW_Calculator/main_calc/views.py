from django.http import HttpResponse
from django.shortcuts import render


def main_calc(request):  # HttpRequest
    return render(request, 'main_calc/main_calc.html')

