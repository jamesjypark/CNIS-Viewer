(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),o=n(7),c=n.n(o),r=(n(14),n(1)),s=n(2),l=n(4),u=n(3),p=n(5),d=(n(15),function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this))).onOpen=function(){t.setState({isOpen:!t.state.isOpen})},t.state={isOpen:!1},t}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props,e=t.patientId,n=t.name,i=t.village,o=t.contact,c=t.age,r=t.height,s=t.weight,l=t.parity,u=t.duration,p=t.medicalHistory,d=t.firstDate,m=t.preEclampsia,f=t.fetalSize,h=t.diastolic,g=t.systolic,v=t.coexistingConditions,E=t.secondDate,w=t.cmds,y=this.state.isOpen,O=[e,n,i,o,c,r,s,l,u,p,d,m,f,h,g,v,E,w],j=["patientId","name","village","contact","age","height","weight","parity","duration","medicalHistory","firstDate","preEclampsia","fetalSize","diastolic","systolic","coexistingConditions","secondDate","cmds"];return a.a.createElement("div",{className:"PatientCard"},n,y&&O.map(function(t,e){return a.a.createElement("div",null,"".concat(j[e],": ").concat(t))}),a.a.createElement("div",{onClick:this.onOpen},y?"Less":"More"))}}]),e}(a.a.Component)),m=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={patientInfo:[]},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentWillMount",value:function(){var t=this,e="https://cors-anywhere.herokuapp.com/http://ec2-18-219-82-149.us-east-2.compute.amazonaws.com:3000/server.js/";fetch(e+"PatientInfo",{method:"GET"}).then(function(t){return t.json()}).then(function(e){t.setState({patientInfo:e})}),fetch(e+"MedicalHistory",{method:"GET"}).then(function(t){return t.json()}).then(function(e){t.setState({medicalHistory:e})}),fetch(e+"PreEclampsia",{method:"GET"}).then(function(t){return t.json()}).then(function(e){console.log(e),t.setState({preEclampsia:e})}),fetch(e+"CoexistingConditions",{method:"GET"}).then(function(t){return t.json()}).then(function(e){console.log(e),t.setState({coexistingConditions:e})})}},{key:"render",value:function(){var t=this.state,e=t.patientInfo,n=t.medicalHistory,i=t.preEclampsia,o=t.coexistingConditions;return a.a.createElement("div",{className:"App"},a.a.createElement("div",null," CNIS Patient Viewer "),a.a.createElement("div",null,"There are ".concat(e.length," registered patients")),e.filter(function(t){return t.name}).map(function(t){var e=[],c=[],r=[];return n&&(e=n.filter(function(e){return e.patientId===t.patientId}).map(function(t){return t.medicalHistory})),i&&(c=i.filter(function(e){return e.patientId===t.patientId}).map(function(t){return t.preEclampsia})),o&&(r=o.filter(function(e){return e.patientId===t.patientId}).map(function(t){return t.coexistingConditions}),console.log(r)),a.a.createElement(d,Object.assign({},t,{medicalHistory:e,preEclampsia:c,coexistingConditions:r}))}))}}]),e}(i.Component);var f=function(){return a.a.createElement(m,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,n){t.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.31c9478b.chunk.js.map