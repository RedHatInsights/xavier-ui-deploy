(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1054:function(e,t,r){var a=r(624);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},o=r(8)(a,n);a.locals&&(e.exports=a.locals),e.hot.accept(624,(function(){var t=r(624);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,a=0;for(r in e){if(!t||e[r]!==t[r])return!1;a++}for(r in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1055:function(e,t,r){var a=r(625);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},o=r(8)(a,n);a.locals&&(e.exports=a.locals),e.hot.accept(625,(function(){var t=r(625);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,a=0;for(r in e){if(!t||e[r]!==t[r])return!1;a++}for(r in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1080:function(e,t,r){"use strict";r.r(t);var a,n=r(72),o=r(2),l=r.n(o),c=r(458),s=r(105),i=r(284),u=r(285),p=r(280),m=r(268),d=r(270),f=r(130),h=r(269),g=r(129),v=r(210),b=r(213),E=r(535),y=r(482),S=r(705),k=r(704),O=r(455),w=(r(869),r(477)),F=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),P=function(e){function t(t){var r=e.call(this,t)||this;return r.state={columns:["Provider","Product","Version","Hosts","Sockets","Clusters","VMs"]},r}return F(t,e),t.prototype.render=function(){var e=this.state.columns,t=this.props.summary,r=0,a=0,n=0,o=0,c=t.map((function(e){return r+=e.hosts||0,a+=e.sockets||0,n+=e.clusters||0,o+=e.vms||0,[Object(w.a)(e.provider)?"":e.provider,Object(w.a)(e.product)?"":e.product,Object(w.a)(e.version)?"":e.version,Object(w.a)(e.hosts)?"":Object(O.c)(e.hosts,0),Object(w.a)(e.sockets)?"":Object(O.c)(e.sockets,0),Object(w.a)(e.clusters)?"":Object(O.c)(e.clusters,0),Object(w.a)(e.vms)?"":Object(O.c)(e.vms,0)]}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(y.b,{"aria-label":"Summary table",cells:e,rows:c,variant:y.e.compact,borders:!1},l.a.createElement(S.a,null),l.a.createElement(k.a,null),l.a.createElement("tfoot",null,l.a.createElement("tr",{className:"summary-table-footer"},l.a.createElement("td",{colSpan:3},l.a.createElement("strong",null,"Total")),l.a.createElement("td",null,l.a.createElement("strong",null,Object(O.c)(r,0))),l.a.createElement("td",null,l.a.createElement("strong",null,Object(O.c)(a,0))),l.a.createElement("td",null,l.a.createElement("strong",null,Object(O.c)(n,0))),l.a.createElement("td",null,l.a.createElement("strong",null,Object(O.c)(o,0)))))))},t}(o.Component),j=r(534),R=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function a(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(a.prototype=r.prototype,new a)}}(),C=function(e){function t(t){var r=e.call(this,t)||this;return r.state={columns:["Target","Type","Date"]},r}return R(t,e),t.prototype.render=function(){var e=this.state.columns,t=this.props.scanRuns.map((function(e){return[e.target,e.smartStateEnabled?"Virt Platform + SmartState":"Virt Platform",Object(O.b)(new Date(e.date),!1)]}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(y.b,{"aria-label":"Scans run table",cells:e,rows:t,variant:y.e.compact,borders:!1},l.a.createElement(S.a,null),l.a.createElement(k.a,null)))},t}(o.Component),D=r(648),x=r(642),W=r(302),T=r(208),_=r(472),I=r.n(_),N=(r(1054),function(e){var t=e.onRetry;return l.a.createElement(p.a,null,l.a.createElement(m.a,{variant:m.b.large},l.a.createElement(d.a,{icon:b.b}),l.a.createElement(f.a,{headingLevel:f.b.h5,size:"lg"},"Error"),l.a.createElement(h.a,null,"Something unexpected happend, please try again!"),l.a.createElement(g.a,{variant:"primary",onClick:t},"Retry")))}),M=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function a(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(a.prototype=r.prototype,new a)}}(),A=function(e,t,r,a){return new(r||(r=Promise))((function(n,o){function l(e){try{s(a.next(e))}catch(e){o(e)}}function c(e){try{s(a.throw(e))}catch(e){o(e)}}function s(e){e.done?n(e.value):new r((function(t){t(e.value)})).then(l,c)}s((a=a.apply(e,t||[])).next())}))},B=function(e,t){var r,a,n,o,l={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,a&&(n=2&o[0]?a.return:o[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,o[1])).done)return n;switch(a=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,a=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(n=(n=l.trys).length>0&&n[n.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){l.label=o[1];break}if(6===o[0]&&l.label<n[1]){l.label=n[1],n=o;break}if(n&&l.label<n[2]){l.label=n[2],l.ops.push(o);break}n[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],a=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},z=function(e){function t(t){var r=e.call(this,t)||this;return r.changePage=I()((function(){r.refreshData()}),800),r.refreshData=function(e,t,a){void 0===e&&(e=r.state.page),void 0===t&&(t=r.state.perPage);var n=void 0===a?r.state.sortBy:a,o=n.direction,l=n.index;return A(r,void 0,void 0,(function(){var r,a,n,c;return B(this,(function(s){switch(s.label){case 0:return r=this.props,a=r.reportId,n=r.fetchReportWorkloadsDetected,c=l?this.state.columns[l].key:void 0,[4,n(a,e,t,c,o||void 0)];case 1:return s.sent(),this.filtersInRowsAndCells(),[2]}}))}))},r.filtersInRowsAndCells=function(){var e=r.props.reportWorkloadsDetected.items?Object.values(r.props.reportWorkloadsDetected.items):[],t=[];e.length>0&&(t=e.map((function(e){return{cells:[e.workload?e.workload:"",e.osName?e.osName:"",Object(w.a)(e.clusters)?"":Object(O.c)(e.clusters,0),Object(w.a)(e.vms)?"":Object(O.c)(e.vms,0)]}}))),r.setState({rows:t})},r.onSort=function(e,t,a){return A(r,void 0,void 0,(function(){var e,r,n,o,l,c=this;return B(this,(function(s){switch(s.label){case 0:return e=1,r=this.props.reportId,n=this.state.perPage,o=t?this.state.columns[t].key:void 0,l=a||void 0,[4,this.props.fetchReportWorkloadsDetected(r,e,n,o,l)];case 1:return s.sent(),this.setState({page:e,sortBy:{index:t,direction:a}},(function(){c.filtersInRowsAndCells()})),[2]}}))}))},r.onPageChange=function(e,t,a){r.setState({page:t}),a?r.changePage():r.refreshData(t)},r.onSetPage=function(e,t){return"pf-c-form-control"===e.target.className||r.onPageChange(e,t,!1)},r.onPageInput=function(e,t){return r.onPageChange(e,t,!0)},r.onPerPageSelect=function(e,t){var a=r.state.page,n=r.props.reportWorkloadsDetected.total;a*t>n&&(a=Math.floor(n/t)+1),r.setState({page:a,perPage:t}),r.refreshData(a,t)},r.renderPagination=function(){var e=r.state,t=e.page,a=e.perPage,n=r.props.reportWorkloadsDetected.total;return l.a.createElement(W.a,{itemCount:n,perPage:a,page:t,onSetPage:r.onSetPage,onPageInput:r.onPageInput,onPerPageSelect:r.onPerPageSelect})},r.renderResultsTable=function(){var e=r.state,t=e.rows,a=e.columns,n=e.sortBy;return l.a.createElement(y.b,{"aria-label":"Workloads detected",cells:a,rows:t,sortBy:n,onSort:r.onSort,variant:y.e.compact,borders:!1},l.a.createElement(S.a,null),l.a.createElement(k.a,null),l.a.createElement("tfoot",null,l.a.createElement("tr",{className:"workloads-detected-table-footer"},l.a.createElement("td",{colSpan:10},r.renderPagination()))))},r.renderNoResults=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,null,l.a.createElement(m.a,{variant:m.b.full},l.a.createElement(d.a,{icon:T.b}),l.a.createElement(f.a,{headingLevel:"h5",size:"lg"},"No results found"),l.a.createElement(h.a,null,"No results match the search criteria"))))},r.renderTable=function(){var e=r.props.reportWorkloadsDetected;return l.a.createElement(l.a.Fragment,null,e.total>0?r.renderResultsTable():r.renderNoResults())},r.renderTableSkeleton=function(){return l.a.createElement(c.SkeletonTable,{colSize:4,rowSize:5})},r.renderFetchError=function(){return l.a.createElement(N,{onRetry:r.refreshData})},r.state={page:1,perPage:10,columns:[{title:"Workloads",key:"workload",props:{},transforms:[Object(D.a)("25"),x.a]},{title:"OS",key:"osName",props:{},transforms:[Object(D.a)("25"),x.a]},{title:"In Clusters",key:"clusters",props:{},transforms:[Object(D.a)("25")]},{title:"VMs",key:"vms",props:{},transforms:[Object(D.a)("25"),x.a]}],rows:[],sortBy:{}},r}return M(t,e),t.prototype.componentDidMount=function(){this.refreshData()},t.prototype.render=function(){var e=this.props.reportWorkloadsDetectedFetchStatus;if(e.error)return this.renderFetchError();var t="complete"===e.status;return l.a.createElement(l.a.Fragment,null,t?this.renderTable():this.renderTableSkeleton())},t}(l.a.Component),H=r(13),J={fetchReportWorkloadsDetected:H.k},V=Object(n.connect)((function(e){var t=e.reportState;return{reportWorkloadsDetected:t.reportWorkloadsDetected,reportWorkloadsDetectedFetchStatus:t.reportWorkloadsDetectedFetchStatus}}),J)(z),L=(r(1055),function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function a(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(a.prototype=r.prototype,new a)}}()),K=function(e,t,r,a){return new(r||(r=Promise))((function(n,o){function l(e){try{s(a.next(e))}catch(e){o(e)}}function c(e){try{s(a.throw(e))}catch(e){o(e)}}function s(e){e.done?n(e.value):new r((function(t){t(e.value)})).then(l,c)}s((a=a.apply(e,t||[])).next())}))},U=function(e,t){var r,a,n,o,l={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,a&&(n=2&o[0]?a.return:o[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,o[1])).done)return n;switch(a=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,a=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(n=(n=l.trys).length>0&&n[n.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){l.label=o[1];break}if(6===o[0]&&l.label<n[1]){l.label=n[1],n=o;break}if(n&&l.label<n[2]){l.label=n[2],l.ops.push(o);break}n[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],a=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},G=function(e){function t(t){var r=e.call(this,t)||this;return r.changePage=I()((function(){r.refreshData()}),800),r.refreshData=function(e,t,a){void 0===e&&(e=r.state.page),void 0===t&&(t=r.state.perPage);var n=void 0===a?r.state.sortBy:a,o=n.direction,l=n.index;return K(r,void 0,void 0,(function(){var r,a,n,c,s;return U(this,(function(i){switch(i.label){case 0:return r=this.props,a=r.reportId,n=r.fetchReportFlags,c=l?this.state.columns[l].key:void 0,[4,n(a,e,t,c,s=o||void 0)];case 1:return i.sent(),n(a,e,t,c,s),this.filtersInRowsAndCells(),[2]}}))}))},r.filtersInRowsAndCells=function(){var e=r.props,t=e.allFlags,a=e.reportFlags,n=a.items?Object.values(a.items):[],o=[];n.length>0&&(o=n.map((function(e){var r=t.find((function(t){return t.flag===e.flag&&t.osName===e.osName}));return r||(r=t.find((function(t){return t.flag===e.flag&&""===t.osName}))),{cells:[r?r.flagLabel:e.flag,r?r.assessment:"",e.osName?e.osName:"",Object(w.a)(e.clusters)?"":Object(O.c)(e.clusters,0),Object(w.a)(e.vms)?"":Object(O.c)(e.vms,0)]}}))),r.setState({rows:o})},r.onSort=function(e,t,a){return K(r,void 0,void 0,(function(){var e,r,n,o,l,c=this;return U(this,(function(s){switch(s.label){case 0:return e=1,r=this.props.reportId,n=this.state.perPage,o=t?this.state.columns[t].key:void 0,l=a||void 0,[4,this.props.fetchReportFlags(r,e,n,o,l)];case 1:return s.sent(),this.setState({page:e,sortBy:{index:t,direction:a}},(function(){c.filtersInRowsAndCells()})),[2]}}))}))},r.onPageChange=function(e,t,a){r.setState({page:t}),a?r.changePage():r.refreshData(t)},r.onSetPage=function(e,t){return"pf-c-form-control"===e.target.className||r.onPageChange(e,t,!1)},r.onPageInput=function(e,t){return r.onPageChange(e,t,!0)},r.onPerPageSelect=function(e,t){var a=r.state.page,n=r.props.reportFlags.total;a*t>n&&(a=Math.floor(n/t)+1),r.setState({page:a,perPage:t}),r.refreshData(a,t)},r.renderPagination=function(){var e=r.state,t=e.page,a=e.perPage,n=r.props.reportFlags.total;return l.a.createElement(W.a,{itemCount:n,perPage:a,page:t,onSetPage:r.onSetPage,onPageInput:r.onPageInput,onPerPageSelect:r.onPerPageSelect})},r.renderResultsTable=function(){var e=r.state,t=e.rows,a=e.columns,n=e.sortBy;return l.a.createElement(y.b,{"aria-label":"Workloads detected",cells:a,rows:t,sortBy:n,onSort:r.onSort,variant:y.e.compact,borders:!1},l.a.createElement(S.a,null),l.a.createElement(k.a,null),l.a.createElement("tfoot",null,l.a.createElement("tr",{className:"flags-table-footer"},l.a.createElement("td",{colSpan:10},r.renderPagination()))))},r.renderNoResults=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,null,l.a.createElement(m.a,{variant:m.b.full},l.a.createElement(d.a,{icon:T.b}),l.a.createElement(f.a,{headingLevel:"h5",size:"lg"},"No results found"),l.a.createElement(h.a,null,"No results match the search criteria"))))},r.renderTable=function(){var e=r.props.reportFlags;return l.a.createElement(l.a.Fragment,null,e.total>0?r.renderResultsTable():r.renderNoResults())},r.renderTableSkeleton=function(){return l.a.createElement(c.SkeletonTable,{colSize:5,rowSize:5})},r.renderFetchError=function(){return l.a.createElement(N,{onRetry:r.refreshData})},r.state={page:1,perPage:10,columns:[{title:"Flags",key:"flag",props:{},transforms:[x.a]},{title:"Assessment",key:"assessment",props:{},transforms:[]},{title:"OS",key:"osName",props:{},transforms:[Object(D.a)("10"),x.a]},{title:"In Clusters",key:"clusters",props:{},transforms:[]},{title:"In VMs",key:"vms",props:{},transforms:[x.a]}],rows:[],sortBy:{}},r}return L(t,e),t.prototype.componentDidMount=function(){var e=this.props,t=e.allFlags,r=e.fetchAllFlagAssessments;t&&0!==t.length||r(),this.refreshData()},t.prototype.componentDidUpdate=function(e){e.allFlags!==this.props.allFlags&&this.filtersInRowsAndCells()},t.prototype.render=function(){var e=this.props.reportFlagsFetchStatus;if(e.error)return this.renderFetchError();var t="complete"===e.status;return l.a.createElement(l.a.Fragment,null,t?this.renderTable():this.renderTableSkeleton())},t}(l.a.Component),q=r(139),Q={fetchReportFlags:H.d,fetchAllFlagAssessments:q.b},X=Object(n.connect)((function(e){var t=e.reportState,r=t.reportFlags,a=t.reportFlagsFetchStatus,n=e.mappingsState.flagAssessment;return{reportFlags:r,reportFlagsFetchStatus:a,allFlags:n.allFlags,allFlagsFetchStatus:n.allFlagsFetchStatus}}),Q)(G),Y=r(259),Z=r(260),$=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function a(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(a.prototype=r.prototype,new a)}}(),ee=function(e){function t(t){return e.call(this,t)||this}return $(t,e),t.prototype.render=function(){var e=this.props,t=e.title,r=e.description,a=e.width;return l.a.createElement(Y.a,{className:"xa-c-card-solid",style:a?{width:a}:void 0},l.a.createElement(Z.a,null,l.a.createElement("h2",{className:"pf-c-title pf-m-3xl"},t),l.a.createElement("p",null,r)))},t}(l.a.Component),te=r(282),re=r(283),ae=r(4),ne=r(31),oe=r.n(ne),le=r(65),ce=r.n(le),se=function(e){var t=e.cardTitle,r=e.message,a=e.description,n=e.minHeight;return l.a.createElement(Y.a,null,l.a.createElement("div",{className:Object(ae.b)(oe.a.cardHeader,ce.a.title,ce.a.modifiers.xl)},t),l.a.createElement(Z.a,{style:n?{height:n}:void 0},l.a.createElement(p.a,null,l.a.createElement(m.a,{variant:m.b.small},l.a.createElement(d.a,{icon:T.b}),l.a.createElement(f.a,{headingLevel:"h6",size:"lg"},r),a&&l.a.createElement(h.a,null,a)))))},ie=function(e){var t=e.reportWorkloadSummary,r="Oracle Java runtimes information";if(!t||!t.javaRuntimes||0===t.javaRuntimes.length)return l.a.createElement(se,{cardTitle:r,message:"No instances found",description:"No instances of Oracle JDKs have been discovered."});var a=t.javaRuntimes.sort((function(e,t){return e.vendor===t.vendor?Number(e.version)-Number(t.version):e.vendor.localeCompare(t.vendor)})),n=a.map((function(e){return e.total})),o=n.reduce((function(e,t){return e+t}),0),c=n.map((function(e){return e/o})),s={title:Object(O.c)(o,0),subTitle:"Total"},i=a.map((function(e,t){return{label:e.vendor+" JDK "+e.version,value:c[t],extraData:n[t]}}));return l.a.createElement(E.a,{title:r,skipBullseye:!0},l.a.createElement(te.a,{gutter:"sm",xl:6},l.a.createElement(re.a,null,l.a.createElement(p.a,null,l.a.createElement(j.a,{data:i,chartProps:s,tickFormat:function(e,t,r){return e+": "+r},tooltipFormat:function(e){var t=e.datum;return t.x+": "+Object(O.d)(t.y,2)+" \n Total: "+Object(O.c)(t.extraData,0)}}))),l.a.createElement(re.a,null,l.a.createElement(p.a,null,l.a.createElement(ee,{title:(t.recommendedTargetsIMSModel.openjdk||0)+" OpenJDK",description:"Oracle JDKs that can be replaced with OpenJDK",width:510})))))},ue=function(e){var t=e.reportWorkloadSummary,r="Application platforms information";if(!t||!t.applicationPlatforms||0===t.applicationPlatforms.length)return l.a.createElement(se,{cardTitle:r,message:"No app platforms found",description:"No application platforms have been discovered."});var a=t.applicationPlatforms.sort((function(e,t){return e.name.localeCompare(t.name)})),n=a.map((function(e){return e.total})),o=n.reduce((function(e,t){return e+t}),0),c=n.map((function(e){return e/o})),s={title:Object(O.c)(o,0),subTitle:"Total"},i=a.map((function(e,t){return{label:""+e.name,value:c[t],extraData:n[t]}}));return l.a.createElement(E.a,{title:r,skipBullseye:!0},l.a.createElement(te.a,{gutter:"sm",xl:6},l.a.createElement(re.a,null,l.a.createElement(p.a,null,l.a.createElement(j.a,{data:i,chartProps:s,tickFormat:function(e,t,r){return e+": "+r},tooltipFormat:function(e){var t=e.datum;return t.x+": "+Object(O.d)(t.y,2)+" \n Total: "+Object(O.c)(t.extraData,0)}}))),l.a.createElement(re.a,null,l.a.createElement(p.a,null,l.a.createElement(ee,{title:(t.recommendedTargetsIMSModel.jbosseap||0)+" JBoss EAP",description:"App platforms that can be replatformed with JBoss EAP",width:510})))))},pe=function(e){var t=e.reportWorkloadSummary;if(!t||!t.osInformation||0===t.osInformation.length)return l.a.createElement(se,{cardTitle:"OS Information",message:"Not enough data",description:"Could not extract OS Information."});var r=t.osInformation.sort((function(e,t){return e.osFamily===t.osFamily?(Number(t.version)||0)-(Number(e.version)||0):e.priority||t.priority?(t.priority||0)-(e.priority||0):t.osFamily.localeCompare(e.osFamily)})),a=r.map((function(e){return e.total})),n=a.reduce((function(e,t){return e+t}),0),o=a.map((function(e){return e/n})),c={title:Object(O.c)(n,0),subTitle:"Total",padding:{bottom:20,left:20,right:165,top:20}},s=r.map((function(e,t){return{label:""+e.osFamily,value:o[t],extraData:a[t]}}));return l.a.createElement(E.a,{title:"OS Information",skipBullseye:!0},l.a.createElement(te.a,{gutter:"sm",xl:6},l.a.createElement(re.a,null,l.a.createElement(p.a,null,l.a.createElement(j.a,{data:s,chartProps:c,tickFormat:function(e,t,r){return e+": "+r},tooltipFormat:function(e){var t=e.datum;return t.x+": "+Object(O.d)(t.y,2)+" \n Total: "+Object(O.c)(t.extraData,0)}}))),l.a.createElement(re.a,null,l.a.createElement(p.a,null,l.a.createElement(ee,{title:(t.recommendedTargetsIMSModel.rhel||0)+" RHEL",description:"OS instances that can be converted to Red Hat Enterprise Linux",width:510})))))},me=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function a(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(a.prototype=r.prototype,new a)}}(),de=function(e,t){return e+t},fe=function(e){function t(t){var r=e.call(this,t)||this;return r.refreshData=function(){var e=r.props,t=e.reportId;(0,e.fetchReportWorkloadSummary)(t).then((function(){r.setState({isCurrentFetchReportWorkloadSummaryCompletedSuccessfully:!0})})).catch((function(){r.setState({isCurrentFetchReportWorkloadSummaryCompletedSuccessfully:!1})}))},r.renderErrorCard=function(e){return l.a.createElement(se,{cardTitle:e,message:"Not enought data to show this card"})},r.renderSummary=function(){var e=r.props.reportWorkloadSummary;if(!e)return r.renderErrorCard("Summary");var t=e.summaryModels;return t?l.a.createElement(E.a,{title:"Summary"},l.a.createElement(P,{summary:t})):r.renderErrorCard("Summary")},r.renderMigrationComplexity=function(){var e=r.props.reportWorkloadSummary,t="VM migration assessment";if(!e)return r.renderErrorCard(t);var a=e.complexityModel;if(!a)return r.renderErrorCard(t);var n=[a.easy||0,a.medium||0,a.hard||0,a.unknown||0,a.unsupported||0],o=n.reduce(de,0),c=n.map((function(e){return e/o})),i={title:Object(O.c)(o,0),subTitle:"Total VMs"},u=[{label:"Easy",value:c[0],extraData:n[0]},{label:"Medium",value:c[1],extraData:n[1]},{label:"Hard",value:c[2],extraData:n[2]},{label:"Unknown",value:c[3],extraData:n[3]},{label:"Unsupported",value:c[4],extraData:n[4]}];return l.a.createElement(E.a,{title:l.a.createElement("span",null,l.a.createElement("span",null,t)," ",l.a.createElement("span",null,l.a.createElement(s.a,{position:"top",content:l.a.createElement("div",null,"Data based on the number of flags found per VM")},l.a.createElement(v.b,null))))},l.a.createElement(j.a,{data:u,chartProps:i,tickFormat:function(e,t,r){return e+": "+Object(O.d)(t,2)},tooltipFormat:function(e){var t=e.datum;return t.x+": "+Object(O.d)(t.y,2)+" \n VMs: "+Object(O.c)(t.extraData,0)}}))},r.renderTargetRecommendation=function(){var e=r.props.reportWorkloadSummary,t="Target recommendation";if(!e)return r.renderErrorCard(t);var a=e.recommendedTargetsIMSModel;if(!a)return r.renderErrorCard(t);var n=[a.rhv||0,a.osp||0,a.rhel||0,a.ocp||0],o=a.total,c=n.map((function(e){return e/o}));return l.a.createElement(E.a,{title:t,skipBullseye:!0},l.a.createElement("div",{className:"pf-l-grid pf-m-all-6-col-on-md pf-m-all-4-col-on-lg pf-m-gutter"},l.a.createElement(ee,{title:Object(O.d)(c[0],0)+" RHV",description:"Workloads suitable for Red Hat Virtualization"}),l.a.createElement(ee,{title:Object(O.d)(c[1],0)+" OSP",description:"Workloads could be running on Red Hat OpenStack Platform"}),l.a.createElement(ee,{title:Object(O.d)(c[3],0)+" OCP",description:"Workloads targeted for OpenShift virtualization"})))},r.renderWorkloadsDetectedTable=function(){var e=r.props.reportId;return l.a.createElement(E.a,{title:"Workloads detected",skipBullseye:!0},l.a.createElement(V,{reportId:e}))},r.renderOSInformation=function(){var e=r.props.reportWorkloadSummary;return l.a.createElement(pe,{reportWorkloadSummary:e})},r.renderJavaRuntimes=function(){var e=r.props.reportWorkloadSummary;return l.a.createElement(ie,{reportWorkloadSummary:e})},r.renderApplicationPlatforms=function(){var e=r.props.reportWorkloadSummary;return l.a.createElement(ue,{reportWorkloadSummary:e})},r.renderFlagsTable=function(){var e=r.props.reportId;return l.a.createElement(E.a,{title:"Flags (factors that could increase migration complexity)",skipBullseye:!0},l.a.createElement(X,{reportId:e}))},r.renderScansRun=function(){var e=r.props.reportWorkloadSummary;if(!e)return r.renderErrorCard("Scans run");var t=e.scanRunModels;return t?l.a.createElement(E.a,{title:"Scans run"},l.a.createElement(C,{scanRuns:t})):r.renderErrorCard("Scans run")},r.renderReports=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{gutter:"md"},l.a.createElement(u.a,{isFilled:!1},r.renderSummary()),l.a.createElement(u.a,{isFilled:!1},r.renderTargetRecommendation()),l.a.createElement(u.a,{isFilled:!1},r.renderMigrationComplexity()),l.a.createElement(u.a,{isFilled:!1},r.renderFlagsTable()),l.a.createElement(u.a,{isFilled:!1},r.renderOSInformation()),l.a.createElement(u.a,{isFilled:!1},r.renderJavaRuntimes()),l.a.createElement(u.a,null,r.renderApplicationPlatforms()),l.a.createElement(u.a,{isFilled:!1},r.renderWorkloadsDetectedTable()),l.a.createElement(u.a,{isFilled:!1},r.renderScansRun())))},r.renderReportSkeleton=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{gutter:"md"},l.a.createElement(u.a,{isFilled:!1},l.a.createElement(E.a,{title:l.a.createElement(c.Skeleton,{size:"sm"})},l.a.createElement(c.SkeletonTable,{colSize:7,rowSize:3}))),l.a.createElement(u.a,{isFilled:!1},l.a.createElement(E.a,{title:l.a.createElement(c.Skeleton,{size:"sm"})},l.a.createElement(c.Skeleton,{size:"sm",style:{height:"300px"}}))),l.a.createElement(u.a,{isFilled:!1},l.a.createElement(E.a,{title:l.a.createElement(c.Skeleton,{size:"sm"})},l.a.createElement(c.SkeletonTable,{colSize:3,rowSize:1})))))},r.renderFetchError=function(){return l.a.createElement(p.a,null,l.a.createElement(m.a,{variant:m.b.large},l.a.createElement(d.a,{icon:b.b}),l.a.createElement(f.a,{headingLevel:f.b.h5,size:"lg"},"Error"),l.a.createElement(h.a,null,"Something unexpected happend, please try again!"),l.a.createElement(g.a,{variant:"primary",onClick:r.refreshData},"Retry")))},r.state={isCurrentFetchReportWorkloadSummaryCompletedSuccessfully:!1},r}return me(t,e),t.prototype.componentDidMount=function(){this.refreshData()},t.prototype.render=function(){var e=this.state.isCurrentFetchReportWorkloadSummaryCompletedSuccessfully,t=this.props,r=t.reportWorkloadSummary,a=t.reportWorkloadSummaryFetchStatus,n="complete"===a.status;return a.error||n&&!r?this.renderFetchError():l.a.createElement(l.a.Fragment,null,n&&e?this.renderReports():this.renderReportSkeleton())},t}(l.a.Component),he={fetchReportWorkloadSummary:H.j};t.default=Object(n.connect)((function(e){var t=e.reportState;return{reportWorkloadSummary:t.reportWorkloadSummary,reportWorkloadSummaryFetchStatus:t.reportWorkloadSummaryFetchStatus}}),he)(fe)},615:function(e,t,r){(e.exports=r(7)(!1)).push([e.i,".summary-table-footer {\n  border-bottom: 0 !important; }\n",""])},624:function(e,t,r){(e.exports=r(7)(!1)).push([e.i,".workloads-detected-table-footer {\n  height: 1px;\n  border-top: var(--pf-c-table--BorderWidth) solid var(--pf-c-table--BorderColor);\n  border-bottom: 0 !important; }\n",""])},625:function(e,t,r){(e.exports=r(7)(!1)).push([e.i,".flags-table-footer {\n  height: 1px;\n  border-top: var(--pf-c-table--BorderWidth) solid var(--pf-c-table--BorderColor);\n  border-bottom: 0 !important; }\n",""])},869:function(e,t,r){var a=r(615);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},o=r(8)(a,n);a.locals&&(e.exports=a.locals),e.hot.accept(615,(function(){var t=r(615);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,a=0;for(r in e){if(!t||e[r]!==t[r])return!1;a++}for(r in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))}}]);
//# sourceMappingURL=WorkloadMigrationSummary.js.map