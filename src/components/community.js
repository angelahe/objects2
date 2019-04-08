class community {

  constructor() {
    this.Community = [];
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
    let mostNorthern = NaN;
    let mostNorthLatitude = 0;
    let nextNorthLatitude = 0;

    for(let i=0; i<this.Community.length; i++ ) {
      if (this.Community[i].Latitude.includes("N")) {
        nextNorthLatitude = Number(this.Community[i].Latitude.slice(0, -2));
      }
      if (nextNorthLatitude > mostNorthLatitude) {
        mostNorthLatitude = nextNorthLatitude;
        mostNorthern = i;
      }
    }

    return(mostNorthern);
  }

  getMostSouthern() {
    let mostSouthern = NaN;
    let mostSouthLatitude = 0;
    let nextSouthLatitude = 0;

    for(let i=0; i<this.Community.length; i++ ) {
      if (this.Community[i].Latitude.includes("S")) {
        nextSouthLatitude = Number(this.Community[i].Latitude.slice(0, -2));
      }
      if (nextSouthLatitude > mostSouthLatitude) {
        mostSouthLatitude = nextSouthLatitude;
        mostSouthern = i;
      }
    }

    return(mostSouthern);
  }

  getPopulation() {
    let population = 8237550;

    const totalPopulation = this.Community.reduce(function (acc, obj) {return acc + obj.Population; }, 0);

    return(population);
  }
}

export default community;