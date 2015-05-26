$(document).ready(function(){

	$redTab = $("#red-tab");
	$greenTab = $("#green-tab");
	$blueTab = $("#blue-tab");

	$textInfo = $("p > span");

	$redTab.on("click", getRedTabInfo);
	$greenTab.on("click", getGreenTabInfo);
	$blueTab.on("click", getBlueTabInfo);

	var infoPara1 = "<p>Duo no choro facilis sensibus, dicam bonorum offendit eum ut. Quis tractatos eum in, elit fabulas dolores mel te, cu eius vidit dignissim qui. Per id assum impetus. Iriure assentior ne mel. Tantas honestatis at duo. Consul democritum efficiendi ex his, ei propriae appetere mea. Cu habeo homero instructior vim, pro no sumo option erroribus.</p>";
	var infoPara2 = "<p>Duo no choro facilis sensibus, dicam bonorum offendit eum ut. Quis tractatos eum in, elit fabulas dolores mel te, cu eius vidit dignissim qui. Per id assum impetus. Iriure assentior ne mel. Tantas honestatis at duo. Consul democritum efficiendi ex his, ei propriae appetere mea. Cu habeo homero instructior vim, pro no sumo option erroribus.</p>";
	var infoPara3 = "<p>Duo no choro facilis sensibus, dicam bonorum offendit eum ut. Quis tractatos eum in, elit fabulas dolores mel te, cu eius vidit dignissim qui. Per id assum impetus. Iriure assentior ne mel. Tantas honestatis at duo. Consul democritum efficiendi ex his, ei propriae appetere mea. Cu habeo homero instructior vim, pro no sumo option erroribus.</p>";


	function getRedTabInfo(){
		var title = "<h1>Red</h1>";
		
		render(title);
	}

	function getGreenTabInfo(){
		var title = "<h1>Green</h1>";

		render(title);
	}

	function getBlueTabInfo(){
		var title = "<h1>Blue</h1>";

		render(title);
	}

	function render(theTitle){
		var allInfo = theTitle + infoPara2 + infoPara1 + infoPara3;

		$textInfo.html(allInfo)
	}
	
});