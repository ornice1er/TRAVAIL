import{b as V,e as O,h as H}from"./chunk-EY4IEKFF.js";import"./chunk-FXW7QUUF.js";import{a as j}from"./chunk-UPBJ7R4V.js";import{a as $}from"./chunk-7DGH5SRO.js";import"./chunk-ATU2I464.js";import{l as M,m as D,n as I,o as F,p as T,t as z,u as B,x as L}from"./chunk-BE5332LF.js";import{Ac as g,Bc as E,Dc as f,Jb as r,Kb as i,Lb as s,Mb as C,Nb as k,Va as y,Vb as u,Wa as v,Za as n,db as b,hc as l,ic as _,jc as c,ka as p,la as w,mb as S,rb as d,sc as q,zb as o}from"./chunk-CRPGZ22B.js";import"./chunk-GAL4ENT6.js";var G=t=>["/communiques",t];function N(t,m){if(t&1&&(r(0,"span",19),l(1),i()),t&2){let e=m.$implicit;n(),c(" #",e," ")}}function P(t,m){if(t&1&&(r(0,"div",15)(1,"h4",16),l(2,"Mots-cl\xE9s :"),i(),r(3,"div",17),d(4,N,2,1,"span",18),i()()),t&2){let e=u(2);n(4),o("ngForOf",e.communique.tags)}}function R(t,m){t&1&&(p(),r(0,"svg",35),s(1,"path",36),i())}function U(t,m){t&1&&(p(),r(0,"svg",37),s(1,"path",38),i())}function A(t,m){if(t&1&&(r(0,"div",24)(1,"div",25),C(2,26),d(3,R,2,0,"svg",27)(4,U,2,0,"svg",28),k(),i(),r(5,"div",29)(6,"h5",30),l(7),i(),r(8,"p",31),l(9),g(10,"date"),i()(),r(11,"div",32)(12,"a",33),l(13,"Voir"),i(),r(14,"a",34),l(15,"T\xE9l\xE9charger"),i()()()),t&2){let e=m.$implicit,a=u(3);n(2),o("ngSwitch",e.type),n(),o("ngSwitchCase","pdf"),n(3),o("title",e.nom),n(),c(" ",e.nom," "),n(2),c(" ",f(10,7,e.created_at,"d MMMM yyyy","fr")," "),n(3),o("href",a.getLink("communiques",e.filename),v),n(2),o("href",a.getLink("communiques",e.filename),v)}}function K(t,m){if(t&1&&(r(0,"section",20)(1,"h4",21),l(2," \u{1F4C4} Fichiers du communiqu\xE9 "),i(),r(3,"div",22),d(4,A,16,11,"div",23),i()()),t&2){let e=u(2);n(4),o("ngForOf",e.communique.files)}}function W(t,m){t&1&&(p(),r(0,"svg",35),s(1,"path",36),i())}function J(t,m){t&1&&(p(),r(0,"svg",37),s(1,"path",38),i())}function Q(t,m){if(t&1&&(r(0,"div",48)(1,"div",25),C(2,26),d(3,W,2,0,"svg",27)(4,J,2,0,"svg",28),k(),i(),r(5,"div",29)(6,"h5",30),l(7),i(),r(8,"p",31),l(9),g(10,"date"),i()(),r(11,"div",32)(12,"a",33),l(13,"Voir"),i(),r(14,"a",34),l(15,"T\xE9l\xE9charger"),i()()()),t&2){let e=m.$implicit,a=u(4);n(2),o("ngSwitch",e.type),n(),o("ngSwitchCase","pdf"),n(3),o("title",e.title),n(),c(" ",e.title," "),n(2),c(" ",f(10,7,e.created_at,"d MMMM yyyy","fr")," "),n(3),o("href",a.getLink("tests",e.filename),v),n(2),o("href",a.getLink("tests",e.filename),v)}}function X(t,m){if(t&1&&(r(0,"div",45)(1,"h5",46),l(2),i(),d(3,Q,16,11,"div",47),i()),t&2){let e=m.$implicit;n(2),_(e.key),n(),o("ngForOf",e.value)}}function Y(t,m){if(t&1&&(r(0,"div",48)(1,"div",29)(2,"h5",51),l(3),i(),r(4,"p",31),l(5),g(6,"date"),i()(),r(7,"div",32)(8,"a",52),l(9,"Voir"),i()()()),t&2){let e=m.$implicit;n(3),_(e.title),n(2),c(" ",f(6,3,e.created_at,"d MMMM yyyy","fr")," "),n(3),o("routerLink",q(7,G,e.slug))}}function Z(t,m){if(t&1&&(r(0,"div",49)(1,"h5",50),l(2,"\u{1F4E2} Communiqu\xE9s associ\xE9s"),i(),d(3,Y,10,9,"div",47),i()),t&2){let e=u(3);n(3),o("ngForOf",e.communique.concours.lists)}}function ee(t,m){if(t&1&&(r(0,"section",20)(1,"h3",39),l(2,"\u{1F393} Concours associ\xE9"),i(),r(3,"div",40)(4,"h4",41),l(5),i(),s(6,"div",42),d(7,X,4,2,"div",43),g(8,"keyvalue"),d(9,Z,4,1,"div",44),i()()),t&2){let e=u(2);n(5),_(e.communique.concours.title),n(),o("innerHTML",e.communique.concours.description,y),n(),o("ngForOf",E(8,4,e.groupedConcoursFiles)),n(2),o("ngIf",e.communique.concours.lists==null?null:e.communique.concours.lists.length)}}function te(t,m){if(t&1&&(r(0,"div",1)(1,"div",2)(2,"nav",3)(3,"a",4),p(),r(4,"svg",5),s(5,"path",6),i(),l(6," Retour aux communiqu\xE9s "),i()(),w(),r(7,"article",7)(8,"header",3)(9,"div",8)(10,"span",9),l(11),i(),r(12,"span",10),l(13),g(14,"date"),i()(),r(15,"h1",11),l(16),i()(),s(17,"div",12),d(18,P,5,1,"div",13),i(),d(19,K,5,1,"section",14)(20,ee,10,6,"section",14),i()()),t&2){let e=u();n(11),c(" ",e.communique.category," "),n(2),c(" ",f(14,7,e.communique.created_at,"d MMMM yyyy","fr")," "),n(3),c(" ",e.communique.title," "),n(),o("innerHTML",e.communique.description,y),n(),o("ngIf",e.communique.tags==null?null:e.communique.tags.length),n(),o("ngIf",e.communique.files==null?null:e.communique.files.length),n(),o("ngIf",e.communique.concours)}}var de=(()=>{class t{constructor(e,a){this.route=e,this.publicService=a,this.communique=null,this.articlesSimilaires=[],this.articles=[],this.medias=[],this.groupedConcoursFiles={},this.networks=[]}ngOnInit(){this.route.params.subscribe(e=>{this.actualiteId=e.id,this.getCommunique()})}getCommunique(){this.publicService.getCommunique(this.actualiteId).subscribe(e=>{this.communique=e.data.communique,this.medias=this.communique?.files;let a=e.data.shareLinks;this.communique?.concours?.files&&(this.groupedConcoursFiles=this.groupBy(this.communique.concours.files,"type")),this.networks=[{name:"Twitter",url:a.twitter,colorClass:"text-blue-500 hover:text-blue-700",svg:`
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775
                         1.017-.609 1.798-1.574 2.165-2.724
                         -.951.564-2.005.974-3.127 1.195
                         -.897-.957-2.178-1.555-3.594-1.555
                         -3.179 0-5.515 2.966-4.797 6.045
                         -4.091-.205-7.719-2.165-10.148-5.144
                         -1.29 2.213-.669 5.108 1.523 6.574
                         -.806-.026-1.566-.247-2.229-.616
                         -.054 2.281 1.581 4.415 3.949 4.89
                         -.693.188-1.452.232-2.224.084
                         .626 1.956 2.444 3.379 4.6 3.419
                         -2.07 1.623-4.678 2.348-7.29 2.04
                         2.179 1.397 4.768 2.212 7.548 2.212
                         9.142 0 14.307-7.721 13.995-14.646
                         .962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            `},{name:"Facebook",url:a.facebook,colorClass:"text-blue-600 hover:text-blue-800",svg:`
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69
                         .88-.53 1.56-1.37 1.88-2.38
                         -.83.5-1.75.85-2.72 1.05
                         C18.37 4.5 17.26 4 16 4
                         c-2.35 0-4.27 1.92-4.27 4.29
                         0 .34.04.67.11.98
                         C8.28 9.09 5.11 7.38 3 4.79
                         c-.37.63-.58 1.37-.58 2.15
                         0 1.49.75 2.81 1.91 3.56
                         -.71 0-1.37-.2-1.95-.5v.03
                         c0 2.08 1.48 3.82 3.44 4.21
                         a4.22 4.22 0 0 1-1.93.07
                         4.28 4.28 0 0 0 4 2.98
                         8.521 8.521 0 0 1-5.33 1.84
                         c-.34 0-.68-.02-1.02-.06
                         C3.44 20.29 5.7 21 8.12 21
                         16 21 20.33 14.46 20.33 8.79
                         c0-.19 0-.37-.01-.56
                         .84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            `},{name:"LinkedIn",url:a.linkedin,colorClass:"text-blue-800 hover:text-blue-900",svg:`
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56
                         C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72
                         C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1z
                         M5.47 7.76h-.03c-1.22 0-2-.83-2-1.87
                         0-1.06.8-1.87 2.05-1.87
                         1.24 0 2 .8 2.02 1.87
                         0 1.04-.78 1.87-2.05 1.87z
                         M20.34 20.1h-3.63v-5.8
                         c0-1.45-.52-2.45-1.83-2.45
                         -1 0-1.6.67-1.87 1.32
                         -.1.23-.11.55-.11.88v6.05H9.28
                         s.05-9.82 0-10.84h3.63v1.54
                         a3.6 3.6 0 0 1 3.26-1.8
                         c2.37 0 4.15 1.55 4.15 4.9v6.2z"/>
              </svg>
            `},{name:"WhatsApp",url:a.whatsapp,colorClass:"text-green-500 hover:text-green-700",svg:`
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163a11.936 11.936 0 0 1-1.62-6.043
                         C.122 5.392 5.496 0 12.057 0
                         c3.2 0 6.2 1.24 8.457 3.497
                         2.256 2.256 3.494 5.256 3.494 8.457
                         0 6.562-5.392 11.936-11.957 11.936
                         a11.95 11.95 0 0 1-6.08-1.616L.057 24z
                         M17.472 14.382c-.297-.149-1.758-.867-2.03-.967
                         -.273-.099-.472-.149-.672.15
                         -.198.297-.767.967-.94 1.164
                         -.173.198-.347.223-.644.074
                         -.297-.149-1.255-.462-2.39-1.475
                         -.883-.788-1.48-1.761-1.654-2.059
                         -.173-.297-.018-.458.13-.606
                         .134-.133.297-.347.446-.52
                         .149-.173.198-.297.298-.495
                         .099-.198.05-.372-.025-.52
                         -.074-.149-.672-1.611-.92-2.207
                         -.242-.579-.487-.5-.672-.51
                         -.173-.007-.372-.009-.57-.009
                         -.198 0-.52.074-.792.372
                         -.272.297-1.04 1.016-1.04 2.479
                         0 1.462 1.065 2.875 1.213 3.074
                         .149.198 2.095 3.2 5.077 4.487
                         .709.306 1.262.489 1.694.626
                         .712.227 1.36.195 1.872.118
                         .571-.085 1.758-.719 2.006-1.413
                         .248-.695.248-1.29.173-1.414
                         -.074-.124-.272-.198-.57-.347z"/>
              </svg>
            `},{name:"Telegram",url:a.telegram,colorClass:"text-blue-400 hover:text-blue-600",svg:`
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12
                         12-5.373 12-12S18.627 0 12 0zm5.743 8.816
                         l-1.937 9.157c-.145.655-.522.818-1.056.51
                         l-2.92-2.153-1.407 1.354c-.155.155-.285.285-.585.285
                         l.21-2.982 5.424-4.898c.236-.21-.05-.327-.367-.117
                         l-6.705 4.22-2.888-.903c-.627-.197-.64-.627.131-.927
                         l11.27-4.355c.52-.173.974.124.81.908z"/>
              </svg>
            `}]})}groupBy(e,a){return e.reduce((x,h)=>((x[h[a]]=x[h[a]]||[]).push(h),x),{})}getLink(e,a){return`${$.toFile("storage")}/${e}/${a}`}getFileIcon(e){switch(e){case"pdf":return"text-red-600";case"doc":return"text-blue-600";case"xls":return"text-green-600";default:return"text-gray-500"}}static{this.\u0275fac=function(a){return new(a||t)(b(V),b(j))}}static{this.\u0275cmp=S({type:t,selectors:[["app-communique-detail"]],decls:1,vars:1,consts:[["class","pt-32 pb-16 bg-white dark:bg-gray-900",4,"ngIf"],[1,"pt-32","pb-16","bg-white","dark:bg-gray-900"],[1,"container-custom"],[1,"mb-8"],["routerLink","/communiques",1,"text-primary-800","dark:text-primary-400","hover:text-primary-900","dark:hover:text-primary-300","inline-flex","items-center"],["fill","none","stroke","currentColor","viewBox","0 0 24 24",1,"w-4","h-4","mr-2"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M15 19l-7-7 7-7"],[1,"max-w-4xl","mx-auto"],[1,"flex","items-center","mb-4"],[1,"bg-primary-800","dark:bg-primary-700","text-white","px-4","py-2","rounded-full","text-sm","font-medium","mr-4"],[1,"text-gray-500","dark:text-gray-400"],[1,"text-4xl","lg:text-5xl","font-bold","text-gray-900","dark:text-white","mb-6","leading-tight"],[1,"prose","prose-lg","dark:prose-invert","max-w-none","rich-content",3,"innerHTML"],["class","mt-8 pt-8 border-t border-gray-200 dark:border-gray-700",4,"ngIf"],["class","max-w-4xl mx-auto mt-12",4,"ngIf"],[1,"mt-8","pt-8","border-t","border-gray-200","dark:border-gray-700"],[1,"text-sm","font-semibold","text-gray-900","dark:text-white","mb-4"],[1,"flex","flex-wrap","gap-2"],["class","bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm",4,"ngFor","ngForOf"],[1,"bg-gray-100","dark:bg-gray-700","text-gray-700","dark:text-gray-300","px-3","py-1","rounded-full","text-sm"],[1,"max-w-4xl","mx-auto","mt-12"],[1,"text-lg","font-semibold","text-gray-800","dark:text-gray-100","mb-4"],[1,"space-y-4"],["class","group flex items-center w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-6 py-4 hover:shadow-md transition-all duration-300",4,"ngFor","ngForOf"],[1,"group","flex","items-center","w-full","bg-white","dark:bg-gray-800","border","border-gray-200","dark:border-gray-700","rounded-xl","px-6","py-4","hover:shadow-md","transition-all","duration-300"],[1,"flex","items-center","justify-center","w-12","h-12","rounded-lg","bg-primary-100","dark:bg-primary-900/40","mr-4"],[3,"ngSwitch"],["class","w-7 h-7 text-red-600","fill","none","stroke","currentColor","viewBox","0 0 24 24",4,"ngSwitchCase"],["class","w-7 h-7 text-blue-600","fill","none","stroke","currentColor","viewBox","0 0 24 24",4,"ngSwitchDefault"],[1,"flex-1","min-w-0"],[1,"font-medium","text-gray-900","dark:text-white","mb-1","truncate",3,"title"],[1,"text-xs","text-gray-500","dark:text-gray-400"],[1,"flex","items-center","space-x-4","ml-4"],["target","_blank",1,"text-primary-700","dark:text-primary-400","hover:underline","text-sm","font-medium",3,"href"],["download","",1,"text-gray-600","dark:text-gray-300","hover:text-primary-700","text-sm",3,"href"],["fill","none","stroke","currentColor","viewBox","0 0 24 24",1,"w-7","h-7","text-red-600"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M12 11V3l8 8h-6a2 2 0 01-2-2zM12 15v6m0 0l3-3m-3 3l-3-3"],["fill","none","stroke","currentColor","viewBox","0 0 24 24",1,"w-7","h-7","text-blue-600"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"],[1,"text-2xl","font-bold","mb-4"],[1,"bg-gray-50","dark:bg-gray-800","rounded-xl","p-6"],[1,"text-xl","font-semibold"],[1,"prose","dark:prose-invert","mt-4",3,"innerHTML"],["class","mt-6",4,"ngFor","ngForOf"],["class","mt-8 pt-4 border-t border-gray-200 dark:border-gray-700",4,"ngIf"],[1,"mt-6"],[1,"font-semibold","text-primary-700","mb-2"],["class","group flex items-center w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-6 py-4 hover:shadow-md transition-all duration-300 mb-2",4,"ngFor","ngForOf"],[1,"group","flex","items-center","w-full","bg-white","dark:bg-gray-800","border","border-gray-200","dark:border-gray-700","rounded-xl","px-6","py-4","hover:shadow-md","transition-all","duration-300","mb-2"],[1,"mt-8","pt-4","border-t","border-gray-200","dark:border-gray-700"],[1,"font-semibold","text-gray-900","dark:text-white","mb-4"],[1,"font-medium","text-gray-900","dark:text-white","mb-1","truncate"],[1,"text-primary-700","dark:text-primary-400","hover:underline","text-sm","font-medium",3,"routerLink"]],template:function(a,x){a&1&&d(0,te,21,11,"div",0),a&2&&o("ngIf",x.communique)},dependencies:[L,M,D,I,F,T,z,B,H,O],styles:[".line-clamp-2[_ngcontent-%COMP%]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}"]})}}return t})();export{de as CommuniqueDetailComponent};
