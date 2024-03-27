export interface DataItem {
    name: string
    pid: number
    tags: string[]
    source: string
}

export type Data = DataItem[];