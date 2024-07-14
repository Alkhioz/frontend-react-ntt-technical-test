import { ChangeEventHandler } from "react";
import "./select.component.css";

type OptionType = {
    displayText: string;
    value: string;
}

type SelectProps = {
    id?: string | undefined;
    options: OptionType[];
    disabled?: boolean;
    onChange?: ChangeEventHandler<HTMLSelectElement> | undefined;
}

export function Select({
    options,
    disabled,
    onChange,
    id,
}: SelectProps) {
    return (
        <select
            id={id}
            className="select"
            disabled={options?.length === 0 || disabled}
            onChange={onChange}
        >
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