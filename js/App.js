!function(e){function t(t){for(var n,o,a=t[0],i=t[1],s=t[2],c=0,u=[];c<a.length;c++)o=a[c],A[o]&&u.push(A[o][0]),A[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(C&&C(t);u.length;)u.shift()();return w.push.apply(w,s||[]),r()}function r(){for(var e,t=0;t<w.length;t++){for(var r=w[t],n=!0,o=1;o<r.length;o++){var a=r[o];0!==A[a]&&(n=!1)}n&&(w.splice(t--,1),e=j(j.s=r[0]))}return e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!S[e]||!_[e])return;for(var r in _[e]=!1,t)Object.prototype.hasOwnProperty.call(t,r)&&(m[r]=t[r]);0==--v&&0===g&&P()}(e,t),n&&n(e,t)};var o,a=!0,i="778070240e8e8d7c8d3f",s=1e4,c={},u=[],l=[];function p(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,r){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=r||function(){};else t._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._declinedDependencies[e[r]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=t._disposeHandlers.indexOf(e);r>=0&&t._disposeHandlers.splice(r,1)},check:T,apply:I,status:function(e){if(!e)return f;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:c[e]};return o=void 0,t}var d=[],f="idle";function h(e){f=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var E,m,y,v=0,g=0,O={},_={},S={};function R(e){return+e+""===e?+e:e}function T(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,h("check"),(t=s,t=t||1e4,new Promise(function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var n=new XMLHttpRequest,o=j.p+""+i+".hot-update.json";n.open("GET",o,!0),n.timeout=t,n.send(null)}catch(e){return r(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)r(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(n.responseText)}catch(e){return void r(e)}e(t)}}})).then(function(e){if(!e)return h("idle"),null;_={},O={},S=e.c,y=e.h,h("prepare");var t=new Promise(function(e,t){E={resolve:e,reject:t}});for(var r in m={},A)b(r);return"prepare"===f&&0===g&&0===v&&P(),t});var t}function b(e){S[e]?(_[e]=!0,v++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=j.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):O[e]=!0}function P(){h("ready");var e=E;if(E=null,e)if(a)Promise.resolve().then(function(){return I(a)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var r in m)Object.prototype.hasOwnProperty.call(m,r)&&t.push(R(r));e.resolve(t)}}function I(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var r,n,o,a,s;function l(e){for(var t=[e],r={},n=t.slice().map(function(e){return{chain:[e],id:e}});n.length>0;){var o=n.pop(),i=o.id,s=o.chain;if((a=F[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var c=0;c<a.parents.length;c++){var u=a.parents[c],l=F[u];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([u]),moduleId:i,parentId:u};-1===t.indexOf(u)&&(l.hot._acceptedDependencies[i]?(r[u]||(r[u]=[]),p(r[u],[i])):(delete r[u],t.push(u),n.push({chain:s.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}t=t||{};var d={},E=[],v={},g=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var O in m)if(Object.prototype.hasOwnProperty.call(m,O)){var _;s=R(O);var T=!1,b=!1,P=!1,I="";switch((_=m[O]?l(s):{type:"disposed",moduleId:O}).chain&&(I="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(T=new Error("Aborted because of self decline: "+_.moduleId+I));break;case"declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(T=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+I));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(_),t.ignoreUnaccepted||(T=new Error("Aborted because "+s+" is not accepted"+I));break;case"accepted":t.onAccepted&&t.onAccepted(_),b=!0;break;case"disposed":t.onDisposed&&t.onDisposed(_),P=!0;break;default:throw new Error("Unexception type "+_.type)}if(T)return h("abort"),Promise.reject(T);if(b)for(s in v[s]=m[s],p(E,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,s)&&(d[s]||(d[s]=[]),p(d[s],_.outdatedDependencies[s]));P&&(p(E,[_.moduleId]),v[s]=g)}var w,D=[];for(n=0;n<E.length;n++)s=E[n],F[s]&&F[s].hot._selfAccepted&&D.push({module:s,errorHandler:F[s].hot._selfAccepted});h("dispose"),Object.keys(S).forEach(function(e){!1===S[e]&&function(e){delete A[e]}(e)});for(var U,L,C=E.slice();C.length>0;)if(s=C.pop(),a=F[s]){var H={},M=a.hot._disposeHandlers;for(o=0;o<M.length;o++)(r=M[o])(H);for(c[s]=H,a.hot.active=!1,delete F[s],delete d[s],o=0;o<a.children.length;o++){var N=F[a.children[o]];N&&((w=N.parents.indexOf(s))>=0&&N.parents.splice(w,1))}}for(s in d)if(Object.prototype.hasOwnProperty.call(d,s)&&(a=F[s]))for(L=d[s],o=0;o<L.length;o++)U=L[o],(w=a.children.indexOf(U))>=0&&a.children.splice(w,1);for(s in h("apply"),i=y,v)Object.prototype.hasOwnProperty.call(v,s)&&(e[s]=v[s]);var k=null;for(s in d)if(Object.prototype.hasOwnProperty.call(d,s)&&(a=F[s])){L=d[s];var x=[];for(n=0;n<L.length;n++)if(U=L[n],r=a.hot._acceptedDependencies[U]){if(-1!==x.indexOf(r))continue;x.push(r)}for(n=0;n<x.length;n++){r=x[n];try{r(L)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:L[n],error:e}),t.ignoreErrored||k||(k=e)}}}for(n=0;n<D.length;n++){var G=D[n];s=G.module,u=[s];try{j(s)}catch(e){if("function"==typeof G.errorHandler)try{G.errorHandler(e)}catch(r){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:r,originalError:e}),t.ignoreErrored||k||(k=r),k||(k=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||k||(k=e)}}return k?(h("fail"),Promise.reject(k)):(h("idle"),new Promise(function(e){e(E)}))}var F={},A={4:0},w=[];function j(t){if(F[t])return F[t].exports;var r=F[t]={i:t,l:!1,exports:{},hot:p(t),parents:(l=u,u=[],l),children:[]};return e[t].call(r.exports,r,r.exports,function(e){var t=F[e];if(!t)return j;var r=function(r){return t.hot.active?(F[r]?-1===F[r].parents.indexOf(e)&&F[r].parents.push(e):(u=[e],o=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),u=[]),j(r)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return j[e]},set:function(t){j[e]=t}}};for(var a in j)Object.prototype.hasOwnProperty.call(j,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(r,a,n(a));return r.e=function(e){return"ready"===f&&h("prepare"),g++,j.e(e).then(t,function(e){throw t(),e});function t(){g--,"prepare"===f&&(O[e]||b(e),0===g&&0===v&&P())}},r.t=function(e,t){return 1&t&&(e=r(e)),j.t(e,-2&t)},r}(t)),r.l=!0,r.exports}j.e=function(e){var t=[],r=A[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise(function(t,n){r=A[e]=[t,n]});t.push(r[2]=n);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,j.nc&&a.setAttribute("nonce",j.nc),a.src=function(e){return j.p+"js/"+({0:"ErrorPage~GettingStarted~NoReports~ReportView~Reports~ReportsUpload",1:"InitialSavingsEstimation~Reports",2:"InitialSavingsEstimation~ReportsUpload",3:"Reports~ReportsUpload",5:"DeleteDialog",6:"ErrorPage",7:"GettingStarted",8:"InitialSavingsEstimation",9:"NoReports",10:"ReportView",11:"Reports",12:"ReportsUpload",13:"WorkloadInventory",14:"WorkloadMigrationSummary"}[e]||e)+".js"}(e);var i=new Error;o=function(t){a.onerror=a.onload=null,clearTimeout(s);var r=A[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",i.type=n,i.request=o,r[1](i)}A[e]=void 0}};var s=setTimeout(function(){o({type:"timeout",target:a})},12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},j.m=e,j.c=F,j.d=function(e,t,r){j.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},j.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},j.t=function(e,t){if(1&t&&(e=j(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(j.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)j.d(r,n,function(t){return e[t]}.bind(null,n));return r},j.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return j.d(t,"a",t),t},j.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},j.p="/beta/apps/migration-analytics/",j.oe=function(e){throw console.error(e),e},j.h=function(){return i};var D=window.webpackJsonp=window.webpackJsonp||[],U=D.push.bind(D);D.push=t,D=D.slice();for(var L=0;L<D.length;L++)t(D[L]);var C=U;w.push([378,15]),r()}({173:function(e,t,r){(t=e.exports=r(5)(!1)).i(r(375),""),t.push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\n.pf-c-page__main {\n  background-color: #e7e7e7; }\n",""])},27:function(e,t,r){"use strict";var n=r(47);function o(e,t,r){var o={page:e-1,size:t,filterText:r},a=[];Object.keys(o).map(function(e){var t=o[e];void 0!==t&&a.push(e+"="+t)});var i="/report?"+a.join("&");return n.a.get(i)}function a(e){return n.a.get("/report/"+e)}function i(e){return n.a.delete("/report/"+e)}function s(e){return n.a.get("/report/"+e+"/initial-saving-estimation")}r.d(t,"a",function(){return c}),r.d(t,"e",function(){return u}),r.d(t,"c",function(){return l}),r.d(t,"b",function(){return p}),r.d(t,"d",function(){return d});var c={FETCH_REPORTS:"FETCH_REPORTS",FETCH_REPORT:"FETCH_REPORT",DELETE_REPORT:"DELETE_REPORT",FETCH_REPORT_WORKLOAD_MIGRATION_SUMMARY:"FETCH_REPORT_WORKLOAD_MIGRATION_SUMMARY",FETCH_REPORT_INITIAL_SAVING_ESTIMATION:"FETCH_REPORT_INITIAL_SAVING_ESTIMATION",FETCH_REPORT_WOKLOAD_INVENTORY:"FETCH_REPORT_WOKLOAD_INVENTORY"},u=function(e,t,r){return{type:c.FETCH_REPORTS,payload:o(e,t,r),meta:{notifications:{rejected:{variant:"danger",title:"Failed to load reports"}}}}},l=function(e){return{type:c.FETCH_REPORT,payload:a(e),meta:{notifications:{rejected:{variant:"danger",title:"Failed to load report "+e}}}}},p=function(e,t){return{type:c.DELETE_REPORT,payload:i(e).then(function(){return{id:e}}),meta:{notifications:{rejected:{variant:"danger",title:"Failed to delete report "+t},fulfilled:{variant:"success",title:"Report "+t+" deleted"}}}}},d=function(e){return{type:c.FETCH_REPORT_INITIAL_SAVING_ESTIMATION,payload:s(e),meta:{notifications:{rejected:{variant:"danger",title:"Failed to load report saving estimation "+e}}}}}},374:function(e,t,r){var n=r(173);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=r(6)(n,o);n.locals&&(e.exports=n.locals),e.hot.accept(173,function(){var t=r(173);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)}),e.hot.dispose(function(){a()})},378:function(e,t,r){"use strict";r.r(t);var n,o=r(2),a=r.n(o),i=r(22),s=r.n(i),c=r(382),u=r(63),l=r(264),p=r.n(l),d=r(275),f=r(82),h=r(27),E=function(e){return e+"_FULFILLED"},m=function(e){return e+"_PENDING"},y=function(e){return e+"_REJECTED"},v=function(){return(v=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},g={error:null,status:"none"},O={report:null,reportFetchStatus:v({},g),reports:{total:0,items:[]},reportsFetchStatus:v({},g),reportMigrationSummary:null,reportMigrationSummaryFetchStatus:v({},g),reportInitialSavingEstimation:null,reportInitialSavingEstimationFetchStatus:v({},g)},_=function(e,t){switch(void 0===e&&(e=O),t.type){case m(h.a.FETCH_REPORTS):return v({},e,{reportsFetchStatus:v({},e.reportsFetchStatus,{error:null,status:"inProgress"})});case E(h.a.FETCH_REPORTS):return v({},e,{reports:v({},e.reports,{items:t.payload.data.content,total:t.payload.data.totalElements}),reportsFetchStatus:v({},e.reportsFetchStatus,{error:null,status:"complete"})});case y(h.a.FETCH_REPORTS):return v({},e,{reports:v({},e.reports,{items:[],total:0}),reportsFetchStatus:v({},e.reportsFetchStatus,{error:t.payload.message,status:"complete"})});case m(h.a.FETCH_REPORT):return v({},e,{report:null,reportFetchStatus:v({},e.reportFetchStatus,{error:null,status:"inProgress"})});case E(h.a.FETCH_REPORT):return v({},e,{report:t.payload.data,reportFetchStatus:v({},e.reportFetchStatus,{error:null,status:"complete"})});case y(h.a.FETCH_REPORT):return v({},e,{report:null,reportFetchStatus:v({},e.reportFetchStatus,{error:t.payload.message,status:"complete"})});case E(h.a.DELETE_REPORT):return v({},e,{reports:v({},e.reports,{total:e.reports.total-1,items:e.reports.items.filter(function(e){return e.id!==t.payload.id})})});case y(h.a.DELETE_REPORT):return v({},e);case m(h.a.FETCH_REPORT_WORKLOAD_MIGRATION_SUMMARY):return v({},e,{reportMigrationSummary:null,reportMigrationSummaryFetchStatus:v({},e.reportMigrationSummaryFetchStatus,{error:null,status:"inProgress"})});case E(h.a.FETCH_REPORT_WORKLOAD_MIGRATION_SUMMARY):return v({},e,{reportMigrationSummary:t.payload.data,reportMigrationSummaryFetchStatus:v({},e.reportMigrationSummaryFetchStatus,{error:null,status:"complete"})});case y(h.a.FETCH_REPORT_WORKLOAD_MIGRATION_SUMMARY):return v({},e,{reportMigrationSummary:null,reportMigrationSummaryFetchStatus:v({},e.reportMigrationSummaryFetchStatus,{error:t.payload.message,status:"complete"})});case m(h.a.FETCH_REPORT_INITIAL_SAVING_ESTIMATION):return v({},e,{reportInitialSavingEstimation:null,reportInitialSavingEstimationFetchStatus:v({},e.reportInitialSavingEstimationFetchStatus,{error:null,status:"inProgress"})});case E(h.a.FETCH_REPORT_INITIAL_SAVING_ESTIMATION):return v({},e,{reportInitialSavingEstimation:t.payload.data,reportInitialSavingEstimationFetchStatus:v({},e.reportInitialSavingEstimationFetchStatus,{error:null,status:"complete"})});case y(h.a.FETCH_REPORT_INITIAL_SAVING_ESTIMATION):return v({},e,{reportInitialSavingEstimation:null,reportInitialSavingEstimationFetchStatus:v({},e.reportInitialSavingEstimationFetchStatus,{error:t.payload.message,status:"complete"})});default:return e}},S=r(71),R=function(){return(R=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},T={file:null,success:null,error:null,progress:0,uploading:!1},b=function(e,t){switch(void 0===e&&(e=T),t.type){case S.a.UPLOAD_PROGRESS:return R({},e,{progress:t.payload.progress});case S.a.SELECT_UPLOAD_FILE:return R({},e,{error:null,success:null,progress:0,uploading:!1,file:t.payload.file});case S.a.RESET_UPLOAD_FILE:return R({},T);case m(S.a.UPLOAD_REQUEST):return R({},e,{error:null,success:null,progress:0,uploading:!0,file:t.meta.file});case E(S.a.UPLOAD_REQUEST):return R({},e,{success:!0,uploading:!1});case y(S.a.UPLOAD_REQUEST):return R({},e,{error:t.payload.message,success:!1,uploading:!1});default:return e}},P=r(66),I=function(){return(I=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},F={user:null,userFetchStatus:{error:null,status:"none"}},A=function(e,t){switch(void 0===e&&(e=F),t.type){case P.a.UPDATE_USER:return I({},e,{user:Object.assign({},e.user,t.payload.user)});case m(P.a.FETCH_USER):return I({},e,{user:null,userFetchStatus:{error:null,status:"inProgress"}});case E(P.a.FETCH_USER):return I({},e,{user:t.payload.data,userFetchStatus:{error:null,status:"complete"}});case y(P.a.FETCH_USER):return I({},e,{user:null,userFetchStatus:{error:t.payload.message,status:"complete"}});default:return e}},w=r(49),j=r(83),D=function(){return(D=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},U={isOpen:!1,isProcessing:!1,isError:!1,name:"",type:"",onDelete:null,onCancel:null},L=function(e,t){switch(void 0===e&&(e=U),t.type){case Object(w.getType)(j.c):return D({},e,t.payload,{isOpen:!0});case Object(w.getType)(j.d):return D({},e,{isProcessing:!0});case Object(w.getType)(j.a):return U;case Object(w.getType)(j.b):return D({},e,{isError:!0});default:return e}};var C,H=r(268),M=r.n(H),N=r(98),k=r.n(N),x=r(99),G=r.n(x),q=r(100),V=r.n(q),W=r(101),K=r.n(W),Y=r(102),Q=r.n(Y),J=r(1),z=r.n(J),B=r(381),X=r(120),Z=r.n(X),$=r(269),ee=r.n($),te=r(379),re=r(383),ne=r(380),oe=r(56),ae=r(259),ie=r.n(ae),se=(C=function(e,t){return(C=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}C(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),ce=function(){return(ce=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},ue=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},le=function(e){function t(t){return e.call(this,t)||this}return se(t,e),t.prototype.componentDidMount=function(){this.props.fetchUser()},t.prototype.render=function(){var e=this.props,t=e.user,r=e.userFetchStatus,n=e.component,o=ue(e,["user","userFetchStatus","component"]);switch(r.status){case"complete":return t?a.a.createElement(te.a,ce({},o,{component:n})):a.a.createElement(te.a,ce({},o,{render:function(){return a.a.createElement(ne.a,{to:"/error"})}}));default:return a.a.createElement(te.a,ce({},o,{render:function(){return null}}))}},t}(a.a.Component),pe={fetchUser:P.b},de=Object(u.connect)(function(e){var t=e.userState;return{user:t.user,userFetchStatus:t.userFetchStatus}},pe)(le),fe=Object(oe.a)(function(){return Promise.all([r.e(0),r.e(7)]).then(r.bind(null,706))}),he=Object(oe.a)(function(){return Promise.all([r.e(0),r.e(1),r.e(3),r.e(11)]).then(r.bind(null,708))}),Ee=Object(oe.a)(function(){return Promise.all([r.e(0),r.e(9)]).then(r.bind(null,710))}),me=Object(oe.a)(function(){return Promise.all([r.e(0),r.e(3),r.e(2),r.e(12)]).then(r.bind(null,704))}),ye=Object(oe.a)(function(){return Promise.all([r.e(0),r.e(10)]).then(r.bind(null,705))}),ve=Object(oe.a)(function(){return Promise.all([r.e(0),r.e(6)]).then(r.bind(null,711))}),ge={gettingStarted:"/getting-started",reports:"/reports",noReports:"/no-reports",reportsUpload:"/reports/upload",reportView:"/reports/:reportId",error:"/error"},Oe=function(e){var t=e.component,r=e.rootClass,n=e.skipLoadUser,o=ee()(e,["component","rootClass","skipLoadUser"]),i=document.getElementById("root");return i.removeAttribute("class"),i.classList.add("page__".concat(r),"pf-c-page__main"),i.setAttribute("role","main"),n?a.a.createElement(te.a,Z()({},o,{component:t})):a.a.createElement(de,Z()({},o,{component:t}))};Oe.propTypes={component:z.a.func,rootClass:z.a.string,skipLoadUser:z.a.bool};var _e=function(e){var t=e.childProps.location.pathname;return a.a.createElement(re.a,null,a.a.createElement(Oe,{component:fe,rootClass:"getting-started",path:ge.gettingStarted,exact:!0}),a.a.createElement(Oe,{component:he,rootClass:"reports",path:ge.reports,exact:!0}),a.a.createElement(Oe,{component:Ee,rootClass:"no-reports",path:ge.noReports}),a.a.createElement(Oe,{component:me,rootClass:"reports-upload",path:ge.reportsUpload}),a.a.createElement(Oe,{component:ye,rootClass:"report-view",path:ge.reportView}),a.a.createElement(Oe,{component:ve,rootClass:"error",path:ge.error,skipLoadUser:!0}),a.a.createElement(te.a,{render:function(){return ie()(ge,function(e){return e===t})?null:a.a.createElement(ne.a,{to:ge.gettingStarted})}}))},Se=(r(374),r(376),r(377),Object(oe.a)(function(){return r.e(5).then(r.bind(null,709))})),Re=function(e){function t(){return k()(this,t),V()(this,K()(t).apply(this,arguments))}return Q()(t,e),G()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("migration-analytics"),insights.chrome.navigation(be()),this.appNav=insights.chrome.on("APP_NAVIGATION",function(t){return e.props.history.push("/".concat(t.navId))}),this.buildNav=this.props.history.listen(function(){return insights.chrome.navigation(be())})}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(_e,{childProps:this.props}),a.a.createElement(f.NotificationsPortal,null),a.a.createElement(Se,null))}}]),t}(o.Component);Re.propTypes={history:z.a.object};var Te=Object(B.a)(Object(u.connect)()(Re));function be(){var e=window.location.pathname.split("/").slice(-1)[0];return[{title:"Actions",id:"actions"},{title:"Rules",id:"rules"}].map(function(t){return M()({},t,{active:t.id===e})})}var Pe=function(e){var t="/",r=e.split("/");return r.shift(),"beta"===r[0]&&(r.shift(),t="/beta/"),"".concat(t).concat(r[0],"/").concat(r[1])},Ie=r(81),Fe=r.n(Ie),Ae=function(e){return insights.chrome.auth.getUser().then(function(){return Promise.resolve(e)})};Fe.a.defaults.baseURL="/api/xavier",Fe.a.interceptors.request.use(Ae),s.a.render(a.a.createElement(u.Provider,{store:function(){if(n)throw new Error("store already initialized");for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(n=new p.a({},[Object(d.a)(),Object(f.notificationsMiddleware)({autoDismiss:!0})].concat(t))).register({notifications:f.notifications,reportState:_,uploadState:b,userState:A,dialogDeleteState:L}),n}().getStore()},a.a.createElement(c.a,{basename:Pe(window.location.pathname)},a.a.createElement(Te,null))),document.getElementById("root"))},47:function(e,t,r){"use strict";var n=r(81),o=r.n(n),a=function(){function e(){}return e.request=function(e,t,r,n){return void 0===t&&(t=null),void 0===r&&(r="get"),void 0===n&&(n={}),o.a.request(Object.assign({},{url:e,method:r,data:t},n))},e.post=function(e,t,r){return void 0===r&&(r={}),this.request(e,t,"post",r)},e.put=function(e,t,r){return void 0===r&&(r={}),this.request(e,t,"put",r)},e.get=function(e){return this.request(e)},e.delete=function(e,t){return void 0===t&&(t={}),this.request(e,null,"delete",t)},e}();t.a=a},56:function(e,t,r){"use strict";r.d(t,"a",function(){return g});var n=r(192),o=r.n(n),a=r(270),i=r.n(a),s=r(98),c=r.n(s),u=r(99),l=r.n(u),p=r(100),d=r.n(p),f=r(101),h=r.n(f),E=r(102),m=r.n(E),y=r(2),v=r.n(y);function g(e){return function(t){function r(e){var t;return c()(this,r),(t=d()(this,h()(r).call(this,e))).state={component:null},t}return m()(r,t),l()(r,[{key:"componentDidMount",value:function(){var t=i()(o.a.mark(function t(){var r,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:r=t.sent,n=r.default,this.setState({component:n});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?v.a.createElement(e,this.props):null}}]),r}(y.Component)}},66:function(e,t,r){"use strict";var n=r(47);r.d(t,"a",function(){return o}),r.d(t,"b",function(){return a}),r.d(t,"c",function(){return i});var o={FETCH_USER:"FETCH_USER",UPDATE_USER:"UPDATE_USER"},a=function(){return{type:o.FETCH_USER,payload:n.a.get("/user"),meta:{notifications:{rejected:{variant:"danger",title:"Failed to load user"}}}}},i=function(e){return{type:o.UPDATE_USER,payload:{user:e}}}},71:function(e,t,r){"use strict";var n=r(47);function o(e,t){return void 0===t&&(t={}),n.a.post("/upload",e,t)}r.d(t,"a",function(){return a}),r.d(t,"e",function(){return i}),r.d(t,"d",function(){return s}),r.d(t,"c",function(){return c}),r.d(t,"b",function(){return u});var a={UPLOAD_REQUEST:"UPLOAD_REQUEST",UPLOAD_PROGRESS:"UPLOAD_PROGRESS",SELECT_UPLOAD_FILE:"SELECT_UPLOAD_FILE",RESET_UPLOAD_FILE:"RESET_UPLOAD_FILE"},i=function(e,t){void 0===t&&(t={});var r=new FormData;return Object.keys(e).forEach(function(t){return r.append(t,e[t].toString())}),r.set("file",e.file,e.file.name),{type:a.UPLOAD_REQUEST,payload:o(r,t),meta:{file:e.file,noError:!0,notifications:{}}}},s=function(e){return{type:a.UPLOAD_PROGRESS,payload:{progress:e}}},c=function(e){return{type:a.SELECT_UPLOAD_FILE,payload:{file:e}}},u=function(){return{type:a.RESET_UPLOAD_FILE,payload:{}}}},83:function(e,t,r){"use strict";r.d(t,"c",function(){return o}),r.d(t,"a",function(){return a}),r.d(t,"d",function(){return i}),r.d(t,"b",function(){return s});var n=r(49),o=Object(n.createStandardAction)("dialog/delete/open")(),a=Object(n.createAction)("dialog/delete/close"),i=Object(n.createAction)("dialog/delete/processing"),s=Object(n.createStandardAction)("dialog/delete/error")()}});