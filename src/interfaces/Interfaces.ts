export interface RedesSociales {
    name : string
    url : string
    icon : string
}

export interface InfoSobreMi {
    title : string,
    description : string
}

interface Skill {
    name: string;
    level: number;
}

export interface Skills {
    [categoria: string]: Skill[];
}

export interface Experiencia {
    titulo : string,
    compania : string,
    periodo : string,
    descripcion : string [],
    tecnolgias :  string []
}
export interface Proyectos {
    id : string,
    nombre : string,
    tecnologias : string [],
    descripcion : string [],
    imagen : string
    codeUrl : string,
    demoUrl : string
}