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


  getMostNorthern() {
    console.log("in getMostNorthern");
    let mostNorthern = 0;

    return(mostNorthern);
  }

  getMostSouthern() {
    console.log("in getMostSouthern");
    let mostSouthern = 1;
    return(mostSouthern);
  }

  getPopulation() {
    console.log("in getPopulation");
    let population = 5691000;

    return(population);
  }
}

export default community;