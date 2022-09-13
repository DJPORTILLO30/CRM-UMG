# CRM UMG

### Backend-Instalacion
Este proyecto de backend está desarrollado en **JavaScript mediante el modulo de node-express**  por lo tanto para su uso e instalacion es necesario
contar con las siguientes dependecias:


- Nodemon
- Express
- Express-Validator
- BcryptJs
- Multer
- Sequelize
- Cors
- Dotenv
- JsonWebToken
- Swagge
- Swagger-UI
- Jest
- SuperTest

Así como propiamente dicho tener instalado Node.js (https://nodejs.org/es/download/)

Dado que el proyecto ya cuenta con un archivo package.json, solo deben de ejecutar el siguiente comando en la terminal para que se instalen automáticamente todas las dependencias necesarias:

```
$npm i
```
Para ejecutar la aplicacion debemos ejecutar el comando ``` $npm run dev```

### Git
Ya que el siguiente proyecto esta siendo realizado por varios equipos trabajaremos con diferentes ramas para cada caracteristica. 

- Equipo 1:
  - CodeReview
  - Establecer Version estable

- Equipo 2:
  - feature-Contactos
  - feature-Campañas
  
- Equipo 3:
  - feature-Productos
  
- Equipo 4:
  - feature-Negocios
  - feature-Llamadas
 
- Equipo 5:
  - feature-Usuarios
  - feature-Permisos
  - feature-Roles
  
- Equipo 6:
  - CodeReviewTest
  - CleanCode
  - Utilidades
  - Estado De modulos
  
Deben de traer los cambios hechos en la rama antes de enviar los suyos como recomendacion para evitar conflictos.

Si usan la terminal, el comando para traer cambios a la rama en que trabajan:

```
git pull 
```

La distribución de trabajo y branchs adicionales derivados de los ya asignados queda a discrecion de cada equipo siempre y cuando se respete un flujo de trabajo
claro.

Los commits deben de ser lo mas descriptivos posibles, mencionando funcionalidad, o motivo de cambio del codigo. Abstenerse a comentarios vacios o comentarios del
estilo : *xd*, *jaja*, *commit hecho*, *algo hace*, etc.

**NO REALIZAR PULL REQUEST DIRECTAMENTE DESDE SU RAMA HACIA LA RAMA MAIN**

Realizar un pull request hacia la rama ``` test-branch``` cuando tengan una caracteristica lista para ser probada e integrada al proyecto, estos pull request
deben de llevar como reviewer a los integrantes del Equipo 6 ( @SFMZ21 @HJOC15 @DJPORTILLO30 ) 
**QUEDA PROHIBIDO ACEPTAR UN PULL REQUEST HACIA ESTA RAMA POR SU CUENTA** alguien del equipo #6 luego de ser aprobado en la totalidad sus cambios o correciones
el cambio sera integrado, esto es para mantener bajo un flujo de control de calidad el Software, por favor atenerse a las indicaciones. Por lo tanto estar pendientes
de las conversaciones abiertas al solicitar un pull request por posibles cambios o mejoras.

En caso de haber un Merge-error seran contactadas las personas involucradas y un integrante del equipo #1 para solventarlo de manera eficaz.
