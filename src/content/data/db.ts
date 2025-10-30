import { string } from "astro:schema";
import type { RedesSociales, InfoSobreMi, Skills, Experiencia, Proyectos } from "../../interfaces/Interfaces";

export const redes : RedesSociales[] = [
    {
        name : 'LinkedIn',
        url : 'https://www.linkedin.com/in/cristhian-david-lópez-227b50310',
        icon : 'M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7.5 0h3.84v1.97h.06c.53-1 1.83-2.06 3.77-2.06 4.04 0 4.79 2.66 4.79 6.11V23h-4v-6.51c0-1.55-.03-3.54-2.16-3.54-2.17 0-2.5 1.7-2.5 3.44V23h-4V8.5z'
    },
    {
        name : 'GitHub',
        url : 'https://github.com/CristhianGT64',
        icon : 'M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.02c-3.22.7-3.9-1.4-3.9-1.4-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.74 1.27 3.41.97.11-.75.41-1.27.75-1.56-2.57-.29-5.28-1.29-5.28-5.75 0-1.27.46-2.31 1.2-3.12-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 5.83 0c2.22-1.5 3.2-1.19 3.2-1.19.63 1.59.23 2.77.11 3.06.75.81 1.2 1.85 1.2 3.12 0 4.47-2.72 5.46-5.31 5.74.42.36.8 1.07.8 2.16v3.2c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z'
    },
    {
        name : 'Correo',
        url : 'mailto:crislopezgt84@gmail.com',
        icon : 'M3 7.5l8.57 5.43a2 2 0 0 0 2.16 0L22 7.5M4 18h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1z'
    }
]

export const sobreMi : InfoSobreMi[] =[
     {
        title : '',
        description : 'Soy un joven hondureño apasionado de las tecnologías de la computación, orientadas al desarrollo web, gestión de base de datos, redes, arquitectura computacional y soporte técnico. Disfruto el aprendizaje constante de nuevas tecnologías para la solución de problemas y crecimiento profesional, lo que me permite ser capaz de alinearme con los objetivos estratégicos de las organizaciones. Me caracterizo por cumplir las metas que se me proponen, procurando utilizar eficazmente todas las herramientas y habilidades necesarias para entregar resultados de calidad.',
    },
    {
        title : 'Pasatiempo ⚽🎮',
        description : 'Soy un aficionado del fútbol y los videojuegos: dos pasatiempos que disfruto tanto por diversión como por la estrategia y atención al detalle que ameritan.'
    },
    {
        title : 'Trayectoria Profesional 🧑🏻‍💼💼',
        description : 'Profesional con experiencia en instalación de redes, soporte técnico y desarrollo web, especializado en diagnóstico, reparación y atención al usuario. Enfocado en garantizar conectividad y soluciones rápidas en entornos empresariales.'
    }
]

export const skills : Skills = {
    FronEnd : [
        { name: 'Tailwind' , level : 45},
        {name : 'Boostrap', level : 30},
        {name : 'Astro', level : 25},
        {name : 'javaScript', level:30}
    ],
    BackEnd : [
        {name: 'Java', level : 70},
        {name : 'php', level : 75},
        {name: 'Python', level : 65},
        {name : 'Spring boot', level: 70},
        {name : 'Laravel', level: 60},
        {name : 'Fast Api', level: 20}

    ],
    DataBases : [
        {name : 'Mysql', level: 60},
        {name : 'SQLServer', level : 65},
        {name : 'Oracle', level : 60},
        {name : 'Data WareHouse', level : 15},
        {name : 'ETL', level : 15},
        {name : 'Mongo DB', level : 20}
    ],
    Otros : [
        {name : 'postman', level : 70},
        {name : 'Docker', level : 10},
        {name : 'Azure', level : 20},
        {name : 'Terraform', level :20},
        {name : 'Pandas', level : 50}
    ]

}

export const experiencias : Experiencia[] = [
    {
        titulo : 'Desarrollador web Jr',
        compania : 'SIT',
        periodo : '2024 - actualidad',
        descripcion : [
            'Desarrollador web jr'
        ],
        tecnolgias : [
            'Laravel', 'PHP', 'MYSQL', 'LiveWire', 'Tailwind', 'JavaScript' 
        ]
    },
        {
        titulo : 'Soporte Tecnico',
        compania : 'SIT',
        periodo : '2024 - actualidad',
        descripcion : [
            '•	Revisión y mantenimiento de equipos de cómputo.',
            '•	Planeamiento y ejecución de instalación de cableado de redes.'
        ],
        tecnolgias : []
    },
        {
        titulo : 'Conserje ',
        compania : 'SIT',
        periodo : '2022 - 2024',
        descripcion : [
            '•	Manipulación de documentación delicada para su proceso de fotocopiado y entrega correspondiente.',
            '•	Digitalización de documentos y organización de estos en la nube.',
            '•	Manejo de cuadros de Excel generando reportes según lo solicitado.'
        ],
        tecnolgias : []
    },
        {
        titulo : 'Soporte Tecnico',
        compania : 'Fanasa',
        periodo : '2021 - 2022',
        descripcion : [
            '•	Resolución de problemas técnicos computacionales',
            '•	Planeamiento y ejecución de instalaciones de cableado eléctrico.',
            '•	Planeamiento y ejecución de instalación de cableado de redes.'
        ],
        tecnolgias : []
    }
]

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
        codeUrl : 'codigo',
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
        codeUrl : 'codigo',
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
        codeUrl : 'codigo',
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
