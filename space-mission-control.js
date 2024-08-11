// Task 1: Declare The Task Array and The Interval ID
// TODO: Begin by declaring an array to hold your one-time tasks (`oneTimeTasks`) and variables for any interval IDs you'll need for continuous tasks (`monitoringTaskId`).
const oneTimeTasks = [];
let monitoringTaskId = null;
// Task 2: Add One-Time Task Function
function addOneTimeTask (func, delay)
{
	oneTimeTasks.push({func, delay});
}

// Task 3: Run One-Time Tasks Function
function runOneTimeTasks ()
{
	for(let i = 0; i < oneTimeTasks.length; i++){
		setTimeout(oneTimeTasks[i].func, oneTimeTasks[i].delay);
	}
}

// Task 4: Start Monitoring Function
function startMonitoring ()
{
	monitoringTaskId = setInterval(function() {

		console.log('monitoring space station')}, 2000);
	
}	


// Task 5: Stop Monitoring Function
function stopMonitoring ()
{
	
		clearInterval(monitoringTaskId);
		console.log('Monitoring stopped.');
	
}

// Task 6: Start Countdown Function
function startCountdown (duration)
{
	function startCountdown(duration) {
		let remainingTime = duration;
	
		const countdownIntervalId = setInterval(function() {
			if (remainingTime > 0) {
				console.log(`T-minus ${remainingTime} seconds`);
				remainingTime--;
			} else {
				clearInterval(countdownIntervalId);
				console.log("Liftoff!");
			}
		}, 1000);
	}
}

// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission ()
{
    function scheduleMission() {
		// Add pre-launch system check as a one-time task
		addOneTimeTask(function() {
			console.log("Performing pre-launch system check...");
		}, 1000); // Delay of 1 second
	
		// Start monitoring after the system check
		addOneTimeTask(function() {
			console.log("Starting monitoring...");
			startMonitoring();
		}, 3000); // Delay of 3 seconds
	
		// Stop monitoring before the countdown
		addOneTimeTask(function() {
			console.log("Stopping monitoring...");
			stopMonitoring();
		}, 8000); // Delay of 8 seconds
	
		// Start countdown for launch
		addOneTimeTask(function() {
			console.log("Starting countdown...");
			startCountdown(10); // 10-second countdown
		}, 9000); // Delay of 9 seconds
	
		// Run all the one-time tasks in sequence
		runOneTimeTasks();
	}
}

scheduleMission(); // Starts the mission.
