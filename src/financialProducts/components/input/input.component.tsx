import { forwardRef, LegacyRef, useImperativeHandle, useState } from "react";
import "./input.component.css";

type ValidationRulesType = {
    action: (value: string) => boolean,
    errorText: string,
}

type InputProps = {
    disabled?: boolean,
    id: string,
    labelText: string,
    placeholder?: string,
    validationRules?: ValidationRulesType[]
    elementRef?: LegacyRef<HTMLInputElement>
}

export type InputHandle = {
    resetError: () => void;
    hasError: () => boolean;
};

export const Input = forwardRef<InputHandle, InputProps>(({
    id,
    labelText,
    placeholder,
    validationRules,
    elementRef,
    disabled,
}, ref) => {
    const [errorText, setErrorText] = useState<string | null>();

    useImperativeHandle(ref, () => ({
        resetError: () => setErrorText(null),
        hasError: () => !!errorText,
    }));

    return (
        <div className={`inputContainer ${disabled ? 'disabledInput' : ''}`}>
            <label htmlFor={id}>{labelText}</label>
            <input
                disabled={disabled}
                id={id}
                ref={elementRef}
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
});