import{a as S,b as B,c as $,r as c,j as A,o as j,e as q,f as a,t as n,g as o,v as M,w,h as u,q as U,F,A as p,T as x,S as T,x as C,V as P}from"./index.3c250083.js";import{_ as I}from"./ButtonKembali.1603ddd4.js";import{F as N,a as b}from"./vee-validate.esm.00afcd1f.js";import{m as z,l as E}from"./id.2e1d7e23.js";const R={class:"pt-4 px-10 md:flex justify-between"},W={class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},G={class:"md:py-0 py-4 space-x-2 space-y-2"},K={class:"px-4 py-4"},L={class:"w-full"},H={class:"bg-white shadow rounded-lg px-0 py-4"},J={class:"w-full lg:w-fi mx-4"},O={class:"p-2 sm:p-6 xl:p-8"},Q={class:"pt-0 px-0"},X={class:"w-full mx-0"},Y={class:"bg-white rounded-lg p-0 sm:p-6 xl:p-0"},Z={class:"grid md:grid-cols-2 gap-2"},aa=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Tanggal",-1),ea={class:"text-xs text-red-600 mt-1"},ta=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Prestasi",-1),sa={class:"text-xs text-red-600 mt-1"},la=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Teknik Belajar",-1),na={class:"text-xs text-red-600 mt-1"},ra=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Saran Belajar",-1),oa={class:"text-xs text-red-600 mt-1"},da=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Penunjang Belajar",-1),ia={class:"text-xs text-red-600 mt-1"},ua=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Kesimpulan dan Saran",-1),ma={class:"text-xs text-red-600 mt-1"},ca=a("div",{class:"w-full flex justify-end mt-4 px-20"},[a("button",{class:"btn btn-active btn-lg btn-primary"}," Simpan ")],-1),wa={__name:"DetailEdit",setup(pa){z.updateLocale("id",E),S().setsubMenuActive("prestasi");const h=B(),v=$(),d=v.params.id,m=v.params.id2,g=v.params.id3,_=c([]),t=c([]),k=c([]);(async()=>{try{const e=await p.get(`owner/datasekolah/${d}/catatanprestasisiswa/siswa`);return _.value=e.data,k.value=_.value,e.data}catch(e){console.error(e)}})();const f=c([]);(async()=>{try{const e=await p.get(`owner/datasekolah/${d}/siswa/${m}`);return f.value=e.data,e.data}catch(e){console.error(e)}})();const y=()=>{D()},D=async e=>{let s={tanggal:t.value.tanggal,prestasi:t.value.prestasi,teknikbelajar:t.value.teknikbelajar,saranabelajar:t.value.saranabelajar,penunjangbelajar:t.value.penunjangbelajar,kesimpulandansaran:t.value.kesimpulandansaran};try{const i=await p.put(`owner/datasekolah/${d}/siswa/${m}/catatanprestasisiswa/${g}`,s);return x.success("Success","Data Berhasil ditambahkan!"),h.push({name:"AdminSekolahDetailPrestasiDetail",params:{id:d,id2:m}}),i.data}catch(i){x.danger("Warning","Data gagal ditambahkan!"),console.error(i)}};return(async()=>{try{const e=await p.get(`owner/datasekolah/${d}/siswa/${m}/catatanprestasisiswa/${g}`);return t.value={tanggal:e.data.tanggal,prestasi:e.data.prestasi,teknikbelajar:e.data.teknikbelajar,saranabelajar:e.data.saranabelajar,penunjangbelajar:e.data.penunjangbelajar,kesimpulandansaran:e.data.kesimpulandansaran},e}catch(e){x.danger("Warning","Data Gagal dimuat"),console.error(e)}})(),(e,s)=>{const i=A("Datepicker");return j(),q(F,null,[a("div",R,[a("div",null,[a("span",W,n(f.value.nama),1)]),a("div",G,[o(I)])]),a("div",K,[a("div",L,[a("div",H,[a("div",J,[a("div",O,[k.value?(j(),M(u(N),{key:0,onSubmit:y},{default:w(({errors:r})=>[a("div",Q,[a("div",X,[a("div",Y,[a("div",Z,[a("div",null,[aa,o(i,{modelValue:t.value.tanggal,"onUpdate:modelValue":s[0]||(s[0]=l=>t.value.tanggal=l),format:"yyyy/MM/dd","value-format":"yyyy-MM-dd",rules:e.validateData,required:""},{"calendar-header":w(({index:l,day:V})=>[a("div",{class:T(l===5||l===6?"red-color":"")},n(V),3)]),_:1},8,["modelValue","rules"]),a("div",ea,n(r.tanggal),1)]),a("div",null,[ta,o(u(b),{modelValue:t.value.prestasi,"onUpdate:modelValue":s[1]||(s[1]=l=>t.value.prestasi=l),rules:e.validateData,type:"text",name:"prestasi",ref:"prestasi",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),a("div",sa,n(r.prestasi),1)]),a("div",null,[la,o(u(b),{modelValue:t.value.teknikbelajar,"onUpdate:modelValue":s[2]||(s[2]=l=>t.value.teknikbelajar=l),rules:e.validateData,type:"text",name:"teknikbelajar",ref:"teknikbelajar",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),a("div",na,n(r.teknikbelajar),1)]),a("div",null,[ra,o(u(b),{modelValue:t.value.saranabelajar,"onUpdate:modelValue":s[3]||(s[3]=l=>t.value.saranabelajar=l),rules:e.validateData,type:"text",name:"saranabelajar",ref:"saranabelajar",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),a("div",oa,n(r.saranabelajar),1)]),a("div",null,[da,o(u(b),{modelValue:t.value.penunjangbelajar,"onUpdate:modelValue":s[4]||(s[4]=l=>t.value.penunjangbelajar=l),rules:e.validateData,type:"text",name:"penunjangbelajar",ref:"penunjangbelajar",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),a("div",ia,n(r.penunjangbelajar),1)]),a("div",null,[ua,C(a("textarea",{"onUpdate:modelValue":s[5]||(s[5]=l=>t.value.kesimpulandansaran=l),class:"textarea textarea-accent md:w-full max-w-2xl",placeholder:""},null,512),[[P,t.value.kesimpulandansaran]]),a("div",ma,n(r.kesimpulandansaran),1)])]),ca])])])]),_:1})):U("",!0)])])])])])],64)}}};export{wa as default};
