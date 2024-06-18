from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import AuthenticationForm


class LoginUserForm(AuthenticationForm):
    username = forms.CharField(label="Логин",
                               widget=forms.TextInput(attrs={'class': 'mail', 'placeholder': "Логин или почта"}))
    password = forms.CharField(label="Пароль",
                               widget=forms.PasswordInput(attrs={'class': 'password', 'placeholder': "Пароль"}))

    class Meta:
        model = get_user_model()
        fields = ['username', 'password']


class RegisterUserForm(forms.ModelForm):
    username = forms.CharField(label="Логин",
                               widget=forms.TextInput(attrs={'class': 'login', 'placeholder': "Логин"}))
    mail = forms.CharField(label="Почта",
                               widget=forms.TextInput(attrs={'class': 'mail', 'placeholder': "Почта"}))
    password = forms.CharField(label="Пароль",
                               widget=forms.PasswordInput(attrs={'class': 'password', 'placeholder': "Пароль"}))
    password2 = forms.CharField(label="Подтвердите пароль",
                                widget=forms.PasswordInput(attrs={'class': 'password', 'placeholder': "Подтвердите пароль"}))

    class Meta:
        model = get_user_model()
        fields = ['username', 'email', 'first_name', 'last_name', 'password', 'password2']
        labels = {'email': 'E-mail', 'first_name': "Имя", 'last_name': 'Фамилия', }
