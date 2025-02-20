interface ButtonProps {
    color: string;
}

export default function Button({ color }: ButtonProps) {
    return (
        <button
            className={`flex bg-${color}-300 w-20 h-20 rounded-md justify-center items-center font-bold`}
        ></button>
    );
}
