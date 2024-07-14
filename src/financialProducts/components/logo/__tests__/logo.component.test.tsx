import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { Logo } from '../logo.component';

describe('Logo Component Test', () => {
  it('Since src is invalid the component should have the default svg', () => {
    const { getByRole, queryByRole } = render(
      <Logo
        src=''
      />
    );
    const imgElement = getByRole('img', { hidden: true }) as HTMLImageElement;
    fireEvent.error(imgElement);
    expect(queryByRole('img', { hidden: true })).toBeNull();
  });
  it('Since src is valid the component should show it', () => {
    const { getByRole } = render(
      <Logo
        src=''
      />
    );
    const imgElement = getByRole('img', { hidden: true }) as HTMLImageElement;
    expect(imgElement).toBeInTheDocument();
  });
});