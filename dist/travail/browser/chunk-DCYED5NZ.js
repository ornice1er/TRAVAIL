import{a as B}from"./chunk-QVOYUIDF.js";import{a as V}from"./chunk-CYZAS4RH.js";import{b as D,e as H,h as F}from"./chunk-F5GARB6M.js";import"./chunk-QLRX7CPE.js";import"./chunk-IJY4QFLY.js";import{l as M,m as E,n as q,o as z,p as I,t as L,v as T}from"./chunk-4LU63DT7.js";import{Cc as h,Jb as t,Kb as i,Lb as d,Mb as C,Nb as w,Va as f,Vb as g,Wa as x,Za as n,db as b,gc as a,hc as S,ic as s,ka as c,la as u,mb as k,rb as p,rc as _,zb as l,zc as v}from"./chunk-NSEIPVZB.js";import"./chunk-GAL4ENT6.js";var O=r=>["/actualites",r];function j(r,m){if(r&1&&(t(0,"span",31),a(1),i()),r&2){let e=m.$implicit;n(),s(" #",e," ")}}function G(r,m){r&1&&(c(),t(0,"svg",43),d(1,"path",44),i())}function $(r,m){r&1&&(c(),t(0,"svg",45),d(1,"path",46),i())}function N(r,m){if(r&1&&(t(0,"div",32)(1,"div",33),C(2,34),p(3,G,2,0,"svg",35)(4,$,2,0,"svg",36),w(),i(),t(5,"div",37)(6,"h5",38),a(7),i(),t(8,"p",39),a(9),v(10,"date"),i()(),t(11,"div",40)(12,"a",41),a(13," Voir "),i(),t(14,"a",42),a(15," T\xE9l\xE9charger "),i()()()),r&2){let e=m.$implicit,o=g(2);n(2),l("ngSwitch",e.type),n(),l("ngSwitchCase","pdf"),n(3),l("title",e.nom),n(),s(" ",e.nom," "),n(2),s(" ",h(10,7,e.created_at,"d MMMM yyyy","fr")," "),n(3),l("href",o.getLink("communiques",e.filename),x),n(2),l("href",o.getLink("communiques",e.filename),x)}}function P(r,m){if(r&1&&(t(0,"div",2)(1,"div",3)(2,"nav",4)(3,"a",5),c(),t(4,"svg",6),d(5,"path",7),i(),a(6," Retour aux communiqu\xE9s "),i()(),u(),t(7,"article",8)(8,"header",4)(9,"div",9)(10,"span",10),a(11),i(),t(12,"span",11),a(13),v(14,"date"),i()(),t(15,"h1",12),a(16),i()(),t(17,"div",13),d(18,"p",14),i(),t(19,"div",15)(20,"h4",16),a(21," Mots-cl\xE9s : "),i(),t(22,"div",17),p(23,j,2,1,"span",18),i()(),t(24,"div",19)(25,"h4",20),a(26," \u{1F4CE} M\xE9dias associ\xE9s "),i(),t(27,"div",21),p(28,N,16,11,"div",22),i()(),t(29,"div",15)(30,"h4",16),a(31," Partager cet article : "),i(),t(32,"div",23)(33,"button",24),c(),t(34,"svg",25),d(35,"path",26),i(),u(),t(36,"span"),a(37,"Twitter"),i()(),t(38,"button",27),c(),t(39,"svg",25),d(40,"path",28),i(),u(),t(41,"span"),a(42,"Facebook"),i()(),t(43,"button",29),c(),t(44,"svg",25),d(45,"path",30),i(),u(),t(46,"span"),a(47,"LinkedIn"),i()()()()()()()),r&2){let e=g();n(11),s(" ",e.communique.category," "),n(2),S(h(14,7,e.communique.created_at,"d MMMM yyyy","fr")),n(3),s(" ",e.communique.title," "),n(),l("innerHTML",e.communique.description,f),n(),l("innerHTML",e.communique.description,f),n(5),l("ngForOf",e.communique.tags),n(5),l("ngForOf",e.medias)}}function R(r,m){if(r&1&&(t(0,"div",51)(1,"div",52),d(2,"img",53),i(),t(3,"div",54)(4,"div",55),a(5),v(6,"date"),i(),t(7,"h4",56),a(8),i(),t(9,"a",57),a(10," Lire la suite \u2192 "),i()()()),r&2){let e=m.$implicit;n(2),l("src",e.imageUrl,x)("alt",e.titre),n(3),s(" ",h(6,5,e.datePublication,"d MMM yyyy","fr")," "),n(3),s(" ",e.titre," "),n(),l("routerLink",_(9,O,e.id))}}function U(r,m){if(r&1&&(t(0,"section",47)(1,"div",3)(2,"h3",48),a(3," Communiqu\xE9s similaires "),i(),t(4,"div",49),p(5,R,11,11,"div",50),i()()()),r&2){let e=g();n(5),l("ngForOf",e.articlesSimilaires)}}var Z=(()=>{class r{constructor(e,o){this.route=e,this.publicService=o,this.communique=null,this.articlesSimilaires=[],this.articles=[],this.medias=[],this.networks=[]}ngOnInit(){this.route.params.subscribe(e=>{this.actualiteId=e.id,this.getCommunique()})}getCommunique(){this.publicService.getCommunique(this.actualiteId).subscribe(e=>{this.communique=e.data.communique,this.medias=this.communique?.files;let o=e.data.shareLinks;this.networks=[{name:"Twitter",url:o.twitter,colorClass:"text-blue-500 hover:text-blue-700",svg:`
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
            `},{name:"Facebook",url:o.facebook,colorClass:"text-blue-600 hover:text-blue-800",svg:`
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
            `},{name:"LinkedIn",url:o.linkedin,colorClass:"text-blue-800 hover:text-blue-900",svg:`
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
            `},{name:"WhatsApp",url:o.whatsapp,colorClass:"text-green-500 hover:text-green-700",svg:`
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
            `},{name:"Telegram",url:o.telegram,colorClass:"text-blue-400 hover:text-blue-600",svg:`
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12
                         12-5.373 12-12S18.627 0 12 0zm5.743 8.816
                         l-1.937 9.157c-.145.655-.522.818-1.056.51
                         l-2.92-2.153-1.407 1.354c-.155.155-.285.285-.585.285
                         l.21-2.982 5.424-4.898c.236-.21-.05-.327-.367-.117
                         l-6.705 4.22-2.888-.903c-.627-.197-.64-.627.131-.927
                         l11.27-4.355c.52-.173.974.124.81.908z"/>
              </svg>
            `}]})}getLink(e,o){return`${V.toFile("storage")}/${e}/${o}`}getFileIcon(e){switch(e){case"pdf":return"text-red-600";case"doc":return"text-blue-600";case"xls":return"text-green-600";default:return"text-gray-500"}}static{this.\u0275fac=function(o){return new(o||r)(b(D),b(B))}}static{this.\u0275cmp=k({type:r,selectors:[["app-communique-detail"]],decls:2,vars:2,consts:[["class","pt-32 pb-16 bg-white dark:bg-gray-900",4,"ngIf"],["class","section-padding bg-gray-50 dark:bg-gray-800",4,"ngIf"],[1,"pt-32","pb-16","bg-white","dark:bg-gray-900"],[1,"container-custom"],[1,"mb-8"],["routerLink","/communiques",1,"text-primary-800","dark:text-primary-400","hover:text-primary-900","dark:hover:text-primary-300","inline-flex","items-center"],["fill","none","stroke","currentColor","viewBox","0 0 24 24",1,"w-4","h-4","mr-2"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M15 19l-7-7 7-7"],[1,"max-w-4xl","mx-auto"],[1,"flex","items-center","mb-4"],[1,"bg-primary-800","dark:bg-primary-700","text-white","px-4","py-2","rounded-full","text-sm","font-medium","mr-4"],[1,"text-gray-500","dark:text-gray-400"],[1,"text-4xl","lg:text-5xl","font-bold","text-gray-900","dark:text-white","mb-6","leading-tight"],[1,"prose","prose-lg","dark:prose-invert","max-w-none","rich-content",3,"innerHTML"],[3,"innerHTML"],[1,"mt-8","pt-8","border-t","border-gray-200","dark:border-gray-700"],[1,"text-sm","font-semibold","text-gray-900","dark:text-white","mb-4"],[1,"flex","flex-wrap","gap-2"],["class","bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm",4,"ngFor","ngForOf"],[1,"mt-8"],[1,"text-lg","font-semibold","text-gray-800","dark:text-gray-100","mb-4"],[1,"grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-3","gap-6"],["class","group flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-md transition-all duration-300",4,"ngFor","ngForOf"],[1,"flex","space-x-4"],[1,"flex","items-center","space-x-2","text-blue-600","dark:text-blue-400","hover:text-blue-700","dark:hover:text-blue-300","transition-colors"],["fill","currentColor","viewBox","0 0 24 24",1,"w-5","h-5"],["d","M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"],[1,"flex","items-center","space-x-2","text-blue-700","dark:text-blue-400","hover:text-blue-800","dark:hover:text-blue-300","transition-colors"],["d","M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"],[1,"flex","items-center","space-x-2","text-blue-800","dark:text-blue-400","hover:text-blue-900","dark:hover:text-blue-300","transition-colors"],["d","M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.37 0 4.15 1.55 4.15 4.9v6.2h.02z"],[1,"bg-gray-100","dark:bg-gray-700","text-gray-700","dark:text-gray-300","px-3","py-1","rounded-full","text-sm"],[1,"group","flex","items-center","bg-white","dark:bg-gray-800","border","border-gray-200","dark:border-gray-700","rounded-xl","p-4","hover:shadow-md","transition-all","duration-300"],[1,"flex","items-center","justify-center","w-12","h-12","rounded-lg","bg-primary-100","dark:bg-primary-900/40","mr-4"],[3,"ngSwitch"],["class","w-7 h-7 text-red-600","fill","none","stroke","currentColor","viewBox","0 0 24 24",4,"ngSwitchCase"],["class","w-7 h-7 text-blue-600","fill","none","stroke","currentColor","viewBox","0 0 24 24",4,"ngSwitchDefault"],[1,"flex-1"],[1,"font-medium","text-gray-900","dark:text-white","mb-1","line-clamp-2",3,"title"],[1,"text-xs","text-gray-500","dark:text-gray-400"],[1,"flex","flex-col","items-center","space-y-1","ml-3"],["target","_blank","target","_blank",1,"text-primary-700","dark:text-primary-400","hover:underline","text-sm","font-medium",3,"href"],["target","_blank","download","",1,"text-gray-600","dark:text-gray-300","hover:text-primary-700","text-xs",3,"href"],["fill","none","stroke","currentColor","viewBox","0 0 24 24",1,"w-7","h-7","text-red-600"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M12 11V3l8 8h-6a2 2 0 01-2-2zM12 15v6m0 0l3-3m-3 3l-3-3"],["fill","none","stroke","currentColor","viewBox","0 0 24 24",1,"w-7","h-7","text-blue-600"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"],[1,"section-padding","bg-gray-50","dark:bg-gray-800"],[1,"text-2xl","font-bold","text-gray-900","dark:text-white","mb-8","text-center"],[1,"grid","grid-cols-1","md:grid-cols-3","gap-8"],["class","card overflow-hidden",4,"ngFor","ngForOf"],[1,"card","overflow-hidden"],[1,"h-48","overflow-hidden"],[1,"w-full","h-full","object-cover","hover:scale-105","transition-transform","duration-300",3,"src","alt"],[1,"p-6"],[1,"text-sm","text-gray-500","dark:text-gray-400","mb-2"],[1,"text-lg","font-semibold","text-gray-900","dark:text-white","mb-3","line-clamp-2"],[1,"text-primary-800","dark:text-primary-400","hover:text-primary-900","dark:hover:text-primary-300","font-medium",3,"routerLink"]],template:function(o,y){o&1&&p(0,P,48,11,"div",0)(1,U,6,1,"section",1),o&2&&(l("ngIf",y.communique),n(),l("ngIf",y.communique))},dependencies:[T,M,E,q,z,I,L,F,H],styles:[".line-clamp-2[_ngcontent-%COMP%]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}"]})}}return r})();export{Z as CommuniqueDetailComponent};
