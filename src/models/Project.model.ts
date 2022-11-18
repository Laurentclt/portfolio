import type { Language } from "./Language.model";

export interface Project {
    title?: string,
    background_path?: string,
    languages_used?: Array<Language>
}