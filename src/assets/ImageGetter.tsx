import { ComponentProps, FC, useEffect, useRef, useState } from "react";
import { ImageGetterProps } from "./ImageGetterType";
import { ImageFolder } from "./FolderDefinitions";

const useLazySvgImport = (folder: string, name: string) => {
    const importRef = useRef<FC<ComponentProps<"svg">>>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error>();

    useEffect(() => {
        setLoading(true);
        const importIcon = async () => {
            try {
                importRef.current = (
                    await import(`./${folder}/${name}.svg?react`)
                ).default;
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };
        importIcon();
    }, [folder, name]);

    return {
        error,
        loading,
        Svg: importRef.current,
    };
};

const ImageGetter: <T extends keyof ImageFolder>(props: ImageGetterProps<T>) =>
    JSX.Element = ({ folder, image, color, width, height, classname, onClick }) => {
        const { Svg } = useLazySvgImport(folder, image);

        return (
            <>
                {Svg && <Svg
                    className={classname}
                    fill={color || "#fff"}
                    width={width}
                    height={height}
                    onClick={onClick}
                />}
            </>
        );
    };

export default ImageGetter;
