import{a as p,b as w,c as k,r as d,j as x,o as a,e as s,f as o,g as i,w as g,q as v,A as b,t as r}from"./index.3c250083.js";import{B as y}from"./ButtonEdit.35672f2c.js";const A={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},B={class:"w-full lg:w-full"},C={class:"bg-white shadow rounded-lg px-4 py-4"},D={key:0},S={key:0},N={class:"text-sm font-medium text-center flex justify-center space-x-0"},j={key:1},E={class:"text-left"},I={key:2},W={__name:"Index",setup(R){p().setsubMenuActive("walikelas");const c=w(),l=k().params.id,u=d([]),n=d([]),m=[{label:"Actions",field:"actions",sortable:!1,width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Nama Guru",field:"nama",type:"String"},{label:"Nomer Induk",field:"nomerinduk",type:"String"}];(async()=>{try{const e=await b.get(`owner/datasekolah/${l}}/walikelas`);return u.value=e.data,n.value=e.data,e.data}catch(e){console.error(e)}})();const _=async(e,h)=>{c.push({name:"AdminSekolahDetailWalikelasEdit",params:{id:l,id2:e}})};return(e,h)=>{const f=x("vue-good-table");return a(),s("div",A,[o("div",B,[o("div",C,[n.value?(a(),s("div",D,[i(f,{columns:m,"line-numbers":!0,rows:n.value,"search-options":{enabled:!0},"pagination-options":{enabled:!0,perPageDropdown:[10,20,50]},styleClass:"vgt-table striped bordered condensed",class:"py-0"},{"table-row":g(t=>[t.column.field=="actions"?(a(),s("span",S,[o("div",N,[i(y,{onClick:q=>_(t.row.id,t.index)},null,8,["onClick"])])])):t.column.field=="jml_sekolah"?(a(),s("span",j,[o("div",E,r(t.row.jml_sekolah)+" Sekolah",1)])):(a(),s("span",I,r(t.formattedRow[t.column.field]),1))]),_:1},8,["rows"])])):v("",!0)])])])}}};export{W as default};
