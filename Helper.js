/*
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

Complete:
- Unlearn Shieldblock
- Remove Shieldblock
- Re-Allow Perk Respec

Default Helper Message Type Icon: info2 (icomoon)*/


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

var unlearnShieldblock = document.createElement("DIV");
unlearnShieldblock.setAttribute("onmouseover", "");
unlearnShieldblock.setAttribute("onmouseout", "tooltip('hide')");
unlearnShieldblock.setAttribute("class", "thing noselect pointer upgradeThing");
unlearnShieldblock.setAttribute("id", "unlearnShieldblock");
unlearnShieldblock.setAttribute("onclick", "unlearnShieldBlock()");
unlearnShieldblock.setAttribute("style", "background: black;");

var unlearnShieldblockSpan = document.createElement("SPAN");
unlearnShieldblockSpan.setAttribute("class", "thingName");

var unlearnShieldblockthingName = document.createTextNode("Unlearn Shieldblock");

unlearnShieldblockSpan.appendChild(unlearnShieldblockthingName);
unlearnShieldblock.appendChild(unlearnShieldblockSpan); // unlearnShieldblock

var removeShieldblock = document.createElement("DIV");
removeShieldblock.setAttribute("onmouseover", "");
removeShieldblock.setAttribute("onmouseout", "tooltip('hide')");
removeShieldblock.setAttribute("class", "thing noselect pointer upgradeThing");
removeShieldblock.setAttribute("id", "removeShieldblock");
removeShieldblock.setAttribute("onclick", "removeShieldBlock()");
removeShieldblock.setAttribute("style", "background: black;");

var removeShieldblockSpan = document.createElement("SPAN");
unlearnShieldblockSpan.setAttribute("class", "thingName");

var removeShieldblockthingName = document.createTextNode("Remove Shieldblock");

removeShieldblockSpan.appendChild(removeShieldblockthingName);
removeShieldblock.appendChild(removeShieldblockSpan); // removeShieldblock

helperHere.appendChild(unlearnShieldblock);
helperHere.appendChild(removeShieldblock);

helperContainer.appendChild(helperTitleDiv);
helperContainer.appendChild(helperHere);

document.getElementById("buyHere").appendChild(helperContainer);

// Re-Define filterTabs to include "helper" in tabs.
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
	} else {
		document.getElementById("numTabs").style.display = "block";
	}
}

function unlearnShieldBlock() {
	if (game.upgrades.Shieldblock.done == 1) {
		game.upgrades.Shieldblock.done = 0;
		prestigeEquipment("Shield", false, true);
		game.equipment.Shield.blockNow = false;
		game.equipment.Shield.tooltip = "A big, wooden shield. Adds $healthCalculated$ health to each soldier per level.";
		levelEquipment("Shield", 1);
		message("Your Trimps forgot how to block with their shields.", "Loot", "*help"); // Replace Loot with Helper
	}
}

function removeShieldBlock() {
	if (game.upgrades.Shieldblock.allowed == 1) {
		game.upgrades.Shieldblock.allowed = 0
		game.upgrades.Shieldblock.locked = 1
		document.getElementById("upgradesHere").removeChild(document.getElementById("Shieldblock"));
		message("You accidentally burnt the Shieldblock Book to a crisp while cooking your marshmallows.", "Loot", "*fire"); // Replace Loot with Helper
	}
}


function addRespec() {
	if (game.global.canRespecPerks == false) {
		game.global.canRespecPerks = true;
	}
}