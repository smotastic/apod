import MockApod from "./mockapod";

export interface ApodDetails {
    copyright?: string,
    date: string,
    explanation: string,
    hdurl?: string,
    media_type: string,
    service_version: string,
    title: string,
    url: string
}
export interface Apod {
    find: () => Promise<ApodDetails[]>
}
export const apod: Apod = new MockApod();