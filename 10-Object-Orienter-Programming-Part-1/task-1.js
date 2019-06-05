function CoffeeMachine(power) {
    var self = this;
    this.waterAmount = 0;
    var WATER_HEAT_CAPACITY = 4200;
    var timerId = 0;
    
	
    function getBoilTime() {
		return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}
	
    function onReady() {
		console.log('Coffee is ready');
	}
	
    this.run = function() {
		timerId = setTimeout(onReady, getBoilTime());
    }

    this.stop = function() {
        clearTimeout(timerId);
        console.log('Coffee aborted')
    }
}

var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;
coffeeMachine.run();
coffeeMachine.stop();
