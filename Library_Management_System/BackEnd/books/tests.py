from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from .models import CustomerUser


class CreateUserTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user_data = {
            "email": "test@example.com",
            "name": "Test User",
            "phone": "1234567890",
            "address": "123 Test St",
            "college": "Test College",
            "password": "testpassword",
        }

    def test_create_user(self):
        response = self.client.post(
            reverse("user-list-create"), self.user_data, format="json"
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
