!function(e){function t(t){for(var n,o,a=t[0],s=t[1],i=t[2],l=0,c=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(I,o)&&I[o]&&c.push(I[o][0]),I[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(W&&W(t);c.length;)c.shift()();return b.push.apply(b,i||[]),r()}function r(){for(var e,t=0;t<b.length;t++){for(var r=b[t],n=!0,o=1;o<r.length;o++){var a=r[o];0!==I[a]&&(n=!1)}n&&(b.splice(t--,1),e=D(D.s=r[0]))}return e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!T[e]||!S[e])return;for(var r in S[e]=!1,t)Object.prototype.hasOwnProperty.call(t,r)&&(_[r]=t[r]);0==--y&&0===v&&A()}(e,t),n&&n(e,t)};var o,a=!0,s="501656ab11db677e1b91",i=1e4,l={},c=[],u=[];function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,r){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=r||function(){};else t._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._declinedDependencies[e[r]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=t._disposeHandlers.indexOf(e);r>=0&&t._disposeHandlers.splice(r,1)},check:R,apply:P,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:l[e]};return o=void 0,t}var p=[],f="idle";function E(e){f=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var h,_,O,y=0,v=0,m={},S={},T={};function F(e){return+e+""===e?+e:e}function R(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,E("check"),(t=i,t=t||1e4,new Promise((function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var n=new XMLHttpRequest,o=D.p+""+s+".hot-update.json";n.open("GET",o,!0),n.timeout=t,n.send(null)}catch(e){return r(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)r(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(n.responseText)}catch(e){return void r(e)}e(t)}}}))).then((function(e){if(!e)return E("idle"),null;S={},m={},T=e.c,O=e.h,E("prepare");var t=new Promise((function(e,t){h={resolve:e,reject:t}}));for(var r in _={},I)g(r);return"prepare"===f&&0===v&&0===y&&A(),t}));var t}function g(e){T[e]?(S[e]=!0,y++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=D.p+""+e+"."+s+".hot-update.js",document.head.appendChild(t)}(e)):m[e]=!0}function A(){E("ready");var e=h;if(h=null,e)if(a)Promise.resolve().then((function(){return P(a)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var r in _)Object.prototype.hasOwnProperty.call(_,r)&&t.push(F(r));e.resolve(t)}}function P(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var r,n,o,a,i;function u(e){for(var t=[e],r={},n=t.map((function(e){return{chain:[e],id:e}}));n.length>0;){var o=n.pop(),s=o.id,i=o.chain;if((a=L[s])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:s};if(a.hot._main)return{type:"unaccepted",chain:i,moduleId:s};for(var l=0;l<a.parents.length;l++){var c=a.parents[l],u=L[c];if(u){if(u.hot._declinedDependencies[s])return{type:"declined",chain:i.concat([c]),moduleId:s,parentId:c};-1===t.indexOf(c)&&(u.hot._acceptedDependencies[s]?(r[c]||(r[c]=[]),d(r[c],[s])):(delete r[c],t.push(c),n.push({chain:i.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}t=t||{};var p={},h=[],y={},v=function(){console.warn("[HMR] unexpected require("+S.moduleId+") to disposed module")};for(var m in _)if(Object.prototype.hasOwnProperty.call(_,m)){var S;i=F(m);var R=!1,g=!1,A=!1,P="";switch((S=_[m]?u(i):{type:"disposed",moduleId:m}).chain&&(P="\nUpdate propagation: "+S.chain.join(" -> ")),S.type){case"self-declined":t.onDeclined&&t.onDeclined(S),t.ignoreDeclined||(R=new Error("Aborted because of self decline: "+S.moduleId+P));break;case"declined":t.onDeclined&&t.onDeclined(S),t.ignoreDeclined||(R=new Error("Aborted because of declined dependency: "+S.moduleId+" in "+S.parentId+P));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(S),t.ignoreUnaccepted||(R=new Error("Aborted because "+i+" is not accepted"+P));break;case"accepted":t.onAccepted&&t.onAccepted(S),g=!0;break;case"disposed":t.onDisposed&&t.onDisposed(S),A=!0;break;default:throw new Error("Unexception type "+S.type)}if(R)return E("abort"),Promise.reject(R);if(g)for(i in y[i]=_[i],d(h,S.outdatedModules),S.outdatedDependencies)Object.prototype.hasOwnProperty.call(S.outdatedDependencies,i)&&(p[i]||(p[i]=[]),d(p[i],S.outdatedDependencies[i]));A&&(d(h,[S.moduleId]),y[i]=v)}var b,C=[];for(n=0;n<h.length;n++)i=h[n],L[i]&&L[i].hot._selfAccepted&&y[i]!==v&&C.push({module:i,errorHandler:L[i].hot._selfAccepted});E("dispose"),Object.keys(T).forEach((function(e){!1===T[e]&&function(e){delete I[e]}(e)}));for(var k,w,W=h.slice();W.length>0;)if(i=W.pop(),a=L[i]){var H={},N=a.hot._disposeHandlers;for(o=0;o<N.length;o++)(r=N[o])(H);for(l[i]=H,a.hot.active=!1,delete L[i],delete p[i],o=0;o<a.children.length;o++){var j=L[a.children[o]];j&&((b=j.parents.indexOf(i))>=0&&j.parents.splice(b,1))}}for(i in p)if(Object.prototype.hasOwnProperty.call(p,i)&&(a=L[i]))for(w=p[i],o=0;o<w.length;o++)k=w[o],(b=a.children.indexOf(k))>=0&&a.children.splice(b,1);for(i in E("apply"),s=O,y)Object.prototype.hasOwnProperty.call(y,i)&&(e[i]=y[i]);var U=null;for(i in p)if(Object.prototype.hasOwnProperty.call(p,i)&&(a=L[i])){w=p[i];var V=[];for(n=0;n<w.length;n++)if(k=w[n],r=a.hot._acceptedDependencies[k]){if(-1!==V.indexOf(r))continue;V.push(r)}for(n=0;n<V.length;n++){r=V[n];try{r(w)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:i,dependencyId:w[n],error:e}),t.ignoreErrored||U||(U=e)}}}for(n=0;n<C.length;n++){var M=C[n];i=M.module,c=[i];try{D(i)}catch(e){if("function"==typeof M.errorHandler)try{M.errorHandler(e)}catch(r){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:i,error:r,originalError:e}),t.ignoreErrored||U||(U=r),U||(U=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:i,error:e}),t.ignoreErrored||U||(U=e)}}return U?(E("fail"),Promise.reject(U)):(E("idle"),new Promise((function(e){e(h)})))}var L={},I={4:0},b=[];function D(t){if(L[t])return L[t].exports;var r=L[t]={i:t,l:!1,exports:{},hot:d(t),parents:(u=c,c=[],u),children:[]};return e[t].call(r.exports,r,r.exports,function(e){var t=L[e];if(!t)return D;var r=function(r){return t.hot.active?(L[r]?-1===L[r].parents.indexOf(e)&&L[r].parents.push(e):(c=[e],o=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),c=[]),D(r)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return D[e]},set:function(t){D[e]=t}}};for(var a in D)Object.prototype.hasOwnProperty.call(D,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(r,a,n(a));return r.e=function(e){return"ready"===f&&E("prepare"),v++,D.e(e).then(t,(function(e){throw t(),e}));function t(){v--,"prepare"===f&&(m[e]||g(e),0===v&&0===y&&A())}},r.t=function(e,t){return 1&t&&(e=r(e)),D.t(e,-2&t)},r}(t)),r.l=!0,r.exports}D.e=function(e){var t=[],r=I[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=I[e]=[t,n]}));t.push(r[2]=n);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,D.nc&&a.setAttribute("nonce",D.nc),a.src=function(e){return D.p+"js/"+({0:"ErrorPage~GettingStarted~NoReports~ReportView~Reports~ReportsUpload",1:"InitialSavingsEstimation~ReportsUpload~WorkloadMigrationSummary",2:"Reports~ReportsUpload~WorkloadInventory",3:"InitialSavingsEstimation~WorkloadMigrationSummary",5:"DeleteDialog",6:"ErrorPage",7:"GettingStarted",8:"InitialSavingsEstimation",9:"NoReports",10:"ReportView",11:"Reports",12:"ReportsUpload",13:"WorkloadInventory",14:"WorkloadMigrationSummary"}[e]||e)+".js"}(e);var s=new Error;o=function(t){a.onerror=a.onload=null,clearTimeout(i);var r=I[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",s.name="ChunkLoadError",s.type=n,s.request=o,r[1](s)}I[e]=void 0}};var i=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},D.m=e,D.c=L,D.d=function(e,t,r){D.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},D.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},D.t=function(e,t){if(1&t&&(e=D(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(D.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)D.d(r,n,function(t){return e[t]}.bind(null,n));return r},D.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return D.d(t,"a",t),t},D.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},D.p="/beta/apps/migration-analytics/",D.oe=function(e){throw console.error(e),e},D.h=function(){return s};var C=window.webpackJsonp=window.webpackJsonp||[],k=C.push.bind(C);C.push=t,C=C.slice();for(var w=0;w<C.length;w++)t(C[w]);var W=k;b.push([437,15]),r()}({107:function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return a})),r.d(t,"d",(function(){return s})),r.d(t,"b",(function(){return i}));var n=r(58),o=Object(n.createStandardAction)("dialog/delete/open")(),a=Object(n.createAction)("dialog/delete/close"),s=Object(n.createAction)("dialog/delete/processing"),i=Object(n.createStandardAction)("dialog/delete/error")()},13:function(e,t,r){"use strict";var n=r(29);function o(e,t,r){var o={page:e-1,size:t,filterText:r},a=[];Object.keys(o).map((function(e){var t=o[e];void 0!==t&&a.push(e+"="+t)}));var s="/report?"+a.join("&");return n.a.get(s)}function a(e){return n.a.get("/report/"+e)}function s(e){return n.a.delete("/report/"+e)}function i(e){return n.a.get("/report/"+e+"/workload-summary")}function l(e,t,r,o,a){var s={page:t-1,size:r,orderBy:o||void 0,orderAsc:a?"asc"===a:void 0},i=[];Object.keys(s).map((function(e){var t=s[e];void 0!==t&&i.push(e+"="+t)}));var l="/report/"+e+"/workload-summary/workloads?"+i.join("&");return n.a.get(l)}function c(e,t,r,o,a){var s={page:t-1,size:r,orderBy:o||void 0,orderAsc:a?"asc"===a:void 0},i=[];Object.keys(s).map((function(e){var t=s[e];void 0!==t&&i.push(e+"="+t)}));var l="/report/"+e+"/workload-summary/flags?"+i.join("&");return n.a.get(l)}function u(e){return n.a.get("/report/"+e+"/initial-saving-estimation")}function d(e,t,r,o,a,s){var i={page:t-1,size:r,orderBy:o||void 0,orderAsc:a?"asc"===a:void 0},l=[];Object.keys(i).map((function(e){var t=i[e];void 0!==t&&l.push(e+"="+t)})),s.forEach((function(e,t){e.length>0&&e.forEach((function(e){l.push(t+"="+e)}))}));var c="/report/"+e+"/workload-inventory?"+l.join("&");return n.a.get(c)}function p(e,t,r,o){var a={orderBy:t||void 0,orderAsc:r?"asc"===r:void 0},s=[];Object.keys(a).map((function(e){var t=a[e];void 0!==t&&s.push(e+"="+t)})),o.forEach((function(e,t){e.length>0&&e.forEach((function(e){s.push(t+"="+e)}))}));var i="/report/"+e+"/workload-inventory/filtered-csv?"+s.join("&");return n.a.request(i,null,"get",{responseType:"blob"})}function f(e){var t="/report/"+e+"/workload-inventory/csv";return n.a.request(t,null,"get",{responseType:"blob"})}function E(e){return n.a.get("/report/"+e+"/workload-inventory/available-filters")}function h(e){var t="/report/"+e+"/payload-link";return n.a.get(t)}r.d(t,"a",(function(){return _})),r.d(t,"m",(function(){return O})),r.d(t,"c",(function(){return y})),r.d(t,"b",(function(){return v})),r.d(t,"k",(function(){return m})),r.d(t,"l",(function(){return S})),r.d(t,"d",(function(){return T})),r.d(t,"e",(function(){return F})),r.d(t,"g",(function(){return R})),r.d(t,"h",(function(){return g})),r.d(t,"j",(function(){return A})),r.d(t,"i",(function(){return P})),r.d(t,"f",(function(){return L}));var _={FETCH_REPORTS:"FETCH_REPORTS",FETCH_REPORT:"FETCH_REPORT",DELETE_REPORT:"DELETE_REPORT",FETCH_REPORT_WORKLOAD_SUMMARY:"FETCH_REPORT_WORKLOAD_SUMMARY",FETCH_REPORT_WORKLOADS_DETECTED:"FETCH_REPORT_WORKLOADS_DETECTED",FETCH_REPORT_FLAGS:"FETCH_REPORT_FLAGS",FETCH_REPORT_INITIAL_SAVING_ESTIMATION:"FETCH_REPORT_INITIAL_SAVING_ESTIMATION",FETCH_REPORT_WOKLOAD_INVENTORY:"FETCH_REPORT_WOKLOAD_INVENTORY",FETCH_REPORT_WOKLOAD_INVENTORY_ALL_CSV:"FETCH_REPORT_WOKLOAD_INVENTORY_ALL_CSV",FETCH_REPORT_WOKLOAD_INVENTORY_FILTERED_CSV:"FETCH_REPORT_WOKLOAD_INVENTORY_FILTERED_CSV",FETCH_REPORT_WOKLOAD_INVENTORY_AVAILABLE_FILTERS:"FETCH_REPORT_WOKLOAD_INVENTORY_AVAILABLE_FILTERS",FETCH_REPORT_PAYLOAD_DOWNLOAD_LINK:"FETCH_REPORT_PAYLOAD_DOWNLOAD_LINK"},O=function(e,t,r){return{type:_.FETCH_REPORTS,payload:o(e,t,r),meta:{notifications:{rejected:{variant:"danger",title:"Failed to load reports"}}}}},y=function(e){return{type:_.FETCH_REPORT,payload:a(e),meta:{notifications:{rejected:{variant:"danger",title:"Failed to load report "+e}}}}},v=function(e,t){return{type:_.DELETE_REPORT,payload:s(e).then((function(){return{id:e}})),meta:{notifications:{rejected:{variant:"danger",title:"Failed to delete report "+t},fulfilled:{variant:"success",title:"Report "+t+" deleted"}}}}},m=function(e){return{type:_.FETCH_REPORT_WORKLOAD_SUMMARY,payload:i(e),meta:{notifications:{rejected:{variant:"danger",title:"Failed to load report workload summary "+e}}}}},S=function(e,t,r,n,o){return{type:_.FETCH_REPORT_WORKLOADS_DETECTED,payload:l(e,t,r,n,o),meta:{notifications:{rejected:{variant:"danger",title:"Failed to load report workloads detected "+e}}}}},T=function(e,t,r,n,o){return{type:_.FETCH_REPORT_FLAGS,payload:c(e,t,r,n,o),meta:{notifications:{rejected:{variant:"danger",title:"Failed to load report flags "+e}}}}},F=function(e){return{type:_.FETCH_REPORT_INITIAL_SAVING_ESTIMATION,payload:u(e),meta:{notifications:{rejected:{variant:"danger",title:"Failed to load report saving estimation "+e}}}}},R=function(e,t,r,n,o,a){return{type:_.FETCH_REPORT_WOKLOAD_INVENTORY,payload:d(e,t,r,n,o,a),meta:{notifications:{rejected:{variant:"danger",title:"Failed to load report workload inventory "+e}}}}},g=function(e){return{type:_.FETCH_REPORT_WOKLOAD_INVENTORY_ALL_CSV,payload:f(e),meta:{notifications:{rejected:{variant:"danger",title:"Failed to load report workload inventory "+e+" csv"}}}}},A=function(e,t,r,n){return{type:_.FETCH_REPORT_WOKLOAD_INVENTORY_FILTERED_CSV,payload:p(e,t,r,n),meta:{notifications:{rejected:{variant:"danger",title:"Failed to load report workload inventory "+e+" csv"}}}}},P=function(e){return{type:_.FETCH_REPORT_WOKLOAD_INVENTORY_AVAILABLE_FILTERS,payload:E(e),meta:{notifications:{rejected:{variant:"danger",title:"Failed to load report workload inventory filters "+e}}}}},L=function(e){return{type:_.FETCH_REPORT_PAYLOAD_DOWNLOAD_LINK,payload:h(e),meta:{notifications:{rejected:{variant:"danger",title:"Failed to fetch report "+e+" payload download link"}}}}}},139:function(e,t,r){"use strict";var n=r(29);r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a}));var o={FETCH_ALL_FLAG_ASSESSMENT:"FETCH_ALL_FLAG_ASSESSMENT"},a=function(){return{type:o.FETCH_ALL_FLAG_ASSESSMENT,payload:n.a.get("/mappings/flag-assessment"),meta:{noError:!0,notifications:{}}}}},214:function(e,t,r){(t=e.exports=r(7)(!1)).i(r(434),""),t.push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\n.pf-c-page__main {\n  background-color: #e7e7e7; }\n\n:root {\n  --xa-card-solid-border--Color: var(--pf-global--BorderColor--dark-100);\n  --xa-card-solid-border--Width: 1px;\n  --xa-card-solid-border--Style: solid; }\n\n.pf-c-card.xa-c-card-solid {\n  --xa-c-card--BorderColor: var(--xa-card-solid-border--Color);\n  --xa-c-card--BorderWidth: var(--xa-card-solid-border--Width);\n  --xa-c-card--BorderStyle: var(--xa-card-solid-border--Style);\n  box-shadow: none !important;\n  border-width: var(--xa-c-card--BorderWidth) !important;\n  border-style: var(--xa-c-card--BorderStyle) !important;\n  border-color: var(--xa-c-card--BorderColor) !important; }\n",""])},29:function(e,t,r){"use strict";var n=r(104),o=r.n(n),a=function(){function e(){}return e.request=function(e,t,r,n){return void 0===t&&(t=null),void 0===r&&(r="get"),void 0===n&&(n={}),o.a.request(Object.assign({},{url:e,method:r,data:t},n))},e.post=function(e,t,r){return void 0===r&&(r={}),this.request(e,t,"post",r)},e.put=function(e,t,r){return void 0===r&&(r={}),this.request(e,t,"put",r)},e.get=function(e){return this.request(e)},e.delete=function(e,t){return void 0===t&&(t={}),this.request(e,null,"delete",t)},e}();t.a=a},433:function(e,t,r){var n=r(214);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=r(8)(n,o);n.locals&&(e.exports=n.locals),e.hot.accept(214,(function(){var t=r(214);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)})),e.hot.dispose((function(){a()}))},437:function(e,t,r){"use strict";r.r(t);var n,o=r(2),a=r.n(o),s=r(21),i=r.n(s),l=r(441),c=r(72),u=r(314),d=r.n(u),p=r(322),f=r(100),E=r(13),h=function(e){return e+"_FULFILLED"},_=function(e){return e+"_PENDING"},O=function(e){return e+"_REJECTED"},y=function(){return(y=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},v={error:null,status:"none"},m={report:null,reportFetchStatus:y({},v),reports:{total:0,items:[]},reportsFetchStatus:y({},v),reportWorkloadSummary:null,reportWorkloadSummaryFetchStatus:y({},v),reportWorkloadsDetected:{total:0,items:[]},reportWorkloadsDetectedFetchStatus:y({},v),reportFlags:{total:0,items:[]},reportFlagsFetchStatus:y({},v),reportInitialSavingEstimation:null,reportInitialSavingEstimationFetchStatus:y({},v),reportWorkloadInventory:{total:0,items:[]},reportWorkloadInventoryFetchStatus:y({},v),reportWorkloadInventoryAllCSVFetchStatus:y({},v),reportWorkloadInventoryFilteredCSVFetchStatus:y({},v),reportWorkloadInventoryAvailableFilters:null,reportWorkloadInventoryAvailableFiltersFetchStatus:y({},v),reportPayloadDownloadLinkFetchStatus:y({},v)},S=function(e,t){switch(void 0===e&&(e=m),t.type){case _(E.a.FETCH_REPORTS):return y({},e,{reportsFetchStatus:y({},e.reportsFetchStatus,{error:null,status:"inProgress"})});case h(E.a.FETCH_REPORTS):return y({},e,{reports:y({},e.reports,{items:t.payload.data.content,total:t.payload.data.totalElements}),reportsFetchStatus:y({},e.reportsFetchStatus,{error:null,status:"complete"})});case O(E.a.FETCH_REPORTS):return y({},e,{reports:y({},e.reports,{items:[],total:0}),reportsFetchStatus:y({},e.reportsFetchStatus,{error:t.payload.message,status:"complete"})});case _(E.a.FETCH_REPORT):return y({},e,{report:null,reportFetchStatus:y({},e.reportFetchStatus,{error:null,status:"inProgress"})});case h(E.a.FETCH_REPORT):return y({},e,{report:t.payload.data,reportFetchStatus:y({},e.reportFetchStatus,{error:null,status:"complete"})});case O(E.a.FETCH_REPORT):return y({},e,{report:null,reportFetchStatus:y({},e.reportFetchStatus,{error:t.payload.message,status:"complete"})});case h(E.a.DELETE_REPORT):return y({},e,{reports:y({},e.reports,{total:e.reports.total-1,items:e.reports.items.filter((function(e){return e.id!==t.payload.id}))})});case O(E.a.DELETE_REPORT):return y({},e);case _(E.a.FETCH_REPORT_WORKLOAD_SUMMARY):return y({},e,{reportWorkloadSummaryFetchStatus:y({},e.reportWorkloadSummaryFetchStatus,{error:null,status:"inProgress"})});case h(E.a.FETCH_REPORT_WORKLOAD_SUMMARY):return y({},e,{reportWorkloadSummary:t.payload.data,reportWorkloadSummaryFetchStatus:y({},e.reportWorkloadSummaryFetchStatus,{error:null,status:"complete"})});case O(E.a.FETCH_REPORT_WORKLOAD_SUMMARY):return y({},e,{reportWorkloadSummary:null,reportWorkloadSummaryFetchStatus:y({},e.reportWorkloadSummaryFetchStatus,{error:t.payload.message,status:"complete"})});case _(E.a.FETCH_REPORT_WORKLOADS_DETECTED):return y({},e,{reportWorkloadsDetectedFetchStatus:y({},e.reportWorkloadsDetectedFetchStatus,{error:null,status:"inProgress"})});case h(E.a.FETCH_REPORT_WORKLOADS_DETECTED):return y({},e,{reportWorkloadsDetected:y({},e.reportWorkloadsDetected,{items:t.payload.data.content,total:t.payload.data.totalElements}),reportWorkloadsDetectedFetchStatus:y({},e.reportWorkloadsDetectedFetchStatus,{error:null,status:"complete"})});case O(E.a.FETCH_REPORT_WORKLOADS_DETECTED):return y({},e,{reportWorkloadsDetected:y({},e.reportWorkloadsDetected,{items:[],total:0}),reportWorkloadsDetectedFetchStatus:y({},e.reportWorkloadsDetectedFetchStatus,{error:t.payload.message,status:"complete"})});case _(E.a.FETCH_REPORT_FLAGS):return y({},e,{reportFlagsFetchStatus:y({},e.reportFlagsFetchStatus,{error:null,status:"inProgress"})});case h(E.a.FETCH_REPORT_FLAGS):return y({},e,{reportFlags:y({},e.reportFlags,{items:t.payload.data.content,total:t.payload.data.totalElements}),reportFlagsFetchStatus:y({},e.reportFlagsFetchStatus,{error:null,status:"complete"})});case O(E.a.FETCH_REPORT_FLAGS):return y({},e,{reportFlags:y({},e.reportFlags,{items:[],total:0}),reportFlagsFetchStatus:y({},e.reportFlagsFetchStatus,{error:t.payload.message,status:"complete"})});case _(E.a.FETCH_REPORT_INITIAL_SAVING_ESTIMATION):return y({},e,{reportInitialSavingEstimation:null,reportInitialSavingEstimationFetchStatus:y({},e.reportInitialSavingEstimationFetchStatus,{error:null,status:"inProgress"})});case h(E.a.FETCH_REPORT_INITIAL_SAVING_ESTIMATION):return y({},e,{reportInitialSavingEstimation:t.payload.data,reportInitialSavingEstimationFetchStatus:y({},e.reportInitialSavingEstimationFetchStatus,{error:null,status:"complete"})});case O(E.a.FETCH_REPORT_INITIAL_SAVING_ESTIMATION):return y({},e,{reportInitialSavingEstimation:null,reportInitialSavingEstimationFetchStatus:y({},e.reportInitialSavingEstimationFetchStatus,{error:t.payload.message,status:"complete"})});case _(E.a.FETCH_REPORT_WOKLOAD_INVENTORY):return y({},e,{reportWorkloadInventoryFetchStatus:y({},e.reportWorkloadInventoryFetchStatus,{error:null,status:"inProgress"})});case h(E.a.FETCH_REPORT_WOKLOAD_INVENTORY):return y({},e,{reportWorkloadInventory:y({},e.reportWorkloadInventory,{items:t.payload.data.content,total:t.payload.data.totalElements}),reportWorkloadInventoryFetchStatus:y({},e.reportWorkloadInventoryFetchStatus,{error:null,status:"complete"})});case O(E.a.FETCH_REPORT_WOKLOAD_INVENTORY):return y({},e,{reportWorkloadInventory:y({},e.reportWorkloadInventory,{items:[],total:0}),reportWorkloadInventoryFetchStatus:y({},e.reportWorkloadInventoryFetchStatus,{error:t.payload.message,status:"complete"})});case _(E.a.FETCH_REPORT_WOKLOAD_INVENTORY_ALL_CSV):return y({},e,{reportWorkloadInventoryAllCSVFetchStatus:y({},e.reportWorkloadInventoryAllCSVFetchStatus,{error:null,status:"inProgress"})});case h(E.a.FETCH_REPORT_WOKLOAD_INVENTORY_ALL_CSV):return y({},e,{reportWorkloadInventoryAllCSVFetchStatus:y({},e.reportWorkloadInventoryAllCSVFetchStatus,{error:null,status:"complete"})});case O(E.a.FETCH_REPORT_WOKLOAD_INVENTORY_ALL_CSV):return y({},e,{reportWorkloadInventoryAllCSVFetchStatus:y({},e.reportWorkloadInventoryAllCSVFetchStatus,{error:t.payload.message,status:"complete"})});case _(E.a.FETCH_REPORT_WOKLOAD_INVENTORY_FILTERED_CSV):return y({},e,{reportWorkloadInventoryFilteredCSVFetchStatus:y({},e.reportWorkloadInventoryFilteredCSVFetchStatus,{error:null,status:"inProgress"})});case h(E.a.FETCH_REPORT_WOKLOAD_INVENTORY_FILTERED_CSV):return y({},e,{reportWorkloadInventoryFilteredCSVFetchStatus:y({},e.reportWorkloadInventoryFilteredCSVFetchStatus,{error:null,status:"complete"})});case O(E.a.FETCH_REPORT_WOKLOAD_INVENTORY_FILTERED_CSV):return y({},e,{reportWorkloadInventoryFilteredCSVFetchStatus:y({},e.reportWorkloadInventoryFilteredCSVFetchStatus,{error:t.payload.message,status:"complete"})});case _(E.a.FETCH_REPORT_WOKLOAD_INVENTORY_AVAILABLE_FILTERS):return y({},e,{reportWorkloadInventoryAvailableFilters:null,reportWorkloadInventoryAvailableFiltersFetchStatus:y({},e.reportWorkloadInventoryAvailableFiltersFetchStatus,{error:null,status:"inProgress"})});case h(E.a.FETCH_REPORT_WOKLOAD_INVENTORY_AVAILABLE_FILTERS):return y({},e,{reportWorkloadInventoryAvailableFilters:t.payload.data,reportWorkloadInventoryAvailableFiltersFetchStatus:y({},e.reportWorkloadInventoryAvailableFiltersFetchStatus,{error:null,status:"complete"})});case O(E.a.FETCH_REPORT_WOKLOAD_INVENTORY_AVAILABLE_FILTERS):return y({},e,{reportWorkloadInventoryAvailableFilters:null,reportWorkloadInventoryAvailableFiltersFetchStatus:y({},e.reportWorkloadInventoryAvailableFiltersFetchStatus,{error:t.payload.message,status:"complete"})});case _(E.a.FETCH_REPORT_PAYLOAD_DOWNLOAD_LINK):return y({},e,{reportPayloadDownloadLinkFetchStatus:y({},e.reportPayloadDownloadLinkFetchStatus,{error:null,status:"inProgress"})});case h(E.a.FETCH_REPORT_PAYLOAD_DOWNLOAD_LINK):return y({},e,{reportPayloadDownloadLinkFetchStatus:y({},e.reportPayloadDownloadLinkFetchStatus,{error:null,status:"complete"})});case O(E.a.FETCH_REPORT_PAYLOAD_DOWNLOAD_LINK):return y({},e,{reportPayloadDownloadLinkFetchStatus:y({},e.reportPayloadDownloadLinkFetchStatus,{error:t.payload.message,status:"complete"})});default:return e}},T=r(81),F=function(){return(F=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},R={file:null,success:null,error:null,progress:0,uploading:!1},g=function(e,t){switch(void 0===e&&(e=R),t.type){case T.a.UPLOAD_PROGRESS:return F({},e,{progress:t.payload.progress});case T.a.SELECT_UPLOAD_FILE:return F({},e,{error:null,success:null,progress:0,uploading:!1,file:t.payload.file});case T.a.RESET_UPLOAD_FILE:return F({},R);case _(T.a.UPLOAD_REQUEST):return F({},e,{error:null,success:null,progress:0,uploading:!0,file:t.meta.file});case h(T.a.UPLOAD_REQUEST):return F({},e,{success:!0,uploading:!1});case O(T.a.UPLOAD_REQUEST):return F({},e,{error:t.payload.message,success:!1,uploading:!1});default:return e}},A=r(80),P=function(){return(P=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},L={user:null,userFetchStatus:{error:null,status:"none"}},I=function(e,t){switch(void 0===e&&(e=L),t.type){case A.a.UPDATE_USER:return P({},e,{user:Object.assign({},e.user,t.payload.user)});case _(A.a.FETCH_USER):return P({},e,{user:null,userFetchStatus:{error:null,status:"inProgress"}});case h(A.a.FETCH_USER):return P({},e,{user:t.payload.data,userFetchStatus:{error:null,status:"complete"}});case O(A.a.FETCH_USER):return P({},e,{user:null,userFetchStatus:{error:t.payload.message,status:"complete"}});default:return e}},b=r(58),D=r(107),C=function(){return(C=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},k={isOpen:!1,isProcessing:!1,isError:!1,name:"",type:"",onDelete:function(){},onCancel:function(){}},w=function(e,t){switch(void 0===e&&(e=k),t.type){case Object(b.getType)(D.c):return C({},e,t.payload,{isOpen:!0});case Object(b.getType)(D.d):return C({},e,{isProcessing:!0});case Object(b.getType)(D.a):return k;case Object(b.getType)(D.b):return C({},e,{isError:!0});default:return e}},W=r(139),H=function(){return(H=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},N={flagAssessment:{byFlag:new Map,fetchStatus:new Map,errors:new Map,allFlags:[],allFlagsFetchStatus:H({},{error:null,status:"none"})}},j=function(e,t){switch(void 0===e&&(e=N),t.type){case _(W.a.FETCH_ALL_FLAG_ASSESSMENT):return H({},e,{flagAssessment:H({},e.flagAssessment,{allFlagsFetchStatus:{status:"inProgress",error:null}})});case h(W.a.FETCH_ALL_FLAG_ASSESSMENT):return H({},e,{flagAssessment:H({},e.flagAssessment,{allFlags:t.payload.data,allFlagsFetchStatus:{status:"complete",error:null}})});case O(W.a.FETCH_ALL_FLAG_ASSESSMENT):return H({},e,{flagAssessment:H({},e.flagAssessment,{allFlags:[],allFlagsFetchStatus:{status:"complete",error:t.payload.message}})});default:return e}};var U,V=r(315),M=r.n(V),x=r(123),K=r.n(x),Y=r(124),G=r.n(Y),B=r(125),q=r.n(B),Q=r(126),z=r.n(Q),J=r(127),X=r.n(J),Z=r(1),$=r.n(Z),ee=r(440),te=r(143),re=r.n(te),ne=r(316),oe=r.n(ne),ae=r(438),se=r(443),ie=r(439),le=r(62),ce=r(293),ue=r.n(ce),de=(U=function(e,t){return(U=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}U(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),pe=function(){return(pe=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},fe=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},Ee=function(e){function t(t){return e.call(this,t)||this}return de(t,e),t.prototype.componentDidMount=function(){this.props.fetchUser()},t.prototype.render=function(){var e=this.props,t=e.user,r=e.userFetchStatus,n=e.component,o=fe(e,["user","userFetchStatus","component"]);switch(r.status){case"complete":return t?a.a.createElement(ae.a,pe({},o,{component:n})):a.a.createElement(ae.a,pe({},o,{render:function(){return a.a.createElement(ie.a,{to:"/error"})}}));default:return a.a.createElement(ae.a,pe({},o,{render:function(){return null}}))}},t}(a.a.Component),he={fetchUser:A.b},_e=Object(c.connect)((function(e){var t=e.userState;return{user:t.user,userFetchStatus:t.userFetchStatus}}),he)(Ee),Oe=Object(le.a)((function(){return Promise.all([r.e(0),r.e(7)]).then(r.bind(null,1085))})),ye=Object(le.a)((function(){return Promise.all([r.e(0),r.e(2),r.e(11)]).then(r.bind(null,1091))})),ve=Object(le.a)((function(){return Promise.all([r.e(0),r.e(9)]).then(r.bind(null,1088))})),me=Object(le.a)((function(){return Promise.all([r.e(0),r.e(2),r.e(1),r.e(12)]).then(r.bind(null,1078))})),Se=Object(le.a)((function(){return Promise.all([r.e(0),r.e(10)]).then(r.bind(null,1082))})),Te=Object(le.a)((function(){return Promise.all([r.e(0),r.e(6)]).then(r.bind(null,1090))})),Fe={gettingStarted:"/getting-started",reports:"/reports",noReports:"/no-reports",reportsUpload:"/reports/upload",reportView:"/reports/:reportId",error:"/error"},Re=function(e){var t=e.component,r=e.rootClass,n=e.skipLoadUser,o=oe()(e,["component","rootClass","skipLoadUser"]),s=document.getElementById("root");return s.removeAttribute("class"),s.classList.add("page__".concat(r),"pf-c-page__main"),s.setAttribute("role","main"),n?a.a.createElement(ae.a,re()({},o,{component:t})):a.a.createElement(_e,re()({},o,{component:t}))};Re.propTypes={component:$.a.func,rootClass:$.a.string,skipLoadUser:$.a.bool};var ge=function(e){var t=e.childProps.location.pathname;return a.a.createElement(se.a,null,a.a.createElement(Re,{component:Oe,rootClass:"getting-started",path:Fe.gettingStarted,exact:!0}),a.a.createElement(Re,{component:ye,rootClass:"reports",path:Fe.reports,exact:!0}),a.a.createElement(Re,{component:ve,rootClass:"no-reports",path:Fe.noReports}),a.a.createElement(Re,{component:me,rootClass:"reports-upload",path:Fe.reportsUpload}),a.a.createElement(Re,{component:Se,rootClass:"report-view",path:Fe.reportView}),a.a.createElement(Re,{component:Te,rootClass:"error",path:Fe.error,skipLoadUser:!0}),a.a.createElement(ae.a,{render:function(){return ue()(Fe,(function(e){return e===t}))?null:a.a.createElement(ie.a,{to:Fe.gettingStarted})}}))},Ae=(r(433),r(435),r(436),Object(le.a)((function(){return r.e(5).then(r.bind(null,1092))}))),Pe=function(e){function t(){return K()(this,t),q()(this,z()(t).apply(this,arguments))}return X()(t,e),G()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("migration-analytics"),insights.chrome.navigation(Ie()),this.appNav=insights.chrome.on("APP_NAVIGATION",(function(t){return e.props.history.push("/".concat(t.navId))})),this.buildNav=this.props.history.listen((function(){return insights.chrome.navigation(Ie())}))}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(ge,{childProps:this.props}),a.a.createElement(f.NotificationsPortal,null),a.a.createElement(Ae,null))}}]),t}(o.Component);Pe.propTypes={history:$.a.object};var Le=Object(ee.a)(Object(c.connect)()(Pe));function Ie(){var e=window.location.pathname.split("/").slice(-1)[0];return[{title:"Actions",id:"actions"},{title:"Rules",id:"rules"}].map((function(t){return M()({},t,{active:t.id===e})}))}var be=function(e){var t="/",r=e.split("/");return r.shift(),"beta"===r[0]&&(r.shift(),t="/beta/"),"".concat(t).concat(r[0],"/").concat(r[1])},De=r(104),Ce=r.n(De),ke=function(e){return insights.chrome.auth.getUser().then((function(){return Promise.resolve(e)}))};Ce.a.defaults.baseURL="/api/xavier",Ce.a.interceptors.request.use(ke),i.a.render(a.a.createElement(c.Provider,{store:function(){if(n)throw new Error("store already initialized");for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(n=new d.a({},[Object(p.a)(),Object(f.notificationsMiddleware)({autoDismiss:!0})].concat(t))).register({notifications:f.notifications,reportState:S,uploadState:g,userState:I,dialogDeleteState:w,mappingsState:j}),n}().getStore()},a.a.createElement(l.a,{basename:be(window.location.pathname)},a.a.createElement(Le,null))),document.getElementById("root"))},62:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var n=r(237),o=r.n(n),a=r(317),s=r.n(a),i=r(123),l=r.n(i),c=r(124),u=r.n(c),d=r(125),p=r.n(d),f=r(126),E=r.n(f),h=r(127),_=r.n(h),O=r(2),y=r.n(O);function v(e){return function(t){function r(e){var t;return l()(this,r),(t=p()(this,E()(r).call(this,e))).state={component:null},t}var n;return _()(r,t),u()(r,[{key:"componentDidMount",value:(n=s()(o.a.mark((function t(){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:r=t.sent,n=r.default,this.setState({component:n});case 5:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?y.a.createElement(e,this.props):null}}]),r}(O.Component)}},80:function(e,t,r){"use strict";var n=r(29);r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return s}));var o={FETCH_USER:"FETCH_USER",UPDATE_USER:"UPDATE_USER"},a=function(){return{type:o.FETCH_USER,payload:n.a.get("/user"),meta:{notifications:{rejected:{variant:"danger",title:"Failed to load user"}}}}},s=function(e){return{type:o.UPDATE_USER,payload:{user:e}}}},81:function(e,t,r){"use strict";var n=r(29);function o(e,t){return void 0===t&&(t={}),n.a.post("/upload",e,t)}r.d(t,"a",(function(){return a})),r.d(t,"e",(function(){return s})),r.d(t,"d",(function(){return i})),r.d(t,"c",(function(){return l})),r.d(t,"b",(function(){return c}));var a={UPLOAD_REQUEST:"UPLOAD_REQUEST",UPLOAD_PROGRESS:"UPLOAD_PROGRESS",SELECT_UPLOAD_FILE:"SELECT_UPLOAD_FILE",RESET_UPLOAD_FILE:"RESET_UPLOAD_FILE"},s=function(e,t){void 0===t&&(t={});var r=new FormData;return Object.keys(e).forEach((function(t){return r.append(t,e[t].toString())})),r.set("file",e.file,e.file.name),{type:a.UPLOAD_REQUEST,payload:o(r,t),meta:{file:e.file,noError:!0,notifications:{}}}},i=function(e){return{type:a.UPLOAD_PROGRESS,payload:{progress:e}}},l=function(e){return{type:a.SELECT_UPLOAD_FILE,payload:{file:e}}},c=function(){return{type:a.RESET_UPLOAD_FILE,payload:{}}}}});
//# sourceMappingURL=App.js.map