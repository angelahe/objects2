import city from "../components/city";
import community from "../components/community";

describe('Test addCommunity', function() {
  const places = new community();
  expect(places).not.toBe(null);
  expect(places.Communities.length).toBe(0);
  places.addCommunity("Calgary", "51.0486 N", "114.0708 W", 1239000);
  expect(places.Communities.length).toBe(1);
  expect(places.Communities[0].Name).toBe("Calgary");
  expect(places.Communities[0].Latitude).toBe("51.0486 N");
  expect(places.Communities[0].Longitude).toBe("114.0708 W");
  expect(places.Communities[0].Population).toBe(1239000);
});

describe('Test whichSphere functionality', function() {
  const places = new community();
  places.addCommunity("Calgary", "51.0486 N", "114.0708 W", 1239000);
  places.addCommunity("Sydney", "33.8688 S", "151.2093 E", 4452000);
  places.addCommunity("Edmonton", "53.5444 N", "113.4909 W", 932550);
  places.addCommunity("Auckland", "36.8485 S", "174.7633 E", 1614000);
  
  test('Test the whichSphere function', () => {
    expect(places.whichSphere(0)).toBe("Northern Hemisphere");
    expect(places.whichSphere(1)).toBe("Southern Hemisphere");
    expect(places.whichSphere(2)).toBe("Northern Hemisphere");
    expect(places.whichSphere(3)).toBe("Southern Hemisphere");
  });

  test('Test the getMostNorthern function', () => {
    expect(places.getMostNorthern()).toBe("Edmonton");
  });

  test('Test the getMostSouthern function', () => {
    expect(places.getMostSouthern()).toBe("Auckland");
  });

  test('Test the getPopulation function', () => {
    expect(places.getPopulation()).toBe(8237550)
  });
});


describe('Test mostSouthern when all cities are in Northern Hemisphere', function() {
  const places = new community();
  places.addCommunity("Calgary", "51.0486 N", "114.0708 W", 1239000);
  places.addCommunity("Edmonton", "53.5444 N", "113.4909 W", 932550);

  test('Test the getMostSouthern function', () => {
    expect(places.getMostSouthern()).toBe("Calgary");
  });

});

describe('Test mostNorthern when all cities are in the Southern Hemisphere', function() {
  const places = new community();
  places.addCommunity("Sydney", "33.8688 S", "151.2093 E", 4452000);
  places.addCommunity("Auckland", "36.8485 S", "174.7633 E", 1614000);

  test('Test the getMostNorthern function', () => {
    expect(places.getMostNorthern()).toBe("Sydney");
  });

});

describe('test deleteCity', function() {
  const places = new community();
  places.addCommunity("Sydney", "33.8688 S", "151.2093 E", 4452000);
  expect(places).not.toBe(null);
  const wrongcity = new city("X", "11.1 N", "11.1 W", 1000);
  //attempt to delete a city not in the list
  expect(places.deleteCity(wrongcity)).toBe(false);

  expect(places.Communities.length).toBe(1);
  expect(places.deleteCity(places.Communities[0])).toBe(true);
  expect(places.Communities.length).toBe(0);

});

describe('test updateCommunity', function() {
  const places = new community();
  const updated = new city("Calgary", "88.8888 N", "11.1111 W", 10000);
  expect(places.updateCommunity(null, null)).toBe(false);
  places.addCommunity("Sydney", "33.8688 S", "151.2093 E", 4452000);
  expect(places.updateCommunity(places.Communities[0], updated)).toBe(true);
  expect(places.Communities[0].Name).toBe("Calgary");
  expect(places.Communities[0].Latitude).toBe("88.8888 N");
  expect(places.Communities[0].Longitude).toBe("11.1111 W");
  expect(places.Communities[0].Population).toBe(10000);

});

describe('test movedIn', function() {
  const places = new community();
  places.addCommunity("Sydney", "33.8688 S", "151.2093 E", 4452000);
  places.addCommunity("Auckland", "36.8485 S", "174.7633 E", 1614000);

  places.movedIn(places.Communities[0], 1000);
  expect(places.Communities[0].Population).toBe(4453000);
});

describe('test movedOut', function() {
  const places = new community();
  places.addCommunity("Sydney", "33.8688 S", "151.2093 E", 4452000);
  places.addCommunity("Auckland", "36.8485 S", "174.7633 E", 1614000);

  places.movedOut(places.Communities[0], 1000);
  expect(places.Communities[0].Population).toBe(4451000);
});