import{a as D}from"./chunk-QVOYUIDF.js";import{a as H}from"./chunk-CYZAS4RH.js";import{b as T,e as A,h as F}from"./chunk-F5GARB6M.js";import"./chunk-QLRX7CPE.js";import"./chunk-IJY4QFLY.js";import{k as S,l as E,m as I,t as L,v as z}from"./chunk-4LU63DT7.js";import{Cc as f,Jb as i,Kb as a,Lb as s,Mb as C,Nb as _,Va as p,Vb as x,Wa as u,Za as r,db as g,gc as o,hc as v,ic as m,ka as b,la as k,mb as w,rb as d,rc as M,zb as l,zc as h}from"./chunk-NSEIPVZB.js";import"./chunk-GAL4ENT6.js";var O=t=>["/actualites",t];function B(t,c){if(t&1&&(i(0,"span",23),o(1),a()),t&2){let e=c.$implicit;r(),m(" #",e," ")}}function j(t,c){if(t&1&&(C(0),i(1,"a",24),s(2,"span",25),i(3,"span"),o(4),a()(),_()),t&2){let e=c.$implicit;r(),l("href",e.url,u)("ngClass",e.colorClass),r(),l("innerHTML",e.svg,p),r(2),v(e.name)}}function $(t,c){if(t&1&&(i(0,"div",2)(1,"div",3)(2,"nav",4)(3,"a",5),b(),i(4,"svg",6),s(5,"path",7),a(),o(6," Retour aux actualit\xE9s "),a()(),k(),i(7,"article",8)(8,"header",4)(9,"div",9)(10,"span",10),o(11," Actualit\xE9 "),a(),i(12,"span",11),o(13),h(14,"date"),a()(),i(15,"h1",12),o(16),a(),s(17,"p",13),a(),i(18,"div",4),s(19,"img",14),a(),i(20,"div",15),s(21,"p",16),a(),i(22,"div",17)(23,"h4",18),o(24," Mots-cl\xE9s : "),a(),i(25,"div",19),d(26,B,2,1,"span",20),a()(),i(27,"div",17)(28,"h4",18),o(29," Partager cet article : "),a(),i(30,"div",21),d(31,j,5,4,"ng-container",22),a()()()()()),t&2){let e=x();r(13),v(f(14,8,e.actualite==null?null:e.actualite.created_at,"d MMMM yyyy","fr")),r(3),m(" ",e.actualite==null?null:e.actualite.title," "),r(),l("innerHTML",e.actualite==null?null:e.actualite.sub_description,p),r(2),l("src",e.getLink("actualites/big",e.actualite==null?null:e.actualite.big_photo),u)("alt",e.actualite==null?null:e.actualite.title),r(2),l("innerHTML",e.actualite==null?null:e.actualite.description,p),r(5),l("ngForOf",e.actualite.tags),r(5),l("ngForOf",e.networks)}}function P(t,c){if(t&1&&(i(0,"div",30)(1,"div",31),s(2,"img",32),a(),i(3,"div",33)(4,"div",34),o(5),h(6,"date"),a(),i(7,"h4",35),o(8),a(),i(9,"a",36),o(10," Lire la suite \u2192 "),a()()()),t&2){let e=c.$implicit;r(2),l("src",e.imageUrl,u)("alt",e.titre),r(3),m(" ",f(6,5,e.datePublication,"d MMM yyyy","fr")," "),r(3),m(" ",e.titre," "),r(),l("routerLink",M(9,O,e.id))}}function R(t,c){if(t&1&&(i(0,"section",26)(1,"div",3)(2,"h3",27),o(3," Articles similaires "),a(),i(4,"div",28),d(5,P,11,11,"div",29),a()()()),t&2){let e=x();r(5),l("ngForOf",e.articlesSimilaires)}}var K=(()=>{class t{constructor(e,n){this.route=e,this.publicService=n,this.actualite=null,this.articlesSimilaires=[],this.articles=[],this.networks=[]}ngOnInit(){this.route.params.subscribe(e=>{this.actualiteId=e.id,this.getActualite()})}getActualite(){this.publicService.getActualite(this.actualiteId).subscribe(e=>{this.actualite=e.data.actualite;let n=e.data.shareLinks;this.networks=[{name:"Twitter",url:n.twitter,colorClass:"text-blue-500 hover:text-blue-700",svg:`
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
            `},{name:"Facebook",url:n.facebook,colorClass:"text-blue-600 hover:text-blue-800",svg:`
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
            `},{name:"LinkedIn",url:n.linkedin,colorClass:"text-blue-800 hover:text-blue-900",svg:`
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
            `},{name:"WhatsApp",url:n.whatsapp,colorClass:"text-green-500 hover:text-green-700",svg:`
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
            `},{name:"Telegram",url:n.telegram,colorClass:"text-blue-400 hover:text-blue-600",svg:`
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12
                         12-5.373 12-12S18.627 0 12 0zm5.743 8.816
                         l-1.937 9.157c-.145.655-.522.818-1.056.51
                         l-2.92-2.153-1.407 1.354c-.155.155-.285.285-.585.285
                         l.21-2.982 5.424-4.898c.236-.21-.05-.327-.367-.117
                         l-6.705 4.22-2.888-.903c-.627-.197-.64-.627.131-.927
                         l11.27-4.355c.52-.173.974.124.81.908z"/>
              </svg>
            `}]})}getLink(e,n){return`${H.toFile("storage")}/${e}/${n}`}static{this.\u0275fac=function(n){return new(n||t)(g(T),g(D))}}static{this.\u0275cmp=w({type:t,selectors:[["app-actualite-detail"]],decls:2,vars:2,consts:[["class","pt-32 pb-16 bg-white dark:bg-gray-900",4,"ngIf"],["class","section-padding bg-gray-50 dark:bg-gray-800",4,"ngIf"],[1,"pt-32","pb-16","bg-white","dark:bg-gray-900"],[1,"container-custom"],[1,"mb-8"],["routerLink","/actualites",1,"text-primary-800","dark:text-primary-400","hover:text-primary-900","dark:hover:text-primary-300","inline-flex","items-center"],["fill","none","stroke","currentColor","viewBox","0 0 24 24",1,"w-4","h-4","mr-2"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M15 19l-7-7 7-7"],[1,"max-w-4xl","mx-auto"],[1,"flex","items-center","mb-4"],[1,"bg-primary-800","dark:bg-primary-700","text-white","px-4","py-2","rounded-full","text-sm","font-medium","mr-4"],[1,"text-gray-500","dark:text-gray-400"],[1,"text-4xl","lg:text-5xl","font-bold","text-gray-900","dark:text-white","mb-6","leading-tight"],[1,"text-xl","text-gray-600","dark:text-gray-300","leading-relaxed","rich-content",3,"innerHTML"],[1,"w-full","h-64","lg:h-150","object-cover","object-top","rounded-2xl","shadow-lg",3,"src","alt"],[1,"prose","prose-lg","dark:prose-invert","max-w-none"],[1,"rich-content",3,"innerHTML"],[1,"mt-8","pt-8","border-t","border-gray-200","dark:border-gray-700"],[1,"text-sm","font-semibold","text-gray-900","dark:text-white","mb-4"],[1,"flex","flex-wrap","gap-2"],["class","bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm",4,"ngFor","ngForOf"],[1,"flex","space-x-4"],[4,"ngFor","ngForOf"],[1,"bg-gray-100","dark:bg-gray-700","text-gray-700","dark:text-gray-300","px-3","py-1","rounded-full","text-sm"],["target","_blank","rel","noopener noreferrer",1,"flex","items-center","space-x-2","transition-colors",3,"href","ngClass"],[3,"innerHTML"],[1,"section-padding","bg-gray-50","dark:bg-gray-800"],[1,"text-2xl","font-bold","text-gray-900","dark:text-white","mb-8","text-center"],[1,"grid","grid-cols-1","md:grid-cols-3","gap-8"],["class","card overflow-hidden",4,"ngFor","ngForOf"],[1,"card","overflow-hidden"],[1,"h-48","overflow-hidden"],[1,"w-full","h-full","object-cover","hover:scale-105","transition-transform","duration-300",3,"src","alt"],[1,"p-6"],[1,"text-sm","text-gray-500","dark:text-gray-400","mb-2"],[1,"text-lg","font-semibold","text-gray-900","dark:text-white","mb-3","line-clamp-2"],[1,"text-primary-800","dark:text-primary-400","hover:text-primary-900","dark:hover:text-primary-300","font-medium",3,"routerLink"]],template:function(n,y){n&1&&d(0,$,32,12,"div",0)(1,R,6,1,"section",1),n&2&&(l("ngIf",y.actualite),r(),l("ngIf",y.actualite))},dependencies:[z,S,E,I,L,F,A],styles:[".line-clamp-2[_ngcontent-%COMP%]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}"]})}}return t})();export{K as ActualiteDetailComponent};
