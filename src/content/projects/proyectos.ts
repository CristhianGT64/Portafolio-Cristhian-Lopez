
import type { Proyectos } from "../../interfaces/Interfaces"

export const proyectos : Proyectos [] = [
            {
        id : 'pokeApiQueue',
        nombre : 'PokeApi Queue',
        tecnologias : [
            'AZURE FUNCTIONS',
            'AZURE SQL DATABASE',
            'BLOB STORAGE',
            'PYTHON',
            'REACT',
            'FAST API',
            'TERRAFORM'
        ],
        descripcion : [
            '<p>El proyecto “Generador de Reportes V1” es una aplicación web desplegada en Azure que permite a los usuarios generar reportes CSV basados en datos obtenidos desde una API externa (PokeAPI). La solución está compuesta por un frontend en Next.js, una API en FastAPI, un proceso asíncrono basado en Azure Functions, y almacenamiento persistente utilizando Azure SQL Database y Blob Storage. El propósito central del sistema es ofrecer un flujo completamente automatizado para la solicitud, procesamiento y entrega de reportes, garantizando escalabilidad, disponibilidad y una adecuada separación entre componentes web, API y procesos de background. </p>',
            '<h2>Arquitectura de la Solución</h2>',
            '<img src="/images/projects/PokeApiQueueAzure.png" alt="Arquitectura para azure" class="rounded-lg w-full mt-4" />',
            '<h3>Implementación de Eliminación Completa de Reportes</h3>',
            '<p>Se añadió la capacidad de gestionar el ciclo de vida completo de los reportes mediante un mecanismo de eliminación segura. La funcionalidad incluye un botón de eliminación con confirmación, un endpoint DELETE en FastAPI y la eliminación de registros y archivos en Azure SQL Database y Blob Storage.</p>',
            '<h3>Enriquecer el Reporte con Detalles del Pokémon</h3>',
            '<p>Se modificó la Azure Function para consultar detalles adicionales de cada Pokémon, incluyendo estadísticas base y habilidades, incorporando dichas columnas en el CSV generado y manejando errores de llamadas individuales a la API externa.</p>',
            '<h3>Reportes con Muestreo Aleatorio</h3>',
            '<p>Se agregó un parámetro sample_size que permite generar reportes con un subconjunto aleatorio de datos. Se actualizó el frontend, el modelo Pydantic y la Azure Function para aplicar random.sample() cuando corresponda.</p>',
            '<h2>Desafíos Encontrados</h2>',
            '<p>Entre los desafíos se incluyen la sincronización entre servicios de Azure, manejo de latencia por múltiples llamadas a PokeAPI, actualización del modelo de datos, validación de parámetros opcionales, gestión de blobs en Azure y garantizar el despliegue continuo sin afectar la operación.</p>'

        ],
        imagen : '/images/projects/pokeApiImage.png',
        codeUrl :[
            {
                nombre : 'Terraform',
                url : "https://github.com/CristhianGT64/TerraformPokeApi"
            },
            {
                nombre : 'React',
                url : "https://github.com/CristhianGT64/UIPokeApiQueque "
            },
            {
                nombre : 'Sql',
                url : "https://github.com/CristhianGT64/sqlPokeApiQueque"
            },
            {
                nombre : 'BackGround',
                url : "https://github.com/CristhianGT64/FunctionPokeApiQueque"
            },
            {
                nombre : 'FastAPI',
                url : "https://github.com/CristhianGT64/apiPokeApiQueque"
            },
        ] ,
        demoUrl :[
            {
                nombre : 'UI',
                url : "https://ui-pokequequepcaiii-dev.azurewebsites.net/" 
            }, 
            {
                nombre : 'API',
                url : "https://api-pokequequepcaiii-dev.azurewebsites.net/" 
            }, 
        ] 
    },
    {
        id : 'terraform',
        nombre : 'Arquitectura para plataforma de alquiler y flota de vehículos',
        tecnologias : [
            'azure',
            'GitHub',
            'Terraform'
        ],
        descripcion : [
            '<h1> Resumen del Proyecto </h1>',
            '<p>Este proyecto implementa una infraestructura completa en Azure para una empresa de seguridad y logística que lanza una aplicación de renta de vehículos blindados. La solución separa las cargas de trabajo transaccionales (OLTP) de las analíticas (OLAP) para garantizar alto rendimiento operacional mientras se permite análisis profundo de datos históricos.</p>',
            '<p>Toda la infraestructura fue desplegada utilizando Terraform, siguiendo las mejores prácticas de Infrastructure as Code (IaC) para garantizar reproducibilidad, versionado y automatización.</p>',
            '<h1>Arquitectura de la Solución</h1>',
            '<img src="/images/projects/arquitecturaTerraform.png" alt="Arquitectura para azure" class="rounded-lg w-full mt-4" />',
            '<h1>Componentes Principales</h1>',
            `<h4>🗄️ Azure SQL Database</h4>
            Base de datos transaccional para operaciones en tiempo real: reservas, contratos y estado de flota`,
            `<h4> 📦 Data Lake Gen2</h4>
            Almacenamiento centralizado para datos históricos y logs de telemetría en formato JSON`,
            `<h4>🔄 Azure Data Factory </h4>
            Pipeline ETL batch programado que extrae datos OLTP y los carga en Data Lake`,
            `<h4>🔬 Azure Databricks</h4>
            Plataforma de análisis con notebooks y Apache Spark para procesar telemetría compleja`,
            `<h4>🔐 Azure Key Vault</h4>
            Gestión centralizada de secretos: connection strings, access keys y credenciales`,
        ],
        imagen : '/images/projects/imageTerraformAzure.png',
        codeUrl : [
         {
            nombre : 'Terraform',
            url : 'https://github.com/CristhianGT64/ArquitecturaAzureTerraform'
         } ,

        ],
        demoUrl :[
            {
                nombre : 'Demo',
                url :'#'
            }
        ] 
    },
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
        codeUrl :[
        {
            nombre : 'Java',
            url :     'https://github.com/CristhianGT64/CNN-reconocimiento-Facial-java-sin-librerias'
        }
        ] ,
        demoUrl :[
        {
            nombre : 'Demo',
            url :'#'
        }
        ] 
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
        codeUrl :[
            {
                nombre : 'DWH',
                url : '#'
            } 
        ] ,
        demoUrl :[
        {
            nombre : 'Demo',
            url :'#'
        }
        ] 
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
        codeUrl :[
          {
            nombre : 'Laravel',
            url : 'https://github.com/CristhianGT64/UberFrontEnd'  
          }
        ] ,
        demoUrl :[
        {
            nombre : 'Demo',
            url :'#'
        }
        ] 
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
        codeUrl :[
          {
            nombre : 'Java',
            url : 'https://github.com/CristhianGT64/Proyecto-Front-End-'  
          }
        ] ,
        demoUrl :[
        {
            nombre : 'Demo',
            url :'#'
        }
        ] 
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
        codeUrl :[
          {
            nombre : 'Python',
            url : '#'
          }  
        ] ,
        demoUrl :[
        {
            nombre : 'Demo',
            url :'#'
        }
        ] 
    },
    
]
