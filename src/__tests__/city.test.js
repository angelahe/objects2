import city from "../components/city";

test('Test the city show function', () => {
  const newCity = new city("Calgary", "51.0486 N", "114.0708 W", 1239000);
  expect(newCity.show()).toBe("Calgary 51.0486 N 114.0708 W 1239000");
});

test('Test the city movedIn function', () => {
  const newCity = new city("Calgary", "51.0486 N", "114.0708 W", 1000);
  expect(newCity.movedIn(1000)).toBe(2000);
});

test('Test the city movedOut function', () => {
  const newCity = new city("Calgary", "51.0486 N", "114.0708 W", 2000);
  expect(newCity.movedOut(1000)).toBe(1000);
});

