import{S as Q,i as R,s as W,l as S,g as y,q as C,o as F,d as u,F as Y,e as v,t as D,k as $,c as b,a as k,h as V,m as j,b as h,G as m,H as z,I as B,J as M,K as X,j as O}from"../chunks/vendor-hf-doc-builder.js";import{b as P}from"../chunks/paths-hf-doc-builder.js";function T(n,t,r){const a=n.slice();return a[3]=t[r],a}function Z(n){let t,r,a,e,l,o,w,c,d,q,g,A,x,E=n[0],f=[];for(let s=0;s<E.length;s+=1)f[s]=U(T(n,E,s));const L=n[2].default,_=Y(L,n,n[1],null);return{c(){t=v("style"),r=D(`body,
		html {
			padding: 0;
			margin: 0;
		}`),a=$(),e=v("div"),l=v("div"),o=v("ul");for(let s=0;s<f.length;s+=1)f[s].c();w=$(),c=v("div"),d=v("div"),_&&_.c(),q=$(),g=v("div"),A=D("Sub side menu"),this.h()},l(s){t=b(s,"STYLE",{});var p=k(t);r=V(p,`body,
		html {
			padding: 0;
			margin: 0;
		}`),p.forEach(u),a=j(s),e=b(s,"DIV",{class:!0});var i=k(e);l=b(i,"DIV",{class:!0});var I=k(l);o=b(I,"UL",{class:!0});var G=k(o);for(let N=0;N<f.length;N+=1)f[N].l(G);G.forEach(u),I.forEach(u),w=j(i),c=b(i,"DIV",{class:!0});var H=k(c);d=b(H,"DIV",{class:!0});var J=k(d);_&&_.l(J),J.forEach(u),H.forEach(u),q=j(i),g=b(i,"DIV",{class:!0});var K=k(g);A=V(K,"Sub side menu"),K.forEach(u),i.forEach(u),this.h()},h(){h(o,"class","pt-2 flex flex-col pl-3 w-full"),h(l,"class","w-[270px] 2xl:w-[300px] hidden md:block border-r-2 shrink-0"),h(d,"class","prose prose-doc dark:prose-light max-w-4xl mx-auto break-words relative"),h(c,"class","px-4 pt-3 grow"),h(g,"class","w-[270px] 2xl:w-[305px] hidden lg:block border-l-2 shrink-0 opacity-50 p-4"),h(e,"class","flex")},m(s,p){y(s,t,p),m(t,r),y(s,a,p),y(s,e,p),m(e,l),m(l,o);for(let i=0;i<f.length;i+=1)f[i].m(o,null);m(e,w),m(e,c),m(c,d),_&&_.m(d,null),m(e,q),m(e,g),m(g,A),x=!0},p(s,p){if(p&1){E=s[0];let i;for(i=0;i<E.length;i+=1){const I=T(s,E,i);f[i]?f[i].p(I,p):(f[i]=U(I),f[i].c(),f[i].m(o,null))}for(;i<f.length;i+=1)f[i].d(1);f.length=E.length}_&&_.p&&(!x||p&2)&&z(_,L,s,s[1],x?M(L,s[1],p,null):B(s[1]),null)},i(s){x||(C(_,s),x=!0)},o(s){F(_,s),x=!1},d(s){s&&u(t),s&&u(a),s&&u(e),X(f,s),_&&_.d(s)}}}function ee(n){let t;const r=n[2].default,a=Y(r,n,n[1],null);return{c(){a&&a.c()},l(e){a&&a.l(e)},m(e,l){a&&a.m(e,l),t=!0},p(e,l){a&&a.p&&(!t||l&2)&&z(a,r,e,e[1],t?M(r,e[1],l,null):B(e[1]),null)},i(e){t||(C(a,e),t=!0)},o(e){F(a,e),t=!1},d(e){a&&a.d(e)}}}function te(n){let t,r=n[3].title+"",a;return{c(){t=v("span"),a=D(r),this.h()},l(e){t=b(e,"SPAN",{role:!0,class:!0});var l=k(t);a=V(l,r),l.forEach(u),this.h()},h(){h(t,"role","navigation"),h(t,"class","opacity-50 text-lg block text-gray-500 pr-2 hover:text-black dark:hover:text-gray-300 py-1")},m(e,l){y(e,t,l),m(t,a)},p(e,l){l&1&&r!==(r=e[3].title+"")&&O(a,r)},d(e){e&&u(t)}}}function le(n){let t,r=n[3].title+"",a,e;return{c(){t=v("a"),a=D(r),this.h()},l(l){t=b(l,"A",{role:!0,class:!0,href:!0});var o=k(t);a=V(o,r),o.forEach(u),this.h()},h(){h(t,"role","navigation"),h(t,"class","block text-gray-500 pr-2 hover:text-black dark:hover:text-gray-300 py-1"),h(t,"href",e=P+"/"+n[3].local.replace(/\bindex$/,""))},m(l,o){y(l,t,o),m(t,a)},p(l,o){o&1&&r!==(r=l[3].title+"")&&O(a,r),o&1&&e!==(e=P+"/"+l[3].local.replace(/\bindex$/,""))&&h(t,"href",e)},d(l){l&&u(t)}}}function U(n){let t;function r(l,o){return l[3].local?le:te}let a=r(n),e=a(n);return{c(){e.c(),t=S()},l(l){e.l(l),t=S()},m(l,o){e.m(l,o),y(l,t,o)},p(l,o){a===(a=r(l))&&e?e.p(l,o):(e.d(1),e=a(l),e&&(e.c(),e.m(t.parentNode,t)))},d(l){e.d(l),l&&u(t)}}}function ae(n){let t,r,a,e;const l=[ee,Z],o=[];function w(c,d){return 0}return t=w(),r=o[t]=l[t](n),{c(){r.c(),a=S()},l(c){r.l(c),a=S()},m(c,d){o[t].m(c,d),y(c,a,d),e=!0},p(c,[d]){r.p(c,d)},i(c){e||(C(r),e=!0)},o(c){F(r),e=!1},d(c){o[t].d(c),c&&u(a)}}}async function ne(n){return{}}function re(n,t,r){let{$$slots:a={},$$scope:e}=t,{toc:l}=t;return n.$$set=o=>{"toc"in o&&r(0,l=o.toc),"$$scope"in o&&r(1,e=o.$$scope)},[l,e,a]}class ie extends Q{constructor(t){super();R(this,t,re,ae,W,{toc:0})}}export{ie as default,ne as load};