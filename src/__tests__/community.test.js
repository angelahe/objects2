import city from "../components/city";
import community from "../components/community";

const newCity1 = new city("Calgary", "51.0486 N", "114.0708 W", 100001);
const newCity2 = new city("Sydney", "33.8688 S", "151.2093 E", 100001);

const newCommunity = new community();
newCommunity.push(newCity1);
newCommunity.push(newCity2);

test('Test the whichSphere function', () => {

  expect(newCity1.whichSphere()).toBe("Northern Hemisphere");
  expect(newCity2.whichSphere()).toBe("Southern Hemisphere");

})

test('Test the getMostNorthern function', () => {

})

test('Test the getMostSouthern function', () => {

})

