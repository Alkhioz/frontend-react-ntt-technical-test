import "./card.component.css";

type cardProps = {
    children: React.ReactNode
}

export function Card({
    children
}:cardProps) {
    return (
        <main className="card">
            {children}
        </main>
    );
}