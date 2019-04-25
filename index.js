class TrafficTower {
    constructor() {
        this.airplanes = [];
    }

    requestPositions(name) {
        return this.airplanes
          .filter(airplan => airplan.name !== name)
          .map(airplane => {
              return airplane.position;
          });
    }
}

class Airplane{
    constructor(name, position, trafficTower) {
        this.name = name;
        this.position = position;
        this.trafficTower = trafficTower;
        this.trafficTower.airplanes.push(this);
    }

    requestPositions() {
        return this.trafficTower.requestPositions(this.name);
    }
}

const trafficTower = new TrafficTower();

const firstAirplane = new Airplane('0034', 'LA', trafficTower);

const secondAirplane = new Airplane('3400', 'NY', trafficTower);

console.log(`position of the airplanes other than first ${firstAirplane.requestPositions()}`);
console.log(`position of the airplanes other than second ${secondAirplane.requestPositions()}`);
