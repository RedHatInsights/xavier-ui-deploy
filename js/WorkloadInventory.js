(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1063:function(e,t,a){var r=a(623);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},l=a(8)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(623,(function(){var t=a(623);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");l(t)})),e.hot.dispose((function(){l()}))},1084:function(e,t,a){"use strict";a.r(t);var r,n,l=a(72),o=a(2),i=a.n(o),c=a(456),s=a(480),u=a(702),d=a(701),p=a(535),m=a(644),f=a(638),v=a(578),E=a(105),y=a(300),g=a(259),b=a(260),S=a(268),h=a(270),k=a(130),I=a(269),F=a(265),T=a(16),w=a(256),O=a(252),M=a(221),D=a(301),N=a(5),R=a(103),_=a(273),A=a(129),C=a(112),W=a(262),P=a(113),x=a(282),V=a(283),L=a(280),j=a(285),B=a(284),G=a(207),U=a(208),K=a(206),z=a(213),H=(a(1063),a(470)),J=a.n(H),$=a(610),q=a(626),Q=a(276),X=a(455),Y=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),Z=function(e){function t(t){return e.call(this,t)||this}return Y(t,e),t.prototype.render=function(){var e=this.props.reportWorkloadInventory;return i.a.createElement("div",{className:"pf-c-content"},i.a.createElement("dl",null,i.a.createElement("dt",null,"Recommended targets"),i.a.createElement("dd",null,e.recommendedTargetsIMS.map((function(e,t){return i.a.createElement(E.a,{key:t,position:"top",content:i.a.createElement("div",null,"VM suitable to be migrated to ",e)},i.a.createElement(i.a.Fragment,null,i.a.createElement(Q.a,null,e)," "))}))),i.a.createElement("dt",null,"Flags"),i.a.createElement("dd",null,e.flagsIMS&&e.flagsIMS.length>0?e.flagsIMS.join(", "):"None identified"),i.a.createElement("dt",null,"Disk space"),i.a.createElement("dd",null,Object(X.a)(e.diskSpace,1)),i.a.createElement("dt",null,"Memory"),i.a.createElement("dd",null,Object(X.a)(e.memory,1)),i.a.createElement("dt",null,"CPU cores"),i.a.createElement("dd",null,Object(X.c)(e.cpuCores,0)),i.a.createElement("dt",null,"Operating system description"),i.a.createElement("dd",null,e.osDescription),i.a.createElement("dt",null,"Red Hat Insights"),i.a.createElement("dd",null,e.insightsEnabled?"Enabled":"Disabled")))},t}(i.a.Component),ee=function(){var e=function(t,a){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(t,a)};return function(t,a){function r(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(r.prototype=a.prototype,new r)}}(),te={provider:{key:"provider",label:"Provider"},datacenter:{key:"datacenter",label:"Datacenter"},cluster:{key:"cluster",label:"Cluster"},vmName:{key:"vmName",label:"VM name"},workload:{key:"workload",label:"Workload"},osName:{key:"osName",label:"OS type"},effort:{key:"complexity",label:"Effort"},recommendedTargetIMS:{key:"recommendedTargetIMS",label:"Recommended targets",abbreviation:"Rec. Targets"},flagIMS:{key:"flagIMS",label:"Flags"}};!function(e){e.NONE="NONE",e.PROVIDER="PROVIDER",e.DATACENTER="DATACENTER",e.CLUSTER="CLUSTER",e.VM_NAME="VM_NAME",e.WORKLOAD="WORKLOAD",e.OS_NAME="OS_NAME",e.EFFORT="EFFORT",e.RECOMMENDED_TARGETS_IMS="RECOMMENDED_TARGETS_IMS",e.FLAGS_IMS="FLAGS_IMS"}(n||(n={}));var ae=[{name:te.provider.label,value:n.PROVIDER},{name:te.datacenter.label,value:n.DATACENTER},{name:te.cluster.label,value:n.CLUSTER},{name:te.vmName.label,value:n.VM_NAME},{name:te.workload.label,value:n.WORKLOAD},{name:te.osName.label,value:n.OS_NAME},{name:te.effort.label,value:n.EFFORT},{name:te.recommendedTargetIMS.label,value:n.RECOMMENDED_TARGETS_IMS},{name:te.flagIMS.label,value:n.FLAGS_IMS}],re=new Map([[n.PROVIDER,te.provider.label],[n.DATACENTER,te.datacenter.label],[n.CLUSTER,te.cluster.label],[n.VM_NAME,te.vmName.label],[n.WORKLOAD,te.workload.label],[n.OS_NAME,te.osName.label],[n.EFFORT,te.effort.label],[n.RECOMMENDED_TARGETS_IMS,te.recommendedTargetIMS.abbreviation||te.recommendedTargetIMS.label],[n.FLAGS_IMS,te.flagIMS.label]]),ne=function(e){function t(t){var a=e.call(this,t)||this;return a.changePage=J()((function(){a.refreshData()}),800),a.handleDownloadFilteredCSV=function(){var e=a.state,t=e.sortBy,r=e.filterValue,n=a.props,l=n.reportId;(0,n.fetchReportWorkloadInventoryFilteredCSV)(l,t.index?a.state.columns[t.index-1].key:void 0,t.direction?t.direction:void 0,a.prepareFiltersToBeSended(r)).then((function(e){var t=e.value.headers["content-disposition"],a=Object($.a)(t),r=window.URL.createObjectURL(new Blob([e.value.data])),n=document.createElement("a");n.href=r,n.setAttribute("download",a||"workloadInventoryReport.csv"),document.body.appendChild(n),n.click(),n.remove()}))},a.refreshFilters=function(){var e=a.props,t=e.reportId;(0,e.fetchReportWorkloadInventoryAvailableFilters)(t)},a.refreshData=function(e,t,r,n){void 0===e&&(e=a.state.page),void 0===t&&(t=a.state.perPage);var l=void 0===r?a.state.sortBy:r,o=l.direction,i=l.index;void 0===n&&(n=a.state.filterValue);var c=a.props,s=c.reportId;(0,c.fetchReportWorkloadInventory)(s,e,t,i?a.state.columns[i-1].key:void 0,o||void 0,a.prepareFiltersToBeSended(n)).then((function(){a.filtersInRowsAndCells()}))},a.filtersInRowsAndCells=function(){var e=a.props.reportWorkloadInventory.items?Object.values(a.props.reportWorkloadInventory.items):[],t=[];e.length>0&&(t=e.reduce((function(e,t,a){var r=t.workloads&&t.workloads.length>0?t.workloads.join(", "):void 0;return e.push({isOpen:!1,cells:[{title:i.a.createElement(E.a,{position:"top",content:i.a.createElement("div",null,t.provider)},i.a.createElement("span",null,t.provider))},{title:i.a.createElement(E.a,{position:"top",content:i.a.createElement("div",null,t.datacenter)},i.a.createElement("span",null,t.datacenter))},{title:i.a.createElement(E.a,{position:"top",content:i.a.createElement("div",null,t.cluster)},i.a.createElement("span",null,t.cluster))},{title:i.a.createElement(E.a,{position:"top",content:i.a.createElement("div",null,t.vmName)},i.a.createElement("span",null,t.vmName))},{title:r?i.a.createElement(E.a,{position:"top",content:i.a.createElement("div",null,r)},i.a.createElement("span",null,r)):"Not identified"},{title:i.a.createElement(E.a,{position:"top",content:i.a.createElement("div",null,t.osName)},i.a.createElement("span",null,t.osName))},t.complexity,{title:i.a.createElement("span",null,i.a.createElement("i",null,i.a.createElement(G.b,null))," ",t.flagsIMS.length)}]},{parent:2*a,fullWidth:!1,cells:[{title:i.a.createElement(Z,{reportWorkloadInventory:t})}]}),e}),[])),a.setState({rows:t})},a.onSort=function(e,t,r){var n=a.props.reportId,l=a.state,o=l.perPage,i=l.filterValue,c=t?a.state.columns[t-1].key:void 0,s=r||void 0,u=a.prepareFiltersToBeSended(i);a.props.fetchReportWorkloadInventory(n,1,o,c,s,u).then((function(){a.setState({page:1,sortBy:{index:t,direction:r}}),a.filtersInRowsAndCells()}))},a.onPageChange=function(e,t,r){a.setState({page:t}),r?a.changePage():a.refreshData(t)},a.onSetPage=function(e,t){return"pf-c-form-control"===e.target.className||a.onPageChange(e,t,!1)},a.onPageInput=function(e,t){return a.onPageChange(e,t,!0)},a.onPerPageSelect=function(e,t){var r=a.state.page,n=a.props.reportWorkloadInventory.total;r*t>n&&(r=Math.floor(n/t)+1),a.setState({page:r,perPage:t}),a.refreshData(r,t)},a.onRowCollapse=function(e,t,r){var n=a.state.rows;n[t].isOpen=r,a.setState({rows:n})},a.renderPagination=function(){var e=a.state,t=e.page,r=e.perPage,n=a.props.reportWorkloadInventory.total;return i.a.createElement(y.a,{itemCount:n,perPage:r,page:t,onSetPage:a.onSetPage,onPageInput:a.onPageInput,onPerPageSelect:a.onPerPageSelect})},a.renderResultsTable=function(){var e=a.state,t=e.rows,r=e.columns,n=e.sortBy;return i.a.createElement(s.b,{"aria-label":"Workload inventory",onCollapse:a.onRowCollapse,rows:t,cells:r,sortBy:n,onSort:a.onSort,className:"table-vertical-align-middle"},i.a.createElement(u.a,null),i.a.createElement(d.a,null),i.a.createElement("tfoot",null,i.a.createElement("tr",null,i.a.createElement("td",{colSpan:10},a.renderPagination()))))},a.renderNoResults=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(g.a,null,i.a.createElement(b.a,null,i.a.createElement(S.a,{variant:S.b.full},i.a.createElement(h.a,{icon:U.b}),i.a.createElement(k.a,{headingLevel:"h5",size:"lg"},"No results found"),i.a.createElement(I.a,null,"No results match the search criteria")))))},a.renderFilterTypeDropdown=function(){var e=a.state,t=e.filterDropDownOpen,r=e.filterType;return i.a.createElement(F.a,{position:T.d.left,className:"topology-view-filter-dropdown",toggle:i.a.createElement(w.a,{onToggle:a.onFilterDropDownToggle},i.a.createElement(K.b,{className:"pf-u-mr-sm"}),r.name),isOpen:t,dropdownItems:ae.map((function(e,t){return i.a.createElement(O.a,{key:t,onClick:function(t){a.onFilterTypeSelect(t,e.name,e.value)}},e.name)}))})},a.onFilterDropDownToggle=function(e){a.setState({filterDropDownOpen:e})},a.onFilterTypeSelect=function(e,t,r){e.preventDefault(),a.setState({filterType:{name:t,value:r},filterDropDownOpen:!1})},a.renderFilterInput=function(){var e=a.state.filterType,t=a.props.reportWorkloadInventoryAvailableFilters;if(t)switch(e.value){case n.PROVIDER:return a.renderSecondaryFilterDropdown(e,t.providers);case n.DATACENTER:return a.renderSecondaryFilterDropdown(e,t.datacenters);case n.CLUSTER:return a.renderSecondaryFilterDropdown(e,t.clusters);case n.WORKLOAD:return a.renderSecondaryFilterDropdown(e,t.workloads);case n.EFFORT:return a.renderSecondaryFilterDropdown(e,t.complexities);case n.RECOMMENDED_TARGETS_IMS:return a.renderSecondaryFilterDropdown(e,t.recommendedTargetsIMS);case n.FLAGS_IMS:return a.renderSecondaryFilterDropdown(e,t.flagsIMS);case n.VM_NAME:return a.renderSecondaryFilterInputText(e);case n.OS_NAME:return a.renderSecondaryFilterDropdown(e,t.osNames);default:return i.a.createElement(M.a,{type:"text","aria-label":"filter text input",readOnly:!0,placeholder:"Filter by...",value:""})}},a.onSecondaryFilterDropdownToggle=function(e){a.setState({secondaryFilterDropDownOpen:e})},a.getMapValue=function(e,t){return t.has(e)||t.set(e,[]),t.get(e)||[]},a.prepareFiltersToBeSended=function(e){var t=new Map;return e.forEach((function(e,a){var r;switch(a){case n.PROVIDER:r=te.provider.key;break;case n.DATACENTER:r=te.datacenter.key;break;case n.CLUSTER:r=te.cluster.key;break;case n.WORKLOAD:r=te.workload.key;break;case n.EFFORT:r=te.effort.key;break;case n.RECOMMENDED_TARGETS_IMS:r=te.recommendedTargetIMS.key;break;case n.FLAGS_IMS:r=te.flagIMS.key;break;case n.VM_NAME:r=te.vmName.key;break;case n.OS_NAME:r=te.osName.key;break;default:r=a}t.set(r,e)})),t},a.applyFilterAndSearch=function(e){a.setState({filterValue:e});var t=a.props.reportId,r=a.state.perPage,n=a.state.sortBy,l=n.direction,o=n.index,i=o?a.state.columns[o-1].key:void 0,c=l||void 0,s=a.prepareFiltersToBeSended(e);a.props.fetchReportWorkloadInventory(t,1,r,i,c,s).then((function(){a.setState({page:1}),a.filtersInRowsAndCells()}))},a.onSecondaryFilterDropdownSelect=function(e,t){var r=a.state.filterValue,n=a.getMapValue(t.value,r),l=new Map(r);n.find((function(t){return t===e}))?l.set(t.value,n.filter((function(t){return t!==e}))):l.set(t.value,n.concat([e])),a.applyFilterAndSearch(l)},a.renderSecondaryFilterDropdown=function(e,t){var r=a.state,n=r.secondaryFilterDropDownOpen,l=r.filterValue,o=a.getMapValue(e.value,l);if(0===t.length){return i.a.createElement(D.a,{variant:N.f.single,"aria-label":"Select "+e.name+" Input",onToggle:a.onSecondaryFilterDropdownToggle,onSelect:function(){},isExpanded:n,placeholderText:"Filter by "+e.name,ariaLabelledBy:e.name},[i.a.createElement(R.a,{key:"EmptyKey",value:"No values available"})])}return i.a.createElement(D.a,{variant:N.f.checkbox,"aria-label":"Select "+e.name+" Input",onToggle:a.onSecondaryFilterDropdownToggle,onSelect:function(t,r){a.onSecondaryFilterDropdownSelect(r,e)},isExpanded:n,selections:o,placeholderText:"Filter by "+e.name,ariaLabelledBy:e.name},t.map((function(e,t){return i.a.createElement(R.a,{key:t,value:e})})))},a.renderSecondaryFilterInputText=function(e){var t=a.state.filterValue;return i.a.createElement(q.a,{initialValues:{filterText:""},onSubmit:function(r,n){var l=n.resetForm,o=r.filterText,i=a.getMapValue(e.value,t),c=new Map(t);i.find((function(e){return e===o}))||(c.set(e.value,i.concat([o])),a.applyFilterAndSearch(c)),l()}},(function(t){var a=t.values,r=t.handleChange,n=t.handleBlur,l=t.handleSubmit;return i.a.createElement(_.a,{onSubmit:l},i.a.createElement(M.a,{type:"search",name:"filterText","aria-label":"search text input",onChange:function(e,t){r(t)},onBlur:n,value:a.filterText,placeholder:"Filter by "+e.name+"..."}),i.a.createElement(A.a,{type:"submit",className:"pf-u-hidden"},"Submit"))}))},a.deleteChipItem=function(e,t){var r=a.state.filterValue,n=a.getMapValue(e,a.state.filterValue),l=new Map(r),o=n.filter((function(e){return e!==t}));l.set(e,o),a.applyFilterAndSearch(l)},a.clearChips=function(){a.setState({filterType:{name:"Filter",value:n.NONE}}),a.applyFilterAndSearch(new Map)},a.reportFilterChips=function(){var e=a.state.filterValue,t=[];return e.forEach((function(e,a){e.length>0&&t.push({key:a,value:e})})),i.a.createElement(i.a.Fragment,null,i.a.createElement(C.a,{withToolbar:!0},t.map((function(e){return i.a.createElement(W.a,{key:e.key,categoryName:re.get(e.key)},e.value.map((function(t){return i.a.createElement(P.a,{key:t,onClick:function(){a.deleteChipItem(e.key,t)}},t)})))}))),t.length>0&&i.a.createElement(i.a.Fragment,null," ",i.a.createElement(A.a,{variant:A.c.link,onClick:a.clearChips},"Clear filters")))},a.renderWorkloadInventory=function(){var e=a.props.reportWorkloadInventory;return i.a.createElement(i.a.Fragment,null,e.total>0?a.renderResultsTable():a.renderNoResults())},a.renderWorkloadInventorySkeleton=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(x.a,{gutter:"md"},i.a.createElement(V.a,{isFilled:!1},i.a.createElement(c.SkeletonTable,{colSize:9,rowSize:10}))))},a.renderFetchError=function(){return i.a.createElement(L.a,null,i.a.createElement(S.a,{variant:S.b.large},i.a.createElement(h.a,{icon:z.b}),i.a.createElement(k.a,{headingLevel:k.b.h5,size:"lg"},"Error"),i.a.createElement(I.a,null,"Something unexpected happend, please try again!"),i.a.createElement(A.a,{variant:"primary",onClick:function(){a.refreshData()}},"Retry")))},a.state={page:1,perPage:10,columns:[{title:te.provider.label,key:te.provider.key,props:{className:"vertical-align-middle WorkloadInventory_truncate_table_column"},cellFormatters:[p.b],transforms:[Object(m.a)("10")]},{title:te.datacenter.label,key:te.datacenter.key,props:{className:"vertical-align-middle WorkloadInventory_truncate_table_column"},transforms:[Object(m.a)("15")]},{title:te.cluster.label,key:te.cluster.key,props:{className:"vertical-align-middle WorkloadInventory_truncate_table_column"},transforms:[Object(m.a)("15")]},{title:te.vmName.label,key:te.vmName.key,props:{className:"vertical-align-middle WorkloadInventory_truncate_table_column"},transforms:[f.a,Object(m.a)("15")]},{title:te.workload.label,key:te.workload.key,props:{className:"vertical-align-middle WorkloadInventory_truncate_table_column"},transforms:[Object(m.a)("10")],columnTransforms:[Object(v.b)(v.a.hiddenOnMd,v.a.visibleOnLg)]},{title:te.osName.label,key:te.osName.key,props:{className:"vertical-align-middle WorkloadInventory_truncate_table_column"},transforms:[f.a,Object(m.a)("15")],columnTransforms:[Object(v.b)(v.a.hiddenOnMd,v.a.visibleOnLg)]},{title:te.effort.label,key:te.effort.key,props:{className:"vertical-align-middle WorkloadInventory_truncate_table_column"},transforms:[f.a,Object(m.a)("10")],columnTransforms:[Object(v.b)(v.a.hiddenOnMd,v.a.visibleOnLg)]},{title:te.flagIMS.label,key:te.flagIMS.key,props:{className:"vertical-align-middle WorkloadInventory_truncate_table_column"},transforms:[Object(m.a)("10")],columnTransforms:[Object(v.b)(v.a.hiddenOnMd,v.a.visibleOnLg)]}],rows:[],sortBy:{},filterDropDownOpen:!1,secondaryFilterDropDownOpen:!1,filterType:{name:"Filter",value:n.NONE},filterValue:new Map},a}return ee(t,e),t.prototype.componentDidMount=function(){this.refreshData(),this.refreshFilters()},t.prototype.render=function(){this.state;var e=this.props,t=e.reportWorkloadInventoryFetchStatus,a=e.reportWorkloadInventoryFilteredCSVFetchStatus;if(t.error)return this.renderFetchError();var r="complete"===t.status;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.TableToolbar,{className:"pf-u-justify-content-space-between"},i.a.createElement(j.a,null,i.a.createElement(B.a,null,this.renderFilterTypeDropdown()),i.a.createElement(B.a,{className:"pf-u-mr-md"},this.renderFilterInput()),i.a.createElement(B.a,{className:"pf-u-mr-md"},i.a.createElement(A.a,{variant:"primary",onClick:this.handleDownloadFilteredCSV,isDisabled:"inProgress"===a.status},"inProgress"===a.status?"Exporting CSV":"Export as CSV"))),i.a.createElement(j.a,null,i.a.createElement(B.a,null,this.renderPagination()))),i.a.createElement(c.TableToolbar,{className:"pf-u-justify-content-space-between"},i.a.createElement(j.a,null,i.a.createElement(B.a,null,this.reportFilterChips()))),r?this.renderWorkloadInventory():this.renderWorkloadInventorySkeleton())},t}(i.a.Component),le=a(13),oe={fetchReportWorkloadInventory:le.g,fetchReportWorkloadInventoryFilteredCSV:le.i,fetchReportWorkloadInventoryAvailableFilters:le.h};t.default=Object(l.connect)((function(e){var t=e.reportState;return{reportWorkloadInventory:t.reportWorkloadInventory,reportWorkloadInventoryFetchStatus:t.reportWorkloadInventoryFetchStatus,reportWorkloadInventoryFilteredCSVFetchStatus:t.reportWorkloadInventoryFilteredCSVFetchStatus,reportWorkloadInventoryAvailableFilters:t.reportWorkloadInventoryAvailableFilters,reportWorkloadInventoryAvailableFiltersFetchStatus:t.reportWorkloadInventoryAvailableFiltersFetchStatus}}),oe)(ne)},470:function(e,t,a){var r=a(454),n=a(515),l=a(483),o="Expected a function",i=Math.max,c=Math.min;e.exports=function(e,t,a){var s,u,d,p,m,f,v=0,E=!1,y=!1,g=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var a=s,r=u;return s=u=void 0,v=t,p=e.apply(r,a)}function S(e){var a=e-f;return void 0===f||a>=t||a<0||y&&e-v>=d}function h(){var e=n();if(S(e))return k(e);m=setTimeout(h,function(e){var a=t-(e-f);return y?c(a,d-(e-v)):a}(e))}function k(e){return m=void 0,g&&s?b(e):(s=u=void 0,p)}function I(){var e=n(),a=S(e);if(s=arguments,u=this,f=e,a){if(void 0===m)return function(e){return v=e,m=setTimeout(h,t),E?b(e):p}(f);if(y)return clearTimeout(m),m=setTimeout(h,t),b(f)}return void 0===m&&(m=setTimeout(h,t)),p}return t=l(t)||0,r(a)&&(E=!!a.leading,d=(y="maxWait"in a)?i(l(a.maxWait)||0,t):d,g="trailing"in a?!!a.trailing:g),I.cancel=function(){void 0!==m&&clearTimeout(m),v=0,s=f=u=m=void 0},I.flush=function(){return void 0===m?p:k(n())},I}},483:function(e,t){e.exports=function(e){return e}},515:function(e,t,a){var r=a(482);e.exports=function(){return r.Date.now()}},610:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return n}));var r=function(e){var t="";if(e&&-1!==e.indexOf("attachment")){var a=/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(e);null!=a&&a[1]&&(t=a[1].replace(/['"]/g,""))}return t},n=function(e){return e.replace(/(\.[^/.]+)+$/,"")}},623:function(e,t,a){(e.exports=a(7)(!1)).push([e.i,".vertical-align-middle {\n  vertical-align: middle !important; }\n\n.table-vertical-align-middle.pf-c-table tr > *:first-child {\n  vertical-align: middle !important;\n  padding-bottom: 20px !important; }\n\n.WorkloadInventory_truncate_table_column {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 1px; }\n",""])}}]);
//# sourceMappingURL=WorkloadInventory.js.map