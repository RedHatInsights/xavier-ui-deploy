(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1091:function(e,t,r){"use strict";r.r(t);var n,a=r(72),o=r(2),i=r.n(o),l=r(585),s=r(454),c=r(251),u=r(264),p=r(265),d=r(258),f=r(259),m=r(267),h=r(269),g=r(130),v=r(268),S=r(298),b=r(272),R=r(262),E=r(220),D=r(129),y=r(283),T=r(282),w=r(478),P=r(700),F=r(699),x=(r(778),r(589)),N=r(208),C=r(212),A=r(213),I=r(207),O=r(468),_=r.n(O),k=r(624),j=r(453),L=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),M=function(){return(M=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},z=5e3,B=function(e){function t(t){var r=e.call(this,t)||this;return r.refreshDataWithDedounce=_()((function(){r.refreshData()}),800),r.setStateAndResetTimerAndSetRenderStatus=function(e){void 0===e&&(e={}),r.resetRefreshDataTimer(),r.setState(M({},e,{renderInProgresFetchStatus:!0}))},r.resetRefreshDataTimer=function(){r.stopTimer(),r.startTimer(r.refreshData)},r.startTimer=function(e){r.pullTimer&&clearInterval(r.pullTimer),r.pullTimer=setInterval(e,z)},r.stopTimer=function(){clearInterval(r.pullTimer)},r.refreshData=function(e,t,n){void 0===e&&(e=r.state.page),void 0===t&&(t=r.state.perPage),void 0===n&&(n=r.state.filterText),r.props.fetchReports(e,t,n).then((function(){r.filtersInRowsAndCells(),r.state.renderInProgresFetchStatus&&r.setState({renderInProgresFetchStatus:!1}),r.state.isFirstFetchReportsCall&&r.setState({isFirstFetchReportsCall:!1})}))},r.filtersInRowsAndCells=function(){var e=r.props.reports.items?Object.values(r.props.reports.items):[],t=[];e.length>0&&(t=e.map((function(e){return{cells:[{title:r.renderReportName(e)},{title:r.renderReportStatus(e)},{title:r.renderReportActions(e)}]}}))),r.setState({rows:t})},r.handleReportKebabToggle=function(e,t){var n=r.state.toggleReportsIDS,a=new Set(n);t?a.add(e.id):a.delete(e.id),r.setState({toggleReportsIDS:a},(function(){r.filtersInRowsAndCells()}))},r.handleDownloadReportPayload=function(e){var t=r.props,n=t.fetchReportPayloadDownloadLink,a=t.addNotification;r.handleReportKebabToggle(e,!1),n(e.id).then((function(e){if(!(e&&e.value&&e.value.data))throw new Error("No valid response found");var t=e.value.data;if(t.downloadLink){var r=document.createElement("a");r.href=t.downloadLink,r.setAttribute("download",t.filename),document.body.appendChild(r),r.click(),r.remove()}else a({variant:"danger",title:"Could not download payload file",description:"The retention period for the payload file has expired",dismissable:!0})}))},r.handleDeleteReport=function(e){var t=r.props,n=t.deleteReport,a=t.showDeleteDialog,o=t.closeDeleteDialog;a({name:e.reportName,type:"report",onDelete:function(){n(e.id,e.reportName).then((function(){o(),r.setStateAndResetTimerAndSetRenderStatus(),r.refreshData()}))},onCancel:function(){o()}})},r.onPageChange=function(e,t,n){r.setState({page:t}),r.setStateAndResetTimerAndSetRenderStatus(),n?r.refreshDataWithDedounce():r.refreshData(t)},r.onSetPage=function(e,t){return"pf-c-form-control"===e.target.className||r.onPageChange(e,t,!1)},r.onPageInput=function(e,t){return r.onPageChange(e,t,!0)},r.onPerPageSelect=function(e,t){var n=r.state.page,a=r.props.reports.total;n*t>a&&(n=Math.floor(a/t)+1),r.setStateAndResetTimerAndSetRenderStatus({page:n,perPage:t}),r.refreshData(n,t)},r.handleSearchSubmit=function(e){var t=e.filterText.trim(),n=r.state.perPage;r.setStateAndResetTimerAndSetRenderStatus({filterText:t,page:1}),r.refreshData(1,n,t)},r.renderReportName=function(e){switch(e.status){case"CREATED":return i.a.createElement(l.a,{to:"/reports/"+e.id},e.reportName);default:return i.a.createElement("span",null,e.reportName)}},r.renderReportStatus=function(e){switch(e.status){case"CREATED":return i.a.createElement("p",null,i.a.createElement(N.b,{className:"success"})," Report created - ",Object(j.a)(new Date(e.lastUpdate)));case"FAILED":return i.a.createElement("p",null,i.a.createElement(C.b,{className:"error"})," Report failed - ",Object(j.a)(new Date(e.lastUpdate)));case"IN_PROGRESS":return i.a.createElement("p",null,i.a.createElement(A.b,{className:"progress"})," Analyzing the upload file");default:return null}},r.renderReportActions=function(e){var t=r.state.toggleReportsIDS.has(e.id),n=[i.a.createElement(c.a,{key:"download",component:"button",onClick:function(t){r.handleDownloadReportPayload(e)}},"Download"),i.a.createElement(c.a,{key:"delete",component:"button",onClick:function(t){r.handleDeleteReport(e)},style:{color:"var(--pf-global--danger-color--100)"}},"Delete")],a=i.a.createElement(u.a,{position:"right",toggle:i.a.createElement(p.a,{onToggle:function(t){r.handleReportKebabToggle(e,t)}}),isOpen:t,isPlain:!0,dropdownItems:n});switch(e.status){case"CREATED":case"FAILED":return a;case"IN_PROGRESS":return"";default:return null}},r.renderNoResults=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,null,i.a.createElement(f.a,null,i.a.createElement(m.a,{variant:m.b.full},i.a.createElement(h.a,{icon:I.b}),i.a.createElement(g.a,{headingLevel:"h5",size:"lg"},"No results found"),i.a.createElement(v.a,null,"No results match the search criteria")))))},r.renderResultsTable=function(){var e=r.state,t=e.rows,n=e.columns;return i.a.createElement(w.b,{"aria-label":"Reports list",rows:t,cells:n,gridBreakPoint:w.d.gridMd},i.a.createElement(P.a,null),i.a.createElement(F.a,null),i.a.createElement("tfoot",null,i.a.createElement("tr",null,i.a.createElement("td",{colSpan:10},r.renderPagination()))))},r.renderPagination=function(){var e=r.props.reports,t=r.state,n=t.page,a=t.perPage;return i.a.createElement(S.a,{itemCount:e.total,perPage:a,page:n,onSetPage:r.onSetPage,onPageInput:r.onPageInput,onPerPageSelect:r.onPerPageSelect})},r.renderResultsTableSkeleton=function(){return i.a.createElement(s.SkeletonTable,{colSize:3,rowSize:10})},r.renderSearchBox=function(){return i.a.createElement(k.a,{initialValues:{filterText:""},validate:function(){return{}},onSubmit:r.handleSearchSubmit},(function(e){var t=e.values,r=e.handleChange,n=e.handleBlur,a=e.handleSubmit;return i.a.createElement(b.a,{onSubmit:a},i.a.createElement(R.a,null,i.a.createElement(E.a,{type:"search",id:"filterText",name:"filterText","aria-label":"search text input",onChange:function(e,t){r(t)},onBlur:n,value:t.filterText,placeholder:"Filter by name..."}),i.a.createElement(D.a,{type:"submit",variant:D.c.tertiary,"aria-label":"search button for search input"},i.a.createElement(I.b,null))))}))},r.state={filterText:"",page:1,perPage:10,columns:["Name","Status",{title:"",props:{className:"pf-u-text-align-center"}}],rows:[],isFirstFetchReportsCall:!0,renderInProgresFetchStatus:!1,toggleReportsIDS:new Set},r}return L(t,e),t.prototype.componentDidMount=function(){this.refreshData(),this.resetRefreshDataTimer()},t.prototype.componentDidUpdate=function(){var e=this.props,t=e.reportsFetchStatus,r=e.reports,n=this.state.isFirstFetchReportsCall;0===r.total&&n&&"complete"===t.status&&this.props.history.push("/no-reports")},t.prototype.componentWillUnmount=function(){this.stopTimer()},t.prototype.render=function(){var e,t,r=this.state,n=r.isFirstFetchReportsCall,a=r.renderInProgresFetchStatus,o=this.props,c=o.reports,u=o.reportsFetchStatus;return e=n?"":i.a.createElement(s.TableToolbar,{className:"pf-u-justify-content-space-between"},i.a.createElement(y.a,null,i.a.createElement(T.a,{className:"pf-u-mr-xl"},this.renderSearchBox()),i.a.createElement(T.a,{className:"pf-u-mr-md"},i.a.createElement(l.a,{to:"/reports/upload",className:"pf-c-button pf-m-primary"},"Create"))),i.a.createElement(y.a,null,i.a.createElement(T.a,null,this.renderPagination()))),t=n||"inProgress"===u.status&&a?this.renderResultsTableSkeleton():c.total>0?this.renderResultsTable():this.renderNoResults(),i.a.createElement(x.a,null,e,t)},t}(i.a.Component),U=r(319),W=r(100),Z=r(13),H=r(107),K={addNotification:W.addNotification,fetchReports:Z.m,deleteReport:Z.b,showDeleteDialog:H.c,closeDeleteDialog:H.a,fetchReportPayloadDownloadLink:Z.f};t.default=Object(U.a)(Object(a.connect)((function(e){var t=e.reportState;return{reports:t.reports,reportsFetchStatus:t.reportsFetchStatus}}),K)(B))},453:function(e,t,r){"use strict";r.d(t,"d",(function(){return s})),r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return p}));var n=function(e){return e?e.toLowerCase():""},a=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.fractionDigits,a=void 0===n?2:n,o=e;return e||(o=0),o.toLocaleString("en",{style:"currency",currency:t||"USD",minimumFractionDigits:a,maximumFractionDigits:a})},o=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.fractionDigits;return e.toFixed(n)},i=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.fractionDigits,a=void 0===n?2:n;return e.toFixed(a)},l=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.fractionDigits;return e.toFixed(n)},s=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=n(t),c=e||0;switch(s){case"usd":return a(c,s,r);case"gb":case"gb-hours":case"gb-mo":return i(c,s,r);case"core-hours":case"hrs":return l(c,s,r);default:return o(c,s,r)}},c=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=Intl.DateTimeFormat().resolvedOptions().timeZone,n={timeZone:r,timeZoneName:"short",year:"numeric",month:"long",day:"numeric"},a={timeZone:r,timeZoneName:"short",hour:"2-digit",minute:"2-digit"},o=n;return t&&(o=Object.assign({},n,a)),e.toLocaleDateString("en",o)},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return e.toLocaleString("en",{style:"decimal",minimumFractionDigits:t,maximumFractionDigits:t})},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return e.toLocaleString("en",{style:"percent",minimumFractionDigits:t,maximumFractionDigits:t})}},468:function(e,t,r){var n=r(452),a=r(513),o=r(481),i="Expected a function",l=Math.max,s=Math.min;e.exports=function(e,t,r){var c,u,p,d,f,m,h=0,g=!1,v=!1,S=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var r=c,n=u;return c=u=void 0,h=t,d=e.apply(n,r)}function R(e){var r=e-m;return void 0===m||r>=t||r<0||v&&e-h>=p}function E(){var e=a();if(R(e))return D(e);f=setTimeout(E,function(e){var r=t-(e-m);return v?s(r,p-(e-h)):r}(e))}function D(e){return f=void 0,S&&c?b(e):(c=u=void 0,d)}function y(){var e=a(),r=R(e);if(c=arguments,u=this,m=e,r){if(void 0===f)return function(e){return h=e,f=setTimeout(E,t),g?b(e):d}(m);if(v)return clearTimeout(f),f=setTimeout(E,t),b(m)}return void 0===f&&(f=setTimeout(E,t)),d}return t=o(t)||0,n(r)&&(g=!!r.leading,p=(v="maxWait"in r)?l(o(r.maxWait)||0,t):p,S="trailing"in r?!!r.trailing:S),y.cancel=function(){void 0!==f&&clearTimeout(f),h=0,c=m=u=f=void 0},y.flush=function(){return void 0===f?d:D(a())},y}},481:function(e,t){e.exports=function(e){return e}},511:function(e,t,r){"use strict";var n,a=r(2),o=r.n(a),i=r(454),l=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),s=function(e){function t(t){return e.call(this,t)||this}return l(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement(a.Fragment,null,o.a.createElement(i.PageHeader,null,o.a.createElement(i.PageHeaderTitle,{title:"Reports"})),o.a.createElement(i.Main,{style:this.props.mainStyle},e))},t}(a.Component);t.a=s},513:function(e,t,r){var n=r(480);e.exports=function(){return n.Date.now()}},588:function(e,t,r){(e.exports=r(7)(!1)).push([e.i,".pf-c-empty-state > .dropzone {\n  margin-top: var(--pf-c-empty-state--c-button--MarginTop); }\n\n.error {\n  color: var(--pf-global--danger-color--100) !important; }\n\n.success {\n  color: var(--pf-global--success-color--100) !important; }\n",""])},589:function(e,t,r){"use strict";var n=r(511);t.a=n.a},778:function(e,t,r){var n=r(588);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=r(8)(n,a);n.locals&&(e.exports=n.locals),e.hot.accept(588,(function(){var t=r(588);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))}}]);
//# sourceMappingURL=Reports.js.map