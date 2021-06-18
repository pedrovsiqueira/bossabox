import { ButtonIcon } from './ButtonIcon';
import { render, screen } from '@testing-library/react';

import user from '@testing-library/user-event';

const MockIcon = props => <svg {...props}></svg>;

test('Should render button correctly', () => {
  render(<ButtonIcon Icon={MockIcon} />);

  expect(screen.getByTestId('svg')).toBeInTheDocument();
});

test('Should call onClick if button is clicked', () => {
  const handleClickMock = jest.fn();
  render(<ButtonIcon onClick={handleClickMock} Icon={MockIcon} />);
  user.click(screen.getByTestId('svg'));
  expect(handleClickMock).toHaveBeenCalled();
});
