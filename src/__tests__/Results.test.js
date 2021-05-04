import { render, screen } from '@testing-library/react';
import Results from '../Components/Results.js';
let raw;
let data;

beforeAll(async()=>{
     raw = await fetch("https://swapi.dev/api/people/");
     data = await raw.json();
})
test('it should render star wars list', () => {
  
  
  render(<Results rawPeople={raw} people={data} />);
  const Section = screen.getByText('count');
  expect(Section).toBeInTheDocument();
});