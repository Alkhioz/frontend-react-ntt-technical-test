import "./button.component.css";

type buttonProps = {
    id?: string,
    variant: 'primary' | 'secondary',
    children: React.ReactNode,
    disabled?: boolean,
    onClick?: ()=>void
}

export function Button({
    id,
    variant,
    children,
    disabled=false,
    onClick,
}: buttonProps) {
    return (
        <button
            id={id}
            type="button"
            className={`button ${variant}`}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}