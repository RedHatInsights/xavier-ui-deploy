(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1050:function(e,t,r){var a=r(618);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},o=r(8)(a,n);a.locals&&(e.exports=a.locals),e.hot.accept(618,(function(){var t=r(618);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,a=0;for(r in e){if(!t||e[r]!==t[r])return!1;a++}for(r in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1051:function(e,t,r){var a=r(619);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},o=r(8)(a,n);a.locals&&(e.exports=a.locals),e.hot.accept(619,(function(){var t=r(619);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,a=0;for(r in e){if(!t||e[r]!==t[r])return!1;a++}for(r in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1077:function(e,t,r){"use strict";r.r(t);var a,n=r(72),o=r(2),l=r.n(o),s=r(454),c=r(280),i=r(281),u=r(278),p=r(267),m=r(269),d=r(130),f=r(268),h=r(129),g=r(212),b=r(701),E=r(478),v=r(700),y=r(699),S=r(453),k=(r(865),r(473)),O=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),P=function(e){function t(t){var r=e.call(this,t)||this;return r.state={columns:["Provider","Product","Version","Hosts","Sockets","Clusters","VMs"]},r}return O(t,e),t.prototype.render=function(){var e=this.state.columns,t=this.props.summary,r=0,a=0,n=0,o=0,s=t.map((function(e){return r+=e.hosts||0,a+=e.sockets||0,n+=e.clusters||0,o+=e.vms||0,[Object(k.a)(e.provider)?"":e.provider,Object(k.a)(e.product)?"":e.product,Object(k.a)(e.version)?"":e.version,Object(k.a)(e.hosts)?"":Object(S.b)(e.hosts,0),Object(k.a)(e.sockets)?"":Object(S.b)(e.sockets,0),Object(k.a)(e.clusters)?"":Object(S.b)(e.clusters,0),Object(k.a)(e.vms)?"":Object(S.b)(e.vms,0)]}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.b,{"aria-label":"Summary table",cells:e,rows:s,variant:E.e.compact,borders:!1},l.a.createElement(v.a,null),l.a.createElement(y.a,null),l.a.createElement("tfoot",null,l.a.createElement("tr",{className:"summary-table-footer"},l.a.createElement("td",{colSpan:3},l.a.createElement("strong",null,"Total")),l.a.createElement("td",null,l.a.createElement("strong",null,Object(S.b)(r,0))),l.a.createElement("td",null,l.a.createElement("strong",null,Object(S.b)(a,0))),l.a.createElement("td",null,l.a.createElement("strong",null,Object(S.b)(n,0))),l.a.createElement("td",null,l.a.createElement("strong",null,Object(S.b)(o,0)))))))},t}(o.Component),F=r(698),w=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function a(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(a.prototype=r.prototype,new a)}}(),j=function(e){function t(t){var r=e.call(this,t)||this;return r.state={columns:["Target","Type","Date"]},r}return w(t,e),t.prototype.render=function(){var e=this.state.columns,t=this.props.scanRuns.map((function(e){return[e.target,e.smartStateEnabled?"Virt Platform + SmartState":"Virt Platform",Object(S.a)(new Date(e.date),!1)]}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.b,{"aria-label":"Scans run table",cells:e,rows:t,variant:E.e.compact,borders:!1},l.a.createElement(v.a,null),l.a.createElement(y.a,null)))},t}(o.Component),C=r(642),R=r(636),_=r(298),D=r(283),W=r(282),T=r(207),x=r(468),N=r.n(x),I=(r(1050),function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function a(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(a.prototype=r.prototype,new a)}}()),M=function(e){function t(t){var r=e.call(this,t)||this;return r.changePage=N()((function(){r.refreshData()}),800),r.refreshData=function(e,t,a){void 0===e&&(e=r.state.page),void 0===t&&(t=r.state.perPage);var n=void 0===a?r.state.sortBy:a,o=n.direction,l=n.index,s=r.props,c=s.reportId;(0,s.fetchReportWorkloadsDetected)(c,e,t,l?r.state.columns[l].key:void 0,o||void 0).then((function(){r.filtersInRowsAndCells()}))},r.filtersInRowsAndCells=function(){var e=r.props.reportWorkloadsDetected.items?Object.values(r.props.reportWorkloadsDetected.items):[],t=[];e.length>0&&(t=e.map((function(e){return[e.workload?e.workload:"",e.osName?e.osName:"",Object(k.a)(e.clusters)?"":Object(S.b)(e.clusters,0),Object(k.a)(e.vms)?"":Object(S.b)(e.vms,0)]}))),r.setState({rows:t})},r.onSort=function(e,t,a){var n=r.props.reportId,o=r.state.perPage,l=t?r.state.columns[t].key:void 0,s=a||void 0;r.props.fetchReportWorkloadsDetected(n,1,o,l,s).then((function(){r.setState({page:1,sortBy:{index:t,direction:a}}),r.filtersInRowsAndCells()}))},r.onPageChange=function(e,t,a){r.setState({page:t}),a?r.changePage():r.refreshData(t)},r.onSetPage=function(e,t){return"pf-c-form-control"===e.target.className||r.onPageChange(e,t,!1)},r.onPageInput=function(e,t){return r.onPageChange(e,t,!0)},r.onPerPageSelect=function(e,t){var a=r.state.page,n=r.props.reportWorkloadsDetected.total;a*t>n&&(a=Math.floor(n/t)+1),r.setState({page:a,perPage:t}),r.refreshData(a,t)},r.renderPagination=function(){var e=r.state,t=e.page,a=e.perPage,n=r.props.reportWorkloadsDetected.total;return l.a.createElement(_.a,{itemCount:n,perPage:a,page:t,onSetPage:r.onSetPage,onPageInput:r.onPageInput,onPerPageSelect:r.onPerPageSelect})},r.renderResultsTable=function(){var e=r.state,t=e.rows,a=e.columns,n=e.sortBy;return l.a.createElement(E.b,{"aria-label":"Workloads detected",cells:a,rows:t,sortBy:n,onSort:r.onSort,variant:E.e.compact,borders:!1},l.a.createElement(v.a,null),l.a.createElement(y.a,null),l.a.createElement("tfoot",null,l.a.createElement("tr",{className:"workloads-detected-table-footer"},l.a.createElement("td",{colSpan:10},r.renderPagination()))))},r.renderNoResults=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement(p.a,{variant:p.b.full},l.a.createElement(m.a,{icon:T.b}),l.a.createElement(d.a,{headingLevel:"h5",size:"lg"},"No results found"),l.a.createElement(f.a,null,"No results match the search criteria"))))},r.renderTable=function(){var e=r.props.reportWorkloadsDetected;return l.a.createElement(l.a.Fragment,null,e.total>0?r.renderResultsTable():r.renderNoResults())},r.renderTableSkeleton=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.SkeletonTable,{colSize:4,rowSize:5}))},r.renderFetchError=function(){return l.a.createElement(u.a,null,l.a.createElement(p.a,{variant:p.b.large},l.a.createElement(m.a,{icon:g.b}),l.a.createElement(d.a,{headingLevel:d.b.h5,size:"lg"},"Error"),l.a.createElement(f.a,null,"Something unexpected happend, please try again!"),l.a.createElement(h.a,{variant:"primary",onClick:function(){r.refreshData()}},"Retry")))},r.state={page:1,perPage:10,columns:[{title:"Workloads",key:"workload",props:{},transforms:[Object(C.a)("25"),R.a]},{title:"OS",key:"osName",props:{},transforms:[Object(C.a)("25"),R.a]},{title:"In Clusters",key:"clusters",props:{},transforms:[Object(C.a)("25")]},{title:"VMs",key:"vms",props:{},transforms:[Object(C.a)("25"),R.a]}],rows:[],sortBy:{}},r}return I(t,e),t.prototype.componentDidMount=function(){this.refreshData()},t.prototype.render=function(){var e=this.props.reportWorkloadsDetectedFetchStatus;if(e.error)return this.renderFetchError();var t="complete"===e.status;return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.TableToolbar,{className:"pf-u-justify-content-space-between"},l.a.createElement(D.a,null,l.a.createElement(W.a,{className:"pf-u-mr-xl"})),l.a.createElement(D.a,null,l.a.createElement(W.a,null,this.renderPagination()))),t?this.renderTable():this.renderTableSkeleton())},t}(l.a.Component),A=r(13),z={fetchReportWorkloadsDetected:A.l},B=Object(n.connect)((function(e){var t=e.reportState;return{reportWorkloadsDetected:t.reportWorkloadsDetected,reportWorkloadsDetectedFetchStatus:t.reportWorkloadsDetectedFetchStatus}}),z)(M),V=(r(1051),function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function a(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(a.prototype=r.prototype,new a)}}()),H=function(e){function t(t){var r=e.call(this,t)||this;return r.changePage=N()((function(){r.refreshData()}),800),r.refreshData=function(e,t,a){void 0===e&&(e=r.state.page),void 0===t&&(t=r.state.perPage);var n=void 0===a?r.state.sortBy:a,o=n.direction,l=n.index,s=r.props,c=s.reportId;(0,s.fetchReportFlags)(c,e,t,l?r.state.columns[l].key:void 0,o||void 0).then((function(){r.filtersInRowsAndCells()}))},r.filtersInRowsAndCells=function(){var e=r.props,t=e.allFlags,a=e.reportFlags,n=a.items?Object.values(a.items):[],o=[];n.length>0&&(o=n.map((function(e){var r=t.find((function(t){return t.flag===e.flag&&t.osName===e.osName}));return r||(r=t.find((function(t){return t.flag===e.flag&&""===t.osName}))),[r?r.flagLabel:e.flag,r?r.assessment:"",e.osName?e.osName:"",Object(k.a)(e.clusters)?"":Object(S.b)(e.clusters,0),Object(k.a)(e.vms)?"":Object(S.b)(e.vms,0)]}))),r.setState({rows:o})},r.onSort=function(e,t,a){var n=r.props.reportId,o=r.state.perPage,l=t?r.state.columns[t].key:void 0,s=a||void 0;r.props.fetchReportFlags(n,1,o,l,s).then((function(){r.setState({page:1,sortBy:{index:t,direction:a}}),r.filtersInRowsAndCells()}))},r.onPageChange=function(e,t,a){r.setState({page:t}),a?r.changePage():r.refreshData(t)},r.onSetPage=function(e,t){return"pf-c-form-control"===e.target.className||r.onPageChange(e,t,!1)},r.onPageInput=function(e,t){return r.onPageChange(e,t,!0)},r.onPerPageSelect=function(e,t){var a=r.state.page,n=r.props.reportFlags.total;a*t>n&&(a=Math.floor(n/t)+1),r.setState({page:a,perPage:t}),r.refreshData(a,t)},r.renderPagination=function(){var e=r.state,t=e.page,a=e.perPage,n=r.props.reportFlags.total;return l.a.createElement(_.a,{itemCount:n,perPage:a,page:t,onSetPage:r.onSetPage,onPageInput:r.onPageInput,onPerPageSelect:r.onPerPageSelect})},r.renderResultsTable=function(){var e=r.state,t=e.rows,a=e.columns,n=e.sortBy;return l.a.createElement(E.b,{"aria-label":"Workloads detected",cells:a,rows:t,sortBy:n,onSort:r.onSort,variant:E.e.compact,borders:!1},l.a.createElement(v.a,null),l.a.createElement(y.a,null),l.a.createElement("tfoot",null,l.a.createElement("tr",{className:"flags-table-footer"},l.a.createElement("td",{colSpan:10},r.renderPagination()))))},r.renderNoResults=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement(p.a,{variant:p.b.full},l.a.createElement(m.a,{icon:T.b}),l.a.createElement(d.a,{headingLevel:"h5",size:"lg"},"No results found"),l.a.createElement(f.a,null,"No results match the search criteria"))))},r.renderTable=function(){var e=r.props.reportFlags;return l.a.createElement(l.a.Fragment,null,e.total>0?r.renderResultsTable():r.renderNoResults())},r.renderTableSkeleton=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.SkeletonTable,{colSize:5,rowSize:5}))},r.renderFetchError=function(){return l.a.createElement(u.a,null,l.a.createElement(p.a,{variant:p.b.large},l.a.createElement(m.a,{icon:g.b}),l.a.createElement(d.a,{headingLevel:d.b.h5,size:"lg"},"Error"),l.a.createElement(f.a,null,"Something unexpected happend, please try again!"),l.a.createElement(h.a,{variant:"primary",onClick:function(){r.refreshData()}},"Retry")))},r.state={page:1,perPage:10,columns:[{title:"Flags",key:"flag",props:{},transforms:[R.a]},{title:"Assessment",key:"assessment",props:{},transforms:[]},{title:"OS",key:"osName",props:{},transforms:[Object(C.a)("10"),R.a]},{title:"In Clusters",key:"clusters",props:{},transforms:[]},{title:"In VMs",key:"vms",props:{},transforms:[R.a]}],rows:[],sortBy:{}},r}return V(t,e),t.prototype.componentDidMount=function(){var e=this.props,t=e.allFlags,r=e.fetchAllFlagAssessments;t&&0===t.length&&r(),this.refreshData()},t.prototype.componentDidUpdate=function(e){e.allFlags!==this.props.allFlags&&this.filtersInRowsAndCells()},t.prototype.render=function(){var e=this.props.reportFlagsFetchStatus;if(e.error)return this.renderFetchError();var t="complete"===e.status;return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.TableToolbar,{className:"pf-u-justify-content-space-between"},l.a.createElement(D.a,null,l.a.createElement(W.a,{className:"pf-u-mr-xl"})),l.a.createElement(D.a,null,l.a.createElement(W.a,null,this.renderPagination()))),t?this.renderTable():this.renderTableSkeleton())},t}(l.a.Component),L=r(139),U={fetchReportFlags:A.d,fetchAllFlagAssessments:L.b},J=Object(n.connect)((function(e){var t=e.reportState,r=t.reportFlags,a=t.reportFlagsFetchStatus,n=e.mappingsState.flagAssessment;return{reportFlags:r,reportFlagsFetchStatus:a,allFlags:n.allFlags,allFlagsFetchStatus:n.allFlagsFetchStatus}}),U)(H),q=r(258),G=r(259),K=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function a(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(a.prototype=r.prototype,new a)}}(),Q=function(e){function t(t){return e.call(this,t)||this}return K(t,e),t.prototype.render=function(){var e=this.props,t=e.title,r=e.description;return l.a.createElement(q.a,{className:"xa-c-card-solid"},l.a.createElement(G.a,null,l.a.createElement("h2",{className:"pf-c-title pf-m-3xl"},t),l.a.createElement("h3",{className:"pf-c-title pf-m-1xl"},r)))},t}(l.a.Component),X=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function a(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(a.prototype=r.prototype,new a)}}(),Y=function(e,t){return e+t},Z=function(e){function t(t){var r=e.call(this,t)||this;return r.refreshData=function(){var e=r.props,t=e.reportId;(0,e.fetchReportWorkloadSummary)(t).then((function(){r.setState({isCurrentFetchReportWorkloadSummaryCompletedSuccessfully:!0})})).catch((function(){r.setState({isCurrentFetchReportWorkloadSummaryCompletedSuccessfully:!1})}))},r.renderErrorCard=function(e){return l.a.createElement(b.a,{title:e},"There is no enough data to render this card.")},r.renderSummary=function(){var e=r.props.reportWorkloadSummary;if(!e)return r.renderErrorCard("Summary");var t=e.summaryModels;return t?l.a.createElement(b.a,{title:"Summary"},l.a.createElement(P,{summary:t})):r.renderErrorCard("Summary")},r.renderMigrationComplexity=function(){var e=r.props.reportWorkloadSummary,t="Migration complexity";if(!e)return r.renderErrorCard(t);var a=e.complexityModel;if(!a)return r.renderErrorCard(t);var n=[a.easy||0,a.medium||0,a.hard||0,a.unknown||0,a.unsupported||0],o=n.reduce(Y,0),s=n.map((function(e){return e/o})),c={title:Object(S.b)(o,0),subTitle:"Total VMs",height:250,width:250},i=[{label:"Easy",value:s[0],extraData:n[0]},{label:"Medium",value:s[1],extraData:n[1]},{label:"Hard",value:s[2],extraData:n[2]},{label:"Unknown",value:s[3],extraData:n[3]},{label:"Unsupported",value:s[4],extraData:n[4]}];return l.a.createElement(b.a,{title:"Migration complexity"},l.a.createElement(F.a,{data:i,chartProps:c,chartLegendProps:{height:300,width:210,responsive:!1,y:60},tickFormat:function(e,t,r){return e+": "+Object(S.c)(t,2)},tooltipFormat:function(e){var t=e.datum;return t.x+": "+Object(S.c)(t.y,2)+" \n VMs: "+Object(S.b)(t.extraData,0)}}))},r.renderTargetRecommendation=function(){var e=r.props.reportWorkloadSummary,t="Target recommendation";if(!e)return r.renderErrorCard(t);var a=e.recommendedTargetsIMSModel;if(!a)return r.renderErrorCard(t);var n=[a.rhv||0,a.osp||0,a.rhel||0,a.ocp||0],o=a.total,s=n.map((function(e){return e/o}));return l.a.createElement(b.a,{title:t,skipBullseye:!0},l.a.createElement("div",{className:"pf-l-grid pf-m-all-6-col-on-md pf-m-all-3-col-on-lg pf-m-gutter"},l.a.createElement(Q,{title:Object(S.c)(s[0],0)+" RHV",description:"Workloads suitable for Red Hat Virtualization"}),l.a.createElement(Q,{title:Object(S.c)(s[1],0)+" OSP",description:"Workloads could be running on Red Hat OpenStack Platform"}),l.a.createElement(Q,{title:Object(S.c)(s[2],0)+" RHEL",description:"Workloads possible to migrate to Red Hat Enterprise Linux"}),l.a.createElement(Q,{title:Object(S.c)(s[3],0)+" OCP",description:"Workloads suitable for Container-Native Virtualization"})))},r.renderWorkloadsDetectedTable=function(){var e=r.props.reportId;return l.a.createElement(b.a,{title:"Workloads detected",skipBullseye:!0},l.a.createElement(B,{reportId:e}))},r.renderWorkloadsDetected=function(){var e=r.props.reportWorkloadSummary,t="Workloads detected (OS Types)";if(!e)return r.renderErrorCard(t);var a=e.workloadsDetectedOSTypeModels;if(!a)return r.renderErrorCard(t);var n=a.map((function(e){return e.total})),o=n.reduce(Y,0),s=n.map((function(e){return e/o})),c={title:Object(S.b)(o,0),subTitle:"Total workloads",height:300,width:300},i=a.map((function(e,t){return{label:e.osName,value:s[t],extraData:n[t]}}));return l.a.createElement(b.a,{title:t},l.a.createElement(F.a,{data:i,chartProps:c,chartLegendProps:{height:300,width:210,responsive:!1,y:60},tickFormat:function(e,t){return e+": "+Object(S.c)(t,2)},tooltipFormat:function(e){var t=e.datum;return t.x+": "+Object(S.c)(t.y,2)+" \n Workloads: "+Object(S.b)(t.extraData,0)}}))},r.renderFlagsTable=function(){var e=r.props.reportId;return l.a.createElement(b.a,{title:"Flags (Considerations to be migrated)",skipBullseye:!0},l.a.createElement(J,{reportId:e}))},r.renderScansRun=function(){var e=r.props.reportWorkloadSummary;if(!e)return r.renderErrorCard("Scans run");var t=e.scanRunModels;return t?l.a.createElement(b.a,{title:"Scans run"},l.a.createElement(j,{scanRuns:t})):r.renderErrorCard("Scans run")},r.renderReports=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{gutter:"md"},l.a.createElement(i.a,{isFilled:!1},r.renderSummary()),l.a.createElement(i.a,{isFilled:!1},r.renderMigrationComplexity()),l.a.createElement(i.a,{isFilled:!1},r.renderTargetRecommendation()),l.a.createElement(i.a,{isFilled:!1},r.renderWorkloadsDetectedTable()),l.a.createElement(i.a,{isFilled:!1},r.renderWorkloadsDetected()),l.a.createElement(i.a,{isFilled:!1},r.renderFlagsTable()),l.a.createElement(i.a,{isFilled:!1},r.renderScansRun())))},r.renderReportSkeleton=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{gutter:"md"},l.a.createElement(i.a,{isFilled:!1},l.a.createElement(b.a,{title:l.a.createElement(s.Skeleton,{size:"sm"})},l.a.createElement(s.SkeletonTable,{colSize:7,rowSize:3}))),l.a.createElement(i.a,{isFilled:!1},l.a.createElement(b.a,{title:l.a.createElement(s.Skeleton,{size:"sm"})},l.a.createElement(s.Skeleton,{size:"sm",style:{height:"300px"}}))),l.a.createElement(i.a,{isFilled:!1},l.a.createElement(b.a,{title:l.a.createElement(s.Skeleton,{size:"sm"})},l.a.createElement(s.SkeletonTable,{colSize:3,rowSize:1})))))},r.renderFetchError=function(){return l.a.createElement(u.a,null,l.a.createElement(p.a,{variant:p.b.large},l.a.createElement(m.a,{icon:g.b}),l.a.createElement(d.a,{headingLevel:d.b.h5,size:"lg"},"Error"),l.a.createElement(f.a,null,"Something unexpected happend, please try again!"),l.a.createElement(h.a,{variant:"primary",onClick:r.refreshData},"Retry")))},r.state={isCurrentFetchReportWorkloadSummaryCompletedSuccessfully:!1},r}return X(t,e),t.prototype.componentDidMount=function(){this.refreshData()},t.prototype.render=function(){var e=this.state.isCurrentFetchReportWorkloadSummaryCompletedSuccessfully,t=this.props,r=t.reportWorkloadSummary,a=t.reportWorkloadSummaryFetchStatus,n="complete"===a.status;return a.error||n&&!r?this.renderFetchError():l.a.createElement(l.a.Fragment,null,n&&e?this.renderReports():this.renderReportSkeleton())},t}(l.a.Component),$={fetchReportWorkloadSummary:A.k};t.default=Object(n.connect)((function(e){var t=e.reportState;return{reportWorkloadSummary:t.reportWorkloadSummary,reportWorkloadSummaryFetchStatus:t.reportWorkloadSummaryFetchStatus}}),$)(Z)},609:function(e,t,r){(e.exports=r(7)(!1)).push([e.i,".summary-table-footer {\n  border-bottom: 0 !important; }\n",""])},618:function(e,t,r){(e.exports=r(7)(!1)).push([e.i,".workloads-detected-table-footer {\n  height: 1px;\n  border-top: var(--pf-c-table--BorderWidth) solid var(--pf-c-table--BorderColor);\n  border-bottom: 0 !important; }\n",""])},619:function(e,t,r){(e.exports=r(7)(!1)).push([e.i,".flags-table-footer {\n  height: 1px;\n  border-top: var(--pf-c-table--BorderWidth) solid var(--pf-c-table--BorderColor);\n  border-bottom: 0 !important; }\n",""])},865:function(e,t,r){var a=r(609);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},o=r(8)(a,n);a.locals&&(e.exports=a.locals),e.hot.accept(609,(function(){var t=r(609);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,a=0;for(r in e){if(!t||e[r]!==t[r])return!1;a++}for(r in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))}}]);
//# sourceMappingURL=WorkloadMigrationSummary.js.map