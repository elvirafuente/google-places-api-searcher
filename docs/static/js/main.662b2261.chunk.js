(window["webpackJsonpplaces-api-fetch"]=window["webpackJsonpplaces-api-fetch"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(2),c=n.n(r),o=(n(9),n(3));n(10);function u(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,"result Card"))}function s(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"List of results"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(u,null))))}var i="AIzaSyDdbGqZrdnT78yyABIR2VOUXs0WirJiwJk";var m=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1];return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("label",{htmlFor:"search"},"\xbfEst\xe1s en Google Place? introduce el nombre de tu negocio",l.a.createElement("input",{type:"text",name:"search",id:"search",value:n,onChange:function(e){var t=e.target.value;r(t)}})),l.a.createElement("button",{type:"button",onClick:function(){var e=n.replace(/ /g,"+"),t="https://maps.googleapis.com/maps/api/place/textsearch/json?query=".concat(e,"&fields=name,photo&key=").concat(i);fetch(t,{mode:"cors",headers:{"Access-Control-Allow-Origin":"*"}}).then(function(e){return e.json()}).then(function(e){return console.log(e)})}},"Buscar")),l.a.createElement("main",null,l.a.createElement(s,null)))};c.a.render(l.a.createElement(m,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.662b2261.chunk.js.map