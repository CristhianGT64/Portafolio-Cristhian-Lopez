import { string } from "astro:schema";
import type { RedesSociales, InfoSobreMi, Skills, Experiencia, Contacto } from "../../interfaces/Interfaces";

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
    Infraestructura : [
        {name : 'postman', level : 70},
        {name : 'Docker', level : 15},
        {name : 'Azure', level : 23},
        {name : 'Terraform', level :20},
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

export const contactos : Contacto[] = [
    {
        name : 'Email',
        descripcion : 'crislopezgt84@gmail.com',
        icono : 'M3 7.5l8.6 5.4a2 2 0 002.2 0L22 7.5M4 18h16a1 1 0 001-1V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1z'
    },
        {
        name : 'Ubicación',
        descripcion : 'Comayagüela, Honduras',
        icono : 'M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z'
    },
]
