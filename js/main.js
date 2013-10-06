var MY_RESUME = {};

(function($){

	MY_RESUME.contains = function(value1, value2){
		if(value1 === undefined || value2 === undefined){
			return false;
		}
		return value1.toLowerCase().indexOf(value2.toLowerCase()) != -1;
	}
	MY_RESUME.getDurationInYears = function(greater, startDate, endDate){
		if(endDate === undefined){
			endDate = new Date();
		}
		startDate = new Date(startDate);
		var durationInDays = (endDate - startDate) / 86400000;
		if(greater){
			return Math.round(durationInDays/365);
		}
		return Math.floor(durationInDays/365);
	}
	// replace the parameters in the string by the values
	// values : Array [value1, value2, ... value n]
	// parameters in string : $1, $2, ... $n
	MY_RESUME.replaceParameters = function(string, values){
		for (var i = 0; i < values.length; i++) {
			var parameterIndex = i+1;
			var parameter = '$' + parameterIndex;
			var value = values[i];
			string = string.replace(parameter, value);
		}
		return string;
	}
	MY_RESUME.launchTimeline = function(dataUrl, lang){
	
		function getHeight(height, minHeight){
			if(height < minHeight){
				return minHeight;
			}
			return height;
		}
		
		//default height
		var height = $(window).height() - 60;
		var width = '100%';
		var windowWidth = $(window).width();
		//we redefine the size for the responsive
		if(windowWidth <= 480){
			height = getHeight(height, 1050);
			width = 300;
		} else if(windowWidth <= 640){
			height = getHeight(height, 850);
		} else if(windowWidth <= 1024){
			height = getHeight(height, 680);
		} else {
			//we define a minimum height
			height = getHeight(height, 580);
		}
		
		// Timeline js
		createStoryJS({
			type: 'timeline',
			width: width,
			height: height,
			source: dataUrl,
			embed_id: 'resume-timeline',
			lang: lang,
			start_at_end: true,
			debug: false,
			start_zoom_adjust: 0,
			font: 'Rancho-Gudea'
		});
	}
	
	$(document).ready(function() {
	
		var minWidth = 320;
		
		// Ascensorjs plugin call
		$('#ascensorBuilding').ascensor({
			ascensorName: 'ascensor',
			childType: 'section',
			ascensorFloorName: ['Profile', 'Skills', 'Career', 'Hobies', 'Contact'],
			time: 1000,
			windowsOn: 0,
			direction: "chocolate",
			directionOnSize: {type:'width', size:minWidth, direction:"x"},
			ascensorMap: [[0,0],[0,1],[1,0],[1,1],[2,0]],
			easing: 'easeInOutQuad',
			keyNavigation: false,
			queued: false,
			queuedDirection: "x",
			overflow: 'hidden',
			position: {left:0,top:42},
			positionOnSize: {type:'width', size:minWidth, position:{left:0,top:95}},
			minWidth: minWidth
		});

	});

})(jQuery);


