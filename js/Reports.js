(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{399:function(e,t,r){"use strict";r.d(t,"d",function(){return n}),r.d(t,"a",function(){return a}),r.d(t,"b",function(){return o}),r.d(t,"c",function(){return i});var n=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=function(e){return e?e.toLowerCase():""}(t),a=e||0;switch(n){case"usd":return function(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).fractionDigits,n=void 0===r?2:r,a=e;return e||(a=0),a.toLocaleString("en",{style:"currency",currency:t||"USD",minimumFractionDigits:n,maximumFractionDigits:n})}(a,n,r);case"gb":case"gb-hours":case"gb-mo":return function(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).fractionDigits,n=void 0===r?2:r;return e.toFixed(n)}(a,n,r);case"core-hours":case"hrs":default:return function(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).fractionDigits;return e.toFixed(r)}(a,n,r)}},a=function(e){return e.getDate()+" "+e.toLocaleString("default",{month:"long"})+" "+e.getFullYear()},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return e.toLocaleString("en",{style:"decimal",minimumFractionDigits:t,maximumFractionDigits:t})},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return e.toLocaleString("en",{style:"percent",minimumFractionDigits:t,maximumFractionDigits:t})}},429:function(e,t,r){"use strict";var n,a=r(2),o=r.n(a),i=r(400),l=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),s=function(e){function t(t){return e.call(this,t)||this}return l(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement(a.Fragment,null,o.a.createElement(i.PageHeader,null,o.a.createElement(i.PageHeaderTitle,{title:"Reports"})),o.a.createElement(i.Main,{style:this.props.mainStyle},e))},t}(a.Component);t.a=s},473:function(e,t,r){(e.exports=r(6)(!1)).push([e.i,".pf-c-empty-state > .dropzone {\n  margin-top: var(--pf-c-empty-state--c-button--MarginTop); }\n\n.error {\n  color: var(--pf-global--danger-color--100) !important; }\n\n.success {\n  color: var(--pf-global--success-color--100) !important; }\n",""])},474:function(e,t,r){"use strict";var n=r(429);t.a=n.a},583:function(e,t,r){var n=r(473);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=r(7)(n,a);n.locals&&(e.exports=n.locals),e.hot.accept(473,function(){var t=r(473);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},752:function(e,t,r){"use strict";r.r(t);var n,a=r(64),o=r(2),i=r.n(o),l=r(472),s=r(400),c=r(182),u=r(218),p=r(212),f=r(183),m=r(208),h=r(209),g=r(213),d=r(215),v=r(110),E=r(214),S=r(228),y=r(227),b=r(254),D=r(571),R=r(748),P=r(736),w=(r(583),r(474)),F=r(236),T=r(240),C=r(241),x=r(235),N=r(430),_=r.n(N),O=r(521),I=r(399),A=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),j=5e3,L=function(e){function t(t){var r=e.call(this,t)||this;return r.changePage=_()(function(){r.refreshData()},800),r.startTimer=function(e){r.pullTimer&&clearInterval(r.pullTimer),r.pullTimer=setInterval(e,j)},r.stopTimer=function(){clearInterval(r.pullTimer)},r.handleDeleteReport=function(e){var t=r.props,n=t.deleteReport,a=t.showDeleteDialog,o=t.closeDeleteDialog;a({name:e.reportName,type:"report",onDelete:function(){n(e.id,e.reportName).then(function(){o(),r.refreshData()})},onCancel:function(){o()}})},r.renderReportStatus=function(e){switch(e.status){case"CREATED":return i.a.createElement("p",null,i.a.createElement(F.a,{className:"success"})," Report created - ",Object(I.a)(new Date(e.lastUpdate)));case"FAILED":return i.a.createElement("p",null,i.a.createElement(T.a,{className:"error"})," Report failed - ",Object(I.a)(new Date(e.lastUpdate)));case"IN_PROGRESS":return i.a.createElement("p",null,i.a.createElement(C.a,{className:"progress"})," Analyzing the upload file");default:return null}},r.renderReportActions=function(e){var t=function(t){r.handleDeleteReport(e)};switch(e.status){case"CREATED":case"FAILED":return i.a.createElement(c.a,{variant:c.c.secondary,onClick:t},"Delete");case"IN_PROGRESS":return"";default:return null}},r.refreshData=function(e,t,n){void 0===e&&(e=r.state.page),void 0===t&&(t=r.state.perPage),void 0===n&&(n=r.state.filterText),r.props.fetchReports(e,t,n).then(function(){r.filtersInRowsAndCells(),r.state.isFirstFetchReportsCall&&r.setState({isFirstFetchReportsCall:!1})})},r.onPageChange=function(e,t,n){r.setState({page:t}),n?r.changePage():r.refreshData(t)},r.onSetPage=function(e,t){return"pf-c-form-control"===e.target.className||r.onPageChange(e,t,!1)},r.onPageInput=function(e,t){return r.onPageChange(e,t,!0)},r.onPerPageSelect=function(e,t){var n=r.state.page,a=r.props.reports.total;n*t>a&&(n=Math.floor(a/t)+1),r.setState({page:n,perPage:t}),r.refreshData(n,t)},r.handleSearchSubmit=function(e){var t=e.filterText;r.setState({filterText:t.trim()}),r.refreshData()},r.renderSearchBox=function(){return i.a.createElement(O.a,{initialValues:{filterText:""},validate:function(){return{}},onSubmit:r.handleSearchSubmit},function(e){var t=e.values,r=e.handleChange,n=e.handleBlur,a=e.handleSubmit;return i.a.createElement(u.a,{onSubmit:a},i.a.createElement(p.a,null,i.a.createElement(f.a,{type:"search",id:"filterText",name:"filterText","aria-label":"search text input",onChange:function(e,t){r(t)},onBlur:n,value:t.filterText,placeholder:"Filter by name..."}),i.a.createElement(c.a,{type:"submit",variant:c.c.tertiary,"aria-label":"search button for search input"},i.a.createElement(x.a,null))))})},r.state={filterText:"",page:1,perPage:10,columns:["Name","Status",{title:"",props:{className:"pf-u-text-align-center"}}],rows:[],isFirstFetchReportsCall:!0},r}return A(t,e),t.prototype.componentDidMount=function(){this.refreshData(),this.startTimer(this.refreshData)},t.prototype.componentDidUpdate=function(){var e=this.props,t=e.reportsFetchStatus,r=e.reports,n=this.state.isFirstFetchReportsCall;0===r.total&&n&&"complete"===t.status&&this.props.history.push("/no-reports")},t.prototype.componentWillUnmount=function(){this.stopTimer()},t.prototype.filtersInRowsAndCells=function(){var e=this,t=this.props.reports.items?Object.values(this.props.reports.items):[],r=[];t.length>0&&(r=t.map(function(t){return[{title:i.a.createElement(l.a,{to:"/reports/"+t.id},t.reportName)},{title:e.renderReportStatus(t)},{title:e.renderReportActions(t)}]})),this.setState({rows:r})},t.prototype.renderNoResults=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,null,i.a.createElement(h.a,null,i.a.createElement(g.a,{variant:g.b.full},i.a.createElement(d.a,{icon:x.a}),i.a.createElement(v.a,{headingLevel:"h5",size:"lg"},"No results found"),i.a.createElement(E.a,null,"No results match the search criteria")))))},t.prototype.renderResultsTable=function(){var e=this.state,t=e.rows,r=e.columns;return i.a.createElement(D.d,{"aria-label":"Reports list",rows:t,cells:r,gridBreakPoint:D.b.gridMd},i.a.createElement(R.a,null),i.a.createElement(P.a,null))},t.prototype.render=function(){var e=this.state,t=e.isFirstFetchReportsCall,r=e.page,n=e.perPage,a=this.props.reports.total;return t?i.a.createElement(w.a,null,i.a.createElement(s.SkeletonTable,{colSize:3,rowSize:10})):i.a.createElement(w.a,null,i.a.createElement(s.TableToolbar,{className:"pf-u-justify-content-space-between"},i.a.createElement(S.a,null,i.a.createElement(y.a,{className:"pf-u-mr-xl"},this.renderSearchBox()),i.a.createElement(y.a,{className:"pf-u-mr-md"},i.a.createElement(l.a,{to:"/reports/upload",className:"pf-c-button pf-m-primary"},"Create"))),i.a.createElement(S.a,null,i.a.createElement(y.a,null,i.a.createElement(b.a,{itemCount:a,perPage:n,page:r,onSetPage:this.onSetPage,onPageInput:this.onPageInput,onPerPageSelect:this.onPerPageSelect})))),a>0?this.renderResultsTable():this.renderNoResults())},t}(i.a.Component),k=r(267),M=r(17),z=r(86),B={fetchReports:M.k,deleteReport:M.b,showDeleteDialog:z.c,closeDeleteDialog:z.a};t.default=Object(k.a)(Object(a.connect)(function(e){var t=e.reportState;return{reports:t.reports,reportsFetchStatus:t.reportsFetchStatus}},B)(L))}}]);