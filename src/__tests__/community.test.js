import city from "../components/city";
import community from "../components/community";

const newCity1 = new city("Calgary", "51.0486 N", "114.0708 W", 1239000);
const newCity2 = new city("Sydney", "33.8688 S", "151.2093 E", 4452000);

const newCommunity = new community();

newCommunity.Community.push(newCity1);
newCommunity.Community.push(newCity2);

console.log("newCommunity with 2 cities", newCommunity);

test('Test the whichSphere function', () => {

  expect(newCommunity.whichSphere(0)).toBe("Northern Hemisphere");
  expect(newCommunity.whichSphere(1)).toBe("Southern Hemisphere");

})

test('Test the getMostNorthern function', () => {
 expect(newCommunity.getMostNorthern()).toBe(0);
})

test('Test the getMostSouthern function', () => {
  expect(newCommunity.getMostSouthern()).toBe(1);
})

test('Test the getPopulation function', () => {
  expect(newCommunity.getPopulation()).toBe(5691000)
})

