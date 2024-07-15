import './tooltip.component.css';
type TooltipPros = {
    message: string;
}
export function Tooltip({
    message
}: TooltipPros) {
    return (
        <div className="tooltipLogoContainer">
            <div
                data-tooltip={message}
                className='tooltipLogo'
            >i</div>
        </div>
    )
}