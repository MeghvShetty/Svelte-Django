# Svelte-Django Project using RESTfull-api

### Install Django Packages 
cd into djangoServer dir and run the following command.
```shell
$ python3 -m pip install -r requirement.txt
```
Apply migrations and create a superuser for the Django admin
```shell
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
```
run django server 
```shell 
$ python3 manage.py runserver
```
### Install Svelte Packages
cd into svelte_static dir and run the following command.
```shell
$ bun install
```
run svelete application using the following 
```shell
$ bun run dev
```
visit http://localhost:5173/