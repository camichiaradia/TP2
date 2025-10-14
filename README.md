# Chat de Whatsapp:

Este proyecto fue creado con React, js, css y html. 
En un principio se generaron los componentes que contienen las funciones para las parte que conforman un Whatsapp: Lista de Contacactos junto al ContactsData que contiene toda la información de los chats de cada persona junto a conversación hablada con "Yo" y el ContactService.js que contiene la función que llama a todos los contactos con su id. 
Luego generamos la Lista de mensajes que está compuesta por el ChatHeader, el MessageList y el NewMessageForm.
Luego para generar el armado de todo se crean las carpetas Screen en donde generamos dos patallas principales de visualización: 
1. HomeScreen: Que contiene el HTML de la lista de contactos y su componente ContactList.
2. MessageScreen: Que contiene el HTML de la lista de mensajes, con sus componentes, ChatHeader, MessageList, Message y NewMessageForm.
Ambos vinculdos con su CSS personalizado.
Una vez armada la estructura se inicio con la intalación del React-Route para poder vincular una pantalla con otra, ejemplo: Cuando al tocar un contacto de la lista del contacto este abría en la columna dos el chat contacto seleccionado.
Pero antes se debió indicar en el main, en donde queria que se renderice mi App, es decir, en donde queria que se haga visible. En este caso lo indicamos en el archivo App.jsx
Luego en este se generan las dos Rutas de las páginas principales: la primera: "/", que contiene a la primer parte de la columna de la lista de contactos. y una segunda ruta: "/contacto/:id_contacto" que hace visible a la lista de mensaje de cada contacto.
Una vez armado esto, se armó el contexts para generar los vinculos de contacto con su mensaje, generando a la vez un Loading de espera para hacer visible los mensajes al hacer click en cada contacto que se seleccione y tambien se declara la función del "new_message" dentro del formulario para que en este al escribir pueda subir el nuevo mensaje enviado por "Yo". Realizados los contexts indicados, luego se los vinculó a los dos JSX. principales del sitio para que pueda verse y visualizarce toda las funciones y luego se le suma el CSS, para darle estructura, diseño y visibilidad parecida a la de la app.
Por último y para finalizar, se genera el MEDIA QUERY RESPONSIVE adaptado a pantalla celular, tablet y de escritorio, haciendo visibles con display:flex; u ocultando con display: none, las secciones que contiene el CSS.
