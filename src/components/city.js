class city {

  constructor(name, latitude, longitude, population) {
    this.Name = name;
    this.Latitude = latitude;
    this.Longitude = longitude;
    this.Population = population;
  }

  show() {
    const attributeString = `${this.Name} ${this.Latitude} ${this.Longitude} ${this.Population}`;
    return attributeString;
  }

  movedIn(numPeople) {
    const populationIn = numPeople;
    return this.Population += populationIn;
  }

  movedOut(numPeople) {
    const populationOut = numPeople;
    return this.Population -= populationOut;
  }

}

export default city