import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { Input } from '../input.component';
import { minMaxLength } from '../../../utilities/minMaxLength.utility';

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
      />
    );
    const input = getByLabelText('ID');
    fireEvent.change(input, { target: { value: '12' } });
    expect(getByText('Invalid ID')).toBeInTheDocument();

    fireEvent.change(input, { target: { value: '123' } });
    expect(input).not.toHaveClass('inputError');
  });
});