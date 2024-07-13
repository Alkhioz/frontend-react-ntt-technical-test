import "./button.component.css";

type buttonProps = {
    variant: 'primary' | 'secondary',
    children: React.ReactNode,
    disabled?: boolean,
}

export function Button({
    variant,
    children,
    disabled=false,
}: buttonProps) {
    return (
        <button
            type="button"
            className={`button ${variant}`}
            disabled={disabled}
            onClick={()=>{
                console.log("hola mundo")
            }}
        >
            {children}
        </button>
    );
}