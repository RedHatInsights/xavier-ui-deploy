(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{399:function(e,t,r){"use strict";r.d(t,"d",function(){return n}),r.d(t,"a",function(){return a}),r.d(t,"b",function(){return o}),r.d(t,"c",function(){return s});var n=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=function(e){return e?e.toLowerCase():""}(t),a=e||0;switch(n){case"usd":return function(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).fractionDigits,n=void 0===r?2:r,a=e;return e||(a=0),a.toLocaleString("en",{style:"currency",currency:t||"USD",minimumFractionDigits:n,maximumFractionDigits:n})}(a,n,r);case"gb":case"gb-hours":case"gb-mo":return function(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).fractionDigits,n=void 0===r?2:r;return e.toFixed(n)}(a,n,r);case"core-hours":case"hrs":default:return function(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).fractionDigits;return e.toFixed(r)}(a,n,r)}},a=function(e){return e.getDate()+" "+e.toLocaleString("default",{month:"long"})+" "+e.getFullYear()},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return e.toLocaleString("en",{style:"decimal",minimumFractionDigits:t,maximumFractionDigits:t})},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return e.toLocaleString("en",{style:"percent",minimumFractionDigits:t,maximumFractionDigits:t})}},429:function(e,t,r){"use strict";var n,a=r(2),o=r.n(a),s=r(400),i=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),l=function(e){function t(t){return e.call(this,t)||this}return i(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement(a.Fragment,null,o.a.createElement(s.PageHeader,null,o.a.createElement(s.PageHeaderTitle,{title:"Reports"})),o.a.createElement(s.Main,{style:this.props.mainStyle},e))},t}(a.Component);t.a=l},473:function(e,t,r){(e.exports=r(6)(!1)).push([e.i,".pf-c-empty-state > .dropzone {\n  margin-top: var(--pf-c-empty-state--c-button--MarginTop); }\n\n.error {\n  color: var(--pf-global--danger-color--100) !important; }\n\n.success {\n  color: var(--pf-global--success-color--100) !important; }\n",""])},474:function(e,t,r){"use strict";var n=r(429);t.a=n.a},585:function(e,t,r){var n=r(473);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=r(7)(n,a);n.locals&&(e.exports=n.locals),e.hot.accept(473,function(){var t=r(473);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},757:function(e,t,r){"use strict";r.r(t);var n,a=r(64),o=r(2),s=r.n(o),i=r(472),l=r(400),c=r(183),u=r(209),p=r(210),f=r(213),m=r(215),d=r(110),h=r(214),g=r(254),S=r(218),v=r(212),E=r(184),R=r(228),D=r(227),b=r(573),y=r(754),P=r(742),T=(r(585),r(474)),F=r(236),w=r(240),A=r(241),C=r(235),N=r(430),x=r.n(N),I=r(523),O=r(399),_=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),j=function(){return(j=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},k=5e3,L=function(e){function t(t){var r=e.call(this,t)||this;return r.refreshDataWithDedounce=x()(function(){r.refreshData()},800),r.setStateAndResetTimerAndSetRenderStatus=function(e){void 0===e&&(e={}),r.resetRefreshDataTimer(),r.setState(j({},e,{renderInProgresFetchStatus:!0}))},r.resetRefreshDataTimer=function(){r.stopTimer(),r.startTimer(r.refreshData)},r.startTimer=function(e){r.pullTimer&&clearInterval(r.pullTimer),r.pullTimer=setInterval(e,k)},r.stopTimer=function(){clearInterval(r.pullTimer)},r.refreshData=function(e,t,n){void 0===e&&(e=r.state.page),void 0===t&&(t=r.state.perPage),void 0===n&&(n=r.state.filterText),r.props.fetchReports(e,t,n).then(function(){r.filtersInRowsAndCells(),r.state.renderInProgresFetchStatus&&r.setState({renderInProgresFetchStatus:!1}),r.state.isFirstFetchReportsCall&&r.setState({isFirstFetchReportsCall:!1})})},r.filtersInRowsAndCells=function(){var e=r.props.reports.items?Object.values(r.props.reports.items):[],t=[];e.length>0&&(t=e.map(function(e){return[{title:r.renderReportName(e)},{title:r.renderReportStatus(e)},{title:r.renderReportActions(e)}]})),r.setState({rows:t})},r.handleDeleteReport=function(e){var t=r.props,n=t.deleteReport,a=t.showDeleteDialog,o=t.closeDeleteDialog;a({name:e.reportName,type:"report",onDelete:function(){n(e.id,e.reportName).then(function(){o(),r.setStateAndResetTimerAndSetRenderStatus(),r.refreshData()})},onCancel:function(){o()}})},r.onPageChange=function(e,t,n){r.setState({page:t}),r.setStateAndResetTimerAndSetRenderStatus(),n?r.refreshDataWithDedounce():r.refreshData(t)},r.onSetPage=function(e,t){return"pf-c-form-control"===e.target.className||r.onPageChange(e,t,!1)},r.onPageInput=function(e,t){return r.onPageChange(e,t,!0)},r.onPerPageSelect=function(e,t){var n=r.state.page,a=r.props.reports.total;n*t>a&&(n=Math.floor(a/t)+1),r.setStateAndResetTimerAndSetRenderStatus({page:n,perPage:t}),r.refreshData(n,t)},r.handleSearchSubmit=function(e){var t=e.filterText.trim(),n=r.state.perPage;r.setStateAndResetTimerAndSetRenderStatus({filterText:t,page:1}),r.refreshData(1,n,t)},r.renderReportName=function(e){switch(e.status){case"CREATED":return s.a.createElement(i.a,{to:"/reports/"+e.id},e.reportName);default:return s.a.createElement("span",null,e.reportName)}},r.renderReportStatus=function(e){switch(e.status){case"CREATED":return s.a.createElement("p",null,s.a.createElement(F.a,{className:"success"})," Report created - ",Object(O.a)(new Date(e.lastUpdate)));case"FAILED":return s.a.createElement("p",null,s.a.createElement(w.a,{className:"error"})," Report failed - ",Object(O.a)(new Date(e.lastUpdate)));case"IN_PROGRESS":return s.a.createElement("p",null,s.a.createElement(A.a,{className:"progress"})," Analyzing the upload file");default:return null}},r.renderReportActions=function(e){var t=function(t){r.handleDeleteReport(e)};switch(e.status){case"CREATED":case"FAILED":return s.a.createElement(c.a,{variant:c.c.secondary,onClick:t},"Delete");case"IN_PROGRESS":return"";default:return null}},r.renderNoResults=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,null,s.a.createElement(p.a,null,s.a.createElement(f.a,{variant:f.b.full},s.a.createElement(m.a,{icon:C.a}),s.a.createElement(d.a,{headingLevel:"h5",size:"lg"},"No results found"),s.a.createElement(h.a,null,"No results match the search criteria")))))},r.renderResultsTable=function(){var e=r.state,t=e.rows,n=e.columns;return s.a.createElement(b.d,{"aria-label":"Reports list",rows:t,cells:n,gridBreakPoint:b.b.gridMd},s.a.createElement(y.a,null),s.a.createElement(P.a,null),s.a.createElement("tfoot",null,s.a.createElement("tr",null,s.a.createElement("td",{colSpan:10},r.renderPagination()))))},r.renderPagination=function(){var e=r.props.reports,t=r.state,n=t.page,a=t.perPage;return s.a.createElement(g.a,{itemCount:e.total,perPage:a,page:n,onSetPage:r.onSetPage,onPageInput:r.onPageInput,onPerPageSelect:r.onPerPageSelect})},r.renderResultsTableSkeleton=function(){return s.a.createElement(l.SkeletonTable,{colSize:3,rowSize:10})},r.renderSearchBox=function(){return s.a.createElement(I.a,{initialValues:{filterText:""},validate:function(){return{}},onSubmit:r.handleSearchSubmit},function(e){var t=e.values,r=e.handleChange,n=e.handleBlur,a=e.handleSubmit;return s.a.createElement(S.a,{onSubmit:a},s.a.createElement(v.a,null,s.a.createElement(E.a,{type:"search",id:"filterText",name:"filterText","aria-label":"search text input",onChange:function(e,t){r(t)},onBlur:n,value:t.filterText,placeholder:"Filter by name..."}),s.a.createElement(c.a,{type:"submit",variant:c.c.tertiary,"aria-label":"search button for search input"},s.a.createElement(C.a,null))))})},r.state={filterText:"",page:1,perPage:10,columns:["Name","Status",{title:"",props:{className:"pf-u-text-align-center"}}],rows:[],isFirstFetchReportsCall:!0,renderInProgresFetchStatus:!1},r}return _(t,e),t.prototype.componentDidMount=function(){this.refreshData(),this.resetRefreshDataTimer()},t.prototype.componentDidUpdate=function(){var e=this.props,t=e.reportsFetchStatus,r=e.reports,n=this.state.isFirstFetchReportsCall;0===r.total&&n&&"complete"===t.status&&this.props.history.push("/no-reports")},t.prototype.componentWillUnmount=function(){this.stopTimer()},t.prototype.render=function(){var e,t,r=this.state,n=r.isFirstFetchReportsCall,a=r.renderInProgresFetchStatus,o=this.props,c=o.reports,u=o.reportsFetchStatus;return e=n?"":s.a.createElement(l.TableToolbar,{className:"pf-u-justify-content-space-between"},s.a.createElement(R.a,null,s.a.createElement(D.a,{className:"pf-u-mr-xl"},this.renderSearchBox()),s.a.createElement(D.a,{className:"pf-u-mr-md"},s.a.createElement(i.a,{to:"/reports/upload",className:"pf-c-button pf-m-primary"},"Create"))),s.a.createElement(R.a,null,s.a.createElement(D.a,null,this.renderPagination()))),t=n||"inProgress"===u.status&&a?this.renderResultsTableSkeleton():c.total>0?this.renderResultsTable():this.renderNoResults(),s.a.createElement(T.a,null,e,t)},t}(s.a.Component),M=r(267),z=r(17),B=r(86),U={fetchReports:z.k,deleteReport:z.b,showDeleteDialog:B.c,closeDeleteDialog:B.a};t.default=Object(M.a)(Object(a.connect)(function(e){var t=e.reportState;return{reports:t.reports,reportsFetchStatus:t.reportsFetchStatus}},U)(L))}}]);