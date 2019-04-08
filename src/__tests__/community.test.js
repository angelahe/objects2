import city from "../components/city";
import community from "../components/community";

const newCity1 = new city("Calgary", "51.0486 N", "114.0708 W", 1239000);
const newCity2 = new city("Sydney", "33.8688 S", "151.2093 E", 4452000);
const newCity3 = new city("Edmonton", "53.5444 N", "113.4909 W", 932550);
const newCity4 = new city("Auckland", "36.8485 S", "174.7633 E", 1614000);

const newCommunity = new community();

newCommunity.Community.push(newCity1);
newCommunity.Community.push(newCity2);
newCommunity.Community.push(newCity3);
newCommunity.Community.push(newCity4);

//console.log("newCommunity with 4 cities", newCommunity);

test('Test the whichSphere function', () => {

  expect(newCommunity.whichSphere(0)).toBe("Northern Hemisphere");
  expect(newCommunity.whichSphere(1)).toBe("Southern Hemisphere");
  expect(newCommunity.whichSphere(2)).toBe("Northern Hemisphere");
  expect(newCommunity.whichSphere(3)).toBe("Southern Hemisphere");

})

test('Test the getMostNorthern function', () => {
 expect(newCommunity.getMostNorthern()).toBe(2);
})

test('Test the getMostSouthern function', () => {
  expect(newCommunity.getMostSouthern()).toBe(3);
})

test('Test the getPopulation function', () => {
  expect(newCommunity.getPopulation()).toBe(8237550)
})

