<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'HomeView',
    components: {
      HelloWorld
    }
  }
</script>

<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <p class="title">
        BOOST
      </p>
      <p class="subtitle">
        Zasady Gry
      </p>
    </div>
  </section>
  <section class="section">
    <div class="content is-size-4 mt-2">
      <h2>Tworzenie postaci</h2>
      <p><br></p>
      <p>Postać składa się z poniższych statystyk:</p>
      <ul>
        <li>
          <p>Siła - Określa jak mocno bije rzeczy i ile podniesie</p>
        </li>
        <li>
          <p>Zręczność - Określa jak dobrze unika bicia i jak szybko biega</p>
        </li>
        <li>
          <p>Inteligencja - Określa jak szybko i klawo wymyśli rzeczy</p>
        </li>
        <li>
          <p>Skupienie - Określa ile uwagi może przeznaczyć na daną rzecz</p>
        </li>
        <li>
          <p>Żywotność - Określa ile razy trzeba uderzyć, żeby umarła</p>
        </li>
        <li>
          <p>Mana - Określa jak dużo razy może rzucić zaklęcie bez ziewania</p>
        </li>
      </ul>
      <p><br></p>
      <p>Na start posiadasz 6, 9, 12, 15 punkt&oacute;w, kt&oacute;re musisz rozdzielić między Siłę, Zręczność,
        Inteligencję i Skupienie.</p>
      <p><br></p>
      <p>Żywotność jest r&oacute;wna statystyce Siła.</p>
      <p><br></p>
      <p>Mana r&oacute;wna jest statystyce Skupienia / 3.</p>
      <p><br></p>
      <p>Następnie wybierz jedną z klas i zapisz sobie odpowiednie modyfikacje.</p>
      <p>Klasa składa się z trzech modyfikacji:</p>
      <ul>
        <li>
          <p>Typ walki, kt&oacute;ry decyduje jakiej broni możesz używać:</p>
          <ul>
            <li>
              <p>Magiczny - pozwala na wybranie trzech zaklęć i używanie ich w zamian za Manę</p>
            </li>
            <li>
              <p>Lekki - pozwala na używanie lekkiego ekwipunku, w tym broni dystansowych</p>
            </li>
            <li>
              <p>Ciężki - pozwala na używanie ciężkiego ekwipunku</p>
            </li>
          </ul>
        </li>
        <li>
          <p>Przedmioty, kt&oacute;re dodawane są do ekwipunku</p>
        </li>
        <li>
          <p>Specjalną zasadę, kt&oacute;ra definiuje styl gry klasy</p>
        </li>
      </ul>
      <p><br></p>
      <p>Na koniec wybierz tło fabularne dla swojej postaci.</p>
      <p>Tło składa się z dw&oacute;ch modyfikacji:</p>
      <ul>
        <li>
          <p>Przedmioty kt&oacute;re dodawane są do ekwipunku</p>
        </li>
        <li>
          <p>Dziedzinę w kt&oacute;rej twoja postać się specjalizuje</p>
        </li>
      </ul>
      <p><br></p>
      <p>Gratulacje! Twoja postać jest gotowa! Nie zapomnij o charakterze, sposobie odgrywania, wyglądzie i innych
        rzeczach o kt&oacute;rych na pewno będziesz pamiętać!</p>
      <p><br></p>
      <h2>Przeciwności</h2>
      <p><br></p>
      <p>Czasami ani Ty, ani MG nie macie pojęcia czy twojej postaci uda się zrobić niesamowitość, kt&oacute;rą właśnie
        wymyśliłeś. W takiej sytuacji wykonujesz test statystyki.</p>
      <p><br></p>
      <p>W zależności od tego jaki typ czynności wykonujesz, MG poprosi Cię o odpowiedni rzut na pasującą statystykę.
        Rzucasz wtedy&nbsp;k20&nbsp;i dodajesz lub odejmujesz modyfikatory. Jeśli wynik rzutu jest niższy niż
        statystyka, twojej postaci się udaje! Gratulacje! Jeśli nie, c&oacute;ż&hellip; połamania n&oacute;g.</p>
      <p><br></p>
      <p>Modyfikatory mogą być dodatnie i ujemne. MG ustala jaki modyfikator towarzyszy danemu testowi w zależności od
        trudności zadania:</p>
      <ul>
        <li>
          <p>-6 - Proste</p>
        </li>
        <li>
          <p>-3 - Łatwe</p>
        </li>
        <li>
          <p>0 - Normalne</p>
        </li>
        <li>
          <p>+3 - Trudne</p>
        </li>
        <li>
          <p>+6 - Bardzo trudne</p>
        </li>
      </ul>
      <p><br></p>
      <h2>Tworzenie przeciwnika</h2>
      <p><br></p>
      <p>Przeciwnicy z kt&oacute;rymi przyjdzie wam walczyć nie są tak skomplikowani jak wy. Mają dosłownie jeden
        atrybut od kt&oacute;rego zależy ich siła.</p>
      <p><br></p>
      <p>MG tworząc potwora ustala jaką rangę mu da. Najniżej - jeden, najwyżej - jak mu się spodoba. Następnie ustala
        typ potwora, kt&oacute;ry ustala statystyki:</p>
      <p><br></p>
      <ul>
        <li>
          <p>Magiczny:</p>
          <ul>
            <li>
              <p>Skupienie i Inteligencja r&oacute;wna Ranga * 4</p>
            </li>
            <li>
              <p>Siła i Zręczność r&oacute;wna Ranga * 2</p>
            </li>
            <li>
              <p>Wybrane zaklęcia z listy zaklęć w ilości r&oacute;wnej Randze</p>
            </li>
          </ul>
        </li>
        <li>
          <p>Lekki:</p>
          <ul>
            <li>
              <p>Skupienie i Inteligencja r&oacute;wna Ranga * 2</p>
            </li>
            <li>
              <p>Siła i Zręczność r&oacute;wna Ranga * 4</p>
            </li>
            <li>
              <p>Lekka rzecz do bicia lub strzelania</p>
            </li>
          </ul>
        </li>
        <li>
          <p>Ciężki</p>
          <ul>
            <li>
              <p>Skupienie i Inteligencja r&oacute;wna Ranga * 2</p>
            </li>
            <li>
              <p>Siła i Zręczność r&oacute;wna Ranga * 4</p>
            </li>
            <li>
              <p>Ciężka rzecz do bicia</p>
            </li>
          </ul>
        </li>
      </ul>
      <p><br></p>
      <p>Żywotność przeciwnika r&oacute;wna jest Ranga * 5</p>
      <p><br></p>
      <h2>Walka</h2>
      <p><br></p>
      <p>Walczymy w turach. Sprawdzamy kto ma najwięcej zręczności i od tego ustalamy kolejność. Jeśli przeciwnicy mają
        tę samą zręczność, sami ustalają kto pierwszy, to samo gracze.</p>
      <p><br></p>
      <p>W każdej turze macie akcję i reakcję. Za pomocą akcji możecie robić rzeczy, np. uderzyć niezapowiedzianie kogoś
        w głowę, rzucić zaklęcie czy zaśpiewać refren piosenki. Za pomocą reakcji możecie reagować na rzeczy, np.
        obronić się przed ciosem, czy uderzyć kogoś kto niezapowiedziany odchodzi od zwarcia.</p>
      <p><br></p>
      <p>Jeśli chcesz zaatakować, rzucasz na Siłę. Jeśli chcesz uniknąć ciosu, rzucasz na Zręczność. Jeśli chcesz
        strzelić r&oacute;wnież rzucasz na Zręczność. Nie możesz uniknąć magii ani pocisku.</p>
      <p><br></p>
      <p>Jeśli uda ci się kogoś trafić, rzucasz na obrażenia:</p>
      <ul>
        <li>
          <p>Lekkie bronie zadają k6 obrażeń</p>
        </li>
        <li>
          <p>Ciężkie bronie zadają k6 obrażeń + 2</p>
        </li>
        <li>
          <p>Bronie dystansowe (lekkie) zadają k6 obrażeń</p>
        </li>
      </ul>
      <p><br></p>
      <p>Od obrażeń odejmowana jest wartość zbroi:</p>
      <ul>
        <li>
          <p>Sk&oacute;rzana - 1</p>
        </li>
        <li>
          <p>Przeszywana - 2</p>
        </li>
        <li>
          <p>Kolcza - 3</p>
        </li>
        <li>
          <p>P&oacute;łpłytowa - 4</p>
        </li>
        <li>
          <p>Płytowa - 5</p>
        </li>
      </ul>
      <p>Zbroje, kt&oacute;re mają wartość wyższą niż 2 uniemożliwiają skradanie się. Tarcza zwiększa zręczność o 2 przy
        unikaniu postaciom typu lekkiego.</p>
      <h2>Magia</h2>
      <p><br></p>
      <p>Jeśli twoja klasa jest typem magicznym, możesz wybrać sobie na start trzy zaklęcia z poniższej listy. Każde
        zaklęcie spala twoją jedną Manę. Mana regeneruje się jeśli się prześpisz.</p>
      <p><br></p>
      <ul>
        <li>
          <p>Heal - leczy 1k3 Żywotności</p>
        </li>
        <li>
          <p>Blast - magiczny pocisk o obrażeniach 1k3</p>
        </li>
        <li>
          <p>Protect - dotykasz kogoś i przez całą turę obrażenia na niego zmniejszają się o 1</p>
        </li>
        <li>
          <p>Enchant - dotykasz przedmiot i wybierasz czy przez 6 rund zadaje o 1 większe obrażenia czy daje o 2 większe
            szanse trafienia</p>
        </li>
        <li>
          <p>Curse - rzucasz na przeciwnika i zmniejszasz mu dwie statystyki o 4 (Musisz zdać na Skupienie) na 4 rundy
          </p>
        </li>
        <li>
          <p>Bless - dotykasz kogoś i zwiększasz mu daną statystykę o 4 przy jego następnym rzucie</p>
        </li>
      </ul>
      <p><br></p>
      <h2>Klasy</h2>
      <p><br></p>
      <p>Poniżej opisane klasy do wyboru do koloru:</p>
      <p><br></p>
      <ul>
        <li>
          <p>Wojownik</p>
          <ul>
            <li>
              <p>Typ klasy: lekki</p>
            </li>
            <li>
              <p>Ekwipunek:</p>
              <ul>
                <li>
                  <p>Lekka broń</p>
                </li>
                <li>
                  <p>Tarcza</p>
                </li>
                <li>
                  <p>Zbroja kolcza (3)</p>
                </li>
              </ul>
            </li>
            <li>
              <p>Specjalna zasada: Wojownik za pomocą tarczy może zużyć swoją reakcję by rzutem na zręczność ochronić
                kogoś obok siebie</p>
            </li>
          </ul>
        </li>
        <li>
          <p>Zab&oacute;jca</p>
          <ul>
            <li>
              <p>Typ klasy: lekki</p>
            </li>
            <li>
              <p>Ekwipunek:</p>
              <ul>
                <li>
                  <p>Lekka broń</p>
                </li>
                <li>
                  <p>Zbroja sk&oacute;rzana (1)</p>
                </li>
                <li>
                  <p>Peleryna</p>
                </li>
              </ul>
            </li>
            <li>
              <p>Specjalna zasada: Zab&oacute;jca zadaje podw&oacute;jne obrażenia w plecy</p>
            </li>
          </ul>
        </li>
        <li>
          <p>Paladyn</p>
          <ul>
            <li>
              <p>Typ klasy: ciężki, magiczny (tylko jedno startowe zaklęcie)</p>
            </li>
            <li>
              <p>Ekwipunek:</p>
              <ul>
                <li>
                  <p>Ciężka broń</p>
                </li>
                <li>
                  <p>Zbroja Przeszywana (2)</p>
                </li>
                <li>
                  <p>Symbol Boga</p>
                </li>
              </ul>
            </li>
            <li>
              <p>Specjalna zasada: Paladyn może wybrać jedno startowe zaklęcie spośr&oacute;d:</p>
              <ul>
                <li>
                  <p>Heal</p>
                </li>
                <li>
                  <p>Enchant</p>
                </li>
                <li>
                  <p>Bless</p>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <p>Barbarzyńca</p>
          <ul>
            <li>
              <p>Typ klasy: ciężki</p>
            </li>
            <li>
              <p>Ekwipunek:</p>
              <ul>
                <li>
                  <p>Ciężka broń</p>
                </li>
                <li>
                  <p>Dowolna ilość czaszek swoich wrog&oacute;w</p>
                </li>
              </ul>
            </li>
            <li>
              <p>Specjalna zasada: Barbarzyńca potrafi poświęcić reakcję w jednej turze aby zaatakować drugi raz</p>
            </li>
          </ul>
        </li>
        <li>
          <p>Mag</p>
          <ul>
            <li>
              <p>Typ klasy: magiczny</p>
            </li>
            <li>
              <p>Ekwipunek:</p>
              <ul>
                <li>
                  <p>Laska maga (+1 do Skupienia)</p>
                </li>
                <li>
                  <p>Toga</p>
                </li>
              </ul>
            </li>
            <li>
              <p>Specjalna zasada: Mag zadaje k6 obrażeń zaklęciem blast</p>
            </li>
          </ul>
        </li>
        <li>
          <p>Kleryk</p>
          <ul>
            <li>
              <p>Typ klasy: magiczny</p>
            </li>
            <li>
              <p>Ekwipunek:</p>
              <ul>
                <li>
                  <p>Toga</p>
                </li>
                <li>
                  <p>Fiolka Życia (1k3 leczonych obrażeń)</p>
                </li>
              </ul>
            </li>
            <li>
              <p>Specjalna zasada: Kleryk przywraca k6 Żywotności zaklęciem Heal</p>
            </li>
          </ul>
        </li>
        <li>
          <p>Strzelec</p>
          <ul>
            <li>
              <p>Typ klasy: lekki</p>
            </li>
            <li>
              <p>Ekwipunek:</p>
              <ul>
                <li>
                  <p>Lekka broń dystansowa</p>
                </li>
                <li>
                  <p>12 pocisk&oacute;w</p>
                </li>
              </ul>
            </li>
            <li>
              <p>Specjalna zasada: Strzelec zadaje dodatkowe 2 obrażenia bronią dystansową</p>
            </li>
          </ul>
        </li>
      </ul>
      <p><br></p>
      <p><br></p>
      <h2>Tła fabularne</h2>
      <p><br></p>
      <p>Zanim twoja postać wyruszyła na przygodę, powinna była czymś się zajmować. Chyba że preferujesz nudę. Możesz
        przerzucić kość kt&oacute;ra ci się nie podoba gdy wykonujesz czynność związaną z twoim zawodem.</p>
      <p><br></p>
      <p>Poniżej znajduje się lista pozycji do wyboru:</p>
      <p><br></p>
      <ul>
        <li>
          <p>Rzemieślnik</p>
          <ul>
            <li>
              <p>Jesteś bardzo dobry w wykonywaniu rzeczy. Jak ktoś spyta czy robisz wisiorki, to dobry moment żeby
                uświadomić delikwenta że nie ma nic za darmo.</p>
            </li>
            <li>
              <p>Ekwipunek:</p>
              <ul>
                <li>
                  <p>10 srebrnych monet</p>
                </li>
                <li>
                  <p>Wybrane narzędzia rzemieślnicze</p>
                </li>
                <li>
                  <p>Grzebień do wąs&oacute;w</p>
                </li>
                <li>
                  <p>Plecak</p>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <p><br></p>
      <ul>
        <li>
          <p>Artysta</p>
          <ul>
            <li>
              <p>Nikt cię nie rozumie. Zarabiasz wyjątkowo mało mimo setek przepracowanych godzin. Nie zapominasz
                r&oacute;wnież się tym chwalić na każdym kroku.</p>
            </li>
            <li>
              <p>Ekwipunek:</p>
              <ul>
                <li>
                  <p>Wybrane narzędzia artystyczne</p>
                </li>
                <li>
                  <p>2 srebrne monety</p>
                </li>
                <li>
                  <p>Torba</p>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <p>Kucharz</p>
          <ul>
            <li>
              <p>Jesteś wyjątkowo dobry w przygotowywaniu szamy dla swoich towarzyszy. Jeśli chodzi o jedzenie, to
                tw&oacute;j konik. Co widać zresztą po niekt&oacute;rych walorach twojego ciała.</p>
            </li>
            <li>
              <p>Ekwipunek:</p>
              <ul>
                <li>
                  <p>Wybrany sprzęt do gotowania</p>
                </li>
                <li>
                  <p>6 srebrnych monet</p>
                </li>
                <li>
                  <p>Przyprawy</p>
                </li>
                <li>
                  <p>Krzesiwo</p>
                </li>
                <li>
                  <p>Worek</p>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <p>Złodziej</p>
          <ul>
            <li>
              <p>Czyjeś rzeczy to twoje rzeczy. Weź wszystko i nie dawaj nic w zamian.</p>
            </li>
            <li>
              <p>Ekwipunek:</p>
              <ul>
                <li>
                  <p>Wybrane narzędzia złodzieja</p>
                </li>
                <li>
                  <p>4 srebrne monety</p>
                </li>
                <li>
                  <p>Torba</p>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <p>G&oacute;rnik</p>
          <ul>
            <li>
              <p>Jaskinie to tw&oacute;j drugi dom. Ten pierwszy to piwo w karczmie. Możesz też walnąć komuś z kilofa
                jak podskakuje.</p>
            </li>
            <li>
              <p>Ekwipunek:</p>
              <ul>
                <li>
                  <p>Kilof (ciężka lub lekka broń)</p>
                </li>
                <li>
                  <p>3 srebrne monety</p>
                </li>
                <li>
                  <p>Kask ze świeczką lub latarnia</p>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <p>Gajowy</p>
          <ul>
            <li>
              <p>Znasz się na roślinach. Potrafisz obciąć nożyczkami żywopłot w dwie minuty lepiej niż kto inny
                szczypcami przez godzinę. Jak spytają cię czy to pokrzywa czy ziele angielskie to na pewno nie powiesz
                że to bakłażan.</p>
            </li>
            <li>
              <p>Ekwipunek:</p>
              <ul>
                <li>
                  <p>Nożyce</p>
                </li>
                <li>
                  <p>4 srebrne monety</p>
                </li>
                <li>
                  <p>Łopata</p>
                </li>
                <li>
                  <p>Sadzonka wybranej rośliny</p>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <p>Złomiarz</p>
          <ul>
            <li>
              <p>Od kiedy pamiętasz, zbierasz wszystko co zobaczysz. Tw&oacute;j w&oacute;r pełny jest śmieci
                kt&oacute;re nie omieszkasz sprzedać jeśli tylko ktoś kupi. Uwielbiasz puste pola bitwy, kt&oacute;re
                możesz przemierzać szukając łup&oacute;w.</p>
            </li>
            <li>
              <p>Ekwipunek:</p>
              <ul>
                <li>
                  <p>W&oacute;r pełen śmieci</p>
                </li>
                <li>
                  <p>Wybrane narzędzia do szybkiego przeszukiwania</p>
                </li>
                <li>
                  <p>3 srebrne monety</p>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <p>Żeglarz</p>
          <ul>
            <li>
              <p>Morze to tw&oacute;j dom. Jeśli kiedykolwiek ktoś do ciebie przysiądzie to albo dostanie łyk rumu albo
                przegraną w kości. Tw&oacute;j statek niekoniecznie jest przy tobie fizycznie ale na pewno można go
                znaleźć w twoim sercu.</p>
            </li>
            <li>
              <p>Ekwipunek:</p>
              <ul>
                <li>
                  <p>Kości do gry</p>
                </li>
                <li>
                  <p>Butelka Rumu</p>
                </li>
                <li>
                  <p>6 srebrnych monet</p>
                </li>
                <li>
                  <p>Złoty ząb</p>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <p>Karczmarz</p>
          <ul>
            <li>
              <p>Wiesz co nieco o otaczającym cię świecie. Nie jest to dziwne bo przecież p&oacute;ł życia spędziłeś za
                ladą lejąc trunki i słuchając lokalnych. Możesz upędzić bimber, kt&oacute;ry nie będzie smakował jak
                psie szczyny.</p>
            </li>
            <li>
              <p>Ekwipunek:</p>
              <ul>
                <li>
                  <p>Tw&oacute;j ulubiony fartuch</p>
                </li>
                <li>
                  <p>Antałek bimbru</p>
                </li>
                <li>
                  <p>8 srebrnych monet</p>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

    </div>
  </section>
</template>