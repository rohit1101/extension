var s = document.createElement("script");

s.src = chrome.runtime.getURL("script.js");
s.onload = function () {
  this.remove();
};

var link_tag = document.createElement("link");
link_tag.setAttribute("rel", "stylesheet");
link_tag.setAttribute("type", "text/css");
link_tag.setAttribute("href", `${chrome.runtime.getURL("style.css")}`);

(document.head || document.documentElement).appendChild(s);
(document.head || document.documentElement).appendChild(link_tag);
