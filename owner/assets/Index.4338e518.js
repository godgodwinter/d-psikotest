import{u as y,f as B,b as S,d as C,e as A,r as _,l as h,o,g as i,h as e,i as s,w as r,q as D,F as j,A as p,t as c,k as u}from"./index.04432143.js";import{B as N,a as P}from"./BreadCrumbSpace.32ca9e1b.js";import{B as K}from"./ButtonEdit.3b58f27b.js";import{B as E}from"./ButtonDel.ddf631ee.js";const I={class:"pt-4 px-10 md:flex justify-between"},T=e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},"Klasifikasi Akademis dan Profesi ")],-1),V={class:"md:py-0 py-4"},$=u(" Klasifikasi "),L=u(" Index "),R={class:"md:pt-6"},q={class:"md:flex justify-between px-10"},z={class:"space-x-1 space-y-1 pt-1 md:pt-0"},F=e("button",{class:"btn btn-info hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),u(" Tambah ")],-1),G=e("div",{class:"space-x-1 space-y-1 pt-1 md:pt-0"},null,-1),M={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},H={class:"w-full lg:w-full"},J={class:"bg-white shadow rounded-lg px-4 py-4"},Q={key:0},Y={key:0},O={class:"text-sm font-medium text-center flex justify-center space-x-1"},U=e("button",{class:"btn btn-sm btn-primary tooltip","data-tip":"Detail"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1),W={key:1},X={class:"text-center"},Z={key:2},ee={class:"text-left"},te={key:3},re={__name:"Index",setup(ae){const m=y();B(()=>m.getSekolah),m.$subscribe((a,d)=>{}),S().setPagesActive("klasifikasi");const f=C();A();const k=_([]),l=_([]),g=[{label:"No",field:"no",width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Actions",field:"actions",sortable:!1,width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Bidang",field:"bidang",type:"String"},{label:"Akademis",field:"akademis",type:"String"},{label:"Profesi",field:"profesi",type:"String"},{label:"Nilai Standart",field:"nilaistandart",type:"String"},{label:"IQ Standart",field:"iqstandart",type:"String"},{label:"Jurusan & Bidang Studi yang ditekuni",field:"jurusandanbidangstudi",type:"String"},{label:"Pekerjaan & Keterangan",field:"pekerjaandanketerangan",type:"String"},{label:"Link",field:"ket",type:"String"}];(async()=>{try{const a=await p.get("owner/klasifikasi");return k.value=a.data,l.value=a.data,a.data}catch(a){console.error(a)}})();const x=async(a,d)=>{f.push({name:"AdminKlasifikasiEdit",params:{id:a}})},w=async(a,d)=>{if(confirm("Apakah anda yakin menghapus data ini?"))try{const n=await p.delete(`owner/klasifikasi/${a}`);return l.value.splice(d,1),Toast.success("Success","Data Berhasil dihapus!"),n.data}catch(n){console.error(n)}};return(a,d)=>{const n=h("router-link"),b=h("vue-good-table");return o(),i(j,null,[e("div",I,[T,e("div",V,[s(N,null,{content:r(()=>[$,s(P),L]),_:1})])]),e("div",R,[e("div",q,[e("div",z,[s(n,{to:{name:"AdminKlasifikasiTambah"}},{default:r(()=>[F]),_:1})]),G])]),e("div",M,[e("div",H,[e("div",J,[l.value?(o(),i("div",Q,[s(b,{columns:g,rows:l.value,"search-options":{enabled:!0},"pagination-options":{enabled:!0,perPageDropdown:[10,20,50]},styleClass:"vgt-table striped bordered condensed",class:"py-0"},{"table-row":r(t=>[t.column.field=="actions"?(o(),i("span",Y,[e("div",O,[s(K,{onClick:v=>x(t.row.id,t.index)},null,8,["onClick"]),s(E,{onClick:v=>w(t.row.id,t.index)},null,8,["onClick"]),s(n,{to:{name:"AdminYayasanDetail",params:{id:t.row.id}}},{default:r(()=>[U]),_:2},1032,["to"])])])):t.column.field=="no"?(o(),i("span",W,[e("div",X,c(t.index+1),1)])):t.column.field=="jml_sekolah"?(o(),i("span",Z,[e("div",ee,c(t.row.jml_sekolah)+" Sekolah",1)])):(o(),i("span",te,c(t.formattedRow[t.column.field]),1))]),_:1},8,["rows"])])):D("",!0)])])])],64)}}};export{re as default};
