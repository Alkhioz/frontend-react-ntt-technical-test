import './tooltip.component.css';
type TooltipPros = {
    message: string;
}
export function Tooltip({
    message
}: TooltipPros) {
    return (
        <div className='tooltip'>
            <div className='tooltipLogo'>
                i
            </div>
            <div className='tooltipText'>
                {message}
            </div>
        </div>
    )
}