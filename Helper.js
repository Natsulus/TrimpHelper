/*
To Do:
- Custom Number Tabs (+1, +10, +25, +100) [Both for Regular and Helium Purchases but separate custom settings]
- Auto Buy Storage at [USER-INPUT]%
- Auto Buy Housing (???)
- Auto Buy Gyms & Tributes
- Auto Read [Lists of each book]
- Highlight Efficient Housing
- Highlight Efficient (Offensive and Defensive) Equipment
- Exit Premap Screen after [USER-INPUT] seconds.
- Gather & Building Switching (Doesn't switch to building when trap in queue)
- Efficient Formation Switching (Switch each new troop)
- Active Formation Switching (Switch during battle)
- Add New Message Type (Story, Loot, Unlocks, Combat, Helper)
- Categories (Buttons, Automate, Cheats)

Complete:
- Unlearn Shieldblock (Buttons)
- Remove Shieldblock (Buttons)
- Re-Allow Perk Respec (Buttons)

Default Helper Message Type Icon: info2 (icomoon)*/

var helperSettings = {};
var version = "0.3.2";
// localStorage.setItem("helperSettingsSave",JSON.stringify(helperSettings));
var checking = JSON.parse(localStorage.getItem("helperSettingsSave"))
/*if (checking != null && checking.version.substring(0, 3) == version.substring(0, 3)) {
	helperSettings = checking;	
}
else {
	var autobuildings = {enabled: 0, description: "Automatically buy storage buildings when they're 90% full", titles: ["Not Buying", "Buying"]};
	var autogymbutes = {enabled: 0, description: "Automatically buy gyms and tributes when we can afford them", titles: ["Not Buying", "Buying Both", "Gyms Only", "Tributes Only"]};
	var autoupgrades = {enabled: 0, description: "Automatically read certain upgrade books to you and the trimps", titles: ["Not Reading", "Reading"]};
	var autohighlight = {enabled: 0, description: "Highlight the most gem-efficient housing in green and the most metal-efficient equipment in blue and red", titles: ["Not Highlighting", "Highlighting All", "Housing Only", "Equipment Only"]};
	var autopremaps = {enabled: 0, description: "Bring us back to the world if we're in the premaps screen for 30 seconds", titles: ["Not Switching", "Switching"]};
	var autogather = {enabled: 0, description: "I'll make you switch between gathering and building depending on our build queue", titles: ["Not Switching", "Switching"]};
	var autoformations = {enabled: 0, description: "Automatically switch between Heap and Dominance formations based on enemy", titles: ["Not Switching", "Switching"]};
	var autosnimps = {enabled: 0, description: "I'll automatically buy items to help us get past snimps, squimps, and other fast enemies", titles: ["Not Avoiding", "Avoiding"]};
	var automapbmax = {enabled: 0, description: "I'll manage turning map repeat on and off so we can reach the max map bonus", titles: ["Not Managing", "Managing"]};
	autoTSettings = {version: version, autobuildings: autobuildings, autogymbutes: autogymbutes, autoupgrades: autoupgrades, autohighlight: autohighlight, autopremaps: autopremaps, autogather: autogather, automapbmax: automapbmax, autosnimps: autosnimps, autoformations: autoformations};
}*/

// Add Helper to filters.
game.global.messages.Helper = true;


helperCSS = document.createElement("link");
helperCSS.setAttribute("id", "helperCSS");
helperCSS.setAttribute("rel", "stylesheet");
helperCSS.setAttribute("type", "text/css");
helperCSS.setAttribute("href", "https://Natsulus.github.io/TrimpHelper/Helper.css");
document.getElementsByTagName("head").item(0).appendChild(helperCSS); // Add helperCSS

// OCD
document.getElementById("buyContainer").style.height = "calc(99vh - 30vw - 41px)";
document.getElementById("helium").style.height = "32.4%";


var helperTab = document.createElement("LI");
helperTab.setAttribute("role", "presentation");
helperTab.setAttribute("id", "helperTab");
helperTab.setAttribute("onclick", "filterTabs('helper')");
helperTab.setAttribute("class", "buyTab");
helperTab.setAttribute("style", "background: rgba(255, 255, 255, 0.25);");

var helperA = document.createElement("A");
helperA.setAttribute("id", "helperA");
helperA.setAttribute("href", "#");
helperA.setAttribute("title", "");
helperA.setAttribute("style", "border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(221, 221, 221);");

var helperTabText = document.createTextNode("Helper");

helperA.appendChild(helperTabText);
helperTab.appendChild(helperA);

document.getElementById("buyTabsUl").appendChild(helperTab); // Create Helper Tab


// Create a Container using the example from container.html
var helperContainer = document.createElement("DIV");
helperContainer.setAttribute("id", "helperContainer");
helperContainer.setAttribute("style", "display: none;");

var helperTitleDiv = document.createElement("DIV");
helperTitleDiv.setAttribute("id", "helperTitleDiv");
helperTitleDiv.setAttribute("class", "titleDiv");

var helperTitleRow = document.createElement("DIV");
helperTitleRow.setAttribute("class", "row");

var helperTitleCol = document.createElement("DIV");
helperTitleCol.setAttribute("class", "col-xs-4");

var helperTitleSpan = document.createElement("SPAN");
helperTitleSpan.setAttribute("id", "helperTitleSpan");
helperTitleSpan.setAttribute("class", "titleSpan");

var helperTitleText = document.createTextNode("Helper");

helperTitleSpan.appendChild(helperTitleText);
helperTitleCol.appendChild(helperTitleSpan);
helperTitleRow.appendChild(helperTitleCol);
helperTitleDiv.appendChild(helperTitleRow); // helperTitleDiv


var helperHere = document.createElement("DIV");
helperHere.setAttribute("class", "buyBox");
helperHere.setAttribute("id", "helperHere");

var unlearnShieldblockBtn = document.createElement("DIV");
unlearnShieldblockBtn.setAttribute("onmouseover", "");
unlearnShieldblockBtn.setAttribute("onmouseout", "tooltip('hide')");
unlearnShieldblockBtn.setAttribute("class", "thing noselect pointer upgradeThing helperButton");
unlearnShieldblockBtn.setAttribute("id", "unlearnShieldblockBtn");
unlearnShieldblockBtn.setAttribute("onclick", "unlearnShieldblock()");

var unlearnShieldblockBtnSpan = document.createElement("SPAN");
unlearnShieldblockBtnSpan.setAttribute("class", "thingName");

var unlearnShieldblockBtnthingName = document.createTextNode("Unlearn Shieldblock");

unlearnShieldblockBtnSpan.appendChild(unlearnShieldblockBtnthingName);
unlearnShieldblockBtn.appendChild(unlearnShieldblockBtnSpan); // unlearnShieldblockBtn

var removeShieldblockBtn = document.createElement("DIV");
removeShieldblockBtn.setAttribute("onmouseover", "");
removeShieldblockBtn.setAttribute("onmouseout", "tooltip('hide')");
removeShieldblockBtn.setAttribute("class", "thing noselect pointer upgradeThing helperButton");
removeShieldblockBtn.setAttribute("id", "removeShieldblockBtn");
removeShieldblockBtn.setAttribute("onclick", "removeShieldblock()");

var removeShieldblockBtnSpan = document.createElement("SPAN");
removeShieldblockBtnSpan.setAttribute("class", "thingName");

var removeShieldblockBtnthingName = document.createTextNode("Remove Shieldblock");

removeShieldblockBtnSpan.appendChild(removeShieldblockBtnthingName);
removeShieldblockBtn.appendChild(removeShieldblockBtnSpan); // removeShieldblockBtn

var allowRespecBtn = document.createElement("DIV");
allowRespecBtn.setAttribute("onmouseover", "");
allowRespecBtn.setAttribute("onmouseout", "tooltip('hide')");
allowRespecBtn.setAttribute("class", "thing noselect pointer upgradeThing helperButton");
allowRespecBtn.setAttribute("id", "allowRespecBtn");
allowRespecBtn.setAttribute("onclick", "allowRespec()");

var allowRespecBtnSpan = document.createElement("SPAN");
allowRespecBtnSpan.setAttribute("class", "thingName");

var allowRespecBtnthingName = document.createTextNode("Allow Respec");

allowRespecBtnSpan.appendChild(allowRespecBtnthingName);
allowRespecBtn.appendChild(allowRespecBtnSpan); // allowRespecBtn

helperHere.appendChild(unlearnShieldblockBtn);
helperHere.appendChild(removeShieldblockBtn);
helperHere.appendChild(allowRespecBtn);

helperContainer.appendChild(helperTitleDiv);
helperContainer.appendChild(helperHere);

document.getElementById("buyHere").appendChild(helperContainer);

function unlearnShieldblock() {
	if (game.upgrades.Shieldblock.done == 1) {
		game.upgrades.Shieldblock.done = 0;
		prestigeEquipment("Shield", false, true);
		game.equipment.Shield.blockNow = false;
		game.equipment.Shield.tooltip = "A big, wooden shield. Adds $healthCalculated$ health to each soldier per level.";
		levelEquipment("Shield", 1);
		message("Your Trimps forgot how to block with their shields.", "Helper", "*help");
	}
	else {
		message("Your Trimps don't even know how to block with their shields!", "Helper", "*exclamation-triangle");
	}
}

function removeShieldblock() {
	if (game.upgrades.Shieldblock.allowed == 1) {
		game.upgrades.Shieldblock.allowed = 0
		game.upgrades.Shieldblock.locked = 1
		document.getElementById("upgradesHere").removeChild(document.getElementById("Shieldblock"));
		message("You accidentally burnt the Shieldblock Book to a crisp while cooking your marshmallows.", "Helper", "*fire");
	}
	else {
		message("Shieldblock unavailable or already removed!", "Helper", "*exclamation-triangle");
	}
}


function allowRespec() {
	if (game.global.canRespecPerks == false) {
		game.global.canRespecPerks = true;
		message("You can now respec.", "Helper", "*thumbs-up2");
	}
	else {
		message("You can already respec!", "Helper", "*exclamation-triangle");
	}
}

// Re-Defining Functions to add Helper

filterTabs = function(what) {
	enableDisableTab(game.global.buyTab, false);
	game.global.buyTab = what;
	enableDisableTab(what, true);
	var tabs = ["buildings", "jobs", "upgrades", "equipment", "helper"];
	for (var tab in tabs) {
		tab = tabs[tab];
		if (what == "all" && tab == "helper")
			document.getElementById(tab + "Container").style.display = "none";
		else
			document.getElementById(tab + "Container").style.display = (what == "all" || tab == what) ? "block" : "none";
	}
	if (what == "helper") {
		document.getElementById("numTabs").style.display = "none";
		document.getElementById("buyContainer").style.height = "calc(99vh - 30vw - 6px)"; // Adjust size from removing numTabs/
	} else {
		document.getElementById("numTabs").style.display = "block";
		document.getElementById("buyContainer").style.height = "calc(99vh - 30vw - 41px)";
	}
}

message = function(messageString, type, lootIcon, extraClass) {
	var log = document.getElementById("log");
	var needsScroll = ((log.scrollTop + 10) > (log.scrollHeight - log.clientHeight));
	var displayType = (game.global.messages[type]) ? "block" : "none";
	var prefix = "";
	if (lootIcon && lootIcon.charAt(0) == "*") {
		lootIcon = lootIcon.replace("*", "");
		prefix =  "icomoon icon-" 
	}
	else prefix = "glyphicon glyphicon-";
	if (type == "Story") messageString = "<span class='glyphicon glyphicon-star'></span> " + messageString;
	if (type == "Combat") messageString = "<span class='glyphicon glyphicon-flag'></span> " + messageString;
	if (type == "Loot" && lootIcon) messageString = "<span class='" + prefix + lootIcon + "'></span> " + messageString;
	if (type == "Helper") {
		if (lootIcon) 
			messageString = "<span class='" + prefix + lootIcon + "'></span> " + messageString;
		else
			messageString = "<span class='icomoon icon-info2'></span> " + messageString;
	}
	var addId = "";
	if (messageString == "Game Saved!") {
		addId = " id='saveGame'";
		if (document.getElementById('saveGame') !== null){
			log.removeChild(document.getElementById('saveGame'));
		}
	}
	if (type == "Notices"){
		messageString = "<span class='glyphicon glyphicon-off'></span> " + messageString;
	}
	log.innerHTML += "<span" + addId + " class='" + type + "Message message" +  " " + extraClass + "' style='display: " + displayType + "'>" + messageString + "</span>";
	if (needsScroll) log.scrollTop = log.scrollHeight;
	if (type != "Story") trimMessages(type);
}