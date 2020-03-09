!function(e){function t(t){for(var n,o,a=t[0],s=t[1],i=t[2],l=0,c=[];l<a.length;l++)o=a[l],L[o]&&c.push(L[o][0]),L[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(W&&W(t);c.length;)c.shift()();return D.push.apply(D,i||[]),r()}function r(){for(var e,t=0;t<D.length;t++){for(var r=D[t],n=!0,o=1;o<r.length;o++){var a=r[o];0!==L[a]&&(n=!1)}n&&(D.splice(t--,1),e=b(b.s=r[0]))}return e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!T[e]||!S[e])return;for(var r in S[e]=!1,t)Object.prototype.hasOwnProperty.call(t,r)&&(_[r]=t[r]);0==--y&&0===m&&A()}(e,t),n&&n(e,t)};var o,a=!0,s="80116aca40ac6bbadd23",i=1e4,l={},c=[],u=[];function p(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,r){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=r||function(){};else t._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._declinedDependencies[e[r]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=t._disposeHandlers.indexOf(e);r>=0&&t._disposeHandlers.splice(r,1)},check:F,apply:P,status:function(e){if(!e)return f;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:l[e]};return o=void 0,t}var d=[],f="idle";function E(e){f=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var h,_,O,y=0,m=0,v={},S={},T={};function g(e){return+e+""===e?+e:e}function F(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,E("check"),(t=i,t=t||1e4,new Promise(function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var n=new XMLHttpRequest,o=b.p+""+s+".hot-update.json";n.open("GET",o,!0),n.timeout=t,n.send(null)}catch(e){return r(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)r(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(n.responseText)}catch(e){return void r(e)}e(t)}}})).then(function(e){if(!e)return E("idle"),null;S={},v={},T=e.c,O=e.h,E("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});for(var r in _={},L)R(r);return"prepare"===f&&0===m&&0===y&&A(),t});var t}function R(e){T[e]?(S[e]=!0,y++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=b.p+""+e+"."+s+".hot-update.js",document.head.appendChild(t)}(e)):v[e]=!0}function A(){E("ready");var e=h;if(h=null,e)if(a)Promise.resolve().then(function(){return P(a)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var r in _)Object.prototype.hasOwnProperty.call(_,r)&&t.push(g(r));e.resolve(t)}}function P(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var r,n,o,a,i;function u(e){for(var t=[e],r={},n=t.slice().map(function(e){return{chain:[e],id:e}});n.length>0;){var o=n.pop(),s=o.id,i=o.chain;if((a=I[s])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:s};if(a.hot._main)return{type:"unaccepted",chain:i,moduleId:s};for(var l=0;l<a.parents.length;l++){var c=a.parents[l],u=I[c];if(u){if(u.hot._declinedDependencies[s])return{type:"declined",chain:i.concat([c]),moduleId:s,parentId:c};-1===t.indexOf(c)&&(u.hot._acceptedDependencies[s]?(r[c]||(r[c]=[]),p(r[c],[s])):(delete r[c],t.push(c),n.push({chain:i.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}t=t||{};var d={},h=[],y={},m=function(){console.warn("[HMR] unexpected require("+S.moduleId+") to disposed module")};for(var v in _)if(Object.prototype.hasOwnProperty.call(_,v)){var S;i=g(v);var F=!1,R=!1,A=!1,P="";switch((S=_[v]?u(i):{type:"disposed",moduleId:v}).chain&&(P="\nUpdate propagation: "+S.chain.join(" -> ")),S.type){case"self-declined":t.onDeclined&&t.onDeclined(S),t.ignoreDeclined||(F=new Error("Aborted because of self decline: "+S.moduleId+P));break;case"declined":t.onDeclined&&t.onDeclined(S),t.ignoreDeclined||(F=new Error("Aborted because of declined dependency: "+S.moduleId+" in "+S.parentId+P));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(S),t.ignoreUnaccepted||(F=new Error("Aborted because "+i+" is not accepted"+P));break;case"accepted":t.onAccepted&&t.onAccepted(S),R=!0;break;case"disposed":t.onDisposed&&t.onDisposed(S),A=!0;break;default:throw new Error("Unexception type "+S.type)}if(F)return E("abort"),Promise.reject(F);if(R)for(i in y[i]=_[i],p(h,S.outdatedModules),S.outdatedDependencies)Object.prototype.hasOwnProperty.call(S.outdatedDependencies,i)&&(d[i]||(d[i]=[]),p(d[i],S.outdatedDependencies[i]));A&&(p(h,[S.moduleId]),y[i]=m)}var D,C=[];for(n=0;n<h.length;n++)i=h[n],I[i]&&I[i].hot._selfAccepted&&C.push({module:i,errorHandler:I[i].hot._selfAccepted});E("dispose"),Object.keys(T).forEach(function(e){!1===T[e]&&function(e){delete L[e]}(e)});for(var k,w,W=h.slice();W.length>0;)if(i=W.pop(),a=I[i]){var j={},H=a.hot._disposeHandlers;for(o=0;o<H.length;o++)(r=H[o])(j);for(l[i]=j,a.hot.active=!1,delete I[i],delete d[i],o=0;o<a.children.length;o++){var N=I[a.children[o]];N&&((D=N.parents.indexOf(i))>=0&&N.parents.splice(D,1))}}for(i in d)if(Object.prototype.hasOwnProperty.call(d,i)&&(a=I[i]))for(w=d[i],o=0;o<w.length;o++)k=w[o],(D=a.children.indexOf(k))>=0&&a.children.splice(D,1);for(i in E("apply"),s=O,y)Object.prototype.hasOwnProperty.call(y,i)&&(e[i]=y[i]);var U=null;for(i in d)if(Object.prototype.hasOwnProperty.call(d,i)&&(a=I[i])){w=d[i];var M=[];for(n=0;n<w.length;n++)if(k=w[n],r=a.hot._acceptedDependencies[k]){if(-1!==M.indexOf(r))continue;M.push(r)}for(n=0;n<M.length;n++){r=M[n];try{r(w)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:i,dependencyId:w[n],error:e}),t.ignoreErrored||U||(U=e)}}}for(n=0;n<C.length;n++){var V=C[n];i=V.module,c=[i];try{b(i)}catch(e){if("function"==typeof V.errorHandler)try{V.errorHandler(e)}catch(r){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:i,error:r,originalError:e}),t.ignoreErrored||U||(U=r),U||(U=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:i,error:e}),t.ignoreErrored||U||(U=e)}}return U?(E("fail"),Promise.reject(U)):(E("idle"),new Promise(function(e){e(h)}))}var I={},L={5:0},D=[];function b(t){if(I[t])return I[t].exports;var r=I[t]={i:t,l:!1,exports:{},hot:p(t),parents:(u=c,c=[],u),children:[]};return e[t].call(r.exports,r,r.exports,function(e){var t=I[e];if(!t)return b;var r=function(r){return t.hot.active?(I[r]?-1===I[r].parents.indexOf(e)&&I[r].parents.push(e):(c=[e],o=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),c=[]),b(r)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return b[e]},set:function(t){b[e]=t}}};for(var a in b)Object.prototype.hasOwnProperty.call(b,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(r,a,n(a));return r.e=function(e){return"ready"===f&&E("prepare"),m++,b.e(e).then(t,function(e){throw t(),e});function t(){m--,"prepare"===f&&(v[e]||R(e),0===m&&0===y&&A())}},r.t=function(e,t){return 1&t&&(e=r(e)),b.t(e,-2&t)},r}(t)),r.l=!0,r.exports}b.e=function(e){var t=[],r=L[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise(function(t,n){r=L[e]=[t,n]});t.push(r[2]=n);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,b.nc&&a.setAttribute("nonce",b.nc),a.src=function(e){return b.p+"js/"+({0:"ErrorPage~GettingStarted~NoReports~ReportView~Reports~ReportsUpload",1:"InitialSavingsEstimation~Reports~WorkloadInventory~WorkloadMigrationSummary",2:"InitialSavingsEstimation~ReportsUpload~WorkloadMigrationSummary",3:"Reports~ReportsUpload~WorkloadInventory",4:"InitialSavingsEstimation~WorkloadMigrationSummary",6:"DeleteDialog",7:"ErrorPage",8:"GettingStarted",9:"InitialSavingsEstimation",10:"NoReports",11:"ReportView",12:"Reports",13:"ReportsUpload",14:"WorkloadInventory",15:"WorkloadMigrationSummary"}[e]||e)+".js"}(e);var s=new Error;o=function(t){a.onerror=a.onload=null,clearTimeout(i);var r=L[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",s.type=n,s.request=o,r[1](s)}L[e]=void 0}};var i=setTimeout(function(){o({type:"timeout",target:a})},12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},b.m=e,b.c=I,b.d=function(e,t,r){b.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},b.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.t=function(e,t){if(1&t&&(e=b(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(b.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)b.d(r,n,function(t){return e[t]}.bind(null,n));return r},b.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return b.d(t,"a",t),t},b.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},b.p="/beta/apps/migration-analytics/",b.oe=function(e){throw console.error(e),e},b.h=function(){return s};var C=window.webpackJsonp=window.webpackJsonp||[],k=C.push.bind(C);C.push=t,C=C.slice();for(var w=0;w<C.length;w++)t(C[w]);var W=k;D.push([377,16]),r()}({119:function(e,t,r){"use strict";var n=r(26);r.d(t,"a",function(){return o}),r.d(t,"b",function(){return a});var o={FETCH_ALL_FLAG_ASSESSMENT:"FETCH_ALL_FLAG_ASSESSMENT"},a=function(){return{type:o.FETCH_ALL_FLAG_ASSESSMENT,payload:n.a.get("/mappings/flag-assessment"),meta:{noError:!0,notifications:{}}}}},15:function(e,t,r){"use strict";var n=r(26);function o(e,t,r){var o={page:e-1,size:t,filterText:r},a=[];Object.keys(o).map(function(e){var t=o[e];void 0!==t&&a.push(e+"="+t)});var s="/report?"+a.join("&");return n.a.get(s)}function a(e){return n.a.get("/report/"+e)}function s(e){return n.a.delete("/report/"+e)}function i(e){return n.a.get("/report/"+e+"/workload-summary")}function l(e,t,r,o,a){var s={page:t-1,size:r,orderBy:o,orderAsc:a?"asc"===a:void 0},i=[];Object.keys(s).map(function(e){var t=s[e];void 0!==t&&i.push(e+"="+t)});var l="/report/"+e+"/workload-summary/workloads?"+i.join("&");return n.a.get(l)}function c(e,t,r,o,a){var s={page:t-1,size:r,orderBy:o,orderAsc:a?"asc"===a:void 0},i=[];Object.keys(s).map(function(e){var t=s[e];void 0!==t&&i.push(e+"="+t)});var l="/report/"+e+"/workload-summary/flags?"+i.join("&");return n.a.get(l)}function u(e){return n.a.get("/report/"+e+"/initial-saving-estimation")}function p(e,t,r,o,a,s){var i={page:t-1,size:r,orderBy:o,orderAsc:a?"asc"===a:void 0},l=[];Object.keys(i).map(function(e){var t=i[e];void 0!==t&&l.push(e+"="+t)}),s.forEach(function(e,t){e.length>0&&e.forEach(function(e){l.push(t+"="+e)})});var c="/report/"+e+"/workload-inventory?"+l.join("&");return n.a.get(c)}function d(e){var t="/report/"+e+"/workload-inventory/csv";return n.a.request(t,null,"get",{responseType:"blob"})}function f(e){return n.a.get("/report/"+e+"/workload-inventory/available-filters")}function E(e){var t="/report/"+e+"/payload-link";return n.a.get(t)}r.d(t,"a",function(){return h}),r.d(t,"l",function(){return _}),r.d(t,"c",function(){return O}),r.d(t,"b",function(){return y}),r.d(t,"j",function(){return m}),r.d(t,"k",function(){return v}),r.d(t,"d",function(){return S}),r.d(t,"e",function(){return T}),r.d(t,"g",function(){return g}),r.d(t,"i",function(){return F}),r.d(t,"h",function(){return R}),r.d(t,"f",function(){return A});var h={FETCH_REPORTS:"FETCH_REPORTS",FETCH_REPORT:"FETCH_REPORT",DELETE_REPORT:"DELETE_REPORT",FETCH_REPORT_WORKLOAD_SUMMARY:"FETCH_REPORT_WORKLOAD_SUMMARY",FETCH_REPORT_WORKLOADS_DETECTED:"FETCH_REPORT_WORKLOADS_DETECTED",FETCH_REPORT_FLAGS:"FETCH_REPORT_FLAGS",FETCH_REPORT_INITIAL_SAVING_ESTIMATION:"FETCH_REPORT_INITIAL_SAVING_ESTIMATION",FETCH_REPORT_WOKLOAD_INVENTORY:"FETCH_REPORT_WOKLOAD_INVENTORY",FETCH_REPORT_WOKLOAD_INVENTORY_CSV:"FETCH_REPORT_WOKLOAD_INVENTORY_CSV",FETCH_REPORT_WOKLOAD_INVENTORY_AVAILABLE_FILTERS:"FETCH_REPORT_WOKLOAD_INVENTORY_AVAILABLE_FILTERS",FETCH_REPORT_PAYLOAD_DOWNLOAD_LINK:"FETCH_REPORT_PAYLOAD_DOWNLOAD_LINK"},_=function(e,t,r){return{type:h.FETCH_REPORTS,payload:o(e,t,r),meta:{notifications:{rejected:{variant:"danger",title:"Failed to load reports"}}}}},O=function(e){return{type:h.FETCH_REPORT,payload:a(e),meta:{notifications:{rejected:{variant:"danger",title:"Failed to load report "+e}}}}},y=function(e,t){return{type:h.DELETE_REPORT,payload:s(e).then(function(){return{id:e}}),meta:{notifications:{rejected:{variant:"danger",title:"Failed to delete report "+t},fulfilled:{variant:"success",title:"Report "+t+" deleted"}}}}},m=function(e){return{type:h.FETCH_REPORT_WORKLOAD_SUMMARY,payload:i(e),meta:{notifications:{rejected:{variant:"danger",title:"Failed to load report workload summary "+e}}}}},v=function(e,t,r,n,o){return{type:h.FETCH_REPORT_WORKLOADS_DETECTED,payload:l(e,t,r,n,o),meta:{notifications:{rejected:{variant:"danger",title:"Failed to load report workloads detected "+e}}}}},S=function(e,t,r,n,o){return{type:h.FETCH_REPORT_FLAGS,payload:c(e,t,r,n,o),meta:{notifications:{rejected:{variant:"danger",title:"Failed to load report flags "+e}}}}},T=function(e){return{type:h.FETCH_REPORT_INITIAL_SAVING_ESTIMATION,payload:u(e),meta:{notifications:{rejected:{variant:"danger",title:"Failed to load report saving estimation "+e}}}}},g=function(e,t,r,n,o,a){return{type:h.FETCH_REPORT_WOKLOAD_INVENTORY,payload:p(e,t,r,n,o,a),meta:{notifications:{rejected:{variant:"danger",title:"Failed to load report workload inventory "+e}}}}},F=function(e){return{type:h.FETCH_REPORT_WOKLOAD_INVENTORY_CSV,payload:d(e),meta:{notifications:{rejected:{variant:"danger",title:"Failed to load report workload inventory "+e}}}}},R=function(e){return{type:h.FETCH_REPORT_WOKLOAD_INVENTORY_AVAILABLE_FILTERS,payload:f(e),meta:{notifications:{rejected:{variant:"danger",title:"Failed to load report workload inventory filters "+e}}}}},A=function(e){return{type:h.FETCH_REPORT_PAYLOAD_DOWNLOAD_LINK,payload:E(e),meta:{notifications:{rejected:{variant:"danger",title:"Failed to fetch report "+e+" payload download link"}}}}}},177:function(e,t,r){(t=e.exports=r(6)(!1)).i(r(374),""),t.push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\n.pf-c-page__main {\n  background-color: #e7e7e7; }\n",""])},26:function(e,t,r){"use strict";var n=r(85),o=r.n(n),a=function(){function e(){}return e.request=function(e,t,r,n){return void 0===t&&(t=null),void 0===r&&(r="get"),void 0===n&&(n={}),o.a.request(Object.assign({},{url:e,method:r,data:t},n))},e.post=function(e,t,r){return void 0===r&&(r={}),this.request(e,t,"post",r)},e.put=function(e,t,r){return void 0===r&&(r={}),this.request(e,t,"put",r)},e.get=function(e){return this.request(e)},e.delete=function(e,t){return void 0===t&&(t={}),this.request(e,null,"delete",t)},e}();t.a=a},373:function(e,t,r){var n=r(177);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=r(7)(n,o);n.locals&&(e.exports=n.locals),e.hot.accept(177,function(){var t=r(177);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)}),e.hot.dispose(function(){a()})},377:function(e,t,r){"use strict";r.r(t);var n,o=r(2),a=r.n(o),s=r(27),i=r.n(s),l=r(385),c=r(64),u=r(259),p=r.n(u),d=r(271),f=r(83),E=r(15),h=function(e){return e+"_FULFILLED"},_=function(e){return e+"_PENDING"},O=function(e){return e+"_REJECTED"},y=function(){return(y=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},m={error:null,status:"none"},v={report:null,reportFetchStatus:y({},m),reports:{total:0,items:[]},reportsFetchStatus:y({},m),reportWorkloadSummary:null,reportWorkloadSummaryFetchStatus:y({},m),reportWorkloadsDetected:{total:0,items:[]},reportWorkloadsDetectedFetchStatus:y({},m),reportFlags:{total:0,items:[]},reportFlagsFetchStatus:y({},m),reportInitialSavingEstimation:null,reportInitialSavingEstimationFetchStatus:y({},m),reportWorkloadInventory:{total:0,items:[]},reportWorkloadInventoryFetchStatus:y({},m),reportWorkloadInventoryCSVFetchStatus:y({},m),reportWorkloadInventoryAvailableFilters:null,reportWorkloadInventoryAvailableFiltersFetchStatus:y({},m),reportPayloadDownloadLinkFetchStatus:y({},m)},S=function(e,t){switch(void 0===e&&(e=v),t.type){case _(E.a.FETCH_REPORTS):return y({},e,{reportsFetchStatus:y({},e.reportsFetchStatus,{error:null,status:"inProgress"})});case h(E.a.FETCH_REPORTS):return y({},e,{reports:y({},e.reports,{items:t.payload.data.content,total:t.payload.data.totalElements}),reportsFetchStatus:y({},e.reportsFetchStatus,{error:null,status:"complete"})});case O(E.a.FETCH_REPORTS):return y({},e,{reports:y({},e.reports,{items:[],total:0}),reportsFetchStatus:y({},e.reportsFetchStatus,{error:t.payload.message,status:"complete"})});case _(E.a.FETCH_REPORT):return y({},e,{report:null,reportFetchStatus:y({},e.reportFetchStatus,{error:null,status:"inProgress"})});case h(E.a.FETCH_REPORT):return y({},e,{report:t.payload.data,reportFetchStatus:y({},e.reportFetchStatus,{error:null,status:"complete"})});case O(E.a.FETCH_REPORT):return y({},e,{report:null,reportFetchStatus:y({},e.reportFetchStatus,{error:t.payload.message,status:"complete"})});case h(E.a.DELETE_REPORT):return y({},e,{reports:y({},e.reports,{total:e.reports.total-1,items:e.reports.items.filter(function(e){return e.id!==t.payload.id})})});case O(E.a.DELETE_REPORT):return y({},e);case _(E.a.FETCH_REPORT_WORKLOAD_SUMMARY):return y({},e,{reportWorkloadSummaryFetchStatus:y({},e.reportWorkloadSummaryFetchStatus,{error:null,status:"inProgress"})});case h(E.a.FETCH_REPORT_WORKLOAD_SUMMARY):return y({},e,{reportWorkloadSummary:t.payload.data,reportWorkloadSummaryFetchStatus:y({},e.reportWorkloadSummaryFetchStatus,{error:null,status:"complete"})});case O(E.a.FETCH_REPORT_WORKLOAD_SUMMARY):return y({},e,{reportWorkloadSummary:null,reportWorkloadSummaryFetchStatus:y({},e.reportWorkloadSummaryFetchStatus,{error:t.payload.message,status:"complete"})});case _(E.a.FETCH_REPORT_WORKLOADS_DETECTED):return y({},e,{reportWorkloadsDetectedFetchStatus:y({},e.reportWorkloadsDetectedFetchStatus,{error:null,status:"inProgress"})});case h(E.a.FETCH_REPORT_WORKLOADS_DETECTED):return y({},e,{reportWorkloadsDetected:y({},e.reportWorkloadsDetected,{items:t.payload.data.content,total:t.payload.data.totalElements}),reportWorkloadsDetectedFetchStatus:y({},e.reportWorkloadsDetectedFetchStatus,{error:null,status:"complete"})});case O(E.a.FETCH_REPORT_WORKLOADS_DETECTED):return y({},e,{reportWorkloadsDetected:y({},e.reportWorkloadsDetected,{items:[],total:0}),reportWorkloadsDetectedFetchStatus:y({},e.reportWorkloadsDetectedFetchStatus,{error:t.payload.message,status:"complete"})});case _(E.a.FETCH_REPORT_FLAGS):return y({},e,{reportFlagsFetchStatus:y({},e.reportFlagsFetchStatus,{error:null,status:"inProgress"})});case h(E.a.FETCH_REPORT_FLAGS):return y({},e,{reportFlags:y({},e.reportFlags,{items:t.payload.data.content,total:t.payload.data.totalElements}),reportFlagsFetchStatus:y({},e.reportFlagsFetchStatus,{error:null,status:"complete"})});case O(E.a.FETCH_REPORT_FLAGS):return y({},e,{reportFlags:y({},e.reportFlags,{items:[],total:0}),reportFlagsFetchStatus:y({},e.reportFlagsFetchStatus,{error:t.payload.message,status:"complete"})});case _(E.a.FETCH_REPORT_INITIAL_SAVING_ESTIMATION):return y({},e,{reportInitialSavingEstimation:null,reportInitialSavingEstimationFetchStatus:y({},e.reportInitialSavingEstimationFetchStatus,{error:null,status:"inProgress"})});case h(E.a.FETCH_REPORT_INITIAL_SAVING_ESTIMATION):return y({},e,{reportInitialSavingEstimation:t.payload.data,reportInitialSavingEstimationFetchStatus:y({},e.reportInitialSavingEstimationFetchStatus,{error:null,status:"complete"})});case O(E.a.FETCH_REPORT_INITIAL_SAVING_ESTIMATION):return y({},e,{reportInitialSavingEstimation:null,reportInitialSavingEstimationFetchStatus:y({},e.reportInitialSavingEstimationFetchStatus,{error:t.payload.message,status:"complete"})});case _(E.a.FETCH_REPORT_WOKLOAD_INVENTORY):return y({},e,{reportWorkloadInventoryFetchStatus:y({},e.reportWorkloadInventoryFetchStatus,{error:null,status:"inProgress"})});case h(E.a.FETCH_REPORT_WOKLOAD_INVENTORY):return y({},e,{reportWorkloadInventory:y({},e.reportWorkloadInventory,{items:t.payload.data.content,total:t.payload.data.totalElements}),reportWorkloadInventoryFetchStatus:y({},e.reportWorkloadInventoryFetchStatus,{error:null,status:"complete"})});case O(E.a.FETCH_REPORT_WOKLOAD_INVENTORY):return y({},e,{reportWorkloadInventory:y({},e.reportWorkloadInventory,{items:[],total:0}),reportWorkloadInventoryFetchStatus:y({},e.reportWorkloadInventoryFetchStatus,{error:t.payload.message,status:"complete"})});case _(E.a.FETCH_REPORT_WOKLOAD_INVENTORY_CSV):return y({},e,{reportWorkloadInventoryCSVFetchStatus:y({},e.reportWorkloadInventoryCSVFetchStatus,{error:null,status:"inProgress"})});case h(E.a.FETCH_REPORT_WOKLOAD_INVENTORY_CSV):return y({},e,{reportWorkloadInventoryCSVFetchStatus:y({},e.reportWorkloadInventoryCSVFetchStatus,{error:null,status:"complete"})});case O(E.a.FETCH_REPORT_WOKLOAD_INVENTORY_CSV):return y({},e,{reportWorkloadInventoryCSVFetchStatus:y({},e.reportWorkloadInventoryCSVFetchStatus,{error:t.payload.message,status:"complete"})});case _(E.a.FETCH_REPORT_WOKLOAD_INVENTORY_AVAILABLE_FILTERS):return y({},e,{reportWorkloadInventoryAvailableFilters:null,reportWorkloadInventoryAvailableFiltersFetchStatus:y({},e.reportWorkloadInventoryAvailableFiltersFetchStatus,{error:null,status:"inProgress"})});case h(E.a.FETCH_REPORT_WOKLOAD_INVENTORY_AVAILABLE_FILTERS):return y({},e,{reportWorkloadInventoryAvailableFilters:t.payload.data,reportWorkloadInventoryAvailableFiltersFetchStatus:y({},e.reportWorkloadInventoryAvailableFiltersFetchStatus,{error:null,status:"complete"})});case O(E.a.FETCH_REPORT_WOKLOAD_INVENTORY_AVAILABLE_FILTERS):return y({},e,{reportWorkloadInventoryAvailableFilters:null,reportWorkloadInventoryAvailableFiltersFetchStatus:y({},e.reportWorkloadInventoryAvailableFiltersFetchStatus,{error:t.payload.message,status:"complete"})});case _(E.a.FETCH_REPORT_PAYLOAD_DOWNLOAD_LINK):return y({},e,{reportPayloadDownloadLinkFetchStatus:y({},e.reportPayloadDownloadLinkFetchStatus,{error:null,status:"inProgress"})});case h(E.a.FETCH_REPORT_PAYLOAD_DOWNLOAD_LINK):return y({},e,{reportPayloadDownloadLinkFetchStatus:y({},e.reportPayloadDownloadLinkFetchStatus,{error:null,status:"complete"})});case O(E.a.FETCH_REPORT_PAYLOAD_DOWNLOAD_LINK):return y({},e,{reportPayloadDownloadLinkFetchStatus:y({},e.reportPayloadDownloadLinkFetchStatus,{error:t.payload.message,status:"complete"})});default:return e}},T=r(71),g=function(){return(g=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},F={file:null,success:null,error:null,progress:0,uploading:!1},R=function(e,t){switch(void 0===e&&(e=F),t.type){case T.a.UPLOAD_PROGRESS:return g({},e,{progress:t.payload.progress});case T.a.SELECT_UPLOAD_FILE:return g({},e,{error:null,success:null,progress:0,uploading:!1,file:t.payload.file});case T.a.RESET_UPLOAD_FILE:return g({},F);case _(T.a.UPLOAD_REQUEST):return g({},e,{error:null,success:null,progress:0,uploading:!0,file:t.meta.file});case h(T.a.UPLOAD_REQUEST):return g({},e,{success:!0,uploading:!1});case O(T.a.UPLOAD_REQUEST):return g({},e,{error:t.payload.message,success:!1,uploading:!1});default:return e}},A=r(66),P=function(){return(P=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},I={user:null,userFetchStatus:{error:null,status:"none"}},L=function(e,t){switch(void 0===e&&(e=I),t.type){case A.a.UPDATE_USER:return P({},e,{user:Object.assign({},e.user,t.payload.user)});case _(A.a.FETCH_USER):return P({},e,{user:null,userFetchStatus:{error:null,status:"inProgress"}});case h(A.a.FETCH_USER):return P({},e,{user:t.payload.data,userFetchStatus:{error:null,status:"complete"}});case O(A.a.FETCH_USER):return P({},e,{user:null,userFetchStatus:{error:t.payload.message,status:"complete"}});default:return e}},D=r(49),b=r(86),C=function(){return(C=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},k={isOpen:!1,isProcessing:!1,isError:!1,name:"",type:"",onDelete:null,onCancel:null},w=function(e,t){switch(void 0===e&&(e=k),t.type){case Object(D.getType)(b.c):return C({},e,t.payload,{isOpen:!0});case Object(D.getType)(b.d):return C({},e,{isProcessing:!0});case Object(D.getType)(b.a):return k;case Object(D.getType)(b.b):return C({},e,{isError:!0});default:return e}},W=r(119),j=function(){return(j=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},H={flagAssessment:{byFlag:new Map,fetchStatus:new Map,errors:new Map,allFlags:[],allFlagsFetchStatus:j({},{error:null,status:"none"})}},N=function(e,t){switch(void 0===e&&(e=H),t.type){case _(W.a.FETCH_ALL_FLAG_ASSESSMENT):return j({},e,{flagAssessment:j({},e.flagAssessment,{allFlagsFetchStatus:{status:"inProgress",error:null}})});case h(W.a.FETCH_ALL_FLAG_ASSESSMENT):return j({},e,{flagAssessment:j({},e.flagAssessment,{allFlags:t.payload.data,allFlagsFetchStatus:{status:"complete",error:null}})});case O(W.a.FETCH_ALL_FLAG_ASSESSMENT):return j({},e,{flagAssessment:j({},e.flagAssessment,{allFlags:[],allFlagsFetchStatus:{status:"complete",error:t.payload.message}})});default:return e}};var U,M=r(264),V=r.n(M),K=r(101),Y=r.n(K),x=r(102),G=r.n(x),q=r(103),B=r.n(q),Q=r(104),z=r.n(Q),J=r(105),X=r.n(J),Z=r(1),$=r.n(Z),ee=r(384),te=r(123),re=r.n(te),ne=r(265),oe=r.n(ne),ae=r(382),se=r(386),ie=r(383),le=r(55),ce=r(251),ue=r.n(ce),pe=(U=function(e,t){return(U=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}U(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),de=function(){return(de=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},fe=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},Ee=function(e){function t(t){return e.call(this,t)||this}return pe(t,e),t.prototype.componentDidMount=function(){this.props.fetchUser()},t.prototype.render=function(){var e=this.props,t=e.user,r=e.userFetchStatus,n=e.component,o=fe(e,["user","userFetchStatus","component"]);switch(r.status){case"complete":return t?a.a.createElement(ae.a,de({},o,{component:n})):a.a.createElement(ae.a,de({},o,{render:function(){return a.a.createElement(ie.a,{to:"/error"})}}));default:return a.a.createElement(ae.a,de({},o,{render:function(){return null}}))}},t}(a.a.Component),he={fetchUser:A.b},_e=Object(c.connect)(function(e){var t=e.userState;return{user:t.user,userFetchStatus:t.userFetchStatus}},he)(Ee),Oe=Object(le.a)(function(){return Promise.all([r.e(0),r.e(8)]).then(r.bind(null,753))}),ye=Object(le.a)(function(){return Promise.all([r.e(0),r.e(1),r.e(3),r.e(12)]).then(r.bind(null,760))}),me=Object(le.a)(function(){return Promise.all([r.e(0),r.e(10)]).then(r.bind(null,762))}),ve=Object(le.a)(function(){return Promise.all([r.e(0),r.e(3),r.e(2),r.e(13)]).then(r.bind(null,747))}),Se=Object(le.a)(function(){return Promise.all([r.e(0),r.e(11)]).then(r.bind(null,749))}),Te=Object(le.a)(function(){return Promise.all([r.e(0),r.e(7)]).then(r.bind(null,759))}),ge={gettingStarted:"/getting-started",reports:"/reports",noReports:"/no-reports",reportsUpload:"/reports/upload",reportView:"/reports/:reportId",error:"/error"},Fe=function(e){var t=e.component,r=e.rootClass,n=e.skipLoadUser,o=oe()(e,["component","rootClass","skipLoadUser"]),s=document.getElementById("root");return s.removeAttribute("class"),s.classList.add("page__".concat(r),"pf-c-page__main"),s.setAttribute("role","main"),n?a.a.createElement(ae.a,re()({},o,{component:t})):a.a.createElement(_e,re()({},o,{component:t}))};Fe.propTypes={component:$.a.func,rootClass:$.a.string,skipLoadUser:$.a.bool};var Re=function(e){var t=e.childProps.location.pathname;return a.a.createElement(se.a,null,a.a.createElement(Fe,{component:Oe,rootClass:"getting-started",path:ge.gettingStarted,exact:!0}),a.a.createElement(Fe,{component:ye,rootClass:"reports",path:ge.reports,exact:!0}),a.a.createElement(Fe,{component:me,rootClass:"no-reports",path:ge.noReports}),a.a.createElement(Fe,{component:ve,rootClass:"reports-upload",path:ge.reportsUpload}),a.a.createElement(Fe,{component:Se,rootClass:"report-view",path:ge.reportView}),a.a.createElement(Fe,{component:Te,rootClass:"error",path:ge.error,skipLoadUser:!0}),a.a.createElement(ae.a,{render:function(){return ue()(ge,function(e){return e===t})?null:a.a.createElement(ie.a,{to:ge.gettingStarted})}}))},Ae=(r(373),r(375),r(376),Object(le.a)(function(){return r.e(6).then(r.bind(null,763))})),Pe=function(e){function t(){return Y()(this,t),B()(this,z()(t).apply(this,arguments))}return X()(t,e),G()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("migration-analytics"),insights.chrome.navigation(Le()),this.appNav=insights.chrome.on("APP_NAVIGATION",function(t){return e.props.history.push("/".concat(t.navId))}),this.buildNav=this.props.history.listen(function(){return insights.chrome.navigation(Le())})}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Re,{childProps:this.props}),a.a.createElement(f.NotificationsPortal,null),a.a.createElement(Ae,null))}}]),t}(o.Component);Pe.propTypes={history:$.a.object};var Ie=Object(ee.a)(Object(c.connect)()(Pe));function Le(){var e=window.location.pathname.split("/").slice(-1)[0];return[{title:"Actions",id:"actions"},{title:"Rules",id:"rules"}].map(function(t){return V()({},t,{active:t.id===e})})}var De=function(e){var t="/",r=e.split("/");return r.shift(),"beta"===r[0]&&(r.shift(),t="/beta/"),"".concat(t).concat(r[0],"/").concat(r[1])},be=r(85),Ce=r.n(be),ke=function(e){return insights.chrome.auth.getUser().then(function(){return Promise.resolve(e)})};Ce.a.defaults.baseURL="/api/xavier",Ce.a.interceptors.request.use(ke),i.a.render(a.a.createElement(c.Provider,{store:function(){if(n)throw new Error("store already initialized");for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(n=new p.a({},[Object(d.a)(),Object(f.notificationsMiddleware)({autoDismiss:!0})].concat(t))).register({notifications:f.notifications,reportState:S,uploadState:R,userState:L,dialogDeleteState:w,mappingsState:N}),n}().getStore()},a.a.createElement(l.a,{basename:De(window.location.pathname)},a.a.createElement(Ie,null))),document.getElementById("root"))},55:function(e,t,r){"use strict";r.d(t,"a",function(){return m});var n=r(193),o=r.n(n),a=r(266),s=r.n(a),i=r(101),l=r.n(i),c=r(102),u=r.n(c),p=r(103),d=r.n(p),f=r(104),E=r.n(f),h=r(105),_=r.n(h),O=r(2),y=r.n(O);function m(e){return function(t){function r(e){var t;return l()(this,r),(t=d()(this,E()(r).call(this,e))).state={component:null},t}return _()(r,t),u()(r,[{key:"componentDidMount",value:function(){var t=s()(o.a.mark(function t(){var r,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:r=t.sent,n=r.default,this.setState({component:n});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?y.a.createElement(e,this.props):null}}]),r}(O.Component)}},66:function(e,t,r){"use strict";var n=r(26);r.d(t,"a",function(){return o}),r.d(t,"b",function(){return a}),r.d(t,"c",function(){return s});var o={FETCH_USER:"FETCH_USER",UPDATE_USER:"UPDATE_USER"},a=function(){return{type:o.FETCH_USER,payload:n.a.get("/user"),meta:{notifications:{rejected:{variant:"danger",title:"Failed to load user"}}}}},s=function(e){return{type:o.UPDATE_USER,payload:{user:e}}}},71:function(e,t,r){"use strict";var n=r(26);function o(e,t){return void 0===t&&(t={}),n.a.post("/upload",e,t)}r.d(t,"a",function(){return a}),r.d(t,"e",function(){return s}),r.d(t,"d",function(){return i}),r.d(t,"c",function(){return l}),r.d(t,"b",function(){return c});var a={UPLOAD_REQUEST:"UPLOAD_REQUEST",UPLOAD_PROGRESS:"UPLOAD_PROGRESS",SELECT_UPLOAD_FILE:"SELECT_UPLOAD_FILE",RESET_UPLOAD_FILE:"RESET_UPLOAD_FILE"},s=function(e,t){void 0===t&&(t={});var r=new FormData;return Object.keys(e).forEach(function(t){return r.append(t,e[t].toString())}),r.set("file",e.file,e.file.name),{type:a.UPLOAD_REQUEST,payload:o(r,t),meta:{file:e.file,noError:!0,notifications:{}}}},i=function(e){return{type:a.UPLOAD_PROGRESS,payload:{progress:e}}},l=function(e){return{type:a.SELECT_UPLOAD_FILE,payload:{file:e}}},c=function(){return{type:a.RESET_UPLOAD_FILE,payload:{}}}},86:function(e,t,r){"use strict";r.d(t,"c",function(){return o}),r.d(t,"a",function(){return a}),r.d(t,"d",function(){return s}),r.d(t,"b",function(){return i});var n=r(49),o=Object(n.createStandardAction)("dialog/delete/open")(),a=Object(n.createAction)("dialog/delete/close"),s=Object(n.createAction)("dialog/delete/processing"),i=Object(n.createStandardAction)("dialog/delete/error")()}});