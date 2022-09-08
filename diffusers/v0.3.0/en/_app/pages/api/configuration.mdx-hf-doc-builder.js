import{S as tt,i as nt,s as it,e as n,k as h,w as B,t as a,M as rt,c as i,d as o,m as u,a as r,x as G,h as s,b as d,G as e,g as $,y as H,q as R,o as j,B as K,v as at}from"../../chunks/vendor-hf-doc-builder.js";import{T as et}from"../../chunks/Tip-hf-doc-builder.js";import{D as Po}from"../../chunks/Docstring-hf-doc-builder.js";import{I as ot}from"../../chunks/IconCopyLink-hf-doc-builder.js";function st(Q){let l,b;return{c(){l=n("p"),b=a("Passing `use_auth_token=True\u201C is required when you want to use a private model.")},l(f){l=i(f,"P",{});var m=r(l);b=s(m,"Passing `use_auth_token=True\u201C is required when you want to use a private model."),m.forEach(o)},m(f,m){$(f,l,m),e(l,b)},d(f){f&&o(l)}}}function lt(Q){let l,b,f,m,E;return{c(){l=n("p"),b=a("Activate the special "),f=n("a"),m=a("\u201Coffline-mode\u201D"),E=a(` to
use this method in a firewalled environment.`),this.h()},l(v){l=i(v,"P",{});var w=r(l);b=s(w,"Activate the special "),f=i(w,"A",{href:!0,rel:!0});var A=r(f);m=s(A,"\u201Coffline-mode\u201D"),A.forEach(o),E=s(w,` to
use this method in a firewalled environment.`),w.forEach(o),this.h()},h(){d(f,"href","https://huggingface.co/transformers/installation.html#offline-mode"),d(f,"rel","nofollow")},m(v,w){$(v,l,w),e(l,b),e(l,f),e(f,m),e(l,E)},d(v){v&&o(l)}}}function ft(Q){let l,b,f,m,E,v,w,A,Le,ye,p,Oe,X,Ie,Te,Y,Ne,qe,Z,Fe,ze,le,Je,Ue,Ce,ee,Ve,Ee,M,S,fe,N,We,de,Be,Me,c,q,Ge,k,He,ce,Re,je,oe,Ke,Qe,Xe,F,he,te,Ye,Ze,ue,ne,eo,oo,ge,to,no,z,y,me,io,ro,pe,ao,so,ie,lo,fo,co,D,_e,ho,uo,ve,go,mo,po,x,J,_o,be,vo,bo,L,xo,O,$o,I,U,wo,P,yo,xe,Co,Eo,re,Mo,ko,ke;return v=new ot({}),N=new ot({}),q=new Po({props:{name:"class diffusers.ConfigMixin",anchor:"diffusers.ConfigMixin",parameters:[],source:"https://github.com/huggingface/diffusers/blob/v0.3.0/src/diffusers/configuration_utils.py#L38"}}),J=new Po({props:{name:"from_config",anchor:"diffusers.ConfigMixin.from_config",parameters:[{name:"pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike]"},{name:"return_unused_kwargs",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"diffusers.ConfigMixin.from_config.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>, <em>optional</em>) &#x2014;
Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a model repo on huggingface.co. Valid model ids should have an
organization name, like <code>google/ddpm-celebahq-256</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using <a href="/docs/diffusers/v0.3.0/en/api/configuration#diffusers.ConfigMixin.save_config">save_config()</a>, e.g.,
<code>./my_model_directory/</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"},{anchor:"diffusers.ConfigMixin.from_config.cache_dir",description:`<strong>cache_dir</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Path to a directory in which a downloaded pretrained model configuration should be cached if the
standard cache should not be used.`,name:"cache_dir"},{anchor:"diffusers.ConfigMixin.from_config.ignore_mismatched_sizes",description:`<strong>ignore_mismatched_sizes</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to raise an error if some of the weights from the checkpoint do not have the same size
as the weights of the model (if for instance, you are instantiating a model with 10 labels from a
checkpoint with 3 labels).`,name:"ignore_mismatched_sizes"},{anchor:"diffusers.ConfigMixin.from_config.force_download",description:`<strong>force_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to force the (re-)download of the model weights and configuration files, overriding the
cached versions if they exist.`,name:"force_download"},{anchor:"diffusers.ConfigMixin.from_config.resume_download",description:`<strong>resume_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to delete incompletely received files. Will attempt to resume the download if such a
file exists.`,name:"resume_download"},{anchor:"diffusers.ConfigMixin.from_config.proxies",description:`<strong>proxies</strong> (<code>Dict[str, str]</code>, <em>optional</em>) &#x2014;
A dictionary of proxy servers to use by protocol or endpoint, e.g., <code>{&apos;http&apos;: &apos;foo.bar:3128&apos;, &apos;http://hostname&apos;: &apos;foo.bar:4012&apos;}</code>. The proxies are used on each request.`,name:"proxies"},{anchor:"diffusers.ConfigMixin.from_config.output_loading_info(bool,",description:`<strong>output_loading_info(<code>bool</code>,</strong> <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether ot not to also return a dictionary containing missing keys, unexpected keys and error messages.`,name:"output_loading_info(bool,"},{anchor:"diffusers.ConfigMixin.from_config.local_files_only(bool,",description:`<strong>local_files_only(<code>bool</code>,</strong> <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to only look at local files (i.e., do not try to download the model).`,name:"local_files_only(bool,"},{anchor:"diffusers.ConfigMixin.from_config.use_auth_token",description:`<strong>use_auth_token</strong> (<code>str</code> or <em>bool</em>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote files. If <code>True</code>, will use the token generated
when running <code>transformers-cli login</code> (stored in <code>~/.huggingface</code>).`,name:"use_auth_token"},{anchor:"diffusers.ConfigMixin.from_config.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;main&quot;</code>) &#x2014;
The specific model version to use. It can be a branch name, a tag name, or a commit id, since we use a
git-based system for storing models and other artifacts on huggingface.co, so <code>revision</code> can be any
identifier allowed by git.`,name:"revision"},{anchor:"diffusers.ConfigMixin.from_config.mirror",description:`<strong>mirror</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Mirror source to accelerate downloads in China. If you are from China and have an accessibility
problem, you can set this option to resolve it. Note that we do not guarantee the timeliness or safety.
Please refer to the mirror site for more information.`,name:"mirror"}],source:"https://github.com/huggingface/diffusers/blob/v0.3.0/src/diffusers/configuration_utils.py#L96"}}),L=new et({props:{$$slots:{default:[st]},$$scope:{ctx:Q}}}),O=new et({props:{$$slots:{default:[lt]},$$scope:{ctx:Q}}}),U=new Po({props:{name:"save_config",anchor:"diffusers.ConfigMixin.save_config",parameters:[{name:"save_directory",val:": typing.Union[str, os.PathLike]"},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"diffusers.ConfigMixin.save_config.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the configuration JSON file will be saved (will be created if it does not exist).`,name:"save_directory"}],source:"https://github.com/huggingface/diffusers/blob/v0.3.0/src/diffusers/configuration_utils.py#L76"}}),{c(){l=n("meta"),b=h(),f=n("h1"),m=n("a"),E=n("span"),B(v.$$.fragment),w=h(),A=n("span"),Le=a("Configuration"),ye=h(),p=n("p"),Oe=a("In Diffusers, schedulers of type "),X=n("a"),Ie=a("schedulers.scheduling_utils.SchedulerMixin"),Te=a(", and models of type "),Y=n("a"),Ne=a("ModelMixin"),qe=a(" inherit from "),Z=n("a"),Fe=a("ConfigMixin"),ze=a(` which conveniently takes care of storing all parameters that are
passed to the respective `),le=n("code"),Je=a("__init__"),Ue=a(" methods in a JSON-configuration file."),Ce=h(),ee=n("p"),Ve=a("TODO(PVP) - add example and better info here"),Ee=h(),M=n("h2"),S=n("a"),fe=n("span"),B(N.$$.fragment),We=h(),de=n("span"),Be=a("ConfigMixin"),Me=h(),c=n("div"),B(q.$$.fragment),Ge=h(),k=n("p"),He=a("Base class for all configuration classes. Stores all configuration parameters under "),ce=n("code"),Re=a("self.config"),je=a(` Also handles all
methods for loading/downloading/saving classes inheriting from `),oe=n("a"),Ke=a("ConfigMixin"),Qe=a(" with"),Xe=h(),F=n("ul"),he=n("li"),te=n("a"),Ye=a("from_config()"),Ze=h(),ue=n("li"),ne=n("a"),eo=a("save_config()"),oo=h(),ge=n("p"),to=a("Class attributes:"),no=h(),z=n("ul"),y=n("li"),me=n("strong"),io=a("config_name"),ro=a(" ("),pe=n("code"),ao=a("str"),so=a(`) \u2014 A filename under which the config should stored when calling
`),ie=n("a"),lo=a("save_config()"),fo=a(" (should be overriden by parent class)."),co=h(),D=n("li"),_e=n("strong"),ho=a("ignore_for_config"),uo=a(" ("),ve=n("code"),go=a("List[str]"),mo=a(`) \u2014 A list of attributes that should not be saved in the config (should be
overriden by parent class).`),po=h(),x=n("div"),B(J.$$.fragment),_o=h(),be=n("p"),vo=a("Instantiate a Python class from a pre-defined JSON-file."),bo=h(),B(L.$$.fragment),xo=h(),B(O.$$.fragment),$o=h(),I=n("div"),B(U.$$.fragment),wo=h(),P=n("p"),yo=a("Save a configuration object to the directory "),xe=n("code"),Co=a("save_directory"),Eo=a(`, so that it can be re-loaded using the
`),re=n("a"),Mo=a("from_config()"),ko=a(" class method."),this.h()},l(t){const g=rt('[data-svelte="svelte-1phssyn"]',document.head);l=i(g,"META",{name:!0,content:!0}),g.forEach(o),b=u(t),f=i(t,"H1",{class:!0});var V=r(f);m=i(V,"A",{id:!0,class:!0,href:!0});var $e=r(m);E=i($e,"SPAN",{});var Ao=r(E);G(v.$$.fragment,Ao),Ao.forEach(o),$e.forEach(o),w=u(V),A=i(V,"SPAN",{});var So=r(A);Le=s(So,"Configuration"),So.forEach(o),V.forEach(o),ye=u(t),p=i(t,"P",{});var C=r(p);Oe=s(C,"In Diffusers, schedulers of type "),X=i(C,"A",{href:!0});var Do=r(X);Ie=s(Do,"schedulers.scheduling_utils.SchedulerMixin"),Do.forEach(o),Te=s(C,", and models of type "),Y=i(C,"A",{href:!0});var Lo=r(Y);Ne=s(Lo,"ModelMixin"),Lo.forEach(o),qe=s(C," inherit from "),Z=i(C,"A",{href:!0});var Oo=r(Z);Fe=s(Oo,"ConfigMixin"),Oo.forEach(o),ze=s(C,` which conveniently takes care of storing all parameters that are
passed to the respective `),le=i(C,"CODE",{});var Io=r(le);Je=s(Io,"__init__"),Io.forEach(o),Ue=s(C," methods in a JSON-configuration file."),C.forEach(o),Ce=u(t),ee=i(t,"P",{});var To=r(ee);Ve=s(To,"TODO(PVP) - add example and better info here"),To.forEach(o),Ee=u(t),M=i(t,"H2",{class:!0});var Pe=r(M);S=i(Pe,"A",{id:!0,class:!0,href:!0});var No=r(S);fe=i(No,"SPAN",{});var qo=r(fe);G(N.$$.fragment,qo),qo.forEach(o),No.forEach(o),We=u(Pe),de=i(Pe,"SPAN",{});var Fo=r(de);Be=s(Fo,"ConfigMixin"),Fo.forEach(o),Pe.forEach(o),Me=u(t),c=i(t,"DIV",{class:!0});var _=r(c);G(q.$$.fragment,_),Ge=u(_),k=i(_,"P",{});var ae=r(k);He=s(ae,"Base class for all configuration classes. Stores all configuration parameters under "),ce=i(ae,"CODE",{});var zo=r(ce);Re=s(zo,"self.config"),zo.forEach(o),je=s(ae,` Also handles all
methods for loading/downloading/saving classes inheriting from `),oe=i(ae,"A",{href:!0});var Jo=r(oe);Ke=s(Jo,"ConfigMixin"),Jo.forEach(o),Qe=s(ae," with"),ae.forEach(o),Xe=u(_),F=i(_,"UL",{});var Ae=r(F);he=i(Ae,"LI",{});var Uo=r(he);te=i(Uo,"A",{href:!0});var Vo=r(te);Ye=s(Vo,"from_config()"),Vo.forEach(o),Uo.forEach(o),Ze=u(Ae),ue=i(Ae,"LI",{});var Wo=r(ue);ne=i(Wo,"A",{href:!0});var Bo=r(ne);eo=s(Bo,"save_config()"),Bo.forEach(o),Wo.forEach(o),Ae.forEach(o),oo=u(_),ge=i(_,"P",{});var Go=r(ge);to=s(Go,"Class attributes:"),Go.forEach(o),no=u(_),z=i(_,"UL",{});var Se=r(z);y=i(Se,"LI",{});var W=r(y);me=i(W,"STRONG",{});var Ho=r(me);io=s(Ho,"config_name"),Ho.forEach(o),ro=s(W," ("),pe=i(W,"CODE",{});var Ro=r(pe);ao=s(Ro,"str"),Ro.forEach(o),so=s(W,`) \u2014 A filename under which the config should stored when calling
`),ie=i(W,"A",{href:!0});var jo=r(ie);lo=s(jo,"save_config()"),jo.forEach(o),fo=s(W," (should be overriden by parent class)."),W.forEach(o),co=u(Se),D=i(Se,"LI",{});var we=r(D);_e=i(we,"STRONG",{});var Ko=r(_e);ho=s(Ko,"ignore_for_config"),Ko.forEach(o),uo=s(we," ("),ve=i(we,"CODE",{});var Qo=r(ve);go=s(Qo,"List[str]"),Qo.forEach(o),mo=s(we,`) \u2014 A list of attributes that should not be saved in the config (should be
overriden by parent class).`),we.forEach(o),Se.forEach(o),po=u(_),x=i(_,"DIV",{class:!0});var T=r(x);G(J.$$.fragment,T),_o=u(T),be=i(T,"P",{});var Xo=r(be);vo=s(Xo,"Instantiate a Python class from a pre-defined JSON-file."),Xo.forEach(o),bo=u(T),G(L.$$.fragment,T),xo=u(T),G(O.$$.fragment,T),T.forEach(o),$o=u(_),I=i(_,"DIV",{class:!0});var De=r(I);G(U.$$.fragment,De),wo=u(De),P=i(De,"P",{});var se=r(P);yo=s(se,"Save a configuration object to the directory "),xe=i(se,"CODE",{});var Yo=r(xe);Co=s(Yo,"save_directory"),Yo.forEach(o),Eo=s(se,`, so that it can be re-loaded using the
`),re=i(se,"A",{href:!0});var Zo=r(re);Mo=s(Zo,"from_config()"),Zo.forEach(o),ko=s(se," class method."),se.forEach(o),De.forEach(o),_.forEach(o),this.h()},h(){d(l,"name","hf:doc:metadata"),d(l,"content",JSON.stringify(dt)),d(m,"id","configuration"),d(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(m,"href","#configuration"),d(f,"class","relative group"),d(X,"href","/docs/diffusers/v0.3.0/en/api/schedulers#diffusers.SchedulerMixin"),d(Y,"href","/docs/diffusers/v0.3.0/en/api/models#diffusers.ModelMixin"),d(Z,"href","/docs/diffusers/v0.3.0/en/api/configuration#diffusers.ConfigMixin"),d(S,"id","diffusers.ConfigMixin"),d(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(S,"href","#diffusers.ConfigMixin"),d(M,"class","relative group"),d(oe,"href","/docs/diffusers/v0.3.0/en/api/configuration#diffusers.ConfigMixin"),d(te,"href","/docs/diffusers/v0.3.0/en/api/configuration#diffusers.ConfigMixin.from_config"),d(ne,"href","/docs/diffusers/v0.3.0/en/api/configuration#diffusers.ConfigMixin.save_config"),d(ie,"href","/docs/diffusers/v0.3.0/en/api/configuration#diffusers.ConfigMixin.save_config"),d(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(re,"href","/docs/diffusers/v0.3.0/en/api/configuration#diffusers.ConfigMixin.from_config"),d(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(c,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,l),$(t,b,g),$(t,f,g),e(f,m),e(m,E),H(v,E,null),e(f,w),e(f,A),e(A,Le),$(t,ye,g),$(t,p,g),e(p,Oe),e(p,X),e(X,Ie),e(p,Te),e(p,Y),e(Y,Ne),e(p,qe),e(p,Z),e(Z,Fe),e(p,ze),e(p,le),e(le,Je),e(p,Ue),$(t,Ce,g),$(t,ee,g),e(ee,Ve),$(t,Ee,g),$(t,M,g),e(M,S),e(S,fe),H(N,fe,null),e(M,We),e(M,de),e(de,Be),$(t,Me,g),$(t,c,g),H(q,c,null),e(c,Ge),e(c,k),e(k,He),e(k,ce),e(ce,Re),e(k,je),e(k,oe),e(oe,Ke),e(k,Qe),e(c,Xe),e(c,F),e(F,he),e(he,te),e(te,Ye),e(F,Ze),e(F,ue),e(ue,ne),e(ne,eo),e(c,oo),e(c,ge),e(ge,to),e(c,no),e(c,z),e(z,y),e(y,me),e(me,io),e(y,ro),e(y,pe),e(pe,ao),e(y,so),e(y,ie),e(ie,lo),e(y,fo),e(z,co),e(z,D),e(D,_e),e(_e,ho),e(D,uo),e(D,ve),e(ve,go),e(D,mo),e(c,po),e(c,x),H(J,x,null),e(x,_o),e(x,be),e(be,vo),e(x,bo),H(L,x,null),e(x,xo),H(O,x,null),e(c,$o),e(c,I),H(U,I,null),e(I,wo),e(I,P),e(P,yo),e(P,xe),e(xe,Co),e(P,Eo),e(P,re),e(re,Mo),e(P,ko),ke=!0},p(t,[g]){const V={};g&2&&(V.$$scope={dirty:g,ctx:t}),L.$set(V);const $e={};g&2&&($e.$$scope={dirty:g,ctx:t}),O.$set($e)},i(t){ke||(R(v.$$.fragment,t),R(N.$$.fragment,t),R(q.$$.fragment,t),R(J.$$.fragment,t),R(L.$$.fragment,t),R(O.$$.fragment,t),R(U.$$.fragment,t),ke=!0)},o(t){j(v.$$.fragment,t),j(N.$$.fragment,t),j(q.$$.fragment,t),j(J.$$.fragment,t),j(L.$$.fragment,t),j(O.$$.fragment,t),j(U.$$.fragment,t),ke=!1},d(t){o(l),t&&o(b),t&&o(f),K(v),t&&o(ye),t&&o(p),t&&o(Ce),t&&o(ee),t&&o(Ee),t&&o(M),K(N),t&&o(Me),t&&o(c),K(q),K(J),K(L),K(O),K(U)}}}const dt={local:"configuration",sections:[{local:"diffusers.ConfigMixin",title:"ConfigMixin"}],title:"Configuration"};function ct(Q){return at(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class pt extends tt{constructor(l){super();nt(this,l,ct,ft,it,{})}}export{pt as default,dt as metadata};