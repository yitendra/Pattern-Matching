(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(7),o=n.n(l),c=(n(13),n(1)),i=n(2),s=n(4),u=n(3),h=n(5),m=function(){return r.a.createElement("div",{id:"Navbar"},r.a.createElement("nav",{className:"navbar navbar-light bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("center",{style:{color:"white"}},"Pattern Matching")))))},f=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={text:"",pattern:""},n.pm=function(){setTimeout(function(){""!==n.state.pattern&&""!==n.state.text&&console.log(n.kmp(n.state.text,n.state.pattern))},100)},n.naive=function(e,t){for(var n=0;n<=e.length-t.length;n++){var a=void 0;for(a=0;a<t.length&&e[n+a]===t[a];a++);if(a===t.length)return n}return-1},n.hash=function(e){for(var t=0,n=0;n<e.length;n++)t+=e.charCodeAt(n);return t},n.rabinKarp=function(e,t){for(var a=n.hash(t),r=0;r<=e.length-t.length;r++)if(n.hash(e.slice(r,r+t.length))===a&&n.naive(e.slice(r,r+t.length),t)>=0)return r;return-1},n.kmp=function(e,t){for(var a=0,r=0,l=n.prefix(t);a<e.length;)if(e[a]===t[r]){if(r===t.length-1)return a-t.length+1;r+=1,a+=1}else r>0?r=l[r-1]:(r=0,a+=1);return-1},n.prefix=function(e){var t=[];t[0]=0;for(var n=0,a=1;a<e.length;a++){for(;n>0&&e[n]!==e[a];)n=t[n-1];e[n]===e[a]&&n++,t[a]=n}return t},n.handleText=function(e){n.setState({text:e.target.value}),n.pm()},n.handlePattern=function(e){n.setState({pattern:e.target.value}),n.pm()},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group textpattern"},r.a.createElement("label",{htmlFor:"text"},"Text : "),r.a.createElement("input",{type:"text",className:"form-control",name:"",id:"text",placeholder:"Enter Text",onChange:this.handleText}),r.a.createElement("label",{htmlFor:"pattern"},"Pattern : "),r.a.createElement("input",{type:"text",className:"form-control",name:"",id:"pattern",placeholder:"Enter Pattern",onChange:this.handlePattern}))),r.a.createElement("p",null,this.state.text),r.a.createElement("p",null,this.state.pattern)))}}]),t}(a.Component),p=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement(f,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.f8744940.chunk.js.map