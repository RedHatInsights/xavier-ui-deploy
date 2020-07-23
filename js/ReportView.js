(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{659:function(e,t,n){"use strict";n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return m})),n.d(t,"a",(function(){return p}));var a=function(e){return e?e.toLowerCase():""},r=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n.fractionDigits,r=void 0===a?2:a,o=e;return e||(o=0),o.toLocaleString("en",{style:"currency",currency:t||"USD",minimumFractionDigits:r,maximumFractionDigits:r})},o=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n.fractionDigits;return e.toFixed(a)},i=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n.fractionDigits,r=void 0===a?2:a;return e.toFixed(r)},c=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n.fractionDigits;return e.toFixed(a)},l=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=a(t),u=e||0;switch(l){case"usd":return r(u,l,n);case"gb":case"gb-hours":case"gb-mo":return i(u,l,n);case"core-hours":case"hrs":return c(u,l,n);default:return o(u,l,n)}},u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Intl.DateTimeFormat().resolvedOptions().timeZone,a={timeZone:n,timeZoneName:"short",year:"numeric",month:"long",day:"numeric"},r={timeZone:n,timeZoneName:"short",hour:"2-digit",minute:"2-digit"},o=a;return t&&(o=Object.assign({},a,r)),e.toLocaleDateString("en",o)},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return e.toLocaleString("en",{style:"decimal",minimumFractionDigits:t,maximumFractionDigits:t})},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return e.toLocaleString("en",{style:"percent",minimumFractionDigits:t,maximumFractionDigits:t})},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var n=1024,a=t<0?0:t,r=["Bytes","KB","MB","GiB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(n)),i=parseFloat((e/Math.pow(n,o)).toFixed(a));return s(i,t)+" "+r[o]}},944:function(e,t,n){"use strict";n.r(t);var a,r=n(281),o=n(138),i=n.n(o),c=n(139),l=n.n(c),u=n(140),s=n.n(u),m=n(141),p=n.n(m),h=n(142),d=n.n(h),f=n(0),E=n.n(f),v=n(646),g=n(650),y=n(595),b=n(3),S=n.n(b),k=n(82),F=Object(k.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(4),n.e(16)]).then(n.bind(null,942))})),D=Object(k.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(4),n.e(10)]).then(n.bind(null,943))})),O=Object(k.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(4),n.e(15)]).then(n.bind(null,946))})),T=0,I="INITIAL_SAVINGS_ESTIMATION_KEY",_=[{key:I,title:"Initial savings estimation",path:"initialSavingsEstimation",component:D},{key:"WORKLOAD_MIGRATION_SUMMARY_KEY",title:"Workload migration summary",path:"workloadMigrationSummary",component:F},{key:"WORKLOAD_INVENTORY_KEY",title:"Workload migration inventory",path:"workloadInventory",component:O}],w=n(939),j=n(627),B=n(628),M=n(643),K=n(629),N=n(621),x=n(622),R=n(618),A=n(619),P=n(575),L=n(576),z=n(578),Y=n(659),Z=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),C=function(e){function t(t){var n=e.call(this,t)||this;n.handleTabClick=function(e,t){n.setState({activeTabKey:t});var a=n.props,r=a.history,o=a.match;r.push(o.url+"/"+_[t].path)},n.renderTabs=function(){var e=n.props.report,t=n.state.activeTabKey,a=e?e.reportName:"";return E.a.createElement(E.a.Fragment,null,E.a.createElement(j.a,{style:{marginBottom:"25px"}},E.a.createElement(B.a,null,E.a.createElement(w.a,{to:"/reports"},"Reports")),E.a.createElement(B.a,{isActive:!0},a)),E.a.createElement("div",{className:"pf-c-content",style:{marginBottom:"var(--pf-c-content--MarginBottom)"}},E.a.createElement("p",null,E.a.createElement("span",{className:"pf-c-title pf-m-3xl"},_[t].title+" ("+a+")")),E.a.createElement("p",null,e&&e.reportDescription&&E.a.createElement(E.a.Fragment,null,E.a.createElement("span",null,e.reportDescription),E.a.createElement("br",null)),_[t].key===I&&E.a.createElement(E.a.Fragment,null,E.a.createElement("span",null,"Source:")," ",E.a.createElement("span",null,"VSphere Enterprise Plus"),E.a.createElement("br",null),E.a.createElement("span",null,"Target:")," ",E.a.createElement("span",null,"Red Hat Virtualization"),E.a.createElement("br",null)),E.a.createElement("span",null,"Date:")," ",E.a.createElement("span",null,e?Object(Y.b)(new Date(e.lastUpdate)):"Unknown"))),E.a.createElement(M.a,{isFilled:!0,onSelect:n.handleTabClick,activeKey:t,isBox:!0},_.map((function(e,t){return E.a.createElement(K.a,{key:t,eventKey:t,title:e.title})}))))},n.renderTabsSkeleton=function(){return E.a.createElement(E.a.Fragment,null,E.a.createElement(N.a,{hasGutter:!0},E.a.createElement(x.a,null,E.a.createElement(z.Skeleton,{size:"sm"})),E.a.createElement(x.a,null,E.a.createElement(z.Skeleton,{size:"sm"})),E.a.createElement(x.a,null,E.a.createElement(z.Skeleton,{size:"sm"})),E.a.createElement(x.a,null,E.a.createElement(R.a,null,E.a.createElement(A.a,{span:4},E.a.createElement(z.Skeleton,{size:"md"})),E.a.createElement(A.a,{span:4},E.a.createElement(z.Skeleton,{size:"md"})),E.a.createElement(A.a,{span:4},E.a.createElement(z.Skeleton,{size:"md"}))))))};var a=T;return _.forEach((function(e,n){t.location.pathname.endsWith(e.path)&&(a=n)})),n.state={activeTabKey:a},n}return Z(t,e),t.prototype.render=function(){var e=this.props,t=e.reportFetchStatus,n=e.children;if(t.error)return E.a.createElement(v.a,{to:"/reports"});var a="complete"===t.status;return E.a.createElement(f.Fragment,null,E.a.createElement(P.PageHeader,null,E.a.createElement(P.PageHeaderTitle,{title:a?this.renderTabs():this.renderTabsSkeleton()})),E.a.createElement(L.Main,{style:this.props.mainStyle},a?n:""))},t}(f.Component),W=Object(r.a)(C),G=function(e){function t(e){var n;return i()(this,t),(n=s()(this,p()(t).call(this,e))).state={reportId:e.match.params.reportId},n}return d()(t,e),l()(t,[{key:"componentDidMount",value:function(){var e=this.state.reportId;this.props.fetchReport(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.report,a=t.reportFetchStatus,r=this.state.reportId;return!r||a.error?E.a.createElement(v.a,{to:"/report"}):E.a.createElement(W,{report:n,reportFetchStatus:a},E.a.createElement(g.a,null,_.map((function(t,n){var a=t.component;return E.a.createElement(y.a,{key:n,path:"".concat(e.props.match.url,"/").concat(t.path),render:function(){return E.a.createElement(a,{reportId:r})}})})),E.a.createElement(v.a,{from:"".concat(this.props.match.url),to:"".concat(this.props.match.url,"/").concat(_[T].path)})))}}]),t}(E.a.Component);G.propTypes={report:S.a.any,reportFetchStatus:S.a.object,fetchReport:S.a.func,history:S.a.object,location:S.a.object,match:S.a.object};var U=G,V=n(12),H=n(87),J={fetchReport:V.c};t.default=Object(r.a)(Object(H.connect)((function(e){var t=e.reportState;return{report:t.report,reportFetchStatus:t.reportFetchStatus}}),J)(U))}}]);
//# sourceMappingURL=ReportView.js.map