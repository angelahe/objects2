import city from './city';

class community {

  constructor() {
    this.Communities = [];
  }

  addCommunity(name, latitude, longitude, population) {

    const newCommunity = new city(name, latitude, longitude, population);
    this.Communities.push(newCommunity);

  }

  deleteCity(city) {
    const index = this.Communities.findIndex(a => a.Name === city.Name);
    console.log("index is ", index);
    if (index === -1) return false;
    if(index || index === 0) {
      this.Communities.splice(index, 1);
      return true;
    }
    else return false;
  }

  updateCommunity(city, updated) {
    const index = this.Communities.findIndex(a => a.name === city.name);
    //return false if city is not found
    if (index === -1) return false;
    if (index || index === 0) {
      this.Communities[index] = updated;
      return true;
    }
    else return false;

  }

  movedOut(city, number) {
    const thisCity = this.Communities.find(a => a.Name === city.Name);
    if (thisCity) {
      thisCity.movedOut(number);
      return true;
    }
    else
      return false;
  }

  movedIn(city, number) {
    const thisCity = this.Communities.find(a => a.Name === city.Name);
    if (thisCity) {
      thisCity.movedIn(number);
      return true;
    }
    else
      return false;
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

//when there are no cities in the Southern Hemisphere, get the most south of the northern hemisphere
  getMostSouthofNorth () {
    let mostSouthern = "";
    let nextNorthLatitude = 0;
    let mostSouthLatitude = Infinity;

    for(let i=0; i<this.Communities.length; i++) {
      if (this.Communities[i].Latitude.includes("N")) {
        nextNorthLatitude = Number(this.Communities[i].Latitude.slice(0, -2));
      }
      if(nextNorthLatitude < mostSouthLatitude) {
        mostSouthLatitude = nextNorthLatitude;
        mostSouthern = this.Communities[i].Name;
      }
    }
    console.log("most southern is", mostSouthern);
    return(mostSouthern);
  }
  //when there are no cities in the Northern Hemisphere, get the most north of the southern hemisphere

  getMostNorthofSouth() {
    let mostNorthern = "";
    let mostNorthLatitude = Infinity;
    let nextNorthLatitude = 0;

    for(let i=0; i<this.Communities.length; i++ ) {
      if (this.Communities[i].Latitude.includes("S")) {
        nextNorthLatitude = Number(this.Communities[i].Latitude.slice(0, -2));
      }
      if (nextNorthLatitude < mostNorthLatitude) {
        mostNorthLatitude = nextNorthLatitude;
        mostNorthern = this.Communities[i].Name;
      }
    }
    console.log("most northern is", mostNorthern);
    return(mostNorthern);
  }
  // assume Latitude is stored as a string e.g. "51.0486 N"
  getMostNorthern() {

    let mostNorthern = null;
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
    if (mostNorthern === null) {
      console.log("have no northern hemisphere cities");
      mostNorthern = this.getMostNorthofSouth();
    }

    return(mostNorthern);

  }

  getMostSouthern() {
    let mostSouthern = null;
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
    if (mostSouthern === null) {
      console.log("have no southern hemisphere cities");
      mostSouthern = this.getMostSouthofNorth();
    }

    return(mostSouthern);
  }

  getPopulation() {

    const totalPopulation = this.Communities.reduce(function (acc, obj) {return acc + Number(obj.Population); }, 0);

    return(totalPopulation);
  }
}

export default community;