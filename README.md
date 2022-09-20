# Api-Auditor-a

# LIBRARY API


La aplicación presenta una API de una librería, donde es posible realizar
la creación, lectura de información, actualización y eliminación de la información
de los autores y libros que han publicado




Para usar correctamente la aplicación, tanto en un PC como en una máquina virtual, debe cumplir los siguientes requisitos:

- Tener un gestor de bases de datos para MariaDB
- Tener instalado node
- Tener instalado 


PASOS PARA CLONAR EXITOSAMENTE EL PROYECTO

1. Clonar el repositorio que se encuentra ___ en la plataforma
	git, usando el siguiente comando:

		git clone https://github.com/EstefaSora125/Api-Auditor-a.git

2. Debe abrir una terminar en la carpeta raíz donde se encuentra el proyecto
3. Debe ingresar la siguiente línea de comando

    ``` 
      npm i
    ```

Este comando instala los paquetes y cualquier paquetes del que dependa el proyecto
para que funcione de forma correcta

4. Para aplicar el esquema a la base de datos, ejecute este comando en la terminal

		npx prisma migrate dev 

5. Posteriormente deberá configurar la base da datos de MariaDB, teniendo en cuenta el usuario y la contraseña que registró de la siguiente manera:

     ``` 
     DATABASE_URL="mysql://usuario:clave@localhost:3309/aeropuerto?schema=public" 
     ```


PASOS PARA EL USO CORRECTO 

1. Debe registrar al menos un administrador, teniendo en cuenta el nombre del usuario y la contraseña
2. Autenticarse ara generar un token de acceso, ingresando con el usuario que ha registrado anteriormente. 
3. Debe registrar al menos a un autor con la información requerida
4. Debe registrar al menos un libro, este debe haber sido escrito o publicado por un autor que ya esté registrado, de lo contrario se generará un error
  
