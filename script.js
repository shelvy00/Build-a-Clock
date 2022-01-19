function displayTime() {
	const dateTime = new Date();
	let hrs = dateTime.getHours();
	const min = dateTime.getMinutes();
	const sec = dateTime.getSeconds();
	const session = document.getElementById("session");

	/*document.getElementById("hours").innerHTML = hrs;
	document.getElementById("minutes").innerHTML = min;
	document.getElementById("seconds").innerHTML = sec;*/

	if (hrs >= 12) {
		session.innerHTML = "PM";
	}else {
		session.innerHTML = "AM";
	}
	
	if (hrs > 12) {  // 12 hr format Ex: 8:00pm
		hrs = hrs - 12; 
	}

	document.getElementById("hours").innerHTML = hrs;
	document.getElementById("minutes").innerHTML = min;
	document.getElementById("seconds").innerHTML = sec;

}
setInterval(displayTime,10);