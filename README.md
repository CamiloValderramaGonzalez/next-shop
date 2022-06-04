# Next.js Teslo Shop

Para correr localmente. se necesita la base de datos

```
docker-compose up -d
```

-   El -d, significa **detached**

MongoDB URL local:

```
mongodb://localhost:27017/teslodb
```

## Configurar las variables de entorno

Renombrar las varioables de entorno **.env.template** a **.env**

-   Reconstruir los módulos de node y levantar next

```
yarn install
yarn dev
```

## Llenar la base de datos con informacion de pruebas

Llamar a :

```
http://localhost:3000/api/seed
```
