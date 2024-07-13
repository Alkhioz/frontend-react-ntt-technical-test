import { useState } from "react";
import "./input.component.css";

type ValidationRulesType = {
    action: (value: string) => boolean,
    errorText: string,
}

type InputProps = {
    id: string,
    labelText: string,
    placeholder?: string,
    validationRules?: ValidationRulesType[]
}

export function Input({
    id,
    labelText,
    placeholder,
    validationRules,
}: InputProps) {
    const [errorText, setErrorText] = useState<string | null>();
    return (
        <div className="inputContainer">
            <label htmlFor={id}>{labelText}</label>
            <input
                id={id}
                type="text"
                className={`input ${errorText ? 'inputError' : ''}`}
                placeholder={placeholder}
                onChange={(evt) => {
                    const errorText = validationRules?.find(
                        (rule) => !rule.action(evt?.target?.value)
                    )?.errorText;
                    setErrorText(errorText ?? null);
                }}
            >
            </input>
            {
                errorText ? <div className="error">{errorText}</div> : null
            }
        </div>
    );
}