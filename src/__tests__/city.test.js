import city from "../components/city";

test('Test the city show function', () => {
  const newCity = new city("Calgary", "51.0486 N", "114.0708 W", 1239000);
  expect(newCity.show()).toBe("Calgary 51.0486 N 114.0708 W 1239000");
})

test('Test the city movedIn function', () => {
  const newCity2 = new city("Calgary", "51.0486 N", "114.0708 W", 1000);
  expect(newCity2.movedIn(1000)).toBe(2000);
})

test('Test the city movedOut function', () => {
  const newCity3 = new city("Calgary", "51.0486 N", "114.0708 W", 2000);
  expect(newCity3.movedOut(1000)).toBe(1000);
})

test('Test the howBig function', () => {
  const newCity4 = new city("Calgary", "51.0486 N", "114.0708 W", 100001);
  const newCity5 = new city("Olds", "51.0486 N", "114.0708 W", 20001);
  const newCity6 = new city("Didsbury", "51.0486 N", "114.0708 W", 1200);
  const newCity7 = new city("Cremona", "51.0486 N", "114.0708 W", 400);
  const newCity8 = new city("Water Valley", "51.0486 N", "114.0708 W", 10);

  expect(newCity4.howBig()).toBe("City");
  expect(newCity5.howBig()).toBe("Large town");
  expect(newCity6.howBig()).toBe("Town");
  expect(newCity7.howBig()).toBe("Village");
  expect(newCity8.howBig()).toBe("Hamlet");
})



