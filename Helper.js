var helperTab = document.createElement("LI");
helperTab.setAttribute("role", "presentation");
helperTab.setAttribute("id", "helperTab");
helperTab.setAttribute("onclick", "filterTabs('helper')");
helperTab.setAttribute("class", "buyTab");
helperTab.setAttribute("style", "background: rgba(0, 0, 0, 0);");

var helperA = document.createElement("A");
helperA.setAttribute("id", "helperA");
helperA.setAttribute("href", "#");
helperA.setAttribute("title", "");
helperA.setAttribute("style", "border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(221, 221, 221);");

var text = document.createTextNode("Helper");

helperA.appendChild(text);
helperTab.appendChild(helperA);

document.getElementById("buyTabsUl").appendChild("helperTab");