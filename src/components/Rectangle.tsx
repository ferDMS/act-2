import clsx from "clsx";

interface RectangleProps {
    bgClass: string;
}

export default function Rectangle({ bgClass }: RectangleProps) {
    return (
        <div
            className={clsx("flex w-[50vw] h-[50vh]", bgClass, "rounded-xl")}
        />
    );
}
