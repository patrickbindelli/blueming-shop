## Desenvolvimento
Preencher o arquivo docker-compose-dev.yml com as envs
```
backend:
 environment:
      - DEBUG=1
      - SECRET_KEY=
      - ALLOWED_HOSTS=localhost
      - SQL_ENGINE=django.db.backends.postgresql
      - SQL_DATABASE=
      - SQL_USER=
      - SQL_PASSWORD=
      - SQL_HOST=database
      - SQL_PORT=
database:
   environment:
      - POSTGRES_USER=
      - POSTGRES_PASSWORD=
      - POSTGRES_DB=
```