import{v as y,c as g,x as u,y as v,z as x,e as l,B as n,C as i,D as s,E as _,F as w,H as b,u as f,K as e,I as m,R as k,O as d}from"./index.397952bf.js";import{B,a as C}from"./BreadCrumbSpace.c216212f.js";const K={key:0,class:"pt-4 px-10 md:flex justify-between"},j=s("div",null,[s("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},"Detail Pengembangandiri")],-1),A={class:"md:py-0 py-4"},D=d(" Pengembangandiri "),S=d(" Index "),I={class:"pt-4 px-10 md:flex justify-between"},P=s("div",null,[s("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"})],-1),N={class:"md:py-0 py-4 space-x-2 space-y-2"},V=s("button",{class:"btn hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),d(" Kembali ")],-1),R=[V],$={class:"w-full lg:w-full"},z={class:"bg-white shadow rounded-lg px-4 py-2"},E={class:"overflow-x-auto px-4 space-y-10 py-2"},F={class:"space-y-2"},G=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Ide dan Imajinasi ",-1),H={class:"space-y-2 border-b-2 py-2"},L={class:"indent-8 text-gray-700"},O={class:"w-full lg:w-full"},M={class:"bg-white shadow rounded-lg px-4 py-2"},T={class:"overflow-x-auto px-4 space-y-10 py-2"},q={class:"space-y-2"},J=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Ketrampilan ",-1),Q={class:"space-y-2 border-b-2 py-2"},U={class:"indent-8 text-gray-700"},W={class:"w-full lg:w-full"},X={class:"bg-white shadow rounded-lg px-4 py-2"},Y={class:"overflow-x-auto px-4 space-y-10 py-2"},Z={class:"space-y-2"},ss=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Kreatif ",-1),ts={class:"space-y-2 border-b-2 py-2"},es={class:"indent-8 text-gray-700"},os={class:"w-full lg:w-full"},as={class:"bg-white shadow rounded-lg px-4 py-2"},ds={class:"overflow-x-auto px-4 space-y-10 py-2"},cs={class:"space-y-2"},ls=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Organisasi ",-1),ns={class:"space-y-2 border-b-2 py-2"},is={class:"indent-8 text-gray-700"},_s={class:"w-full lg:w-full"},rs={class:"bg-white shadow rounded-lg px-4 py-2"},hs={class:"overflow-x-auto px-4 space-y-10 py-2"},ps={class:"space-y-2"},ys=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Kelanjutan Studi ",-1),gs={class:"space-y-2 border-b-2 py-2"},us={class:"indent-8 text-gray-700"},vs={class:"w-full lg:w-full"},xs={class:"bg-white shadow rounded-lg px-4 py-2"},ws={class:"overflow-x-auto px-4 space-y-10 py-2"},bs={class:"space-y-2"},fs=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Hobi ",-1),ms={class:"space-y-2 border-b-2 py-2"},ks={class:"indent-8 text-gray-700"},Bs={class:"w-full lg:w-full"},Cs={class:"bg-white shadow rounded-lg px-4 py-2"},Ks={class:"overflow-x-auto px-4 space-y-10 py-2"},js={class:"space-y-2"},As=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Cita - cita ",-1),Ds={class:"space-y-2 border-b-2 py-2"},Ss={class:"indent-8 text-gray-700"},Is={class:"w-full lg:w-full"},Ps={class:"bg-white shadow rounded-lg px-4 py-2"},Ns={class:"overflow-x-auto px-4 space-y-10 py-2"},Vs={class:"space-y-2"},Rs=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Kemampuan Khusus ",-1),$s={class:"space-y-2 border-b-2 py-2"},zs={class:"indent-8 text-gray-700"},Es={class:"w-full lg:w-full"},Fs={class:"bg-white shadow rounded-lg px-4 py-2"},Gs={class:"overflow-x-auto px-4 space-y-10 py-2"},Hs={class:"space-y-2"},Ls=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Keterangan ",-1),Os={class:"space-y-2 border-b-2 py-2"},Ms={class:"indent-8 text-gray-700"},Ys={__name:"CatatanPengembangandiriDetail",setup(Ts){const c=y();g(()=>c.getSekolah),c.$subscribe((o,a)=>{}),u().setPagesActive("pengembangandiri");const r=v(),h=x().params.id,p=l([]),t=l([]);return(async()=>{try{const o=await k.get(`ortu/data/catatan/pengembangandiri/${h}`);return p.value=o.data,t.value=o.data,o.data}catch(o){console.error(o)}})(),(o,a)=>(n(),i(m,null,[t.value?(n(),i("div",K,[j,s("div",A,[_(B,null,{content:w(()=>[D,_(C),S]),_:1})])])):b("",!0),s("div",I,[P,s("div",N,[s("span",{onClick:a[0]||(a[0]=Us=>f(r).go(-1))},R)])]),s("div",$,[s("div",z,[s("div",E,[s("div",F,[G,s("div",H,[s("p",L,e(t.value.idedanimajinasi),1)])])])])]),s("div",O,[s("div",M,[s("div",T,[s("div",q,[J,s("div",Q,[s("p",U,e(t.value.ketrampilan),1)])])])])]),s("div",W,[s("div",X,[s("div",Y,[s("div",Z,[ss,s("div",ts,[s("p",es,e(t.value.kreatif),1)])])])])]),s("div",os,[s("div",as,[s("div",ds,[s("div",cs,[ls,s("div",ns,[s("p",is,e(t.value.organisasi),1)])])])])]),s("div",_s,[s("div",rs,[s("div",hs,[s("div",ps,[ys,s("div",gs,[s("p",us,e(t.value.kelanjutanstudi),1)])])])])]),s("div",vs,[s("div",xs,[s("div",ws,[s("div",bs,[fs,s("div",ms,[s("p",ks,e(t.value.hobi),1)])])])])]),s("div",Bs,[s("div",Cs,[s("div",Ks,[s("div",js,[As,s("div",Ds,[s("p",Ss,e(t.value.citacita),1)])])])])]),s("div",Is,[s("div",Ps,[s("div",Ns,[s("div",Vs,[Rs,s("div",$s,[s("p",zs,e(t.value.kemampuankhusus),1)])])])])]),s("div",Es,[s("div",Fs,[s("div",Gs,[s("div",Hs,[Ls,s("div",Os,[s("p",Ms,e(t.value.Keterangan),1)])])])])])],64))}};export{Ys as default};
