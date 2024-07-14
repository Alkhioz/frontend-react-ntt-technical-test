import "./select.component.css";

type OptionType = {
    displayText: string;
    value: string;
}

type SelectProps = {
    options: OptionType[];
    disabled?: boolean;
}

export function Select({
    options,
    disabled,
}: SelectProps) {
    return (
        <select className="select" disabled={options?.length === 0 || disabled}>
            {
                options?.length > 0
                ? options?.map((option, index) => (
                    <option value={option.value} key={index}>
                        {option.displayText}
                    </option>
                ))
                : <option>No data</option>
            }
        </select>
    );
}