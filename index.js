const formatDate = (timeInSeconds) => {

	const secondFloor = Math.floor(timeInSeconds);                                                   
	const seconds = secondFloor - (Math.floor(secondFloor/60)*60);
	const minutes = Math.floor(secondFloor/60) - Math.floor(secondFloor/60/60)*60;
	const hours = Math.floor(secondFloor/60/60);
  
	
	if (timeInSeconds == undefined)
		return '0s'
  	else if (minutes == 0 && seconds == 0)
		return (hours + 'h')
	else if (hours == 0 && minutes == 0)
		return (seconds + 's')
	else if (hours == 0 && seconds == 0)
		return (minutes + 'm')
	else if (hours == 0) 
		return (minutes + 'm ' + seconds + 's')
	else if (minutes == 0) 
		return (hours + 'h ' + seconds + 's')
	else if (seconds == 0)
		return (hours + 'h' + ' ' + minutes + 'm')
	else
		return (hours + 'h ' + minutes + 'm ' + seconds + 's'); 
} 

module.exports = formatDate;