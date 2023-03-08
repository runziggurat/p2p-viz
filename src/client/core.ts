

export const WORLD_WIDTH: number = 3600;
export const WORLD_HEIGHT: number = 1800;
export const INITIAL_CAMERA_Z: number = 3456;

export enum EShader {
    Icosa = 0,
    Picker,
    WorldMap,
    Connection,
    Gradient,
    Last
}

export enum EColorMode {
    Between = 0,
    Close,
    Degree,
    Last
}

export enum ENodeType {
    Single = 0,
    Super,
    Sub,
}

export interface ICamera {
    position: [number, number, number]
}

export interface IShader {
    vertex: string
    fragment: string
}

export enum EKeyId {
    ArrowLeft = 'left',
    ArrowRight = 'right',
    ArrowUp = 'up',
    ArrowDown = 'down',
    ZoomIn = 'in',
    ZoomOut = 'out',
    ToggleConnection = 'conn',
    ToggleCommand = 'command',
    ToggleFps = 'fps',
    ToggleGradient = 'gradient',
    ToggleHistogram = 'histogram',
    ColorMode = 'colormode'
}

export interface IKeyAction {
    id: EKeyId
    timestamp: number;
    acceleration: number;
    velocity: number
}

export interface IHistogram {
    label: string
    counts: number []
    max_count: number
}

export interface INode {
    addr: string
    betweenness: number
    closeness: number
    cell_position: number
    cell_height: number
    connections: number []
    geolocation: {
        country: string
        city: string
        coordinates: {
            latitude: number
            longitude: number    
        }
        timezone: string
        isp: string
    }
}

export interface IState {
    elapsed: number
    nodes: INode []
    histograms: IHistogram []
}
