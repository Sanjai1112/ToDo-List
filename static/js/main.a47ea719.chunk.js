(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),i=n.n(r),c=(n(14),n(1)),l=n(2),s=n(4),u=n(3),h=n(5),m=(n(16),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.props.name.map(function(t,n){return o.a.createElement("h4",{key:n},t,o.a.createElement("button",{className:"btn btn-danger",onClick:e.props.delete.bind(e,n)},"Delete"))}))}}]),t}(a.Component)),d=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){n.setState({input:e.target.value})},n.handleClick=function(){if(0!==n.state.input.length){var e=n.state.name.map(function(e){return e});e.push(n.state.input),n.setState({name:e})}},n.handleDelete=function(e){var t=n.state.name.filter(function(t,n){return n!==e?t:""});n.setState({name:t})},n.state={name:["Uniform","Shoes","Books","Stationeries","Lunch Box"],input:""},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container-fluid"},o.a.createElement("h2",null,"Check List"),o.a.createElement("input",{className:"add-todo",type:"text",placeholder:"Enter the todo to add",onChange:this.handleChange}),o.a.createElement("button",{className:"btn btn-primary",onClick:this.handleClick},"Add"),o.a.createElement("br",null),o.a.createElement(m,{name:this.state.name,delete:this.handleDelete}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.a47ea719.chunk.js.map