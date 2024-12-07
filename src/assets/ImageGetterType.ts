import { ImageFolder } from "./FolderDefinitions";

export interface ImageGetterProps<T extends keyof ImageFolder> {
    folder: T;
    image: ImageFolder[T];
    classname?: string;
    width?: number | string;
    height?: number | string;
    color?: string;
    onClick?: () => void
}