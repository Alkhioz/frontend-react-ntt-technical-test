import "./button.component.css";

type buttonProps = {
    id?: string,
    variant: 'primary' | 'secondary',
    children: React.ReactNode,
    disabled?: boolean,
}

export function Button({
    id,
    variant,
    children,
    disabled=false,
}: buttonProps) {
    return (
        <button
            id={id}
            type="button"
            className={`button ${variant}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}