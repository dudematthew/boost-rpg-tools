(function(){"use strict";var e={1178:function(e,n,a){var i=a(9242),o=a(3396);function t(e,n,a,i,t,r){const s=(0,o.up)("Header"),l=(0,o.up)("router-view"),c=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(s),(0,o.Wm)(l,{abilityPoints:t.abilityPoints,chosenPoints:t.chosenPoints,classList:t.classList,spellList:t.spellList,backgroundList:t.backgroundList,other:t.other},null,8,["abilityPoints","chosenPoints","classList","spellList","backgroundList","other"]),(0,o.Wm)(c)],64)}var r=a.p+"img/logo.fda379ba.png";const s={class:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},l={class:"navbar-brand"},c=(0,o._)("img",{src:r,width:"112",height:"28"},null,-1),u=(0,o._)("a",{role:"button",class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"mainNavbar"},[(0,o._)("span",{"aria-hidden":"true"}),(0,o._)("span",{"aria-hidden":"true"}),(0,o._)("span",{"aria-hidden":"true"})],-1),d={id:"mainNavbar",class:"navbar-menu"},y={class:"navbar-start"},m=(0,o.Uk)(" Strona Główna "),z=(0,o.Uk)(" Zasady Gry "),p=(0,o.Uk)(" Generator Postaci "),k=(0,o.Uk)(" Karta Postaci ");function b(e,n,a,i,t,r){const b=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",s,[(0,o._)("div",l,[(0,o.Wm)(b,{class:"navbar-item",to:"/"},{default:(0,o.w5)((()=>[c])),_:1}),u]),(0,o._)("div",d,[(0,o._)("div",y,[(0,o.Wm)(b,{class:"navbar-item",to:"/"},{default:(0,o.w5)((()=>[m])),_:1}),(0,o.Wm)(b,{class:"navbar-item",to:"/rulebook"},{default:(0,o.w5)((()=>[z])),_:1}),(0,o.Wm)(b,{class:"navbar-item",to:"/generator"},{default:(0,o.w5)((()=>[p])),_:1}),(0,o.Wm)(b,{class:"navbar-item",to:"/character-sheet"},{default:(0,o.w5)((()=>[k])),_:1})])])])}var h={name:"Header"},w=a(89);const f=(0,w.Z)(h,[["render",b]]);var g=f;const v={class:"footer"},j=(0,o._)("div",{class:"content has-text-centered"},[(0,o._)("p",null,[(0,o._)("strong",null,"BOOST"),(0,o.Uk)(" stworzony przez "),(0,o._)("a",{href:"https://github.com/dudematthew",target:"_blank"},"Mateusza Moczydłowskiego"),(0,o.Uk)(". System ten jest "),(0,o._)("strong",null,"absolutnie nie licencjonowany"),(0,o.Uk)(" i możesz go modyfikować i używać w swoich kreacjach jak tylko dusza zapragnie. Strona natomiast na licencji "),(0,o._)("a",{href:"http://opensource.org/licenses/mit-license.php",target:"_blank"},"MIT"),(0,o.Uk)(". ")])],-1),_=[j];function P(e,n,a,i,t,r){return(0,o.wg)(),(0,o.iD)("footer",v,_)}var S={name:"Footer"};const L=(0,w.Z)(S,[["render",P]]);var O=L,T={components:{Header:g,Footer:O},data(){return{abilityPoints:[6,9,12,15],chosenPoints:{strength:{value:null,currentValue:null,name:"Siła",nameGenitive:"Siłę"},agility:{value:null,currentValue:null,name:"Zręczność",nameGenitive:"Zręczność"},inteligence:{value:null,currentValue:null,name:"Inteligencja",nameGenitive:"Inteligencję"},focus:{value:null,currentValue:null,name:"Skupienie",nameGenitive:"Skupienie"}},other:{currentHP:0,currentMP:0,name:"",level:1},classList:{warrior:{name:"Wojownik",type:"Lekki",spellAmount:0,availableSpells:[],inventory:["Lekka Broń","Tarcza","Zbroja kolcza (3)"],ability:"Wojownik za pomocą tarczy może zużyć swoją reakcję by rzutem na zręczność ochronić kogoś obok siebie",hidden:!0,chosen:!1},killer:{name:"Zabójca",type:"Lekki",spellAmount:0,availableSpells:[],inventory:["Lekka Broń","Zbroja skórzana (1)","Peleryna"],ability:"Zabójca zadaje podwójne obrażenia w plecy",hidden:!0,chosen:!1},paladin:{name:"Paladyn",type:"Ciężki, Magiczny (tylko jedno startowe zaklęcie)",spellAmount:1,availableSpells:["heal","enchant","bless"],inventory:["Ciężka broń","Zbroja Przeszywana (2)","Symbol Boga"],ability:"Paladyn może wybrać jedno startowe zaklęcie spośród: Heal, Enchant, Bless",hidden:!0,chosen:!1},barbarian:{name:"Barbarzyńca",type:"Ciężki",spellAmount:0,availableSpells:[],inventory:["Ciężka broń","Dowolna ilość czaszek wrogów"],ability:"Barbarzyńca potrafi poświęcić reakcję w jednej turze aby zaatakować drugi raz",hidden:!0,chosen:!1},mage:{name:"Mag",type:"Magiczny",spellAmount:6,availableSpells:["heal","blast","protect","enchant","curse","bless","ilusion","telekinesis","levitation","polymorphy"],inventory:["Laska maga (+1 do Skupienia)","Toga"],ability:"Mag posiada 6 zaklęć do wyboru na start",hidden:!0,chosen:!1},warlock:{name:"Czarnoksiężnik",type:"Magiczny",spellAmount:3,availableSpells:["heal","blast","protect","enchant","curse","bless","ilusion","telekinesis","levitation","polymorphy"],inventory:["Zwój Przywołania (Jednorazowo przyzywa lekkiego pomocnika 2 Rangi)","Mroczny Płaszcz"],ability:"Czarnoksiężnik zadaje k6 obrażeń zaklęciem Blast",hidden:!0,chosen:!1},cleric:{name:"Kleryk",type:"Magiczny",spellAmount:3,availableSpells:["heal","blast","protect","enchant","curse","bless","ilusion","telekinesis","levitation","polymorphy"],inventory:["Toga","Fiolka Życia (1k3 leczonych obrażeń)"],ability:"Kleryk przywraca k6 Żywotności zaklęciem Heal",hidden:!0,chosen:!1},shooter:{name:"Strzelec",type:"Lekki",spellAmount:0,availableSpells:[],inventory:["Lekka broń dystansowa","12 pocisków"],ability:"Strzelec zadaje dodatkowe 2 obrażenia bronią dystansową",hidden:!0,chosen:!1}},spellList:{heal:{name:"Heal",description:"Leczy 1k3 Żywotności",chosen:!1},blast:{name:"Blast",description:"Magiczny pocisk o obrażeniach 1k3",chosen:!1},protect:{name:"Protect",description:"Dotykasz kogoś i przez całą turę obrażenia na niego zmniejszają się o 1",chosen:!1},enchant:{name:"Enchant",description:"Dotykasz przedmiot i wybierasz czy przez 6 rund zadaje o 1 większe obrażenia czy daje o 2 większe szanse trafienia",chosen:!1},curse:{name:"Curse",description:"Rzucasz na przeciwnika i zmniejszasz mu dwie statystyki o 4 (Musisz zdać na Skupienie) na 4 rundy",chosen:!1},bless:{name:"Bless",description:"Dotykasz kogoś i zwiększasz mu daną statystykę o 4 przy jego następnym rzucie",chosen:!1},ilusion:{name:"Ilusion",description:"Tworzysz hologram który może się ruszać w prosty sposób o maksymalnej wielkości 2m3",chosen:!1},telekinesis:{name:"Telekinesis",description:"Przenosisz nieduży przedmiot siłą umysłu, możesz też się z kimś siłować np. wyrywając mu ulubioną buławę",chosen:!1},levitation:{name:"Levitation",description:"Dotykasz kogokolwiek i od teraz może się również przemieszczać w górę albo dół",chosen:!1},polymorphy:{name:"Polymorphy",description:"Zmieniasz się w nie większe od ciebie stworzenie, MG decyduje co ci to daje",chosen:!1}},backgroundList:{craftsman:{name:"Rzemieślnik",description:"Jesteś bardzo dobry w wykonywaniu rzeczy. Jak ktoś spyta czy robisz wisiorki, to dobry moment żeby uświadomić delikwenta że nie ma nic za darmo.",inventory:["10 srebrnych monet","Wybrane narzędzia rzemieślnicze","Grzebień do wąsów","Plecak"],hidden:!0,chosen:!1},artist:{name:"Artysta",description:"Nikt cię nie rozumie. Zarabiasz wyjątkowo mało mimo setek przepracowanych godzin. Nie zapominasz również się tym chwalić na każdym kroku.",inventory:["Wybrane narzędzia artystyczne","2 srebrne monety","Torba"],hidden:!0,chosen:!1},cook:{name:"Kucharz",description:"Jesteś wyjątkowo dobry w przygotowywaniu szamy dla swoich towarzyszy. Jeśli chodzi o jedzenie, to twój konik. Co widać zresztą po niektórych walorach twojego ciała.",inventory:["Wybrany sprzęt do gotowania","6 srebrnych monet","Przyprawy","Krzesiwo","Worek"],hidden:!0,chosen:!1},thief:{name:"Złodziej",description:"Czyjeś rzeczy to twoje rzeczy. Weź wszystko i nie dawaj nic w zamian.",inventory:["Wybrane narzędzia złodzieja","4 srebrne monety","Torba"],hidden:!0,chosen:!1},miner:{name:"Górnik",description:"Jaskinie to twój drugi dom. Ten pierwszy to piwo w karczmie. Możesz też walnąć komuś z kilofa jak podskakuje.",inventory:["Kilof (ciężka lub lekka broń)","3 srebrne monety","Kask ze świeczką lub latarnia"],hidden:!0,chosen:!1},forester:{name:"Gajowy",description:"Znasz się na roślinach. Potrafisz obciąć nożyczkami żywopłot w dwie minuty lepiej niż kto inny szczypcami przez godzinę. Jak spytają cię czy to pokrzywa czy ziele angielskie to na pewno nie powiesz że to bakłażan.",inventory:["Nożyce","4 srebrne monety","Łopata","Sadzonka wybranej rośliny"],hidden:!0,chosen:!1},scavenger:{name:"Złomiarz",description:"Od kiedy pamiętasz, zbierasz wszystko co zobaczysz. Twój wór pełny jest śmieci które nie omieszkasz sprzedać jeśli tylko ktoś kupi. Uwielbiasz puste pola bitwy, które możesz przemierzać szukając łupów.",inventory:["Wór pełen śmieci","Wybrane narzędzia do szybkiego przeszukiwania","3 srebrne monety"],hidden:!0,chosen:!1},sailor:{name:"Żeglarz",description:"Morze to twój dom. Jeśli kiedykolwiek ktoś do ciebie przysiądzie to albo dostanie łyk rumu albo przegraną w kości. Twój statek niekoniecznie jest przy tobie fizycznie ale na pewno można go znaleźć w twoim sercu.",inventory:["Kości do gry","Butelka Rumu","6 srebrnych monet","Złoty ząb"],hidden:!0,chosen:!1},innkeeper:{name:"Karczmarz",description:"Wiesz co nieco o otaczającym cię świecie. Nie jest to dziwne bo przecież pół życia spędziłeś za ladą lejąc trunki i słuchając lokalnych. Możesz upędzić bimber, który nie będzie smakował jak psie szczyny.",inventory:["Twój ulubiony fartuch","Antałek bimbru","8 srebrnych monet"],hidden:!0,chosen:!1},merchant:{name:"Kupiec",description:"Złoto i srebro. Jeśli coś istnieje, na pewno ma wartość a ty dobrze wiesz jaką. Targowanie, owijanie w bawełnę, wyduszanie ostatniej miedzi i liczenie złota to dla ciebie codzienność.",inventory:["10 srebrnych monet","Monokl","Plecak"],hidden:!0,chosen:!1}}}}};const Z=(0,w.Z)(T,[["render",t]]);var C=Z,M=a(678),W=a.p+"img/background.069d6836.jpg";const A=(0,o._)("section",{class:"hero is-primary"},[(0,o._)("div",{class:"hero-body"},[(0,o._)("p",{class:"title"}," BOOST "),(0,o._)("p",{class:"subtitle"}," Banalnie Oczywisty Odgrywany System Testów ")])],-1),U={class:"section"},B=(0,o._)("h1",{class:"title"},"O co chodzi?",-1),G={class:"subtitle mt-2"},E=(0,o.Uk)(" Jeśli jesteś zapalonym "),N=(0,o._)("strong",null,"Mistrzem Gry",-1),D=(0,o.Uk)(", być może tobie i twoim graczom zdarzyło się znaleźć w miejscu, w którym chcielibyście usiąść do stołu, jednak nie ma co liczyć na "),H=(0,o._)("strong",null,"sesję RPG",-1),K=(0,o.Uk)(", ponieważ wymaga odpowiednich przygotowań, kart postaci, podręcznika i czasu, którego zwyczajnie nie macie. "),J=(0,o._)("br",null,null,-1),x=(0,o._)("br",null,null,-1),F=(0,o.Uk)(" W takiej sytuacji na pewno nie raz pomógłby "),R=(0,o._)("strong",null,"BOOST",-1),I=(0,o.Uk)(", czyli system RPG, w który możecie zacząć grać z nowymi postaciami w trzy minuty. "),V=(0,o._)("br",null,null,-1),q=(0,o._)("br",null,null,-1),Y=(0,o.Uk)(" Zainteresowany? "),Q=(0,o._)("br",null,null,-1),X=(0,o._)("br",null,null,-1),$=(0,o.Uk)(" Zerknij na "),ee=(0,o.Uk)("Zasady Gry"),ne=(0,o.Uk)(". "),ae=(0,o._)("figure",{class:"image is-16by9 is-hidden-"},[(0,o._)("img",{src:W})],-1);function ie(e,n,a,i,t,r){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[A,(0,o._)("section",U,[B,(0,o._)("h2",G,[E,N,D,H,K,J,x,F,R,I,V,q,Y,Q,X,$,(0,o.Wm)(s,{class:"link",to:"/rulebook"},{default:(0,o.w5)((()=>[ee])),_:1}),ne])]),ae],64)}var oe={name:"HomeView"};const te=(0,w.Z)(oe,[["render",ie]]);var re=te;const se=[{path:"/",name:"home",component:re},{path:"/rulebook",name:"rulebook",component:()=>a.e(896).then(a.bind(a,9896))},{path:"/generator",name:"generator",component:()=>a.e(34).then(a.bind(a,4034))},{path:"/character-sheet",name:"character sheet",component:()=>a.e(536).then(a.bind(a,3536))}],le=(0,M.p7)({history:(0,M.PO)("/boost-rpg-tools/"),routes:se});var ce=le;a(6328),a(6368);(function(e){if("/"===e.search[1]){var n=e.search.slice(1).split("&").map((function(e){return e.replace(/~and~/g,"&")})).join("?");window.history.replaceState(null,null,e.pathname.slice(0,-1)+n+e.hash)}})(window.location),(0,i.ri)(C).use(ce).mount("#app")}},n={};function a(i){var o=n[i];if(void 0!==o)return o.exports;var t=n[i]={exports:{}};return e[i].call(t.exports,t,t.exports,a),t.exports}a.m=e,function(){var e=[];a.O=function(n,i,o,t){if(!i){var r=1/0;for(u=0;u<e.length;u++){i=e[u][0],o=e[u][1],t=e[u][2];for(var s=!0,l=0;l<i.length;l++)(!1&t||r>=t)&&Object.keys(a.O).every((function(e){return a.O[e](i[l])}))?i.splice(l--,1):(s=!1,t<r&&(r=t));if(s){e.splice(u--,1);var c=o();void 0!==c&&(n=c)}}return n}t=t||0;for(var u=e.length;u>0&&e[u-1][2]>t;u--)e[u]=e[u-1];e[u]=[i,o,t]}}(),function(){a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,{a:n}),n}}(),function(){a.d=function(e,n){for(var i in n)a.o(n,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(n,i){return a.f[i](e,n),n}),[]))}}(),function(){a.u=function(e){return"js/"+e+"."+{34:"3c1abb76",536:"6a6d2726",896:"fc9b0b40"}[e]+".js"}}(),function(){a.miniCssF=function(e){return"css/"+e+".0fd89a31.css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="boost-rpg-tools:";a.l=function(i,o,t,r){if(e[i])e[i].push(o);else{var s,l;if(void 0!==t)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==n+t){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",n+t),s.src=i),e[i]=[o];var y=function(n,a){s.onerror=s.onload=null,clearTimeout(m);var o=e[i];if(delete e[i],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(a)})),n)return n(a)},m=setTimeout(y.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=y.bind(null,s.onerror),s.onload=y.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/boost-rpg-tools/"}(),function(){var e=function(e,n,a,i){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var t=function(t){if(o.onerror=o.onload=null,"load"===t.type)a();else{var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.href||n,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=s,o.parentNode.removeChild(o),i(l)}};return o.onerror=o.onload=t,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var o=a[i],t=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(t===e||t===n))return o}var r=document.getElementsByTagName("style");for(i=0;i<r.length;i++){o=r[i],t=o.getAttribute("data-href");if(t===e||t===n)return o}},i=function(i){return new Promise((function(o,t){var r=a.miniCssF(i),s=a.p+r;if(n(r,s))return o();e(i,s,o,t)}))},o={143:0};a.f.miniCss=function(e,n){var a={34:1};o[e]?n.push(o[e]):0!==o[e]&&a[e]&&n.push(o[e]=i(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};a.f.j=function(n,i){var o=a.o(e,n)?e[n]:void 0;if(0!==o)if(o)i.push(o[2]);else{var t=new Promise((function(a,i){o=e[n]=[a,i]}));i.push(o[2]=t);var r=a.p+a.u(n),s=new Error,l=function(i){if(a.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var t=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;s.message="Loading chunk "+n+" failed.\n("+t+": "+r+")",s.name="ChunkLoadError",s.type=t,s.request=r,o[1](s)}};a.l(r,l,"chunk-"+n,n)}},a.O.j=function(n){return 0===e[n]};var n=function(n,i){var o,t,r=i[0],s=i[1],l=i[2],c=0;if(r.some((function(n){return 0!==e[n]}))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(l)var u=l(a)}for(n&&n(i);c<r.length;c++)t=r[c],a.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return a.O(u)},i=self["webpackChunkboost_rpg_tools"]=self["webpackChunkboost_rpg_tools"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(1178)}));i=a.O(i)})();
//# sourceMappingURL=app.743ee30e.js.map