(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1052:function(e,t,r){var a=r(620);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},o=r(8)(a,n);a.locals&&(e.exports=a.locals),e.hot.accept(620,(function(){var t=r(620);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,a=0;for(r in e){if(!t||e[r]!==t[r])return!1;a++}for(r in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1053:function(e,t,r){var a=r(621);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},o=r(8)(a,n);a.locals&&(e.exports=a.locals),e.hot.accept(621,(function(){var t=r(621);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,a=0;for(r in e){if(!t||e[r]!==t[r])return!1;a++}for(r in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1079:function(e,t,r){"use strict";r.r(t);var a,n=r(72),o=r(2),l=r.n(o),s=r(456),c=r(105),i=r(282),u=r(283),p=r(280),d=r(268),m=r(270),f=r(130),h=r(269),g=r(129),b=r(210),v=r(213),y=r(705),E=r(480),S=r(702),k=r(701),w=r(455),O=(r(867),r(475)),P=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),F=function(e){function t(t){var r=e.call(this,t)||this;return r.state={columns:["Provider","Product","Version","Hosts","Sockets","Clusters","VMs"]},r}return P(t,e),t.prototype.render=function(){var e=this.state.columns,t=this.props.summary,r=0,a=0,n=0,o=0,s=t.map((function(e){return r+=e.hosts||0,a+=e.sockets||0,n+=e.clusters||0,o+=e.vms||0,[Object(O.a)(e.provider)?"":e.provider,Object(O.a)(e.product)?"":e.product,Object(O.a)(e.version)?"":e.version,Object(O.a)(e.hosts)?"":Object(w.c)(e.hosts,0),Object(O.a)(e.sockets)?"":Object(w.c)(e.sockets,0),Object(O.a)(e.clusters)?"":Object(w.c)(e.clusters,0),Object(O.a)(e.vms)?"":Object(w.c)(e.vms,0)]}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.b,{"aria-label":"Summary table",cells:e,rows:s,variant:E.e.compact,borders:!1},l.a.createElement(S.a,null),l.a.createElement(k.a,null),l.a.createElement("tfoot",null,l.a.createElement("tr",{className:"summary-table-footer"},l.a.createElement("td",{colSpan:3},l.a.createElement("strong",null,"Total")),l.a.createElement("td",null,l.a.createElement("strong",null,Object(w.c)(r,0))),l.a.createElement("td",null,l.a.createElement("strong",null,Object(w.c)(a,0))),l.a.createElement("td",null,l.a.createElement("strong",null,Object(w.c)(n,0))),l.a.createElement("td",null,l.a.createElement("strong",null,Object(w.c)(o,0)))))))},t}(o.Component),j=r(700),C=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function a(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(a.prototype=r.prototype,new a)}}(),R=function(e){function t(t){var r=e.call(this,t)||this;return r.state={columns:["Target","Type","Date"]},r}return C(t,e),t.prototype.render=function(){var e=this.state.columns,t=this.props.scanRuns.map((function(e){return[e.target,e.smartStateEnabled?"Virt Platform + SmartState":"Virt Platform",Object(w.b)(new Date(e.date),!1)]}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.b,{"aria-label":"Scans run table",cells:e,rows:t,variant:E.e.compact,borders:!1},l.a.createElement(S.a,null),l.a.createElement(k.a,null)))},t}(o.Component),D=r(644),_=r(638),W=r(300),x=r(208),T=r(470),I=r.n(T),N=(r(1052),function(e){var t=e.onRetry;return l.a.createElement(p.a,null,l.a.createElement(d.a,{variant:d.b.large},l.a.createElement(m.a,{icon:v.b}),l.a.createElement(f.a,{headingLevel:f.b.h5,size:"lg"},"Error"),l.a.createElement(h.a,null,"Something unexpected happend, please try again!"),l.a.createElement(g.a,{variant:"primary",onClick:t},"Retry")))}),M=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function a(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(a.prototype=r.prototype,new a)}}(),A=function(e,t,r,a){return new(r||(r=Promise))((function(n,o){function l(e){try{c(a.next(e))}catch(e){o(e)}}function s(e){try{c(a.throw(e))}catch(e){o(e)}}function c(e){e.done?n(e.value):new r((function(t){t(e.value)})).then(l,s)}c((a=a.apply(e,t||[])).next())}))},z=function(e,t){var r,a,n,o,l={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,a&&(n=2&o[0]?a.return:o[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,o[1])).done)return n;switch(a=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,a=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(n=(n=l.trys).length>0&&n[n.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){l.label=o[1];break}if(6===o[0]&&l.label<n[1]){l.label=n[1],n=o;break}if(n&&l.label<n[2]){l.label=n[2],l.ops.push(o);break}n[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],a=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},B=function(e){function t(t){var r=e.call(this,t)||this;return r.changePage=I()((function(){r.refreshData()}),800),r.refreshData=function(e,t,a){void 0===e&&(e=r.state.page),void 0===t&&(t=r.state.perPage);var n=void 0===a?r.state.sortBy:a,o=n.direction,l=n.index;return A(r,void 0,void 0,(function(){var r,a,n,s;return z(this,(function(c){switch(c.label){case 0:return r=this.props,a=r.reportId,n=r.fetchReportWorkloadsDetected,s=l?this.state.columns[l].key:void 0,[4,n(a,e,t,s,o||void 0)];case 1:return c.sent(),this.filtersInRowsAndCells(),[2]}}))}))},r.filtersInRowsAndCells=function(){var e=r.props.reportWorkloadsDetected.items?Object.values(r.props.reportWorkloadsDetected.items):[],t=[];e.length>0&&(t=e.map((function(e){return{cells:[e.workload?e.workload:"",e.osName?e.osName:"",Object(O.a)(e.clusters)?"":Object(w.c)(e.clusters,0),Object(O.a)(e.vms)?"":Object(w.c)(e.vms,0)]}}))),r.setState({rows:t})},r.onSort=function(e,t,a){return A(r,void 0,void 0,(function(){var e,r,n,o,l,s=this;return z(this,(function(c){switch(c.label){case 0:return e=1,r=this.props.reportId,n=this.state.perPage,o=t?this.state.columns[t].key:void 0,l=a||void 0,[4,this.props.fetchReportWorkloadsDetected(r,e,n,o,l)];case 1:return c.sent(),this.setState({page:e,sortBy:{index:t,direction:a}},(function(){s.filtersInRowsAndCells()})),[2]}}))}))},r.onPageChange=function(e,t,a){r.setState({page:t}),a?r.changePage():r.refreshData(t)},r.onSetPage=function(e,t){return"pf-c-form-control"===e.target.className||r.onPageChange(e,t,!1)},r.onPageInput=function(e,t){return r.onPageChange(e,t,!0)},r.onPerPageSelect=function(e,t){var a=r.state.page,n=r.props.reportWorkloadsDetected.total;a*t>n&&(a=Math.floor(n/t)+1),r.setState({page:a,perPage:t}),r.refreshData(a,t)},r.renderPagination=function(){var e=r.state,t=e.page,a=e.perPage,n=r.props.reportWorkloadsDetected.total;return l.a.createElement(W.a,{itemCount:n,perPage:a,page:t,onSetPage:r.onSetPage,onPageInput:r.onPageInput,onPerPageSelect:r.onPerPageSelect})},r.renderResultsTable=function(){var e=r.state,t=e.rows,a=e.columns,n=e.sortBy;return l.a.createElement(E.b,{"aria-label":"Workloads detected",cells:a,rows:t,sortBy:n,onSort:r.onSort,variant:E.e.compact,borders:!1},l.a.createElement(S.a,null),l.a.createElement(k.a,null),l.a.createElement("tfoot",null,l.a.createElement("tr",{className:"workloads-detected-table-footer"},l.a.createElement("td",{colSpan:10},r.renderPagination()))))},r.renderNoResults=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,null,l.a.createElement(d.a,{variant:d.b.full},l.a.createElement(m.a,{icon:x.b}),l.a.createElement(f.a,{headingLevel:"h5",size:"lg"},"No results found"),l.a.createElement(h.a,null,"No results match the search criteria"))))},r.renderTable=function(){var e=r.props.reportWorkloadsDetected;return l.a.createElement(l.a.Fragment,null,e.total>0?r.renderResultsTable():r.renderNoResults())},r.renderTableSkeleton=function(){return l.a.createElement(s.SkeletonTable,{colSize:4,rowSize:5})},r.renderFetchError=function(){return l.a.createElement(N,{onRetry:r.refreshData})},r.state={page:1,perPage:10,columns:[{title:"Workloads",key:"workload",props:{},transforms:[Object(D.a)("25"),_.a]},{title:"OS",key:"osName",props:{},transforms:[Object(D.a)("25"),_.a]},{title:"In Clusters",key:"clusters",props:{},transforms:[Object(D.a)("25")]},{title:"VMs",key:"vms",props:{},transforms:[Object(D.a)("25"),_.a]}],rows:[],sortBy:{}},r}return M(t,e),t.prototype.componentDidMount=function(){this.refreshData()},t.prototype.render=function(){var e=this.props.reportWorkloadsDetectedFetchStatus;if(e.error)return this.renderFetchError();var t="complete"===e.status;return l.a.createElement(l.a.Fragment,null,t?this.renderTable():this.renderTableSkeleton())},t}(l.a.Component),V=r(13),H={fetchReportWorkloadsDetected:V.k},L=Object(n.connect)((function(e){var t=e.reportState;return{reportWorkloadsDetected:t.reportWorkloadsDetected,reportWorkloadsDetectedFetchStatus:t.reportWorkloadsDetectedFetchStatus}}),H)(B),U=(r(1053),function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function a(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(a.prototype=r.prototype,new a)}}()),G=function(e,t,r,a){return new(r||(r=Promise))((function(n,o){function l(e){try{c(a.next(e))}catch(e){o(e)}}function s(e){try{c(a.throw(e))}catch(e){o(e)}}function c(e){e.done?n(e.value):new r((function(t){t(e.value)})).then(l,s)}c((a=a.apply(e,t||[])).next())}))},J=function(e,t){var r,a,n,o,l={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,a&&(n=2&o[0]?a.return:o[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,o[1])).done)return n;switch(a=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,a=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(n=(n=l.trys).length>0&&n[n.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){l.label=o[1];break}if(6===o[0]&&l.label<n[1]){l.label=n[1],n=o;break}if(n&&l.label<n[2]){l.label=n[2],l.ops.push(o);break}n[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],a=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},q=function(e){function t(t){var r=e.call(this,t)||this;return r.changePage=I()((function(){r.refreshData()}),800),r.refreshData=function(e,t,a){void 0===e&&(e=r.state.page),void 0===t&&(t=r.state.perPage);var n=void 0===a?r.state.sortBy:a,o=n.direction,l=n.index;return G(r,void 0,void 0,(function(){var r,a,n,s,c;return J(this,(function(i){switch(i.label){case 0:return r=this.props,a=r.reportId,n=r.fetchReportFlags,s=l?this.state.columns[l].key:void 0,[4,n(a,e,t,s,c=o||void 0)];case 1:return i.sent(),n(a,e,t,s,c),this.filtersInRowsAndCells(),[2]}}))}))},r.filtersInRowsAndCells=function(){var e=r.props,t=e.allFlags,a=e.reportFlags,n=a.items?Object.values(a.items):[],o=[];n.length>0&&(o=n.map((function(e){var r=t.find((function(t){return t.flag===e.flag&&t.osName===e.osName}));return r||(r=t.find((function(t){return t.flag===e.flag&&""===t.osName}))),{cells:[r?r.flagLabel:e.flag,r?r.assessment:"",e.osName?e.osName:"",Object(O.a)(e.clusters)?"":Object(w.c)(e.clusters,0),Object(O.a)(e.vms)?"":Object(w.c)(e.vms,0)]}}))),r.setState({rows:o})},r.onSort=function(e,t,a){return G(r,void 0,void 0,(function(){var e,r,n,o,l,s=this;return J(this,(function(c){switch(c.label){case 0:return e=1,r=this.props.reportId,n=this.state.perPage,o=t?this.state.columns[t].key:void 0,l=a||void 0,[4,this.props.fetchReportFlags(r,e,n,o,l)];case 1:return c.sent(),this.setState({page:e,sortBy:{index:t,direction:a}},(function(){s.filtersInRowsAndCells()})),[2]}}))}))},r.onPageChange=function(e,t,a){r.setState({page:t}),a?r.changePage():r.refreshData(t)},r.onSetPage=function(e,t){return"pf-c-form-control"===e.target.className||r.onPageChange(e,t,!1)},r.onPageInput=function(e,t){return r.onPageChange(e,t,!0)},r.onPerPageSelect=function(e,t){var a=r.state.page,n=r.props.reportFlags.total;a*t>n&&(a=Math.floor(n/t)+1),r.setState({page:a,perPage:t}),r.refreshData(a,t)},r.renderPagination=function(){var e=r.state,t=e.page,a=e.perPage,n=r.props.reportFlags.total;return l.a.createElement(W.a,{itemCount:n,perPage:a,page:t,onSetPage:r.onSetPage,onPageInput:r.onPageInput,onPerPageSelect:r.onPerPageSelect})},r.renderResultsTable=function(){var e=r.state,t=e.rows,a=e.columns,n=e.sortBy;return l.a.createElement(E.b,{"aria-label":"Workloads detected",cells:a,rows:t,sortBy:n,onSort:r.onSort,variant:E.e.compact,borders:!1},l.a.createElement(S.a,null),l.a.createElement(k.a,null),l.a.createElement("tfoot",null,l.a.createElement("tr",{className:"flags-table-footer"},l.a.createElement("td",{colSpan:10},r.renderPagination()))))},r.renderNoResults=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,null,l.a.createElement(d.a,{variant:d.b.full},l.a.createElement(m.a,{icon:x.b}),l.a.createElement(f.a,{headingLevel:"h5",size:"lg"},"No results found"),l.a.createElement(h.a,null,"No results match the search criteria"))))},r.renderTable=function(){var e=r.props.reportFlags;return l.a.createElement(l.a.Fragment,null,e.total>0?r.renderResultsTable():r.renderNoResults())},r.renderTableSkeleton=function(){return l.a.createElement(s.SkeletonTable,{colSize:5,rowSize:5})},r.renderFetchError=function(){return l.a.createElement(N,{onRetry:r.refreshData})},r.state={page:1,perPage:10,columns:[{title:"Flags",key:"flag",props:{},transforms:[_.a]},{title:"Assessment",key:"assessment",props:{},transforms:[]},{title:"OS",key:"osName",props:{},transforms:[Object(D.a)("10"),_.a]},{title:"In Clusters",key:"clusters",props:{},transforms:[]},{title:"In VMs",key:"vms",props:{},transforms:[_.a]}],rows:[],sortBy:{}},r}return U(t,e),t.prototype.componentDidMount=function(){var e=this.props,t=e.allFlags,r=e.fetchAllFlagAssessments;t&&0!==t.length||r(),this.refreshData()},t.prototype.componentDidUpdate=function(e){e.allFlags!==this.props.allFlags&&this.filtersInRowsAndCells()},t.prototype.render=function(){var e=this.props.reportFlagsFetchStatus;if(e.error)return this.renderFetchError();var t="complete"===e.status;return l.a.createElement(l.a.Fragment,null,t?this.renderTable():this.renderTableSkeleton())},t}(l.a.Component),K=r(139),Q={fetchReportFlags:V.d,fetchAllFlagAssessments:K.b},X=Object(n.connect)((function(e){var t=e.reportState,r=t.reportFlags,a=t.reportFlagsFetchStatus,n=e.mappingsState.flagAssessment;return{reportFlags:r,reportFlagsFetchStatus:a,allFlags:n.allFlags,allFlagsFetchStatus:n.allFlagsFetchStatus}}),Q)(q),Y=r(259),Z=r(260),$=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function a(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(a.prototype=r.prototype,new a)}}(),ee=function(e){function t(t){return e.call(this,t)||this}return $(t,e),t.prototype.render=function(){var e=this.props,t=e.title,r=e.description;return l.a.createElement(Y.a,{className:"xa-c-card-solid"},l.a.createElement(Z.a,null,l.a.createElement("h2",{className:"pf-c-title pf-m-3xl"},t),l.a.createElement("h3",{className:"pf-c-title pf-m-1xl"},r)))},t}(l.a.Component),te=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function a(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(a.prototype=r.prototype,new a)}}(),re=function(e,t){return e+t},ae=function(e){function t(t){var r=e.call(this,t)||this;return r.refreshData=function(){var e=r.props,t=e.reportId;(0,e.fetchReportWorkloadSummary)(t).then((function(){r.setState({isCurrentFetchReportWorkloadSummaryCompletedSuccessfully:!0})})).catch((function(){r.setState({isCurrentFetchReportWorkloadSummaryCompletedSuccessfully:!1})}))},r.renderErrorCard=function(e){return l.a.createElement(y.a,{title:e},"There is no enough data to render this card.")},r.renderSummary=function(){var e=r.props.reportWorkloadSummary;if(!e)return r.renderErrorCard("Summary");var t=e.summaryModels;return t?l.a.createElement(y.a,{title:"Summary"},l.a.createElement(F,{summary:t})):r.renderErrorCard("Summary")},r.renderMigrationComplexity=function(){var e=r.props.reportWorkloadSummary,t="VM migration assessment";if(!e)return r.renderErrorCard(t);var a=e.complexityModel;if(!a)return r.renderErrorCard(t);var n=[a.easy||0,a.medium||0,a.hard||0,a.unknown||0,a.unsupported||0],o=n.reduce(re,0),s=n.map((function(e){return e/o})),i={title:Object(w.c)(o,0),subTitle:"Total VMs",height:250,width:250},u=[{label:"Easy",value:s[0],extraData:n[0]},{label:"Medium",value:s[1],extraData:n[1]},{label:"Hard",value:s[2],extraData:n[2]},{label:"Unknown",value:s[3],extraData:n[3]},{label:"Unsupported",value:s[4],extraData:n[4]}];return l.a.createElement(y.a,{title:l.a.createElement("span",null,l.a.createElement("span",null,t)," ",l.a.createElement("span",null,l.a.createElement(c.a,{position:"top",content:l.a.createElement("div",null,"Data based on the number of flags found per VM")},l.a.createElement(b.b,null))))},l.a.createElement(j.a,{data:u,chartProps:i,chartLegendProps:{height:300,width:210,responsive:!1,y:60},tickFormat:function(e,t,r){return e+": "+Object(w.d)(t,2)},tooltipFormat:function(e){var t=e.datum;return t.x+": "+Object(w.d)(t.y,2)+" \n VMs: "+Object(w.c)(t.extraData,0)}}))},r.renderTargetRecommendation=function(){var e=r.props.reportWorkloadSummary,t="Target recommendation";if(!e)return r.renderErrorCard(t);var a=e.recommendedTargetsIMSModel;if(!a)return r.renderErrorCard(t);var n=[a.rhv||0,a.osp||0,a.rhel||0,a.ocp||0],o=a.total,s=n.map((function(e){return e/o}));return l.a.createElement(y.a,{title:t,skipBullseye:!0},l.a.createElement("div",{className:"pf-l-grid pf-m-all-6-col-on-md pf-m-all-3-col-on-lg pf-m-gutter"},l.a.createElement(ee,{title:Object(w.d)(s[0],0)+" RHV",description:"Workloads suitable for Red Hat Virtualization"}),l.a.createElement(ee,{title:Object(w.d)(s[1],0)+" OSP",description:"Workloads could be running on Red Hat OpenStack Platform"}),l.a.createElement(ee,{title:Object(w.d)(s[2],0)+" RHEL",description:"Workloads possible to migrate to Red Hat Enterprise Linux"}),l.a.createElement(ee,{title:Object(w.d)(s[3],0)+" OCP",description:"Workloads targeted for OpenShift virtualization"})))},r.renderWorkloadsDetectedTable=function(){var e=r.props.reportId;return l.a.createElement(y.a,{title:"Workloads detected",skipBullseye:!0},l.a.createElement(L,{reportId:e}))},r.renderWorkloadsDetected=function(){var e=r.props.reportWorkloadSummary,t="Workloads detected (OS Types)";if(!e)return r.renderErrorCard(t);var a=e.workloadsDetectedOSTypeModels;if(!a)return r.renderErrorCard(t);var n=a.map((function(e){return e.total})),o=n.reduce(re,0),s=n.map((function(e){return e/o})),c={title:Object(w.c)(o,0),subTitle:"Total workloads",height:300,width:300},i=a.map((function(e,t){return{label:e.osName,value:s[t],extraData:n[t]}}));return l.a.createElement(y.a,{title:t},l.a.createElement(j.a,{data:i,chartProps:c,chartLegendProps:{height:300,width:210,responsive:!1,y:60},tickFormat:function(e,t){return e+": "+Object(w.d)(t,2)},tooltipFormat:function(e){var t=e.datum;return t.x+": "+Object(w.d)(t.y,2)+" \n Workloads: "+Object(w.c)(t.extraData,0)}}))},r.renderFlagsTable=function(){var e=r.props.reportId;return l.a.createElement(y.a,{title:"Flags (factors that could increase migration complexity)",skipBullseye:!0},l.a.createElement(X,{reportId:e}))},r.renderScansRun=function(){var e=r.props.reportWorkloadSummary;if(!e)return r.renderErrorCard("Scans run");var t=e.scanRunModels;return t?l.a.createElement(y.a,{title:"Scans run"},l.a.createElement(R,{scanRuns:t})):r.renderErrorCard("Scans run")},r.renderReports=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{gutter:"md"},l.a.createElement(u.a,{isFilled:!1},r.renderSummary()),l.a.createElement(u.a,{isFilled:!1},r.renderMigrationComplexity()),l.a.createElement(u.a,{isFilled:!1},r.renderTargetRecommendation()),l.a.createElement(u.a,{isFilled:!1},r.renderWorkloadsDetectedTable()),l.a.createElement(u.a,{isFilled:!1},r.renderWorkloadsDetected()),l.a.createElement(u.a,{isFilled:!1},r.renderFlagsTable()),l.a.createElement(u.a,{isFilled:!1},r.renderScansRun())))},r.renderReportSkeleton=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{gutter:"md"},l.a.createElement(u.a,{isFilled:!1},l.a.createElement(y.a,{title:l.a.createElement(s.Skeleton,{size:"sm"})},l.a.createElement(s.SkeletonTable,{colSize:7,rowSize:3}))),l.a.createElement(u.a,{isFilled:!1},l.a.createElement(y.a,{title:l.a.createElement(s.Skeleton,{size:"sm"})},l.a.createElement(s.Skeleton,{size:"sm",style:{height:"300px"}}))),l.a.createElement(u.a,{isFilled:!1},l.a.createElement(y.a,{title:l.a.createElement(s.Skeleton,{size:"sm"})},l.a.createElement(s.SkeletonTable,{colSize:3,rowSize:1})))))},r.renderFetchError=function(){return l.a.createElement(p.a,null,l.a.createElement(d.a,{variant:d.b.large},l.a.createElement(m.a,{icon:v.b}),l.a.createElement(f.a,{headingLevel:f.b.h5,size:"lg"},"Error"),l.a.createElement(h.a,null,"Something unexpected happend, please try again!"),l.a.createElement(g.a,{variant:"primary",onClick:r.refreshData},"Retry")))},r.state={isCurrentFetchReportWorkloadSummaryCompletedSuccessfully:!1},r}return te(t,e),t.prototype.componentDidMount=function(){this.refreshData()},t.prototype.render=function(){var e=this.state.isCurrentFetchReportWorkloadSummaryCompletedSuccessfully,t=this.props,r=t.reportWorkloadSummary,a=t.reportWorkloadSummaryFetchStatus,n="complete"===a.status;return a.error||n&&!r?this.renderFetchError():l.a.createElement(l.a.Fragment,null,n&&e?this.renderReports():this.renderReportSkeleton())},t}(l.a.Component),ne={fetchReportWorkloadSummary:V.j};t.default=Object(n.connect)((function(e){var t=e.reportState;return{reportWorkloadSummary:t.reportWorkloadSummary,reportWorkloadSummaryFetchStatus:t.reportWorkloadSummaryFetchStatus}}),ne)(ae)},611:function(e,t,r){(e.exports=r(7)(!1)).push([e.i,".summary-table-footer {\n  border-bottom: 0 !important; }\n",""])},620:function(e,t,r){(e.exports=r(7)(!1)).push([e.i,".workloads-detected-table-footer {\n  height: 1px;\n  border-top: var(--pf-c-table--BorderWidth) solid var(--pf-c-table--BorderColor);\n  border-bottom: 0 !important; }\n",""])},621:function(e,t,r){(e.exports=r(7)(!1)).push([e.i,".flags-table-footer {\n  height: 1px;\n  border-top: var(--pf-c-table--BorderWidth) solid var(--pf-c-table--BorderColor);\n  border-bottom: 0 !important; }\n",""])},867:function(e,t,r){var a=r(611);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},o=r(8)(a,n);a.locals&&(e.exports=a.locals),e.hot.accept(611,(function(){var t=r(611);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,a=0;for(r in e){if(!t||e[r]!==t[r])return!1;a++}for(r in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))}}]);
//# sourceMappingURL=WorkloadMigrationSummary.js.map