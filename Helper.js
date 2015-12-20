const tabs = ["buildings", "jobs", "upgrades", "equipment", "helper"];

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

document.getElementById("buyTabsUl").appendChild(helperTab);



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
helperTitleDiv.appendChild(helperTitleRow);
helperContainer.appendChild(helperTitleDiv);

document.getElementById("buyHere").appendChild(helperContainer);