$(document).ready(function(e) {
    $('ul.tabs').tabs();
    Materialize.showStaggeredList('ul.tabs');
    //ChartJS Stuff
    var techChart = document.getElementById("techChart").getContext("2d");
    techChart.canvas.width = 230;
	techChart.canvas.height = 230;
    var nonTechChart = document.getElementById("nonTechChart").getContext("2d");
    var nonTechData = {
        labels: ["Public Speaking", "Agile Project Management", "Training", "Business Writing", "Systems Analysis", "User Experience", "Finance"],
        datasets: [{
            label: "Technical Skills",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [90, 90, 95, 93, 70, 60, 50]
        }]
    };
    Chart.defaults.global.responsive = true;
    var nonTechChartRender = new Chart(nonTechChart).Bar(nonTechData);
    //Codeivate Skills Chart
    var techData = [];
    //Track Total Points for Percentage Calculation
    var totalPoints = 0;
    //Colors for Each Programming Language
    var languageColors = {'PHP' : '#8892bf', 'JavaScript': '#f0db4f', 'R': '#2e5bb0', 'Python': '#3776ac', 'HTML': '#e54d26', 'CSS': '#0070ba', 'XML': '#87961d', 'TSS': '#9d0e00', 'Markdown': '#4a525a', 'JSON': '#202020', 'YAML': '#f32401', 'Java': '#e11e21'};
    $.getJSON("http://www.codeivate.com/users/anthonyjesmok.json?callback=?", function(data) {
        for (var language in data.languages) {
            if (data.languages.hasOwnProperty(language)) {
            	//language = Name of the language
            	//current_land = Language information object
                var current_lang = data.languages[language];
                for (var prop in current_lang) {
                    if (current_lang.hasOwnProperty(prop) && prop == 'points') {
                    	//Change the language detected by Codeivate to be more readable.
                    	if(language == "JAVA") {
                    		language = "Java";
                    	}
                    	//Get the Color from the array of pre-defined colors
                    	var color = languageColors[language];
                    	if(color === undefined) {
                    		color = '#026bab';
                    	}
                    	//If there is at least 1 point assigned to a language and it's not Plain Text, push it to the chart.
                        if (current_lang[prop] > 0 && language != "Plain Text") {
                        	totalPoints += current_lang[prop];
                            techData.push({
                                value: current_lang[prop],
                                color: color,
						        highlight: "#FFC870",
						        label: language
                            });
                        }
                    }
                }
            }
        }
        //Technical Skills Chart Options
        var techChartOptions = {
        	segmentShowStroke : true,
        	segmentStrokeWidth: 3,
        	percentageInnerCutout : 35,
        	animateRotate : true,
        	animateScale : false,
        	tooltipTemplate: "<%if (label){%><%=label %>: <%}%><%= value + ' %' %>",
        };
        //Sort Languages by Time Ascending
        techData.sort(function(a, b) {
		    return parseFloat(a.value) - parseFloat(b.value);
		});
		//Convert Current Values to Percentage
		for (var i = 0; i < techData.length; i++) { 
		    techData[i].value = Math.round((techData[i].value / totalPoints) * 100);
		}
        var techChartRender = new Chart(techChart).Doughnut(techData, techChartOptions);
    });
});