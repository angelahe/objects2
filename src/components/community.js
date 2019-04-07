class community {

  constructor() {
    this.Community = [];
  }

  whichSphere() {

    if (this.Latitude.includes("N")) {
      return ("Northern Hemisphere");
    } else if (this.Latitude.includes("S")) {
      return ("Southern Hemisphere");
    } else {
      return ("Not of this earth");
    }
  }


  getMostNorthern() {
    console.log("in getMostNorthern");
  }

  getMostSouthern() {
    console.log("in getMostSouthern");
  }

  getPopulation() {
    console.log("in getPopulation");
  }
}

export default community;