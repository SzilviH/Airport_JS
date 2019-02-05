// As an air traffic controller
// So I can get passengers to a destination
// I want to instruct a plane to land at an airport

// As an air traffic controller
// To get passengers to a destination
// I want to instruct a plane to take off from an airport

describe('Feature Test:', function() {

  var plane; //define plane here
  var airport; //define airport here

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('planes can be instructed to take off from an airport', function(){
    plane.land(airport);
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });
});
