(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{429:function(t,e,n){"use strict";var r,o=n(2),a=n.n(o),c=n(400),i=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),u=function(t){function e(e){return t.call(this,e)||this}return i(e,t),e.prototype.render=function(){var t=this.props.children;return a.a.createElement(o.Fragment,null,a.a.createElement(c.PageHeader,null,a.a.createElement(c.PageHeaderTitle,{title:"Reports"})),a.a.createElement(c.Main,{style:this.props.mainStyle},t))},e}(o.Component);e.a=u},474:function(t,e,n){"use strict";var r=n(429);e.a=r.a},759:function(t,e,n){"use strict";n.r(e);var r,o=n(64),a=n(2),c=n.n(a),i=n(382),u=n(472),p=n(224),s=n(213),l=n(215),f=n(110),m=n(214),y=n(474),d=n(238),h=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),_=function(t){function e(e){return t.call(this,e)||this}return h(e,t),e.prototype.render=function(){var t=this.props.user;return t&&t.firstTimeCreatingReports?c.a.createElement(i.a,{to:"/getting-started"}):c.a.createElement(y.a,null,c.a.createElement(p.a,null,c.a.createElement(s.a,{variant:s.b.large},c.a.createElement(l.a,{icon:d.a}),c.a.createElement(f.a,{headingLevel:f.b.h5,size:"lg"},"No reports found"),c.a.createElement(m.a,null,"Reports are created from inventory data files that are uploaded to Red Hat Migration Analytics."),c.a.createElement(u.a,{to:"/reports/upload",className:"pf-c-button pf-m-primary"},"Create report"))))},e}(c.a.Component);e.default=Object(o.connect)(function(t){return{user:t.userState.user}},{})(_)}}]);