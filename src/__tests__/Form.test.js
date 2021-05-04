import { fireEvent, waitFor, render, screen } from '@testing-library/react';
import Form from '../Components/Form.js';
test('need to run the handler on button click', async () => {
  let dataHandler = jest.fn();
  render(<Form  dataHandler={dataHandler} />);
  let button = screen.getByText('GO!');
  expect(button).toBeInTheDocument();
  fireEvent.submit(button);
  await waitFor(() => expect(dataHandler).toHaveBeenCalled());
});