type QuantityProps = {
    quantity: number;
}

export function Quantity({
    quantity,
}: QuantityProps) {
    return (
        <div className="quantity">
            {quantity} Resultados
        </div>
    );
}