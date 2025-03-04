MANUAL DE USO
- Instalación
Primero instalamos angular y sus node modules
	npm install
Después instalamos algunos comandos necesarios 
	npm install concurrently
	npm install json-server

- Ejecucion
Para iniciar los servicios puedes utilizar:
Un script que ejecuta los servicios en lote
	npm start
O utilizar los comandos uno por uno en diferentes terminales
	ng serve
	json-server --watch src/assets/tiendas.json --port 3000
	json-server --watch src/assets/productos.json --port 3001
