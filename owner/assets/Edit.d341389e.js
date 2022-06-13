import{u as D,d as S,a as A,b as F,c as P,r as d,o as c,e as u,f as t,t as n,g as i,w as g,h as r,F as T,A as m,T as p,x as b,V as C,y as U,q as w,i as _}from"./index.3c250083.js";import{B as L,a as j}from"./BreadCrumbSpace.5d0aaa7c.js";import{F as q,a as k}from"./vee-validate.esm.00afcd1f.js";const N={class:"pt-4 px-10 md:flex justify-between"},$={class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},E={class:"md:py-0 py-4"},G=_(" Buletin Psikologi "),M=_(" Edit "),R={class:"pt-4 px-10 md:flex justify-between"},W=t("div",null,[t("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"})],-1),z={class:"md:py-0 py-4 space-x-2 space-y-2"},I=t("button",{class:"btn hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),_(" Kembali ")],-1),J=[I],K={class:"px-4 py-4"},H={class:"w-full"},O={class:"bg-white shadow rounded-lg px-0 py-4"},Q={class:"w-full lg:w-fi mx-4"},X={class:"p-2 sm:p-6 xl:p-8"},Y={class:"pt-0 px-0"},Z={class:"w-full mx-0"},tt={class:"bg-white rounded-lg p-0 sm:p-6 xl:p-0"},et={class:"grid md:grid-cols-2 gap-2"},st={class:"grid col-span-2"},at=t("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Judul",-1),ot={class:"text-xs text-red-600 mt-1"},lt=t("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Tipe",-1),nt=t("option",{disabled:"",selected:""},"Pilih ?",-1),it=t("option",null,"Link",-1),dt=t("option",null,"Upload",-1),rt=[nt,it,dt],ct={class:"text-xs text-red-600 mt-1"},ut={key:0},mt=t("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Link",-1),pt={class:"text-xs text-red-600 mt-1"},_t={key:1},xt=t("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"File",-1),ht={class:"text-xs text-red-600 mt-1"},vt=t("div",{class:"w-full flex justify-end mt-4 px-20"},[t("button",{class:"btn btn-active btn-lg btn-primary"}," Simpan ")],-1),Dt={__name:"Edit",setup(ft){const x=D();S(()=>x.getSekolah),x.$subscribe((s,a)=>{}),A().setPagesActive("buletin");const h=F(),v=P().params.id;d([]);const e=d([]);d([]),(async()=>{try{const s=await m.get(`owner/buletinpsikologi/${v}`);return e.value=s.data,s.data}catch(s){console.error(s)}})();const y=d([]);(async()=>{try{const s=await m.get("owner/paket");return y.value=s.data,s}catch(s){p.danger("Warning","Data Gagal dimuat"),console.error(s)}})();const f=s=>s?s.length<1?"This Field must be at least 2 characters":!0:"This field is required",B=()=>{V()},V=async s=>{let a={nama:e.value.nama,tipe:e.value.tipe,link:e.value.link,file:e.value.file};try{const o=await m.put(`owner/buletinpsikologi/${v}`,a);return p.success("Success","Data Berhasil ditambahkan!"),h.push({name:"AdminBuletin"}),o.data}catch(o){p.danger("Warning","Data gagal ditambahkan!"),console.error(o)}};return(s,a)=>(c(),u(T,null,[t("div",N,[t("div",null,[t("span",$,n(e.value.nama),1)]),t("div",E,[i(L,null,{content:g(()=>[G,i(j),M]),_:1})])]),t("div",R,[W,t("div",z,[t("span",{onClick:a[0]||(a[0]=o=>r(h).go(-1))},J)])]),t("div",K,[t("div",H,[t("div",O,[t("div",Q,[t("div",X,[i(r(q),{onSubmit:B},{default:g(({errors:o})=>[t("div",Y,[t("div",Z,[t("div",tt,[t("div",et,[t("div",st,[at,b(t("textarea",{"onUpdate:modelValue":a[1]||(a[1]=l=>e.value.nama=l),rules:f,name:"nama",ref:"nama",class:"textarea textarea-bordered md:w-full max-w-2xl",placeholder:""},null,512),[[C,e.value.nama]]),t("div",ot,n(o.nama),1)]),t("div",null,[lt,b(t("select",{class:"select select-bordered w-full max-w-xs","onUpdate:modelValue":a[2]||(a[2]=l=>e.value.tipe=l),rules:f},rt,512),[[U,e.value.tipe]]),t("div",ct,n(o.tipe),1)]),e.value.tipe=="Link"?(c(),u("div",ut,[mt,i(r(k),{modelValue:e.value.link,"onUpdate:modelValue":a[3]||(a[3]=l=>e.value.link=l),type:"text",name:"link",ref:"link",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),t("div",pt,n(o.link),1)])):w("",!0),e.value.tipe=="Upload"?(c(),u("div",_t,[xt,i(r(k),{modelValue:e.value.file,"onUpdate:modelValue":a[4]||(a[4]=l=>e.value.file=l),type:"text",name:"file",ref:"file",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),t("div",ht,n(o.file),1)])):w("",!0)]),vt])])])]),_:1})])])])])])],64))}};export{Dt as default};
