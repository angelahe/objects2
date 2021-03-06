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

  howBig() {

      if (this.Population > 100000) return "City";
      if (this.Population > 20000) return "Large town";
      if (this.Population >1000) return "Town";
      if (this.Population > 100) return "Village";
      if (this.Population > 0) return "Hamlet";

      //unknown size, return error
      return "Not sure how big this place is...";
  }

}

export default city