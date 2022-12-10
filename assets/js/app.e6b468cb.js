(function(){"use strict";var e={1727:function(e,a,n){var t=n(9242),o=n(3396);const i={class:"container"};function r(e,a,n,t,r,s){const l=(0,o.up)("Header"),c=(0,o.up)("router-view"),u=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(l),(0,o._)("div",i,[(0,o.Wm)(c,{abilityPoints:r.abilityPoints,chosenPoints:r.chosenPoints,classList:r.classList,spellList:r.spellList,backgroundList:r.backgroundList,other:r.other},null,8,["abilityPoints","chosenPoints","classList","spellList","backgroundList","other"])]),(0,o.Wm)(u)],64)}var s=n.p+"assets/img/logo.fda379ba.png";const l=e=>((0,o.dD)("data-v-45271d62"),e=e(),(0,o.Cn)(),e),c={class:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},u={class:"navbar-brand"},y=l((()=>(0,o._)("img",{src:s,width:"112",height:"28"},null,-1))),d={role:"button",class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"mainNavbar",ref:"navbarButton"},p=l((()=>(0,o._)("span",{"aria-hidden":"true"},null,-1))),z=l((()=>(0,o._)("span",{"aria-hidden":"true"},null,-1))),m=l((()=>(0,o._)("span",{"aria-hidden":"true"},null,-1))),k=[p,z,m],w={id:"mainNavbar",class:"navbar-menu"},b={class:"navbar-start"},h=(0,o.Uk)(" Strona Główna "),g=(0,o.Uk)(" Zasady Gry "),f=(0,o.Uk)(" Generator Postaci "),v=(0,o.Uk)(" E-Karta Postaci "),j=(0,o.Uk)(" Panel Mistrza Gry "),_=l((()=>(0,o._)("a",{class:"navbar-item",href:"https://drive.google.com/file/d/16uiK2bzw9yVfKFHb3Ti_J0JZ-b_XVMlC",target:"_blank"}," Pobierz Kartę Postaci ",-1)));function P(e,a,n,t,i,r){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",c,[(0,o._)("div",u,[(0,o.Wm)(s,{class:"navbar-item",to:"/"},{default:(0,o.w5)((()=>[y])),_:1}),(0,o._)("a",d,k,512)]),(0,o._)("div",w,[(0,o._)("div",b,[(0,o.Wm)(s,{class:"navbar-item",to:"/"},{default:(0,o.w5)((()=>[h])),_:1}),(0,o.Wm)(s,{class:"navbar-item",to:"/rulebook"},{default:(0,o.w5)((()=>[g])),_:1}),(0,o.Wm)(s,{class:"navbar-item",to:"/generator"},{default:(0,o.w5)((()=>[f])),_:1}),(0,o.Wm)(s,{class:"navbar-item",to:"/character-sheet"},{default:(0,o.w5)((()=>[v])),_:1}),(0,o.Wm)(s,{class:"navbar-item",to:"/game-master-panel"},{default:(0,o.w5)((()=>[j])),_:1}),_])])])}var x={name:"Header",methods:{closeNavbar(){let e=this.$refs.navbarButton;e.className.match(/\bis-active\b/)&&e.click()}},watch:{$route(e,a){this.closeNavbar()}}},D=n(89);const M=(0,D.Z)(x,[["render",P],["__scopeId","data-v-45271d62"]]);var C=M;const S={class:"footer"},L=(0,o.uE)('<div class="content has-text-centered"><p><strong>BOOST</strong> stworzony przez <a href="https://github.com/dudematthew" target="_blank">Mateusza Moczydłowskiego</a>. Prawdziwe losowe liczby generowane przez <a href="www.random.org" target="_blank">RANDOM.ORG</a>. <br> Zarówno system jak i strona są na licencji <a href="http://opensource.org/licenses/mit-license.php" target="_blank">MIT</a>. Możesz je modyfikować i używać w swoich kreacjach jak tylko dusza zapragnie ale podlinkuj gdzieś tę stronę. <br> Chcesz pomóc przy tworzeniu? Utwórz <a href="https://github.com/dudematthew/boost-rpg-tools/fork" target="_blank">fork</a> projektu tej strony na <a href="https://github.com/dudematthew/boost-rpg-tools" target="_blank">githubie</a>. </p></div>',1),T=[L];function Z(e,a,n,t,i,r){return(0,o.wg)(),(0,o.iD)("footer",S,T)}var O={name:"Footer"};const G=(0,D.Z)(O,[["render",Z]]);var W=G,K={components:{Header:C,Footer:W},data(){return{abilityPoints:[6,9,12,15],chosenPoints:{strength:{value:null,currentValue:null,name:"Siła",nameGenitive:"Siłę"},agility:{value:null,currentValue:null,name:"Zręczność",nameGenitive:"Zręczność"},inteligence:{value:null,currentValue:null,name:"Inteligencja",nameGenitive:"Inteligencję"},focus:{value:null,currentValue:null,name:"Skupienie",nameGenitive:"Skupienie"}},other:{currentHP:0,currentMP:0,currentBst:0,throws:"",name:"",level:1},classList:{warrior:{name:"Wojownik",type:"Lekki",spellAmount:0,availableSpells:[],inventory:["Lekka Broń","Tarcza","Zbroja kolcza (3)"],ability:"Wojownik za pomocą tarczy może zużyć swoją reakcję by rzutem na zręczność ochronić kogoś obok siebie",hidden:!0,chosen:!1},killer:{name:"Zabójca",type:"Lekki",spellAmount:0,availableSpells:[],inventory:["Lekka Broń","Zbroja skórzana (1)","Peleryna"],ability:"Zabójca zadaje podwójne obrażenia w plecy",hidden:!0,chosen:!1},paladin:{name:"Paladyn",type:"Ciężki, Magiczny (tylko jedno startowe zaklęcie)",spellAmount:1,availableSpells:["heal","enchant","bless"],inventory:["Ciężka broń","Zbroja Przeszywana (2)","Symbol Boga"],ability:"Paladyn może wybrać jedno startowe zaklęcie spośród: Heal, Enchant, Bless",hidden:!0,chosen:!1},barbarian:{name:"Barbarzyńca",type:"Ciężki",spellAmount:0,availableSpells:[],inventory:["Ciężka broń","Dowolna ilość czaszek wrogów"],ability:"Barbarzyńca potrafi poświęcić reakcję w jednej turze aby zaatakować drugi raz",hidden:!0,chosen:!1},mage:{name:"Mag",type:"Magiczny",spellAmount:6,availableSpells:["heal","blast","protect","enchant","curse","bless","ilusion","telekinesis","levitation","polymorphy"],inventory:["Laska maga (+1 do Many)","Toga"],ability:"Mag posiada 6 zaklęć do wyboru na start",hidden:!0,chosen:!1},warlock:{name:"Czarnoksiężnik",type:"Magiczny",spellAmount:3,availableSpells:["heal","blast","protect","enchant","curse","bless","ilusion","telekinesis","levitation","polymorphy"],inventory:["Zwój Przywołania (Jednorazowo przyzywa lekkiego pomocnika 2 Rangi)","Mroczny Płaszcz"],ability:"Czarnoksiężnik zadaje k6 obrażeń zaklęciem Blast",hidden:!0,chosen:!1},cleric:{name:"Kleryk",type:"Magiczny",spellAmount:3,availableSpells:["heal","blast","protect","enchant","curse","bless","ilusion","telekinesis","levitation","polymorphy"],inventory:["Toga","Fiolka Życia (1k3 leczonych obrażeń)"],ability:"Kleryk przywraca k6 Żywotności zaklęciem Heal",hidden:!0,chosen:!1},shooter:{name:"Strzelec",type:"Lekki",spellAmount:0,availableSpells:[],inventory:["Lekka broń dystansowa","12 pocisków"],ability:"Strzelec zadaje dodatkowe 2 obrażenia bronią dystansową",hidden:!0,chosen:!1}},spellList:{heal:{name:"Heal",description:"Leczy 1k3 Żywotności",chosen:!1},blast:{name:"Blast",description:"Magiczny pocisk o obrażeniach 1k3",chosen:!1},protect:{name:"Protect",description:"Dotykasz kogoś i przez cztery tury obrażenia na niego zmniejszają się o 1",chosen:!1},enchant:{name:"Enchant",description:"Dotykasz przedmiot i wybierasz czy przez 6 rund zadaje o 1 większe obrażenia czy daje o 2 większe szanse trafienia",chosen:!1},curse:{name:"Curse",description:"Rzucasz na przeciwnika i zmniejszasz mu dwie statystyki o 4 lub na bohatera i zmniejszasz mu statystykę o 3 (Musi nie zdać na Skupienie) na 4 rundy",chosen:!1},bless:{name:"Bless",description:"Dotykasz kogoś i zwiększasz mu daną statystykę o 3 przy jego następnym rzucie",chosen:!1},ilusion:{name:"Ilusion",description:"Tworzysz hologram który może się ruszać w prosty sposób o maksymalnej wielkości 2m3",chosen:!1},telekinesis:{name:"Telekinesis",description:"Przenosisz nieduży przedmiot siłą umysłu, możesz też się z kimś siłować np. wyrywając mu ulubioną buławę",chosen:!1},levitation:{name:"Levitation",description:"Dotykasz kogokolwiek i od teraz przez 6 rund może się również przemieszczać w górę albo dół",chosen:!1},polymorphy:{name:"Polymorphy",description:"Zmieniasz się w nie większe od ciebie stworzenie, MG decyduje co ci to daje",chosen:!1}},backgroundList:{craftsman:{name:"Rzemieślnik",description:"Jesteś bardzo dobry w wykonywaniu rzeczy. Jak ktoś spyta czy robisz wisiorki, to dobry moment żeby uświadomić delikwenta że nie ma nic za darmo.",inventory:["10 srebrnych monet","Wybrane narzędzia rzemieślnicze","Grzebień do wąsów","Plecak"],hidden:!0,chosen:!1},artist:{name:"Artysta",description:"Nikt cię nie rozumie. Zarabiasz wyjątkowo mało mimo setek przepracowanych godzin. Nie zapominasz również się tym chwalić na każdym kroku.",inventory:["Wybrane narzędzia artystyczne","2 srebrne monety","Torba"],hidden:!0,chosen:!1},cook:{name:"Kucharz",description:"Jesteś wyjątkowo dobry w przygotowywaniu szamy dla swoich towarzyszy. Jeśli chodzi o jedzenie, to twój konik. Co widać zresztą po niektórych walorach twojego ciała.",inventory:["Wybrany sprzęt do gotowania","6 srebrnych monet","Przyprawy","Krzesiwo","Worek"],hidden:!0,chosen:!1},thief:{name:"Złodziej",description:"Czyjeś rzeczy to twoje rzeczy. Weź wszystko i nie dawaj nic w zamian.",inventory:["Wybrane narzędzia złodzieja","4 srebrne monety","Torba"],hidden:!0,chosen:!1},miner:{name:"Górnik",description:"Jaskinie to twój drugi dom. Ten pierwszy to piwo w karczmie. Możesz też walnąć komuś z kilofa jak podskakuje.",inventory:["Kilof (ciężka lub lekka broń)","3 srebrne monety","Kask ze świeczką lub latarnia"],hidden:!0,chosen:!1},forester:{name:"Gajowy",description:"Znasz się na roślinach. Potrafisz obciąć nożyczkami żywopłot w dwie minuty lepiej niż kto inny szczypcami przez godzinę. Jak spytają cię czy to pokrzywa czy ziele angielskie to na pewno nie powiesz że to bakłażan.",inventory:["Nożyce","4 srebrne monety","Łopata","Sadzonka wybranej rośliny"],hidden:!0,chosen:!1},scavenger:{name:"Złomiarz",description:"Od kiedy pamiętasz, zbierasz wszystko co zobaczysz. Twój wór pełny jest śmieci które nie omieszkasz sprzedać jeśli tylko ktoś kupi. Uwielbiasz puste pola bitwy, które możesz przemierzać szukając łupów.",inventory:["Wór pełen śmieci","Wybrane narzędzia do szybkiego przeszukiwania","3 srebrne monety"],hidden:!0,chosen:!1},hunter:{name:"Łowca",description:"Polujesz na różne istoty. Twoje hobby? A może sposób na przetrwanie? Zastawianie sideł, wiedza o tropieniu i opowiadanie jak to sam uszyłeś ten futrzany płaszcz to twoje ulubione zajęcia.",inventory:["Sidła","Futrzany płaszcz","Medalion z kości","2 srebrne monety"],hidden:!0,chosen:!1},sailor:{name:"Żeglarz",description:"Morze to twój dom. Jeśli kiedykolwiek ktoś do ciebie przysiądzie to albo dostanie łyk rumu albo przegraną w kości. Twój statek niekoniecznie jest przy tobie fizycznie ale na pewno można go znaleźć w twoim sercu.",inventory:["Kości do gry","Butelka Rumu","6 srebrnych monet","Złoty ząb"],hidden:!0,chosen:!1},innkeeper:{name:"Karczmarz",description:"Wiesz co nieco o otaczającym cię świecie. Nie jest to dziwne bo przecież pół życia spędziłeś za ladą lejąc trunki i słuchając lokalnych. Możesz upędzić bimber, który nie będzie smakował jak psie szczyny.",inventory:["Twój ulubiony fartuch","Antałek bimbru","8 srebrnych monet"],hidden:!0,chosen:!1},traveler:{name:"Podróżnik",description:"Uciekłeś z domu raczkując. Zwiedzasz świat od kiedy pamiętasz. Znasz się na każdym środku transportu, widziałeś wiele rzeczy spoza tej krainy i możesz znać kilkoro ludzi.",inventory:["Plecak","Wierzchowiec","5 srebrnych monet","Kapelusz podróżnika"],hidden:!0,chosen:!1},merchant:{name:"Kupiec",description:"Złoto i srebro. Jeśli coś istnieje, na pewno ma wartość a ty dobrze wiesz jaką. Targowanie, owijanie w bawełnę, wyduszanie ostatniej miedzi i liczenie złota to dla ciebie codzienność.",inventory:["10 srebrnych monet","Monokl","Plecak"],hidden:!0,chosen:!1}}}}};const B=(0,D.Z)(K,[["render",r]]);var U=B,A=n(678),H=n(7139),E=n.p+"assets/img/background.069d6836.jpg";const N=(0,o._)("section",{class:"hero is-primary"},[(0,o._)("div",{class:"hero-body"},[(0,o._)("p",{class:"title"}," BOOST "),(0,o._)("p",{class:"subtitle"}," Banalnie Oczywisty Odgrywany System Testów ")])],-1),J={class:"section"},I=(0,o._)("h1",{class:"title"},"O co chodzi?",-1),R={class:"subtitle mt-2"},F=(0,o.Uk)(" Jeśli jesteś zapalonym "),Y=(0,o._)("strong",null,"Mistrzem Gry",-1),V=(0,o.Uk)(", być może tobie i twoim graczom zdarzyło się znaleźć w miejscu, w którym chcielibyście usiąść do stołu, jednak nie ma co liczyć na "),q=(0,o._)("strong",null,"sesję RPG",-1),$=(0,o.Uk)(", ponieważ wymaga odpowiednich przygotowań, kart postaci, podręcznika i czasu, którego zwyczajnie nie macie. "),X=(0,o._)("br",null,null,-1),Q=(0,o._)("br",null,null,-1),ee=(0,o.Uk)(" W takiej sytuacji na pewno nie raz pomógłby "),ae=(0,o._)("strong",null,"BOOST",-1),ne=(0,o.Uk)(", czyli system RPG, w który możecie zacząć grać z nowymi postaciami w trzy minuty. "),te=(0,o._)("br",null,null,-1),oe=(0,o._)("br",null,null,-1),ie=(0,o.Uk)(" Zainteresowany? "),re=(0,o._)("br",null,null,-1),se=(0,o._)("br",null,null,-1),le=(0,o.Uk)(" Zerknij na "),ce=(0,o.Uk)("Zasady Gry"),ue=(0,o.Uk)(". "),ye=(0,o._)("br",null,null,-1),de=(0,o._)("br",null,null,-1),pe=(0,o.Uk)(" Alternatywnie możesz od razu zobaczyć "),ze=(0,o.Uk)("Generator Postaci"),me=(0,o.Uk)(", "),ke=(0,o.Uk)("E-Kartę Postaci"),we=(0,o.Uk)(" czy "),be=(0,o.Uk)("Panel Mistrza Gry"),he=(0,o.Uk)("! "),ge=(0,o._)("figure",{class:"image is-16by9 is-hidden-tablet"},[(0,o._)("img",{src:E})],-1),fe={class:"section"},ve={class:"panel",ref:"panel"},je=(0,o._)("p",{class:"panel-heading"},"Dziennik wersji systemu",-1),_e={class:"panel-tabs"},Pe=["data-target"],xe=(0,o._)("a",{"data-all":"",style:{padding:"8px"},class:"is-active"},"Wszystkie zmiany",-1),De=["data-category"],Me={class:"panel-icon"},Ce=["innerHTML"],Se={class:"section"},Le={class:"panel",ref:"panel"},Te=(0,o._)("p",{class:"panel-heading"},"Dziennik zmian aplikacji",-1),Ze={key:0,class:"panel-block"},Oe={class:"panel-icon"},Ge=["innerHTML"],We={key:1,class:"panel-block"},Ke=(0,o._)("span",{class:"icon"},[(0,o._)("i",{class:"fa-solid fa-ellipsis"})],-1),Be=[Ke];function Ue(e,a,n,t,i,r){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[N,(0,o._)("section",J,[I,(0,o._)("h2",R,[F,Y,V,q,$,X,Q,ee,ae,ne,te,oe,ie,re,se,le,(0,o.Wm)(s,{class:"link",to:"/rulebook"},{default:(0,o.w5)((()=>[ce])),_:1}),ue,ye,de,pe,(0,o.Wm)(s,{class:"link",to:"/generator"},{default:(0,o.w5)((()=>[ze])),_:1}),me,(0,o.Wm)(s,{class:"link",to:"/character-sheet"},{default:(0,o.w5)((()=>[ke])),_:1}),we,(0,o.Wm)(s,{class:"link",to:"/game-master-panel"},{default:(0,o.w5)((()=>[be])),_:1}),he])]),ge,(0,o._)("section",fe,[(0,o._)("nav",ve,[je,(0,o._)("p",_e,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.systemChangelog,((e,a)=>((0,o.wg)(),(0,o.iD)("a",{key:a,"data-target":a,style:{padding:"8px"}},(0,H.zw)(a),9,Pe)))),128)),xe]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.systemChangelog,((e,a)=>((0,o.wg)(),(0,o.iD)(o.HY,{key:a},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e,((e,n)=>((0,o.wg)(),(0,o.iD)("div",{key:n,class:(0,H.C_)(["panel-block",1==a?"is-active":""]),"data-category":a},[(0,o._)("span",Me,[(0,o._)("i",{class:(0,H.C_)(["fas",e.icon??"fa-book"]),"aria-hidden":"true"},null,2)]),(0,o._)("span",{innerHTML:e.text},null,8,Ce)],10,De)))),128))],64)))),128))],512)]),(0,o._)("section",Se,[(0,o._)("nav",Le,[Te,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.appChangelog,((e,n)=>((0,o.wg)(),(0,o.iD)(o.HY,{key:n},[n<=i.appChangelogListSize-1?((0,o.wg)(),(0,o.iD)("div",Ze,[(0,o._)("span",Oe,[(0,o._)("i",{class:(0,H.C_)(["fa-solid",r.getIcon(e.type)]),"aria-hidden":"true"},null,2)]),(0,o._)("span",{innerHTML:e.text},null,8,Ge)])):(0,o.kq)("",!0),n==i.appChangelogListSize?((0,o.wg)(),(0,o.iD)("div",We,[(0,o._)("span",{class:"tag is-grey",style:{cursor:"pointer"},onClick:a[0]||(a[0]=e=>i.appChangelogListSize+=7)},Be)])):(0,o.kq)("",!0)],64)))),128))],512)])],64)}var Ae=n(6982),He={name:"HomeView",data(){return{systemChangelog:{1.09:[{text:"Poprawiono opis działania zaklęcia <i>Curse</i>."},{text:"Dodano opisy trudności zadania dla łatwiejszego wyczucia."},{text:"Dodano Boostery równe jednej trzeciej inteligencji pozwalające na <b>boostowanie</b>."},{text:"Dodano nowe tła fabularne - Podróżnik i Łowca."}],1.08:[{text:"Dodano wzmiankę o możliwości podnoszenia poziomu postaci."}],1.07:[{text:"Zaktualizowano treść zaklęć, dodano zaklęcia Levitation, Ilusion i Polymorphy."},{text:"Teraz Mana przeciwników jest równa Randze."}],1.06:[{text:"Teraz zamiast umierać od razu, postacie padają nieprzytomnie na dwie tury, by dopiero potem umrzeć jeśli nie zostaną uleczone."}]},appChangelog:[{text:"Dodano parę linków na stronie głównej.",type:"typo"},{text:"Dodano wybór zaklęć dla bytów w Panelu Mistrza Gry.",type:"fix"},{text:"Zmieniono wybór zaklęć na E-Karcie Postaci z formy listy na przyciski.",type:"fix"},{text:"Dodano dodatkowe przyciski w dolnej części Panelu Mistrza Gry",type:"feature"},{text:"Dodano zapisywanie stanu Panelu Mistrza Gry w pamięci.",type:"feature"},{text:"Dodano potwierdzenie przy usuwaniu w kilku miejscach.",type:"feature"},{text:"Dodano grupowe akcje w Panelu Mistrza Gry.",type:"feature"},{text:"Poprawiono wyświetlanie na telefonach w dużej części aplikacji.",type:"fix"},{text:"Dodano menu zapisanych postaci na E-Karcie Postaci.",type:"feature"},{text:"Dodano rzuty kośćmi na E-Karcie Postaci.",type:"feature"},{text:"Zaktualizowano dane o tłach fabularnych.",type:"feature"},{text:"Dodano rzuty kośćmi K3 i K2 w Panelu Mistrza Gry.",type:"feature"},{text:"Dodano statystykę Boosterów do E-Karty Postaci.",type:"feature"},{text:"Dodano notatki w Panelu Mistrza Gry.",type:"feature"},{text:"Dodano rzuty kością w Panelu Mistrza Gry.",type:"feature"},{text:"Dodano wzmiankę o sposobie generowania liczb losowych na stopce strony a także o możliwości utworzenia forka na githubie.",type:"typo"},{text:"Dodano przycisk 'Szybki Atak' widoczny po rzucie na statystykę.",type:"feature"},{text:"Dodano przyciski ustawiające modyfikator przy rzucie na statystykę zależnie od trudności.",type:"feature"},{text:"Poprawiono generowanie liczb losowych uniemożliwiając przeciążenie API.",type:"fix"},{text:"Poprawiono kalkulator obrażeń aby zbroja i obrażenia nie mogły być ujemne.",type:"fix"},{text:"Poprawiono kalkulację many wrogów w Panelu Mistrza Gry aby była równa Randze.",type:"fix"},{text:"Dodano możliwość duplikowania bytów w Panelu Mistrza Gry.",type:"feature"},{text:"Zaktualizowano treść niektórych zaklęć.",type:"typo"},{text:"Poprawiono wyświetlanie Panelu Mistrza Gry na białym motywie.",type:"fix"},{text:"Dodano przyciski ułatwiające wybranie odpowiedniego modyfikatora przy rzutach.",type:"feature"},{text:"Naprawiono niepoprawnie liczony modyfikator przy rzutach.",type:"fix"},{text:"Poprawiono wzmiankę o licencji na stopce strony.",type:"typo"},{text:"Od teraz przy zmianie strony widzimy jej początek a nie środek.",type:"fix"},{text:"Od teraz menu nagłówka zamyka się przy zmianie strony.",type:"fix"},{text:"Dodano link do karty postaci.",type:"feature"},{text:"Dodano dzienniki zmian na stronie głównej.",type:"feature"}],appChangelogListSize:7}},methods:{getIcon(e){switch(e){case"feature":return"fa-plus";case"fix":return"fa-screwdriver-wrench";case"typo":return"fa-spell-check";default:return"fa-code-branch"}}},mounted(){Ae.h.parseDocument(document)}};const Ee=(0,D.Z)(He,[["render",Ue]]);var Ne=Ee;const Je=[{path:"/",name:"home",component:Ne},{path:"/rulebook",name:"rulebook",component:()=>n.e(982).then(n.bind(n,9982))},{path:"/generator",name:"generator",component:()=>n.e(814).then(n.bind(n,9814))},{path:"/character-sheet",name:"character sheet",component:()=>Promise.all([n.e(79),n.e(680)]).then(n.bind(n,951))},{path:"/game-master-panel",name:"game master panel",component:()=>Promise.all([n.e(79),n.e(930)]).then(n.bind(n,5360))}],Ie=(0,A.p7)({history:(0,A.PO)("/boost-rpg-tools/"),routes:Je,scrollBehavior(){const e="app",a=-100,n=document.getElementById(e),t=n.getBoundingClientRect().top+window.pageYOffset+a;window.scrollTo({top:t,behavior:"auto"})}});var Re=Ie;n(8985),n(6368);(function(e){if("/"===e.search[1]){var a=e.search.slice(1).split("&").map((function(e){return e.replace(/~and~/g,"&")})).join("");window.history.replaceState(null,null,e.pathname.slice(0,-1)+a+e.hash)}})(window.location),(0,t.ri)(U).use(Re).mount("#app")}},a={};function n(t){var o=a[t];if(void 0!==o)return o.exports;var i=a[t]={exports:{}};return e[t].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(a,t,o,i){if(!t){var r=1/0;for(u=0;u<e.length;u++){t=e[u][0],o=e[u][1],i=e[u][2];for(var s=!0,l=0;l<t.length;l++)(!1&i||r>=i)&&Object.keys(n.O).every((function(e){return n.O[e](t[l])}))?t.splice(l--,1):(s=!1,i<r&&(r=i));if(s){e.splice(u--,1);var c=o();void 0!==c&&(a=c)}}return a}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[t,o,i]}}(),function(){n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,{a:a}),a}}(),function(){n.d=function(e,a){for(var t in a)n.o(a,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(a,t){return n.f[t](e,a),a}),[]))}}(),function(){n.u=function(e){return"assets/js/"+e+"."+{79:"322b4e7e",680:"b1687ec5",814:"e8a3e811",930:"423d80e5",982:"4999dd28"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"assets/css/"+e+".0fd89a31.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={},a="boost-rpg-tools:";n.l=function(t,o,i,r){if(e[t])e[t].push(o);else{var s,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var y=c[u];if(y.getAttribute("src")==t||y.getAttribute("data-webpack")==a+i){s=y;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",a+i),s.src=t),e[t]=[o];var d=function(a,n){s.onerror=s.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),a)return a(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/boost-rpg-tools/"}(),function(){var e=function(e,a,n,t){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var r=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||a,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=s,o.parentNode.removeChild(o),t(l)}};return o.onerror=o.onload=i,o.href=a,document.head.appendChild(o),o},a=function(e,a){for(var n=document.getElementsByTagName("link"),t=0;t<n.length;t++){var o=n[t],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===a))return o}var r=document.getElementsByTagName("style");for(t=0;t<r.length;t++){o=r[t],i=o.getAttribute("data-href");if(i===e||i===a)return o}},t=function(t){return new Promise((function(o,i){var r=n.miniCssF(t),s=n.p+r;if(a(r,s))return o();e(t,s,o,i)}))},o={143:0};n.f.miniCss=function(e,a){var n={814:1};o[e]?a.push(o[e]):0!==o[e]&&n[e]&&a.push(o[e]=t(e).then((function(){o[e]=0}),(function(a){throw delete o[e],a})))}}(),function(){var e={143:0};n.f.j=function(a,t){var o=n.o(e,a)?e[a]:void 0;if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(n,t){o=e[a]=[n,t]}));t.push(o[2]=i);var r=n.p+n.u(a),s=new Error,l=function(t){if(n.o(e,a)&&(o=e[a],0!==o&&(e[a]=void 0),o)){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;s.message="Loading chunk "+a+" failed.\n("+i+": "+r+")",s.name="ChunkLoadError",s.type=i,s.request=r,o[1](s)}};n.l(r,l,"chunk-"+a,a)}},n.O.j=function(a){return 0===e[a]};var a=function(a,t){var o,i,r=t[0],s=t[1],l=t[2],c=0;if(r.some((function(a){return 0!==e[a]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var u=l(n)}for(a&&a(t);c<r.length;c++)i=r[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},t=self["webpackChunkboost_rpg_tools"]=self["webpackChunkboost_rpg_tools"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(1727)}));t=n.O(t)})();
//# sourceMappingURL=app.e6b468cb.js.map