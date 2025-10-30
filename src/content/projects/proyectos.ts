
import type { Proyectos } from "../../interfaces/Interfaces"

export const proyectos : Proyectos [] = [
        {
        id : 'cnnJava',
        nombre : 'Red neuronal convolucional (CNN) de reconocimiento de rostros.',
        tecnologias : [
            'JAVA'
        ],
        descripcion : [
            'Este sistema utiliza una Red Neuronal Convolucional (CNN) desarrollada en Java para realizar tareas de reconocimiento facial de rostros, utilizando fotografías modelos del rostro a predecir se entrena el modelo, se prueba con imágenes aleatorias donde este y no esté el rostro entrenado, integrando procesamiento de imágenes con métodos matemáticos y aprendizaje profundo en base a convoluciones, agrupamiento, ReLU y backpropagation. '
        ],
        imagen : '/images/projects/cnnJava.jpg',
        codeUrl : 'https://github.com/CristhianGT64/CNN-reconocimiento-Facial-java-sin-librerias',
        demoUrl : 'demo'
    },
    {
        id : 'dwhBienesRaices',
        nombre : 'Data Warehouse ',
        tecnologias : [
            'SQLSERVER',
            'POSTGRES SQL',
            'MONGO DB',
            'ORACLE',
            'ETL',
            'VIRTUAL BOX',
            'ODBC'
        ],
        descripcion : [
            'Data Warehouse (DWH) como plataforma centralizada de análisis empresarial, diseñada para integrar, almacenar y visualizar grandes volúmenes de información provenientes de diversas fuentes del negocio inmobiliario.',
            'El modelo de negocio aplicado corresponde al sector de bienes raíces, donde se gestionan diferentes tipos de datos distribuidos entre tres sistemas:',
            'El Sistema de Gestión de Propiedades utiliza Oracle como su base de datos relacional principal para administrar de manera eficiente el registro, la consulta y el seguimiento de propiedades inmobiliarias, propietarios, clientes y agentes. ',
            'El Sistema de Gestión de Contratos, basado en SQL Server, está diseñado para manejar de manera eficiente todos los elementos necesarios en la administración de contratos. ',
            'El Sistema de Historial de Operaciones, diseñado en Mongo DB, utiliza una estructura basada en colecciones para gestionar eficientemente registros históricos de diferentes aspectos de una organización.'

        ],
        imagen : '/images/projects/dwh.png',
        codeUrl : 'codigo',
        demoUrl : 'demo'
    },
    {
        id : 'webappUber',
        nombre : 'Web App de Uber ',
        tecnologias : [
            'SQLSERVER',
            'LARAVEL (PHP)',
            'SPRING BOOT (JAVA)',
            'JAVASCRIPT',
            'APIS REST',
            'POSTMAN'
        ],
        descripcion : [
            'plataforma que conecta a usuarios que necesitan transporte con conductores disponibles. Diseñada para ofrecer una experiencia rápida, segura y confiable, permite solicitar un viaje con solo unos toques desde el teléfono móvil, garantizando eficiencia tanto para el pasajero como para el conductor. ',
            'Utilización de dos tecnologías que crean una arquitectura de microservicios escalable, donde cada software recibe sus propios recursos de computación en un sistema distribuido. Manejar FrontEnd, Backend y base de datos en despliegues distintos sin tener que afectar a los demás mitigando riesgos de implementación.',
            'FrontEnd, desarrollado con Laravel, los controladores consumen dichas APIs REST de forma separada según el servicio que se requiera utilizando la dependencia de Guzzle, con la utilización del enrutamiento se trasladan los datos extraídos hacia la vista, ofreciendo funcionalidad e interacción con el sistema.',
            'Backend, emplea Spring Boot para la construcción de servicios, con controlador JDBC-TEMPLATE de SQL SERVER para la realización de sentencias preparadas en Java y preparación de DTO para el mapeo de datos segun el procedimiento almacenado ejecutado. Cada servicio mantiene su propia implementación y controlador según la tabla de la base de datos correspondiente, exponiendo sus funcionalidades a través de REST APIs, lo que permite una comunicación flexible.',
        ],
        imagen : '/images/projects/uber.png',
        codeUrl : 'https://github.com/CristhianGT64/UberFrontEnd',
        demoUrl : 'demo'
    },
        {
        id : 'webappDelivery',
        nombre : 'Web App de Delivery ',
        tecnologias : [
            'MYSQL',
            'LARAVEL (PHP)',
            'SPRING BOOT (JAVA)',
            'JAVASCRIPT',
            'APIS REST',
            'POSTMAN',
            'API GOOGLE MAPS PLATFORM'
        ],
        descripcion : [
            'web App de gestión de pedidos en línea. Es una solución rápida, intuitiva y segura que conecta a los usuarios con sus productos favoritos, directamente desde su dispositivo. Ya sea que busquen comida, productos del supermercado, medicamentos o cualquier otro artículo, pueden explorar catálogos actualizados, hacer pedidos en tiempo real y recibir entregas directamente en la puerta de su casa.',
            'Utilización de dos tecnologías que crean una arquitectura de microservicios escalable, donde cada software recibe sus propios recursos de computación en un sistema distribuido. Manejar FrontEnd, Backend y base de datos en despliegues distintos sin tener que afectar a los demás mitigando riesgos de implementación. ',
            'Backend, emplea Spring Boot para la construcción de servicios, con Spring Data JPA y el controlador MySQL JDBC para la comunicación con la base de datos mediante un enfoque ORM y DTO para el seteo de objetos personalizados. Cada servicio mantiene su propia implementación y controlador según la entidad correspondiente, exponiendo sus funcionalidades a través de REST APIs, lo que permite una comunicación flexible.',
            'FrontEnd, desarrollado con Laravel, los controladores consumen dichas APIs REST de forma separada según el servicio que se requiera utilizando la dependencia de Guzzle, con la utilización del enrutamiento se trasladan los datos extraídos hacia la vista, ofreciendo funcionalidad e interacción con el sistema. ',
            'Módulo de mapas y geolocalización para simulacion de movimiento de repartidores dentro de una región delimitada del Distrito Central y asignar automáticamente el repartidor más cercano a cada solicitud.  El frontEnd consume una API de Mapas mediante JavaScript. Utilizando la simulación de Latitudes y Longitudes de cada repartidor y fórmulas matemáticas de Trigonometría esférica se automatizo el cálculo de distancias y asignación de pedidos.'
        ],
        imagen : '/images/projects/delivery.png',
        codeUrl : 'https://github.com/CristhianGT64/Proyecto-Front-End-',
        demoUrl : 'demo'
    },
    {
        id : 'inventarioPython',
        nombre : 'Control de inventario para mercado pequeño',
        tecnologias : [
            'Python',
        ],
        descripcion : [
            'App de consola desarrollado de python de control de inventario y ventas de productos es una solución sencilla, eficiente y accesible, diseñada especialmente para pequeños negocios que necesitan gestionar su stock, realizar ventas y mantener un control claro de sus operaciones diarias sin complicaciones.',
            
        ],
        imagen : '/images/projects/inventarios.png',
        codeUrl : 'codigo',
        demoUrl : 'demo'
    },
]
