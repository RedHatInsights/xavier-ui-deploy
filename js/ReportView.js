(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{705:function(e,t,a){"use strict";a.r(t);var r,n=a(272),o=a(98),i=a.n(o),c=a(99),l=a.n(c),s=a(100),m=a.n(s),p=a(101),u=a.n(p),h=a(102),d=a.n(h),f=a(2),v=a.n(f),E=a(383),y=a(379),k=a(380),S=a(1),b=a.n(S),g=a(397),w=a(213),_=a(214),j=a(236),T=a(96),F=a(455),I={workloadMigrationSummary:"workloadMigrationSummary",initialSavingsEstimation:"initialSavingsEstimation",workloadInventory:"workloadInventory"},O=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),M=function(e){function t(t){var a=e.call(this,t)||this;a.handleTabClick=function(e,t){a.setState({activeTabKey:t});var r=a.props,n=r.history,o=r.match;switch(t){case 0:n.push(o.url+"/"+I.workloadMigrationSummary);break;case 1:n.push(o.url+"/"+I.initialSavingsEstimation);break;case 2:n.push(o.url+"/"+I.workloadInventory)}},a.renderTabs=function(){var e=a.props.report,t=e?e.fileName:"";return v.a.createElement(v.a.Fragment,null,v.a.createElement(w.a,{style:{marginBottom:"25px"}},v.a.createElement(_.a,null,v.a.createElement(F.a,{to:"/reports"},"Reports")),v.a.createElement(_.a,{isActive:!0},t)),v.a.createElement(j.a,{isFilled:!0,onSelect:a.handleTabClick,activeKey:a.state.activeTabKey},v.a.createElement(T.a,{eventKey:0,title:"Workload Migration Summary"}),v.a.createElement(T.a,{eventKey:1,title:"Initials Savings Estimation"}),v.a.createElement(T.a,{eventKey:2,title:"Workload Inventory"})))},a.renderTabsSkeleton=function(){return v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"pf-l-stack pf-m-gutter"},v.a.createElement("div",{className:"pf-l-stack__item"},v.a.createElement(g.Skeleton,{size:"sm"})),v.a.createElement("div",{className:"pf-l-stack__item"},v.a.createElement("div",{className:"pf-l-grid"},v.a.createElement("div",{className:"pf-l-grid__item pf-m-4-col"},v.a.createElement(g.Skeleton,{size:"md"})),v.a.createElement("div",{className:"pf-l-grid__item pf-m-4-col"},v.a.createElement(g.Skeleton,{size:"md"})),v.a.createElement("div",{className:"pf-l-grid__item pf-m-4-col"},v.a.createElement(g.Skeleton,{size:"md"}))))))};var r=1;return t.location.pathname.endsWith(I.workloadMigrationSummary)?r=0:t.location.pathname.endsWith(I.workloadMigrationSummary)?r=1:t.location.pathname.endsWith(I.workloadInventory)&&(r=2),a.state={activeTabKey:r},a}return O(t,e),t.prototype.render=function(){var e=this.props,t=e.reportFetchStatus,a=e.children;if(t.error)return v.a.createElement(k.a,{to:"/reports"});var r="complete"===t.status;return v.a.createElement(f.Fragment,null,v.a.createElement(g.PageHeader,null,v.a.createElement(g.PageHeaderTitle,{title:r?this.renderTabs():this.renderTabsSkeleton()})),v.a.createElement(g.Main,{style:this.props.mainStyle},r?a:""))},t}(f.Component),N=Object(n.a)(M),K=a(56),P=Object(K.a)(function(){return a.e(14).then(a.bind(null,712))}),W=Object(K.a)(function(){return Promise.all([a.e(1),a.e(2),a.e(8)]).then(a.bind(null,702))}),z=Object(K.a)(function(){return a.e(13).then(a.bind(null,713))}),C=function(e){function t(e){var a;return i()(this,t),(a=m()(this,u()(t).call(this,e))).state={reportId:e.match.params.reportId},a}return d()(t,e),l()(t,[{key:"componentDidMount",value:function(){var e=this.state.reportId;this.props.fetchReport(e)}},{key:"render",value:function(){var e=this.props,t=e.report,a=e.reportFetchStatus;return v.a.createElement(N,{report:t,reportFetchStatus:a},v.a.createElement(E.a,null,v.a.createElement(y.a,{path:"".concat(this.props.match.url,"/").concat(I.workloadMigrationSummary),component:P}),v.a.createElement(y.a,{path:"".concat(this.props.match.url,"/").concat(I.initialSavingsEstimation),component:W}),v.a.createElement(y.a,{path:"".concat(this.props.match.url,"/").concat(I.workloadInventory),component:z}),v.a.createElement(k.a,{from:"".concat(this.props.match.url),to:"".concat(this.props.match.url,"/").concat(I.initialSavingsEstimation)})))}}]),t}(v.a.Component);C.propTypes={match:b.a.object,report:b.a.object,reportFetchStatus:b.a.object,fetchReport:b.a.func};var R=C,A=a(27),H=a(63),J={fetchReport:A.c};t.default=Object(n.a)(Object(H.connect)(function(e){var t=e.reportState;return{report:t.report,reportFetchStatus:t.reportFetchStatus}},J)(R))}}]);