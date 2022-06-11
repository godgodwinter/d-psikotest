import{u as V,f as B,b as S,d as j,e as A,r as c,o as u,g as m,h as e,i,w as f,j as d,F as T,A as D,T as v,x as _,V as F,t as n,y as b,q as w,k as p}from"./index.04432143.js";import{B as U,a as C}from"./BreadCrumbSpace.32ca9e1b.js";import{F as L,a as g}from"./vee-validate.esm.78bfd04a.js";const P={class:"pt-4 px-10 md:flex justify-between"},q=e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"}," Klasifikasi Akademis & Profesi ")],-1),K={class:"md:py-0 py-4"},N=p(" Klasifikasi "),M=p(" Edit "),R={class:"pt-4 px-10 md:flex justify-between"},E=e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"})],-1),G={class:"md:py-0 py-4 space-x-2 space-y-2"},J=e("button",{class:"btn hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),p(" Kembali ")],-1),$=[J],z={class:"px-4 py-4"},I={class:"w-full"},W={class:"bg-white shadow rounded-lg px-0 py-4"},H={class:"w-full lg:w-fi mx-4"},O={class:"p-2 sm:p-6 xl:p-8"},Q={class:"pt-0 px-0"},X={class:"w-full mx-0"},Y={class:"bg-white rounded-lg p-0 sm:p-6 xl:p-0"},Z={class:"grid md:grid-cols-2 gap-2"},ee={class:"grid col-span-2"},te=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Judul",-1),se={class:"text-xs text-red-600 mt-1"},ae=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Jenis",-1),oe=e("option",{disabled:"",selected:""},"Pilih ?",-1),le=e("option",null,"Studi",-1),ie=e("option",null,"Kerja",-1),ne=[oe,le,ie],de={class:"text-xs text-red-600 mt-1"},re=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Tipe",-1),ce=e("option",{disabled:"",selected:""},"Pilih ?",-1),ue=e("option",null,"Link",-1),me=e("option",null,"Upload",-1),_e=[ce,ue,me],pe={class:"text-xs text-red-600 mt-1"},xe={key:0},he=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Link",-1),fe={class:"text-xs text-red-600 mt-1"},ve={key:1},be=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"File",-1),we={class:"text-xs text-red-600 mt-1"},ge=e("div",{class:"w-full flex justify-end mt-4 px-20"},[e("button",{class:"btn btn-active btn-lg btn-primary"}," Simpan ")],-1),Ae={__name:"Tambah",setup(ke){const x=V();B(()=>x.getSekolah),x.$subscribe((l,s)=>{}),S().setPagesActive("referensi");const h=j();A().params.id,c([]);const t=c([]);c([]);const r=l=>l?l.length<1?"This Field must be at least 2 characters":!0:"This field is required",k=()=>{y()},y=async l=>{let s={nama:t.value.nama,tipe:t.value.tipe,link:t.value.link,file:t.value.file,jenis:t.value.jenis};try{const a=await D.post("owner/referensi",s);return v.success("Success","Data Berhasil ditambahkan!"),h.push({name:"AdminReferensi"}),a.data}catch(a){v.danger("Warning","Data gagal ditambahkan!"),console.error(a)}};return(l,s)=>(u(),m(T,null,[e("div",P,[q,e("div",K,[i(U,null,{content:f(()=>[N,i(C),M]),_:1})])]),e("div",R,[E,e("div",G,[e("span",{onClick:s[0]||(s[0]=a=>d(h).go(-1))},$)])]),e("div",z,[e("div",I,[e("div",W,[e("div",H,[e("div",O,[i(d(L),{onSubmit:k},{default:f(({errors:a})=>[e("div",Q,[e("div",X,[e("div",Y,[e("div",Z,[e("div",ee,[te,_(e("textarea",{"onUpdate:modelValue":s[1]||(s[1]=o=>t.value.nama=o),rules:r,name:"nama",ref:"nama",class:"textarea textarea-bordered md:w-full max-w-2xl",placeholder:""},null,512),[[F,t.value.nama]]),e("div",se,n(a.nama),1)]),e("div",null,[ae,_(e("select",{class:"select select-bordered w-full max-w-xs","onUpdate:modelValue":s[2]||(s[2]=o=>t.value.jenis=o),rules:r},ne,512),[[b,t.value.jenis]]),e("div",de,n(a.jenis),1)]),e("div",null,[re,_(e("select",{class:"select select-bordered w-full max-w-xs","onUpdate:modelValue":s[3]||(s[3]=o=>t.value.tipe=o),rules:r},_e,512),[[b,t.value.tipe]]),e("div",pe,n(a.tipe),1)]),t.value.tipe=="Link"?(u(),m("div",xe,[he,i(d(g),{modelValue:t.value.link,"onUpdate:modelValue":s[4]||(s[4]=o=>t.value.link=o),type:"text",name:"link",ref:"link",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),e("div",fe,n(a.link),1)])):w("",!0),t.value.tipe=="Upload"?(u(),m("div",ve,[be,i(d(g),{modelValue:t.value.file,"onUpdate:modelValue":s[5]||(s[5]=o=>t.value.file=o),type:"text",name:"file",ref:"file",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),e("div",we,n(a.file),1)])):w("",!0)]),ge])])])]),_:1})])])])])])],64))}};export{Ae as default};
