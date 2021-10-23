import { render, fireEvent } from '@testing-library/react';
import { Tags } from '../../../components';
const tags = ['tag1', 'tag2'];

test('Should render Tags without breaking', () => {
  const { getByText } = render(<Tags tags={tags} />);
  tags.forEach(tag => {
    expect(getByText(`#${tag}`)).toBeInTheDocument();
  });
});

test('Should be able to click on a tag', () => {
  const mockOnClick = jest.fn();
  const { getByText } = render(<Tags tags={tags} onClick={mockOnClick} />);
  tags.forEach(tag => {
    fireEvent.click(getByText(`#${tag}`));
    expect(mockOnClick).toHaveBeenCalledWith(tag);
  });
});
