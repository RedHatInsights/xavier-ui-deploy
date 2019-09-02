(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{399:function(e,t,a){"use strict";a.d(t,"d",function(){return n}),a.d(t,"a",function(){return r}),a.d(t,"b",function(){return o}),a.d(t,"c",function(){return c});var n=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=function(e){return e?e.toLowerCase():""}(t),r=e||0;switch(n){case"usd":return function(e,t){var a=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).fractionDigits,n=void 0===a?2:a,r=e;return e||(r=0),r.toLocaleString("en",{style:"currency",currency:t||"USD",minimumFractionDigits:n,maximumFractionDigits:n})}(r,n,a);case"gb":case"gb-hours":case"gb-mo":return function(e,t){var a=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).fractionDigits,n=void 0===a?2:a;return e.toFixed(n)}(r,n,a);case"core-hours":case"hrs":default:return function(e,t){var a=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).fractionDigits;return e.toFixed(a)}(r,n,a)}},r=function(e){return e.getDate()+" "+e.toLocaleString("default",{month:"long"})+" "+e.getFullYear()},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return e.toLocaleString("en",{style:"decimal",minimumFractionDigits:t,maximumFractionDigits:t})},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return e.toLocaleString("en",{style:"percent",minimumFractionDigits:t,maximumFractionDigits:t})}},741:function(e,t,a){"use strict";a.r(t);var n,r=a(267),o=a(101),c=a.n(o),i=a(102),l=a.n(i),s=a(103),m=a.n(s),u=a(104),p=a.n(u),f=a(105),d=a.n(f),h=a(2),E=a.n(h),v=a(382),g=a(385),y=a(381),b=a(1),S=a.n(b),k=a(400),_=a(206),F=a(207),D=a(223),N=a(99),O=a(472),T=a(55),I=Object(T.a)(function(){return Promise.all([a.e(1),a.e(2),a.e(3),a.e(15)]).then(a.bind(null,738))}),w=Object(T.a)(function(){return Promise.all([a.e(1),a.e(2),a.e(3),a.e(9)]).then(a.bind(null,735))}),j=Object(T.a)(function(){return Promise.all([a.e(1),a.e(14)]).then(a.bind(null,742))}),K=0,R="INITIAL_SAVINGS_ESTIMATION_KEY",A=[{key:R,title:"Initial savings estimation",path:"initialSavingsEstimation",component:w},{key:"WORKLOAD_MIGRATION_SUMMARY_KEY",title:"Workload migration summary",path:"workloadMigrationSummary",component:I},{key:"WORKLOAD_INVENTORY_KEY",title:"Workload migration inventory",path:"workloadInventory",component:j}],L=a(399),M=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),P=function(e){function t(t){var a=e.call(this,t)||this;a.handleTabClick=function(e,t){a.setState({activeTabKey:t});var n=a.props,r=n.history,o=n.match;r.push(o.url+"/"+A[t].path)},a.renderTabs=function(){var e=a.props.report,t=a.state.activeTabKey,n=e?e.reportName:"";return E.a.createElement(E.a.Fragment,null,E.a.createElement(_.a,{style:{marginBottom:"25px"}},E.a.createElement(F.a,null,E.a.createElement(O.a,{to:"/reports"},"Reports")),E.a.createElement(F.a,{isActive:!0},n)),E.a.createElement("div",{className:"pf-c-content",style:{marginBottom:"var(--pf-c-content--MarginBottom)"}},E.a.createElement("p",null,E.a.createElement("span",{className:"pf-c-title pf-m-3xl"},A[t].title+" ("+n+")")),E.a.createElement("p",null,e&&e.reportDescription&&E.a.createElement(E.a.Fragment,null,E.a.createElement("span",null,e.reportDescription),E.a.createElement("br",null)),A[t].key===R&&E.a.createElement(E.a.Fragment,null,E.a.createElement("span",null,"Source:")," ",E.a.createElement("span",null,"VSphere Enterprise Plus"),E.a.createElement("br",null),E.a.createElement("span",null,"Target:")," ",E.a.createElement("span",null,"Red Hat Virtualization"),E.a.createElement("br",null)),E.a.createElement("span",null,"Date:")," ",E.a.createElement("span",null,e?Object(L.a)(new Date(e.lastUpdate)):"Unknow"))),E.a.createElement(D.a,{isFilled:!0,onSelect:a.handleTabClick,activeKey:t},A.map(function(e,t){return E.a.createElement(N.a,{key:t,eventKey:t,title:e.title})})))},a.renderTabsSkeleton=function(){return E.a.createElement(E.a.Fragment,null,E.a.createElement("div",{className:"pf-l-stack pf-m-gutter"},E.a.createElement("div",{className:"pf-l-stack__item"},E.a.createElement(k.Skeleton,{size:"sm"})),E.a.createElement("div",{className:"pf-l-stack__item"},E.a.createElement(k.Skeleton,{size:"sm"})),E.a.createElement("div",{className:"pf-l-stack__item"},E.a.createElement(k.Skeleton,{size:"sm"})),E.a.createElement("div",{className:"pf-l-stack__item"},E.a.createElement("div",{className:"pf-l-grid"},E.a.createElement("div",{className:"pf-l-grid__item pf-m-4-col"},E.a.createElement(k.Skeleton,{size:"md"})),E.a.createElement("div",{className:"pf-l-grid__item pf-m-4-col"},E.a.createElement(k.Skeleton,{size:"md"})),E.a.createElement("div",{className:"pf-l-grid__item pf-m-4-col"},E.a.createElement(k.Skeleton,{size:"md"}))))))};var n=K;return A.forEach(function(e,a){t.location.pathname.endsWith(e.path)&&(n=a)}),a.state={activeTabKey:n},a}return M(t,e),t.prototype.render=function(){var e=this.props,t=e.reportFetchStatus,a=e.children;if(t.error)return E.a.createElement(v.a,{to:"/reports"});var n="complete"===t.status;return E.a.createElement(h.Fragment,null,E.a.createElement(k.PageHeader,null,E.a.createElement(k.PageHeaderTitle,{title:n?this.renderTabs():this.renderTabsSkeleton()})),E.a.createElement(k.Main,{style:this.props.mainStyle},n?a:""))},t}(h.Component),x=Object(r.a)(P),z=function(e){function t(e){var a;return c()(this,t),(a=m()(this,p()(t).call(this,e))).state={reportId:e.match.params.reportId},a}return d()(t,e),l()(t,[{key:"componentDidMount",value:function(){var e=this.state.reportId;this.props.fetchReport(e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.report,n=t.reportFetchStatus,r=this.state.reportId;return!r||n.error?E.a.createElement(v.a,{to:"/report"}):E.a.createElement(x,{report:a,reportFetchStatus:n},E.a.createElement(g.a,null,A.map(function(t,a){var n=t.component;return E.a.createElement(y.a,{key:a,path:"".concat(e.props.match.url,"/").concat(t.path),render:function(){return E.a.createElement(n,{reportId:r})}})}),E.a.createElement(v.a,{from:"".concat(this.props.match.url),to:"".concat(this.props.match.url,"/").concat(A[K].path)})))}}]),t}(E.a.Component);z.propTypes={match:S.a.object,report:S.a.any,reportFetchStatus:S.a.object,fetchReport:S.a.func};var Y=z,C=a(17),W=a(64),U={fetchReport:C.c};t.default=Object(r.a)(Object(W.connect)(function(e){var t=e.reportState;return{report:t.report,reportFetchStatus:t.reportFetchStatus}},U)(Y))}}]);