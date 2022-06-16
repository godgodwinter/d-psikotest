import{u as g,d as y,a as u,b as v,c as x,r as l,o as n,f as i,g as s,h as _,w,k as b,j as f,t as e,F as m,R as k,p as d}from"./index.80c866ad.js";import{B,a as j}from"./BreadCrumbSpace.dc545f5b.js";const C={key:0,class:"pt-4 px-10 md:flex justify-between"},K=s("div",null,[s("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},"Detail Pengembangandiri")],-1),A={class:"md:py-0 py-4"},S=d(" Pengembangandiri "),D=d(" Index "),P={class:"pt-4 px-10 md:flex justify-between"},I=s("div",null,[s("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"})],-1),N={class:"md:py-0 py-4 space-x-2 space-y-2"},V=s("button",{class:"btn hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),d(" Kembali ")],-1),R=[V],$={class:"w-full lg:w-full"},F={class:"bg-white shadow rounded-lg px-4 py-2"},G={class:"overflow-x-auto px-4 space-y-10 py-2"},L={class:"space-y-2"},z=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Ide dan Imajinasi ",-1),E={class:"space-y-2 border-b-2 py-2"},H={class:"indent-8 text-gray-700"},M={class:"w-full lg:w-full"},O={class:"bg-white shadow rounded-lg px-4 py-2"},T={class:"overflow-x-auto px-4 space-y-10 py-2"},q={class:"space-y-2"},J=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Ketrampilan ",-1),Q={class:"space-y-2 border-b-2 py-2"},U={class:"indent-8 text-gray-700"},W={class:"w-full lg:w-full"},X={class:"bg-white shadow rounded-lg px-4 py-2"},Y={class:"overflow-x-auto px-4 space-y-10 py-2"},Z={class:"space-y-2"},ss=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Kreatif ",-1),ts={class:"space-y-2 border-b-2 py-2"},es={class:"indent-8 text-gray-700"},os={class:"w-full lg:w-full"},as={class:"bg-white shadow rounded-lg px-4 py-2"},ds={class:"overflow-x-auto px-4 space-y-10 py-2"},cs={class:"space-y-2"},ls=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Organisasi ",-1),ns={class:"space-y-2 border-b-2 py-2"},is={class:"indent-8 text-gray-700"},_s={class:"w-full lg:w-full"},rs={class:"bg-white shadow rounded-lg px-4 py-2"},hs={class:"overflow-x-auto px-4 space-y-10 py-2"},ps={class:"space-y-2"},gs=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Kelanjutan Studi ",-1),ys={class:"space-y-2 border-b-2 py-2"},us={class:"indent-8 text-gray-700"},vs={class:"w-full lg:w-full"},xs={class:"bg-white shadow rounded-lg px-4 py-2"},ws={class:"overflow-x-auto px-4 space-y-10 py-2"},bs={class:"space-y-2"},fs=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Hobi ",-1),ms={class:"space-y-2 border-b-2 py-2"},ks={class:"indent-8 text-gray-700"},Bs={class:"w-full lg:w-full"},js={class:"bg-white shadow rounded-lg px-4 py-2"},Cs={class:"overflow-x-auto px-4 space-y-10 py-2"},Ks={class:"space-y-2"},As=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Cita - cita ",-1),Ss={class:"space-y-2 border-b-2 py-2"},Ds={class:"indent-8 text-gray-700"},Ps={class:"w-full lg:w-full"},Is={class:"bg-white shadow rounded-lg px-4 py-2"},Ns={class:"overflow-x-auto px-4 space-y-10 py-2"},Vs={class:"space-y-2"},Rs=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Kemampuan Khusus ",-1),$s={class:"space-y-2 border-b-2 py-2"},Fs={class:"indent-8 text-gray-700"},Gs={class:"w-full lg:w-full"},Ls={class:"bg-white shadow rounded-lg px-4 py-2"},zs={class:"overflow-x-auto px-4 space-y-10 py-2"},Es={class:"space-y-2"},Hs=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Keterangan ",-1),Ms={class:"space-y-2 border-b-2 py-2"},Os={class:"indent-8 text-gray-700"},Ys={__name:"CatatanPengembangandiriDetail",setup(Ts){const c=g();y(()=>c.getSekolah),c.$subscribe((o,a)=>{}),u().setPagesActive("pengembangandiri");const r=v(),h=x().params.id,p=l([]),t=l([]);return(async()=>{try{const o=await k.get(`ortu/data/catatan/pengembangandiri/${h}`);return p.value=o.data,t.value=o.data,o.data}catch(o){console.error(o)}})(),(o,a)=>(n(),i(m,null,[t.value?(n(),i("div",C,[K,s("div",A,[_(B,null,{content:w(()=>[S,_(j),D]),_:1})])])):b("",!0),s("div",P,[I,s("div",N,[s("span",{onClick:a[0]||(a[0]=Us=>f(r).go(-1))},R)])]),s("div",$,[s("div",F,[s("div",G,[s("div",L,[z,s("div",E,[s("p",H,e(t.value.idedanimajinasi),1)])])])])]),s("div",M,[s("div",O,[s("div",T,[s("div",q,[J,s("div",Q,[s("p",U,e(t.value.ketrampilan),1)])])])])]),s("div",W,[s("div",X,[s("div",Y,[s("div",Z,[ss,s("div",ts,[s("p",es,e(t.value.kreatif),1)])])])])]),s("div",os,[s("div",as,[s("div",ds,[s("div",cs,[ls,s("div",ns,[s("p",is,e(t.value.organisasi),1)])])])])]),s("div",_s,[s("div",rs,[s("div",hs,[s("div",ps,[gs,s("div",ys,[s("p",us,e(t.value.kelanjutanstudi),1)])])])])]),s("div",vs,[s("div",xs,[s("div",ws,[s("div",bs,[fs,s("div",ms,[s("p",ks,e(t.value.hobi),1)])])])])]),s("div",Bs,[s("div",js,[s("div",Cs,[s("div",Ks,[As,s("div",Ss,[s("p",Ds,e(t.value.citacita),1)])])])])]),s("div",Ps,[s("div",Is,[s("div",Ns,[s("div",Vs,[Rs,s("div",$s,[s("p",Fs,e(t.value.kemampuankhusus),1)])])])])]),s("div",Gs,[s("div",Ls,[s("div",zs,[s("div",Es,[Hs,s("div",Ms,[s("p",Os,e(t.value.Keterangan),1)])])])])])],64))}};export{Ys as default};
