(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(7),c=n.n(a),s=n(2),i=n(3),r=n(5),b=n(4),o=n(1),l=n.n(o),d=(n(13),n(8)),u=n.n(d),j=n(0),h=function(t){Object(r.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={},t}return Object(i.a)(n,[{key:"render",value:function(){var t,e=this.props,n=e.tabs,a=e.selectedTabId,c=e.onTabSelected;return Object(j.jsxs)("div",{className:"tabs",children:[Object(j.jsx)("div",{className:"tabs__header",children:n.map((function(t){return Object(j.jsx)("button",{type:"button",className:u()("tabs__btn",{"tabs__btn--active":t.id===a}),onClick:function(){c(t)},children:t.title},t.id)}))}),Object(j.jsx)("div",{className:"tabs__content",children:null===(t=n.find((function(t){return t.id===a})))||void 0===t?void 0:t.content})]})}}]),n}(l.a.Component),v=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],p=function(t){Object(r.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={selectedTab:v[0]},t.changeTab=function(e){t.setState({selectedTab:e})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state.selectedTab;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("h1",{children:["Selected tab is\xa0",t.title]}),Object(j.jsx)(h,{tabs:v,selectedTabId:t.id,onTabSelected:this.changeTab})]})}}]),n}(l.a.Component),O=p;c.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e7c581fb.chunk.js.map