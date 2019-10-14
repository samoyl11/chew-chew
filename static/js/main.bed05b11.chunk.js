(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(55)},33:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(5),o=a.n(r),i=(a(31),a(33),a(7)),l=a(8),s=a(11),m=a(9),u=a(12),d=a(10),p=a(24),h=a(3),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,c=t.value;"checkbox"===e.target.type&&(c=e.target.checked);var r=Object(p.a)({},a.state.activeItem,Object(d.a)({},n,c));a.setState({activeItem:r})},a.state={activeItem:a.props.activeItem},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.toggle,n=t.onSave;return c.a.createElement(h.f,{isOpen:!0,toggle:a},c.a.createElement(h.i,{toggle:a}," Form Item "),c.a.createElement(h.g,null,c.a.createElement(h.b,null,c.a.createElement(h.c,null,c.a.createElement(h.e,{for:"title"},"Title"),c.a.createElement(h.d,{type:"text",name:"title",value:this.state.activeItem.title,onChange:this.handleChange,placeholder:"Enter Form Title"})),c.a.createElement(h.c,null,c.a.createElement(h.e,{for:"description"},"Description"),c.a.createElement(h.d,{type:"text",name:"description",value:this.state.activeItem.description,onChange:this.handleChange,placeholder:"Enter Form description"})),c.a.createElement(h.c,{check:!0},c.a.createElement(h.e,{for:"completed"},c.a.createElement(h.d,{type:"checkbox",name:"completed",checked:this.state.activeItem.completed,onChange:this.handleChange}),"Completed")))),c.a.createElement(h.h,null,c.a.createElement(h.a,{color:"success",onClick:function(){return n(e.state.activeItem)}},"Save")))}}]),t}(n.Component),v=a(6),E=a.n(v),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).refreshList=function(){E.a.get("https://chew-chew.herokuapp.com/api/forms/").then(function(e){return a.setState({formList:e.data})}).catch(function(e){return console.log(e)})},a.displayCompleted=function(e){return e?a.setState({viewCompleted:!0}):a.setState({viewCompleted:!1})},a.renderTabList=function(){return c.a.createElement("div",{className:"my-5 tab-list"},c.a.createElement("span",{onClick:function(){return a.displayCompleted(!0)},className:a.state.viewCompleted?"active":""},"complete"),c.a.createElement("span",{onClick:function(){return a.displayCompleted(!1)},className:a.state.viewCompleted?"":"active"},"Incomplete"))},a.renderItems=function(){var e=a.state.viewCompleted;return a.state.formList.filter(function(t){return t.completed===e}).map(function(e){return c.a.createElement("li",{key:e.id,className:"list-group-item d-flex justify-content-between align-items-center"},c.a.createElement("span",{className:"form-title mr-2 ".concat(a.state.viewCompleted?"completed-form":""),title:e.description},e.title),c.a.createElement("span",null,c.a.createElement("button",{onClick:function(){return a.editItem(e)},className:"btn btn-secondary mr-2"}," ","Edit"," "),c.a.createElement("button",{onClick:function(){return a.handleDelete(e)},className:"btn btn-danger"},"Delete"," ")))})},a.toggle=function(){a.setState({modal:!a.state.modal})},a.handleSubmit=function(e){a.toggle(),e.id?E.a.put("https://chew-chew.herokuapp.com/api/forms/".concat(e.id,"/"),e).then(function(e){return a.refreshList()}):E.a.post("https://chew-chew.herokuapp.com/api/forms/",e).then(function(e){return a.refreshList()})},a.handleDelete=function(e){E.a.delete("https://chew-chew.herokuapp.com/api/forms/".concat(e.id)).then(function(e){return a.refreshList()})},a.createItem=function(){a.setState({activeItem:{title:"",description:"",completed:!1},modal:!a.state.modal})},a.editItem=function(e){a.setState({activeItem:e,modal:!a.state.modal})},a.state={viewCompleted:!1,activeItem:{title:"",description:"",completed:!1},formList:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.refreshList()}},{key:"render",value:function(){return c.a.createElement("main",{className:"content"},c.a.createElement("h1",{className:"text-white text-uppercase text-center my-4"},"Form app"),c.a.createElement("div",{className:"row "},c.a.createElement("div",{className:"col-md-6 col-sm-10 mx-auto p-0"},c.a.createElement("div",{className:"card p-3"},c.a.createElement("div",{className:""},c.a.createElement("button",{onClick:this.createItem,className:"btn btn-primary"},"Add task")),this.renderTabList(),c.a.createElement("ul",{className:"list-group list-group-flush"},this.renderItems())))),this.state.modal?c.a.createElement(f,{activeItem:this.state.activeItem,toggle:this.toggle,onSave:this.handleSubmit}):null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.bed05b11.chunk.js.map