import type { Language } from "./Language.model";

export interface Project {
    title?: string,
    background_path?: string,
    languages_used?: Array<Language>,
    isDeployed: boolean,
    ghDirectoryPath : string,
    websitePath : string,
    isMouseOver : boolean,
    theme: string
}