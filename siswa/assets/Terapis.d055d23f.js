import{B as P,C as N}from"./CardLockedFitur.577b3d89.js";import{q as g,s as S,x as T,v as D,c as x,y as $,z as j,e,B as o,C as n,D as t,E as c,F as I,u as y,H as a,M as _,R as f,L,P as M,T as w,N as R}from"./index.5f14ce57.js";import{a as V,B as Y}from"./BreadCrumbSpace.6c7068c8.js";const z={class:"pt-4 px-10 md:flex justify-between"},E=t("div",null,[t("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"})],-1),F={class:"md:py-0 py-4"},K=R(" Terapis Karakter Positif "),G={class:"pt-4 px-10 md:flex justify-between"},U=t("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm px-2"},"Terapis Karakter Positif",-1),W=t("div",{class:"md:py-0 py-4 space-x-2 space-y-2"},null,-1),q={key:0},H={key:1},J={key:0},O={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},Q={class:"w-full lg:w-full"},X={class:"bg-white shadow rounded-lg px-4 py-4"},Z={class:"overflow-x-auto"},tt={class:"table table-compact"},st=t("td",{class:"whitespace-nowrap w-1/12"},"No Induk",-1),at=t("td",{class:"whitespace-nowrap w-1/12"},":",-1),et={class:"whitespace-nowrap w-10/12"},ot=t("td",null,"Nama",-1),nt=t("td",null,":",-1),lt=t("td",null,"Umur",-1),dt=t("td",null,":",-1),it=t("td",null,"Jenis Kelamin",-1),ct=t("td",null,":",-1),rt=t("td",null,"Sekolah",-1),ut=t("td",null,":",-1),_t={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},pt={class:"w-full lg:w-full"},ht={class:"bg-white shadow rounded-lg px-4 py-4"},mt={class:"overflow-x-auto px-4 space-y-10 py-4"},gt={class:"space-y-2"},xt={class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"},yt={class:"space-y-2 border-b-2 py-2"},ft={class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 capitalize"},wt=t("h1",{class:"text-md font-bold text-gray-700 bg-gray-50"}," a. Pemahaman dan Pengertian ",-1),bt={class:"indent-8 text-gray-700"},vt=t("h1",{class:"text-md font-bold text-gray-700 bg-gray-50"}," b. Tujuan dan Manfaat ",-1),kt={class:"indent-8 text-gray-700"},Bt=t("h1",{class:"text-md font-bold text-gray-700 bg-gray-50"}," c. Pembiasaan Sikap dan Penerapan ",-1),At={class:"indent-8 text-gray-700"},jt={__name:"Terapis",setup(Ct){g.updateLocale("id",S);const b="https://be.psikotest.babeng.web.id/";T().setPagesActive("terapis");const r=D(),v=x(()=>r.getPaket),p=x(()=>r.getIdentitas);r.$subscribe((s,d)=>{}),$();const k=j(),B=e([]);e([]);const h=e([]);e([]);const l=e();e([]),e([{nama:""}]),e([]),e(null),(async()=>{try{const s=await M.get(`siswa/data/terapis/${p.value.id}`);return B.value=s.data,h.value=s.data,l.value=s.siswa,s.status=="failed"&&w.danger("Warning","Anda tidak memiliki Akses siswa ini!"),s.data}catch(s){console.error(s)}})(),k.params.id;const m=s=>window.btoa(s),A=(s=null,d=g().format("YYYY-MM-Do"))=>{s===null?w.danger("Warning","Data tidak valid!"):window.open(`${b}api/guest/cetak/terapis/${m(s)}?token=${m(d)}`)};return(s,d)=>(o(),n(_,null,[t("div",z,[E,t("div",F,[c(V,null,{content:I(()=>[K,c(Y)]),_:1})])]),t("div",G,[t("div",null,[U,c(P,{onClick:d[0]||(d[0]=u=>A(y(p).id))})]),W]),y(v).terapiskarakterpositif!="Aktif"?(o(),n("div",q,[c(N)])):(o(),n("div",H,[l.value?(o(),n("div",J,[t("div",O,[t("div",Q,[t("div",X,[t("div",Z,[t("table",tt,[t("tbody",null,[t("tr",null,[st,at,t("td",et,a(l.value.nomeridentitas),1)]),t("tr",null,[ot,nt,t("td",null,a(l.value.nama),1)]),t("tr",null,[lt,dt,t("td",null,a(l.value.umur),1)]),t("tr",null,[it,ct,t("td",null,a(l.value.jk),1)]),t("tr",null,[rt,ut,t("td",null,a(l.value.sekolah_nama),1)])])])])])])]),(o(!0),n(_,null,f(h.value,(u,St)=>(o(),n("div",_t,[t("div",pt,[t("div",ht,[t("div",mt,[t("div",gt,[t("h1",xt,a(u.label),1),(o(!0),n(_,null,f(u.data,(i,C)=>(o(),n("div",yt,[t("h1",ft,a(C+1)+". "+a(i.kata),1),wt,t("p",bt,a(i.pemahaman),1),vt,t("p",kt,a(i.tujuandanmanfaat),1),Bt,t("p",At,a(i.pembiasaansikap),1)]))),256))])])])])]))),256))])):L("",!0)]))],64))}};export{jt as default};
