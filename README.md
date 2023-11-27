# Desafío: Aplicación de Redes Sociales

# Requisitos principales:

- Página de Inicio: Crea una página de inicio que muestre publicaciones de usuarios.
- Publicaciones de Usuarios: Muestra publicaciones de varios usuarios, incluyendo texto, imágenes, y comentarios.
- Funcionalidad de Comentarios: Permite a los usuarios comentar las publicaciones.
- Likes y Reacciones: Agrega la capacidad de dar "me gusta" o reaccionar a las publicaciones.
- Sistema de Perfiles: Implementa perfiles de usuario con imágenes, información personal y publicaciones específicas de cada usuario.
- Navegación entre Páginas: Utiliza rutas para navegar entre la página de inicio, páginas de perfil de usuario y páginas individuales de publicaciones.

# Consideraciones adicionales:

- Estado Global: Utiliza context API o Redux para administrar el estado global de la aplicación y compartir datos entre componentes.
- Gestión de Datos: Puedes utilizar una API simulada, una base de datos real o mocks de datos para simular la recuperación de publicaciones y comentarios.
- Interfaz de Usuario y Estilos: Diseña una interfaz atractiva y receptiva. Puedes usar bibliotecas de estilos como Material-UI, Chakra UI o Styled Components para mejorar la apariencia.

# Puntos extra (opcionales):
- Sistema de Mensajería: Implementa una funcionalidad de mensajería entre usuarios.
- Notificaciones: Agrega notificaciones en tiempo real para nuevos comentarios, reacciones o mensajes.
- Autenticación y Seguridad: Incorpora un sistema de autenticación con inicio de sesión y registro de usuarios para proteger las cuentas y las publicaciones.

Conclusión
Este desafío es más complejo y permite al desarrollador junior explorar conceptos avanzados de manejo de estado global, manejo de rutas, interacción con API, y la creación de una interfaz de usuario interactiva. El objetivo es desarrollar una aplicación tipo red social, que incluya varias funcionalidades y la gestión de múltiples componentes interconectados.

# La aplicacion debe tener un componente que permita mostrar notificaciones recientes
    * El componente tiene que mostrar una cantidad limitada de notificaciones(5)
    * Cada notificacion tiene que mostrar la foto del usuario que realizo la publicacion, nombre del usuario, un fragmento del texto de la publicacion (En caso de tenerlo, Caso contrario, debe tener un mensaje, 'Nombre del usuario' ha realizado una publicacion), y una marca del tiempo que ha pasado desde que se ha realizado la publicacion.
    * Al hacer clic en la notificacion, debe redirigir a una seccion donde se pueda visualizar el contenido de la publicacion
    * Al abrir la notificacion esta debe cambiar su estado a 'leida'

