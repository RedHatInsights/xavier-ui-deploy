(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{397:function(e,t,r){"use strict";r.d(t,"b",function(){return a}),r.d(t,"a",function(){return n});var a=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=function(e){return e?e.toLowerCase():""}(t),n=e||0;switch(a){case"usd":return function(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).fractionDigits,a=void 0===r?2:r,n=e;return e||(n=0),n.toLocaleString("en",{style:"currency",currency:t||"USD",minimumFractionDigits:a,maximumFractionDigits:a})}(n,a,r);case"gb":case"gb-hours":case"gb-mo":return function(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).fractionDigits,a=void 0===r?2:r;return e.toFixed(a)}(n,a,r);case"core-hours":case"hrs":default:return function(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).fractionDigits;return e.toFixed(r)}(n,a,r)}},n=function(e){return e.getDate()+" "+e.toLocaleString("default",{month:"long"})+" "+e.getFullYear()}},412:function(e,t,r){"use strict";var a,n=r(2),o=r.n(n),l=r(392),s=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),i=function(e){function t(t){return e.call(this,t)||this}return s(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement(n.Fragment,null,o.a.createElement(l.PageHeader,null,o.a.createElement(l.PageHeaderTitle,{title:"Reports"})),o.a.createElement(l.Main,{style:this.props.mainStyle},e))},t}(n.Component);t.a=i},453:function(e,t,r){(e.exports=r(5)(!1)).push([e.i,".pf-c-empty-state > .dropzone {\n  margin-top: var(--pf-c-empty-state--c-button--MarginTop); }\n\n.error {\n  color: var(--pf-global--danger-color--100) !important; }\n\n.success {\n  color: var(--pf-global--success-color--100) !important; }\n",""])},454:function(e,t,r){"use strict";var a=r(412);t.a=a.a},549:function(e,t,r){var a=r(453);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},o=r(6)(a,n);a.locals&&(e.exports=a.locals),e.hot.accept(453,function(){var t=r(453);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,a=0;for(r in e){if(!t||e[r]!==t[r])return!1;a++}for(r in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},704:function(e,t,r){"use strict";r.r(t);var a,n=r(63),o=r(2),l=r.n(o),s=r(452),i=r(392),c=r(177),u=r(212),p=r(206),f=r(178),m=r(203),h=r(204),d=r(207),g=r(209),v=r(106),E=r(208),b=r(222),S=r(221),y=r(246),D=r(540),R=r(702),P=r(698),w=(r(549),r(454)),T=r(229),F=r(232),C=r(233),N=r(228),x=r(455),_=r.n(x),O=r(539),I=r(397),A=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),j=5e3,L=function(e){function t(t){var r=e.call(this,t)||this;return r.changePage=_()(function(){r.refreshData()},800),r.startTimer=function(e){r.pullTimer&&clearInterval(r.pullTimer),r.pullTimer=setInterval(e,j)},r.stopTimer=function(){clearInterval(r.pullTimer)},r.handleDeleteReport=function(e){var t=r.props,a=t.deleteReport,n=t.showDeleteDialog,o=t.closeDeleteDialog;n({name:e.reportName,type:"report",onDelete:function(){a(e.id,e.reportName).then(function(){o(),r.refreshData()})},onCancel:function(){o()}})},r.renderReportStatus=function(e){switch(e.status){case"CREATED":return l.a.createElement("p",null,l.a.createElement(T.a,{className:"success"})," Report created - ",Object(I.a)(new Date(e.lastUpdate)));case"FAILED":return l.a.createElement("p",null,l.a.createElement(F.a,{className:"error"})," Report failed - ",Object(I.a)(new Date(e.lastUpdate)));case"IN_PROGRESS":return l.a.createElement("p",null,l.a.createElement(C.a,{className:"progress"})," Analyzing the upload file");default:return null}},r.renderReportActions=function(e){var t=function(t){r.handleDeleteReport(e)};switch(e.status){case"CREATED":case"FAILED":return l.a.createElement(c.a,{variant:c.c.secondary,onClick:t},"Delete");case"IN_PROGRESS":return"";default:return null}},r.refreshData=function(e,t,a){void 0===e&&(e=r.state.page),void 0===t&&(t=r.state.perPage),void 0===a&&(a=r.state.filterText),r.props.fetchReports(e,t,a).then(function(){r.filtersInRowsAndCells(),r.state.isFirstFetchReportsCall&&r.setState({isFirstFetchReportsCall:!1})})},r.onPageChange=function(e,t,a){r.setState({page:t}),a?r.changePage():r.refreshData(t)},r.onSetPage=function(e,t){return"pf-c-form-control"===e.target.className||r.onPageChange(e,t,!1)},r.onPageInput=function(e,t){return r.onPageChange(e,t,!0)},r.onPerPageSelect=function(e,t){var a=r.state.page,n=r.props.reports.total;a*t>n&&(a=Math.floor(n/t)+1),r.setState({page:a,perPage:t}),r.refreshData(a,t)},r.handleSearchSubmit=function(e){var t=e.filterText;r.setState({filterText:t.trim()}),r.refreshData()},r.renderSearchBox=function(){return l.a.createElement(O.a,{initialValues:{filterText:""},validate:function(){return{}},onSubmit:r.handleSearchSubmit},function(e){var t=e.values,r=e.handleChange,a=e.handleBlur,n=e.handleSubmit;return l.a.createElement(u.a,{onSubmit:n},l.a.createElement(p.a,null,l.a.createElement(f.a,{type:"search",id:"filterText",name:"filterText","aria-label":"search text input",onChange:function(e,t){r(t)},onBlur:a,value:t.filterText,placeholder:"Filter by name..."}),l.a.createElement(c.a,{type:"submit",variant:c.c.tertiary,"aria-label":"search button for search input"},l.a.createElement(N.a,null))))})},r.state={filterText:"",page:1,perPage:10,columns:["Name","Status",{title:"",props:{className:"pf-u-text-align-center"}}],rows:[],isFirstFetchReportsCall:!0},r}return A(t,e),t.prototype.componentDidMount=function(){this.refreshData(),this.startTimer(this.refreshData)},t.prototype.componentDidUpdate=function(){var e=this.props,t=e.reportsFetchStatus,r=e.reports,a=this.state.isFirstFetchReportsCall;0===r.total&&a&&"complete"===t.status&&this.props.history.push("/no-reports")},t.prototype.componentWillUnmount=function(){this.stopTimer()},t.prototype.filtersInRowsAndCells=function(){var e=this,t=this.props.reports.items?Object.values(this.props.reports.items):[],r=[];t.length>0&&(r=t.map(function(t){return[{title:l.a.createElement(s.a,{to:"/reports/"+t.id},t.reportName)},{title:e.renderReportStatus(t)},{title:e.renderReportActions(t)}]})),this.setState({rows:r})},t.prototype.renderNoResults=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,null,l.a.createElement(h.a,null,l.a.createElement(d.a,{variant:d.b.full},l.a.createElement(g.a,{icon:N.a}),l.a.createElement(v.a,{headingLevel:"h5",size:"lg"},"No results found"),l.a.createElement(E.a,null,"No results match the search criteria")))))},t.prototype.renderResultsTable=function(){var e=this.state,t=e.rows,r=e.columns;return l.a.createElement(D.d,{"aria-label":"Reports list",rows:t,cells:r,gridBreakPoint:D.b.gridMd},l.a.createElement(R.a,null),l.a.createElement(P.a,null))},t.prototype.render=function(){var e=this.state,t=e.isFirstFetchReportsCall,r=e.page,a=e.perPage,n=this.props.reports.total;return t?l.a.createElement(w.a,null,l.a.createElement(i.SkeletonTable,{colSize:3,rowSize:10})):l.a.createElement(w.a,null,l.a.createElement(i.TableToolbar,{className:"pf-u-justify-content-space-between"},l.a.createElement(b.a,null,l.a.createElement(S.a,{className:"pf-u-mr-xl"},this.renderSearchBox()),l.a.createElement(S.a,{className:"pf-u-mr-md"},l.a.createElement(s.a,{to:"/reports/upload",className:"pf-c-button pf-m-primary"},"Create"))),l.a.createElement(b.a,null,l.a.createElement(S.a,null,l.a.createElement(y.a,{itemCount:n,perPage:a,page:r,onSetPage:this.onSetPage,onPageInput:this.onPageInput,onPerPageSelect:this.onPerPageSelect})))),n>0?this.renderResultsTable():this.renderNoResults())},t}(l.a.Component),M=r(258),k=r(23),z=r(85),B={fetchReports:k.g,deleteReport:k.b,showDeleteDialog:z.c,closeDeleteDialog:z.a};t.default=Object(M.a)(Object(n.connect)(function(e){var t=e.reportState;return{reports:t.reports,reportsFetchStatus:t.reportsFetchStatus}},B)(L))}}]);