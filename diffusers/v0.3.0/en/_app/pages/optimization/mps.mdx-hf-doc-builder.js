import{S as Qo,i as Xo,s as Zo,e as s,k as l,w as te,t as i,M as es,c as r,d as o,m as p,a,x as oe,h as n,b as f,G as e,g as c,y as se,L as ts,q as re,o as ae,B as ie,v as os}from"../../chunks/vendor-hf-doc-builder.js";import{I as je}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ss}from"../../chunks/CodeBlock-hf-doc-builder.js";function rs(ho){let d,Ne,v,S,ne,N,it,le,nt,He,A,lt,pe,pt,ft,Le,w,M,fe,H,ht,he,ct,Oe,u,ce,ut,mt,ue,dt,vt,me,wt,_t,_,gt,L,bt,Et,de,yt,$t,Re,g,T,ve,O,Pt,we,kt,Be,m,St,_e,At,Mt,ge,Tt,Dt,Ue,K,qt,Ve,R,We,b,D,be,B,xt,Ee,Ct,Ge,q,U,It,V,jt,Nt,Ht,E,Lt,W,Ot,Rt,x,ye,Bt,Ut,Vt,Fe,y,C,$e,G,Wt,Pe,Gt,Ke,Y,Ft,Ye,I,ke,$,Se,Kt,Yt,Ae,Jt,zt,Me,Qt,Xt,F,P,Te,Zt,eo,De,to,oo,qe,so,ro,k,xe,ao,io,Ce,no,lo,Ie,po,Je;return N=new je({}),H=new je({}),O=new je({}),R=new ss({props:{code:`# make sure you're logged in with \`huggingface-cli login\`
from diffusers import StableDiffusionPipeline

pipe = StableDiffusionPipeline.from_pretrained("CompVis/stable-diffusion-v1-4", use_auth_token=True)
pipe = pipe.to("mps")

prompt = "a photo of an astronaut riding a horse on mars"

# First-time "warmup" pass (see explanation above)
_ = pipe(prompt, num_inference_steps=1)

# Results match those from the CPU device after the warmup pass.
image = pipe(prompt).images[0]`,highlighted:`<span class="hljs-comment"># make sure you&#x27;re logged in with \`huggingface-cli login\`</span>
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> StableDiffusionPipeline

pipe = StableDiffusionPipeline.from_pretrained(<span class="hljs-string">&quot;CompVis/stable-diffusion-v1-4&quot;</span>, use_auth_token=<span class="hljs-literal">True</span>)
pipe = pipe.to(<span class="hljs-string">&quot;mps&quot;</span>)

prompt = <span class="hljs-string">&quot;a photo of an astronaut riding a horse on mars&quot;</span>

<span class="hljs-comment"># First-time &quot;warmup&quot; pass (see explanation above)</span>
_ = pipe(prompt, num_inference_steps=<span class="hljs-number">1</span>)

<span class="hljs-comment"># Results match those from the CPU device after the warmup pass.</span>
image = pipe(prompt).images[<span class="hljs-number">0</span>]`}}),B=new je({}),G=new je({}),{c(){d=s("meta"),Ne=l(),v=s("h1"),S=s("a"),ne=s("span"),te(N.$$.fragment),it=l(),le=s("span"),nt=i("How to use Stable Diffusion in Apple Silicon (M1/M2)"),He=l(),A=s("p"),lt=i("\u{1F917} Diffusers is compatible with Apple silicon for Stable Diffusion inference, using the PyTorch "),pe=s("code"),pt=i("mps"),ft=i(" device. These are the steps you need to follow to use your M1 or M2 computer with Stable Diffusion."),Le=l(),w=s("h2"),M=s("a"),fe=s("span"),te(H.$$.fragment),ht=l(),he=s("span"),ct=i("Requirements"),Oe=l(),u=s("ul"),ce=s("li"),ut=i("Mac computer with Apple silicon (M1/M2) hardware."),mt=l(),ue=s("li"),dt=i("macOS 12.3 or later."),vt=l(),me=s("li"),wt=i("arm64 version of Python."),_t=l(),_=s("li"),gt=i("PyTorch "),L=s("a"),bt=i("Preview (Nightly)"),Et=i(", version "),de=s("code"),yt=i("1.13.0.dev20220830"),$t=i(" or later."),Re=l(),g=s("h2"),T=s("a"),ve=s("span"),te(O.$$.fragment),Pt=l(),we=s("span"),kt=i("Inference Pipeline"),Be=l(),m=s("p"),St=i("The snippet below demonstrates how to use the "),_e=s("code"),At=i("mps"),Mt=i(" backend using the familiar "),ge=s("code"),Tt=i("to()"),Dt=i(" interface to move the Stable Diffusion pipeline to your M1 or M2 device."),Ue=l(),K=s("p"),qt=i("We recommend to \u201Cprime\u201D the pipeline using an additional one-time pass through it. This is a temporary workaround for a weird issue we have detected: the first inference pass produces slightly different results than subsequent ones. You only need to do this pass once, and it\u2019s ok to use just one inference step and discard the result."),Ve=l(),te(R.$$.fragment),We=l(),b=s("h2"),D=s("a"),be=s("span"),te(B.$$.fragment),xt=l(),Ee=s("span"),Ct=i("Known Issues"),Ge=l(),q=s("ul"),U=s("li"),It=i("As mentioned above, we are investigating a strange "),V=s("a"),jt=i("first-time inference issue"),Nt=i("."),Ht=l(),E=s("li"),Lt=i("Generating multiple prompts in a batch "),W=s("a"),Ot=i("crashes or doesn\u2019t work reliably"),Rt=i(". We believe this might be related to the "),x=s("a"),ye=s("code"),Bt=i("mps"),Ut=i(" backend in PyTorch"),Vt=i(", but we need to investigate in more depth. For now, we recommend to iterate instead of batching."),Fe=l(),y=s("h2"),C=s("a"),$e=s("span"),te(G.$$.fragment),Wt=l(),Pe=s("span"),Gt=i("Performance"),Ke=l(),Y=s("p"),Ft=i("These are the results we got on a M1 Max MacBook Pro with 64 GB of RAM, running macOS Ventura Version 13.0 Beta (22A5331f). We performed Stable Diffusion text-to-image generation of the same prompt for 50 inference steps, using a guidance scale of 7.5."),Ye=l(),I=s("table"),ke=s("thead"),$=s("tr"),Se=s("th"),Kt=i("Device"),Yt=l(),Ae=s("th"),Jt=i("Steps"),zt=l(),Me=s("th"),Qt=i("Time"),Xt=l(),F=s("tbody"),P=s("tr"),Te=s("td"),Zt=i("CPU"),eo=l(),De=s("td"),to=i("50"),oo=l(),qe=s("td"),so=i("213.46s"),ro=l(),k=s("tr"),xe=s("td"),ao=i("MPS"),io=l(),Ce=s("td"),no=i("50"),lo=l(),Ie=s("td"),po=i("30.81s"),this.h()},l(t){const h=es('[data-svelte="svelte-1phssyn"]',document.head);d=r(h,"META",{name:!0,content:!0}),h.forEach(o),Ne=p(t),v=r(t,"H1",{class:!0});var ze=a(v);S=r(ze,"A",{id:!0,class:!0,href:!0});var co=a(S);ne=r(co,"SPAN",{});var uo=a(ne);oe(N.$$.fragment,uo),uo.forEach(o),co.forEach(o),it=p(ze),le=r(ze,"SPAN",{});var mo=a(le);nt=n(mo,"How to use Stable Diffusion in Apple Silicon (M1/M2)"),mo.forEach(o),ze.forEach(o),He=p(t),A=r(t,"P",{});var Qe=a(A);lt=n(Qe,"\u{1F917} Diffusers is compatible with Apple silicon for Stable Diffusion inference, using the PyTorch "),pe=r(Qe,"CODE",{});var vo=a(pe);pt=n(vo,"mps"),vo.forEach(o),ft=n(Qe," device. These are the steps you need to follow to use your M1 or M2 computer with Stable Diffusion."),Qe.forEach(o),Le=p(t),w=r(t,"H2",{class:!0});var Xe=a(w);M=r(Xe,"A",{id:!0,class:!0,href:!0});var wo=a(M);fe=r(wo,"SPAN",{});var _o=a(fe);oe(H.$$.fragment,_o),_o.forEach(o),wo.forEach(o),ht=p(Xe),he=r(Xe,"SPAN",{});var go=a(he);ct=n(go,"Requirements"),go.forEach(o),Xe.forEach(o),Oe=p(t),u=r(t,"UL",{});var j=a(u);ce=r(j,"LI",{});var bo=a(ce);ut=n(bo,"Mac computer with Apple silicon (M1/M2) hardware."),bo.forEach(o),mt=p(j),ue=r(j,"LI",{});var Eo=a(ue);dt=n(Eo,"macOS 12.3 or later."),Eo.forEach(o),vt=p(j),me=r(j,"LI",{});var yo=a(me);wt=n(yo,"arm64 version of Python."),yo.forEach(o),_t=p(j),_=r(j,"LI",{});var J=a(_);gt=n(J,"PyTorch "),L=r(J,"A",{href:!0,rel:!0});var $o=a(L);bt=n($o,"Preview (Nightly)"),$o.forEach(o),Et=n(J,", version "),de=r(J,"CODE",{});var Po=a(de);yt=n(Po,"1.13.0.dev20220830"),Po.forEach(o),$t=n(J," or later."),J.forEach(o),j.forEach(o),Re=p(t),g=r(t,"H2",{class:!0});var Ze=a(g);T=r(Ze,"A",{id:!0,class:!0,href:!0});var ko=a(T);ve=r(ko,"SPAN",{});var So=a(ve);oe(O.$$.fragment,So),So.forEach(o),ko.forEach(o),Pt=p(Ze),we=r(Ze,"SPAN",{});var Ao=a(we);kt=n(Ao,"Inference Pipeline"),Ao.forEach(o),Ze.forEach(o),Be=p(t),m=r(t,"P",{});var z=a(m);St=n(z,"The snippet below demonstrates how to use the "),_e=r(z,"CODE",{});var Mo=a(_e);At=n(Mo,"mps"),Mo.forEach(o),Mt=n(z," backend using the familiar "),ge=r(z,"CODE",{});var To=a(ge);Tt=n(To,"to()"),To.forEach(o),Dt=n(z," interface to move the Stable Diffusion pipeline to your M1 or M2 device."),z.forEach(o),Ue=p(t),K=r(t,"P",{});var Do=a(K);qt=n(Do,"We recommend to \u201Cprime\u201D the pipeline using an additional one-time pass through it. This is a temporary workaround for a weird issue we have detected: the first inference pass produces slightly different results than subsequent ones. You only need to do this pass once, and it\u2019s ok to use just one inference step and discard the result."),Do.forEach(o),Ve=p(t),oe(R.$$.fragment,t),We=p(t),b=r(t,"H2",{class:!0});var et=a(b);D=r(et,"A",{id:!0,class:!0,href:!0});var qo=a(D);be=r(qo,"SPAN",{});var xo=a(be);oe(B.$$.fragment,xo),xo.forEach(o),qo.forEach(o),xt=p(et),Ee=r(et,"SPAN",{});var Co=a(Ee);Ct=n(Co,"Known Issues"),Co.forEach(o),et.forEach(o),Ge=p(t),q=r(t,"UL",{});var tt=a(q);U=r(tt,"LI",{});var ot=a(U);It=n(ot,"As mentioned above, we are investigating a strange "),V=r(ot,"A",{href:!0,rel:!0});var Io=a(V);jt=n(Io,"first-time inference issue"),Io.forEach(o),Nt=n(ot,"."),ot.forEach(o),Ht=p(tt),E=r(tt,"LI",{});var Q=a(E);Lt=n(Q,"Generating multiple prompts in a batch "),W=r(Q,"A",{href:!0,rel:!0});var jo=a(W);Ot=n(jo,"crashes or doesn\u2019t work reliably"),jo.forEach(o),Rt=n(Q,". We believe this might be related to the "),x=r(Q,"A",{href:!0,rel:!0});var fo=a(x);ye=r(fo,"CODE",{});var No=a(ye);Bt=n(No,"mps"),No.forEach(o),Ut=n(fo," backend in PyTorch"),fo.forEach(o),Vt=n(Q,", but we need to investigate in more depth. For now, we recommend to iterate instead of batching."),Q.forEach(o),tt.forEach(o),Fe=p(t),y=r(t,"H2",{class:!0});var st=a(y);C=r(st,"A",{id:!0,class:!0,href:!0});var Ho=a(C);$e=r(Ho,"SPAN",{});var Lo=a($e);oe(G.$$.fragment,Lo),Lo.forEach(o),Ho.forEach(o),Wt=p(st),Pe=r(st,"SPAN",{});var Oo=a(Pe);Gt=n(Oo,"Performance"),Oo.forEach(o),st.forEach(o),Ke=p(t),Y=r(t,"P",{});var Ro=a(Y);Ft=n(Ro,"These are the results we got on a M1 Max MacBook Pro with 64 GB of RAM, running macOS Ventura Version 13.0 Beta (22A5331f). We performed Stable Diffusion text-to-image generation of the same prompt for 50 inference steps, using a guidance scale of 7.5."),Ro.forEach(o),Ye=p(t),I=r(t,"TABLE",{});var rt=a(I);ke=r(rt,"THEAD",{});var Bo=a(ke);$=r(Bo,"TR",{});var X=a($);Se=r(X,"TH",{});var Uo=a(Se);Kt=n(Uo,"Device"),Uo.forEach(o),Yt=p(X),Ae=r(X,"TH",{});var Vo=a(Ae);Jt=n(Vo,"Steps"),Vo.forEach(o),zt=p(X),Me=r(X,"TH",{});var Wo=a(Me);Qt=n(Wo,"Time"),Wo.forEach(o),X.forEach(o),Bo.forEach(o),Xt=p(rt),F=r(rt,"TBODY",{});var at=a(F);P=r(at,"TR",{});var Z=a(P);Te=r(Z,"TD",{});var Go=a(Te);Zt=n(Go,"CPU"),Go.forEach(o),eo=p(Z),De=r(Z,"TD",{});var Fo=a(De);to=n(Fo,"50"),Fo.forEach(o),oo=p(Z),qe=r(Z,"TD",{});var Ko=a(qe);so=n(Ko,"213.46s"),Ko.forEach(o),Z.forEach(o),ro=p(at),k=r(at,"TR",{});var ee=a(k);xe=r(ee,"TD",{});var Yo=a(xe);ao=n(Yo,"MPS"),Yo.forEach(o),io=p(ee),Ce=r(ee,"TD",{});var Jo=a(Ce);no=n(Jo,"50"),Jo.forEach(o),lo=p(ee),Ie=r(ee,"TD",{});var zo=a(Ie);po=n(zo,"30.81s"),zo.forEach(o),ee.forEach(o),at.forEach(o),rt.forEach(o),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(as)),f(S,"id","how-to-use-stable-diffusion-in-apple-silicon-m1m2"),f(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(S,"href","#how-to-use-stable-diffusion-in-apple-silicon-m1m2"),f(v,"class","relative group"),f(M,"id","requirements"),f(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(M,"href","#requirements"),f(w,"class","relative group"),f(L,"href","https://pytorch.org/get-started/locally/"),f(L,"rel","nofollow"),f(T,"id","inference-pipeline"),f(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(T,"href","#inference-pipeline"),f(g,"class","relative group"),f(D,"id","known-issues"),f(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(D,"href","#known-issues"),f(b,"class","relative group"),f(V,"href","https://github.com/huggingface/diffusers/issues/372"),f(V,"rel","nofollow"),f(W,"href","https://github.com/huggingface/diffusers/issues/363"),f(W,"rel","nofollow"),f(x,"href","https://github.com/pytorch/pytorch/issues/84039#issuecomment-1237735249"),f(x,"rel","nofollow"),f(C,"id","performance"),f(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(C,"href","#performance"),f(y,"class","relative group")},m(t,h){e(document.head,d),c(t,Ne,h),c(t,v,h),e(v,S),e(S,ne),se(N,ne,null),e(v,it),e(v,le),e(le,nt),c(t,He,h),c(t,A,h),e(A,lt),e(A,pe),e(pe,pt),e(A,ft),c(t,Le,h),c(t,w,h),e(w,M),e(M,fe),se(H,fe,null),e(w,ht),e(w,he),e(he,ct),c(t,Oe,h),c(t,u,h),e(u,ce),e(ce,ut),e(u,mt),e(u,ue),e(ue,dt),e(u,vt),e(u,me),e(me,wt),e(u,_t),e(u,_),e(_,gt),e(_,L),e(L,bt),e(_,Et),e(_,de),e(de,yt),e(_,$t),c(t,Re,h),c(t,g,h),e(g,T),e(T,ve),se(O,ve,null),e(g,Pt),e(g,we),e(we,kt),c(t,Be,h),c(t,m,h),e(m,St),e(m,_e),e(_e,At),e(m,Mt),e(m,ge),e(ge,Tt),e(m,Dt),c(t,Ue,h),c(t,K,h),e(K,qt),c(t,Ve,h),se(R,t,h),c(t,We,h),c(t,b,h),e(b,D),e(D,be),se(B,be,null),e(b,xt),e(b,Ee),e(Ee,Ct),c(t,Ge,h),c(t,q,h),e(q,U),e(U,It),e(U,V),e(V,jt),e(U,Nt),e(q,Ht),e(q,E),e(E,Lt),e(E,W),e(W,Ot),e(E,Rt),e(E,x),e(x,ye),e(ye,Bt),e(x,Ut),e(E,Vt),c(t,Fe,h),c(t,y,h),e(y,C),e(C,$e),se(G,$e,null),e(y,Wt),e(y,Pe),e(Pe,Gt),c(t,Ke,h),c(t,Y,h),e(Y,Ft),c(t,Ye,h),c(t,I,h),e(I,ke),e(ke,$),e($,Se),e(Se,Kt),e($,Yt),e($,Ae),e(Ae,Jt),e($,zt),e($,Me),e(Me,Qt),e(I,Xt),e(I,F),e(F,P),e(P,Te),e(Te,Zt),e(P,eo),e(P,De),e(De,to),e(P,oo),e(P,qe),e(qe,so),e(F,ro),e(F,k),e(k,xe),e(xe,ao),e(k,io),e(k,Ce),e(Ce,no),e(k,lo),e(k,Ie),e(Ie,po),Je=!0},p:ts,i(t){Je||(re(N.$$.fragment,t),re(H.$$.fragment,t),re(O.$$.fragment,t),re(R.$$.fragment,t),re(B.$$.fragment,t),re(G.$$.fragment,t),Je=!0)},o(t){ae(N.$$.fragment,t),ae(H.$$.fragment,t),ae(O.$$.fragment,t),ae(R.$$.fragment,t),ae(B.$$.fragment,t),ae(G.$$.fragment,t),Je=!1},d(t){o(d),t&&o(Ne),t&&o(v),ie(N),t&&o(He),t&&o(A),t&&o(Le),t&&o(w),ie(H),t&&o(Oe),t&&o(u),t&&o(Re),t&&o(g),ie(O),t&&o(Be),t&&o(m),t&&o(Ue),t&&o(K),t&&o(Ve),ie(R,t),t&&o(We),t&&o(b),ie(B),t&&o(Ge),t&&o(q),t&&o(Fe),t&&o(y),ie(G),t&&o(Ke),t&&o(Y),t&&o(Ye),t&&o(I)}}}const as={local:"how-to-use-stable-diffusion-in-apple-silicon-m1m2",sections:[{local:"requirements",title:"Requirements"},{local:"inference-pipeline",title:"Inference Pipeline"},{local:"known-issues",title:"Known Issues"},{local:"performance",title:"Performance"}],title:"How to use Stable Diffusion in Apple Silicon (M1/M2)"};function is(ho){return os(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class fs extends Qo{constructor(d){super();Xo(this,d,is,rs,Zo,{})}}export{fs as default,as as metadata};