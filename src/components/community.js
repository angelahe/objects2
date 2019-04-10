import city from './city';

class community {

  constructor() {
    this.Communities = [];
  }

  addCommunity(name, latitude, longitude, population) {

    const newCommunity = new city(name, latitude, longitude, population);
    this.Communities.push(newCommunity);

  }

  whichSphere(index) {

    if (this.Communities[index].Latitude.includes("N")) {
      return ("Northern Hemisphere");
    } else if (this.Communities[index].Latitude.includes("S")) {
      return ("Southern Hemisphere");
    } else {
      return ("Not of this earth");
    }

  }


  // assume Latitude is stored as a string e.g. "51.0486 N"
  getMostNorthern() {

    let mostNorthern = "";
    let mostNorthLatitude = 0;
    let nextNorthLatitude = 0;

    for(let i=0; i<this.Communities.length; i++ ) {
      if (this.Communities[i].Latitude.includes("N")) {
        nextNorthLatitude = Number(this.Communities[i].Latitude.slice(0, -2));
      }
      if (nextNorthLatitude > mostNorthLatitude) {
        mostNorthLatitude = nextNorthLatitude;
        mostNorthern = this.Communities[i].Name;
      }
    }

    return(mostNorthern);

  }

  getMostSouthern() {
    let mostSouthern = "";
    let mostSouthLatitude = 0;
    let nextSouthLatitude = 0;

    for(let i=0; i<this.Communities.length; i++ ) {
      if (this.Communities[i].Latitude.includes("S")) {
        nextSouthLatitude = Number(this.Communities[i].Latitude.slice(0, -2));
      }
      if (nextSouthLatitude > mostSouthLatitude) {
        mostSouthLatitude = nextSouthLatitude;
        mostSouthern = this.Communities[i].Name;
      }
    }

    return(mostSouthern);
  }

  getPopulation() {
    //let population = 8237550;

    const totalPopulation = this.Communities.reduce(function (acc, obj) {return acc + obj.Population; }, 0);

    return(totalPopulation);
  }
}

export default community;