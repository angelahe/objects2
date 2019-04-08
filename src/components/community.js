import city from './city';

class community {

  constructor() {
    this.Community = [];
  }

  addCommunity(name, latitude, longitude, population) {

    const newCommunity = new city(name, latitude, longitude, population);
    this.Community.push(newCommunity);

  }

  whichSphere(index) {

    if (this.Community[index].Latitude.includes("N")) {
      return ("Northern Hemisphere");
    } else if (this.Community[index].Latitude.includes("S")) {
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

    for(let i=0; i<this.Community.length; i++ ) {
      if (this.Community[i].Latitude.includes("N")) {
        nextNorthLatitude = Number(this.Community[i].Latitude.slice(0, -2));
      }
      if (nextNorthLatitude > mostNorthLatitude) {
        mostNorthLatitude = nextNorthLatitude;
        mostNorthern = this.Community[i].Name;
      }
    }

    return(mostNorthern);

  }

  getMostSouthern() {
    let mostSouthern = "";
    let mostSouthLatitude = 0;
    let nextSouthLatitude = 0;

    for(let i=0; i<this.Community.length; i++ ) {
      if (this.Community[i].Latitude.includes("S")) {
        nextSouthLatitude = Number(this.Community[i].Latitude.slice(0, -2));
      }
      if (nextSouthLatitude > mostSouthLatitude) {
        mostSouthLatitude = nextSouthLatitude;
        mostSouthern = this.Community[i].Name;
      }
    }

    return(mostSouthern);
  }

  getPopulation() {
    //let population = 8237550;

    const totalPopulation = this.Community.reduce(function (acc, obj) {return acc + obj.Population; }, 0);

    return(totalPopulation);
  }
}

export default community;