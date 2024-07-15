import '@testing-library/jest-dom';
import { render, fireEvent, act } from '@testing-library/react';
import { Input } from '../input.component';
import { minMaxLength } from '../../../../utilities/minMaxLength.utility';
import React from 'react';

interface InputHandle {
  id: string;
  resetError: () => void;
  hasError: () => boolean;
  setError: (error: string) => void;
}

describe('Input Component', () => {
  it('should show error for invalid ID (minMaxLength)', () => {
    const { getByLabelText, getByText } = render(
      <Input
        id="1"
        labelText="ID"
        validationRules={[
          {
            action: minMaxLength(3, 20),
            errorText: 'Invalid ID'
          }
        ]}
        disabled={false}
        type='text'
        onChange={() => { }}
      />
    );
    const input = getByLabelText('ID');
    fireEvent.change(input, { target: { value: '12' } });
    expect(getByText('Invalid ID')).toBeInTheDocument();

    fireEvent.change(input, { target: { value: '123' } });
    expect(input).not.toHaveClass('inputError');
  });

  it('Testing error handling from parent component', () => {
    const ref = React.createRef<InputHandle>();
    const { container, getByText } = render(
      <Input
        ref={ref}
        id="1"
        labelText="ID"
        validationRules={[
          {
            action: minMaxLength(3, 20),
            errorText: 'Invalid ID'
          }
        ]}
        disabled={true}
        onChange={() => { }}
      />
    );

    expect(ref.current?.hasError()).toBe(false);

    act(() => {
      ref.current?.setError('This is an error');
    });
    expect(ref.current?.hasError()).toBe(true);
    expect(getByText('This is an error')).toBeInTheDocument();

    act(() => {
      ref.current?.resetError();
    });
    expect(ref.current?.hasError()).toBe(false);

    const input = container.querySelector('input[type="text"]');
    expect(input).toBeInTheDocument();
  });

});