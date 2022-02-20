from django.urls import path
from .views import BillBreakerViews

urlpatterns = [
    path('sean/', BillBreakerViews.as_view())
]