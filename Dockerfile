# Imagen base para Node.js
FROM node:18

# Directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar solo el archivo package.json
COPY package.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos
COPY server.js ./server.js
COPY swagger.yaml ./swagger.yaml

# Exponer el puerto que utiliza tu aplicación
EXPOSE 4000

# Comando para iniciar la aplicación
CMD ["node", "server.js"]
