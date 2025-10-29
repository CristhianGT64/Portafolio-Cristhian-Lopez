import { string } from "astro:schema";
import type { RedesSociales, InfoSobreMi, Skills, Experiencia } from "../../interfaces/Interfaces";

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

export const experiencia : Experiencia[] = [
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
