import { Module } from "./module";

export interface Training {
    id?: string;
    name?: string;
    summary?: string;
    instructor?: string;
    duration?: number;
    active?: boolean;
    author?: string;
    modules?: Module[];
}
