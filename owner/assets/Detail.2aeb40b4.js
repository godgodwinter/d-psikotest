import{m as k,l as D}from"./id.2e1d7e23.js";import{a as A,b as B,c as S,r as m,j as b,o as l,e as r,f as a,t as _,g as o,w as p,h as d,q as $,F as C,A as h,T}from"./index.3c250083.js";import{B as j}from"./ButtonEdit.35672f2c.js";import{B as E}from"./ButtonDel.5361ea67.js";import{_ as N}from"./ButtonKembali.1603ddd4.js";const R={class:"pt-4 px-10 md:flex justify-between"},V={class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},F={class:"md:py-0 py-4 space-x-2 space-y-2"},K=a("button",{class:"btn btn-primary"},"Tambah",-1),P={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},q={class:"w-full lg:w-full"},z={class:"bg-base-200 shadow rounded-lg px-4 py-4"},I={key:0},J={key:0},L={class:"text-sm font-medium text-center flex justify-center space-x-1"},M={key:1},G={class:"text-center"},H={key:2},se={__name:"Detail",setup(O){k.updateLocale("id",D),A().setsubMenuActive("kasus"),B();const u=S(),n=u.params.id,i=u.params.id2;u.params.id3;const f=m([]),c=m([]),v=[{label:"Actions",field:"actions",sortable:!1,width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Judul ",field:"kasus",type:"String"}];(async()=>{try{const e=await h.get(`owner/datasekolah/${n}/siswa/${i}/catatankasussiswa`);return f.value=e.data,c.value=f.value,e.data}catch(e){console.error(e)}})();const w=m([]);(async()=>{try{const e=await h.get(`owner/datasekolah/${n}/siswa/${i}`);return w.value=e.data,e.data}catch(e){console.error(e)}})();const y=async(e,x)=>{if(confirm("Apakah anda yakin menghapus data ini?"))try{const s=await h.delete(`owner/datasekolah/${n}/siswa/${i}/catatankasussiswa/${e}`);return c.value.splice(x,1),T.success("Success","Data Berhasil dihapus!"),s.data}catch(s){console.error(s)}};return(e,x)=>{const s=b("router-link"),g=b("vue-good-table");return l(),r(C,null,[a("div",R,[a("div",null,[a("span",V,_(w.value.nama),1)]),a("div",F,[o(s,{to:{name:"AdminSekolahDetailKasusDetailTambah",params:{id:d(n),id2:d(i)}}},{default:p(()=>[K]),_:1},8,["to"]),o(N)])]),a("div",P,[a("div",q,[a("div",z,[c.value?(l(),r("div",I,[o(g,{"line-numbers":!0,columns:v,rows:c.value,"search-options":{enabled:!0},"pagination-options":{enabled:!0,perPageDropdown:[10,20,50]},styleClass:"vgt-table striped bordered condensed",class:"py-0"},{"table-row":p(t=>[t.column.field=="actions"?(l(),r("span",J,[a("div",L,[o(s,{to:{name:"AdminSekolahDetailKasusDetailEdit",params:{id:d(n),id2:d(i),id3:t.row.id}}},{default:p(()=>[o(j)]),_:2},1032,["to"]),o(E,{onClick:X=>y(t.row.id,t.index)},null,8,["onClick"])])])):t.column.field=="no"?(l(),r("span",M,[a("div",G,_(t.index+1),1)])):(l(),r("span",H,_(t.formattedRow[t.column.field]),1))]),_:1},8,["rows"])])):$("",!0)])])])],64)}}};export{se as default};
