import{b as p,d as f,e as x,r as d,l as w,o as a,g as s,h as o,i as r,w as b,n as v,A as y,t as i}from"./index.0c81a716.js";import{B as k}from"./ButtonEdit.d6b5ece6.js";const A={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},B={class:"w-full lg:w-full"},C={class:"bg-white shadow rounded-lg px-4 py-4"},D={key:0},S={key:0},E={class:"text-sm font-medium text-center flex justify-center space-x-0"},N={key:1},P={class:"text-left"},j={key:2},z={__name:"Index",setup(R){p().setsubMenuActive("pengguna");const c=f(),l=x().params.id,u=d([]),n=d([]),m=[{label:"Actions",field:"actions",sortable:!1,width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Nama Pengguna",field:"nama",type:"String"},{label:"Username",field:"username",type:"String"}];(async()=>{try{const e=await y.get(`owner/datasekolah/${l}}/gurubk`);return u.value=e.data,n.value=e.data,e.data}catch(e){console.error(e)}})();const _=async(e,g)=>{c.push({name:"AdminSekolahDetailPenggunaEdit",params:{id:l,id2:e}})};return(e,g)=>{const h=w("vue-good-table");return a(),s("div",A,[o("div",B,[o("div",C,[n.value?(a(),s("div",D,[r(h,{columns:m,rows:n.value,"line-numbers":!0,"search-options":{enabled:!0},"pagination-options":{enabled:!0,perPageDropdown:[10,20,50]},styleClass:"vgt-table striped bordered condensed",class:"py-0"},{"table-row":b(t=>[t.column.field=="actions"?(a(),s("span",S,[o("div",E,[r(k,{onClick:M=>_(t.row.id,t.index)},null,8,["onClick"])])])):t.column.field=="jml_sekolah"?(a(),s("span",N,[o("div",P,i(t.row.jml_sekolah)+" Sekolah",1)])):(a(),s("span",j,i(t.formattedRow[t.column.field]),1))]),_:1},8,["rows"])])):v("",!0)])])])}}};export{z as default};
