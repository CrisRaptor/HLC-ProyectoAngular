<h1>MANUAL DE USO</h1>
<div>
	<h2>Instalación</h2>
	<p>Primero instalamos angular y sus node modules</p>
	<ul>
		<li>npm install</li>
	</ul>
	<p>Después instalamos algunos comandos necesarios</p>
	<ul>
		<li>npm install concurrently</li>
		<li>npm install json-server</li>
	</ul>
</div>

<div>
	<h2>Ejecución</h2>
	<p>Para iniciar los servicios puedes utilizar:</p>
	<p>Un script que ejecuta los servicios en lote</p>
	<ul>
		<li>npm start</li>
	</ul>
	<p>O utilizar los comandos uno por uno en diferentes terminales</p>
	<ul>
		<li>ng serve</li>
		<li>json-server --watch src/assets/tiendas.json --port 3000</li>
		<li>json-server --watch src/assets/productos.json --port 3001</li>
	</ul>
</div>
