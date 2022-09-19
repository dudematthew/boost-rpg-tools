<script>
  export default {
    name: 'RulebookView',
  }
</script>

<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <p class="heading">Wersja 1.8</p>
      <p class="title">
        BOOST
      </p>
      <p class="subtitle">
        Zasady Gry
      </p>
    </div>
  </section>
  <section class="section">
    <div class="content is-size-5 is-size-6-mobile mt-2">
      <h2>Tworzenie postaci</h2>
      <p>Postać składa się z poniższych statystyk:</p>
      <ul>
        <li>Siła - Określa jak mocno bije rzeczy i ile podniesie</li>
        <li>Zręczność - Określa jak dobrze unika bicia i jak szybko biega</li>
        <li>Inteligencja - Określa jak szybko i klawo wymyśli rzeczy</li>
        <li>Skupienie - Określa ile uwagi może przeznaczyć na daną rzecz</li>
        <li>Żywotność - Określa ile razy trzeba uderzyć, żeby umarła</li>
        <li>Mana - Określa jak dużo razy może rzucić zaklęcie bez ziewania</li>
      </ul>
      <p>Na start posiadasz 6, 9, 12, 15 punkt&oacute;w, kt&oacute;re musisz rozdzielić między Siłę, Zręczność,
        Inteligencję i Skupienie.</p>
      <p>Żywotność jest r&oacute;wna statystyce Siła.</p>
      <p>Mana r&oacute;wna jest statystyce Skupienia / 3.</p>
      <p>Następnie wybierz jedną z klas i zapisz sobie odpowiednie modyfikacje.</p>
      <p>Klasa składa się z trzech modyfikacji:</p>
      <ul>
        <li>Typ walki, kt&oacute;ry decyduje jakiej broni możesz używać:</li>
        <ul>
          <li>Magiczny - pozwala na wybranie trzech zaklęć i używanie ich w zamian za Manę</li>
          <li>Lekki - pozwala na używanie lekkiego ekwipunku, w tym broni dystansowych</li>
          <li>Ciężki - pozwala na używanie ciężkiego ekwipunku</li>
        </ul>
      </ul>
      <p>Zawsze możesz uderzyć kogoś czymś innym, niezależnie od typu walki.</p>
      <ul>
        <li>Przedmioty, kt&oacute;re dodawane są do ekwipunku</li>
        <li>Specjalną zasadę, kt&oacute;ra definiuje styl gry klasy</li>
      </ul>
      <p>Na koniec wybierz tło fabularne dla swojej postaci.</p>
      <p>Tło składa się z dw&oacute;ch modyfikacji:</p>
      <ul>
        <li>Przedmioty kt&oacute;re dodawane są do ekwipunku</li>
        <li>Dziedzinę w kt&oacute;rej twoja postać się specjalizuje</li>
      </ul>
      <p>Gratulacje! Twoja postać jest gotowa! Nie zapomnij o charakterze, sposobie odgrywania, wyglądzie i innych
        rzeczach o kt&oacute;rych na pewno będziesz pamiętać!</p>
      <i>Opcjonalnie GM może zwiększać poziom twojej postaci, umożliwiając ci dodanie 3 punktów do dowolnej statystyki (maks. 18).</i>
      <h2>Przeciwności</h2>
      <p>Czasami ani Ty, ani MG nie macie pojęcia czy twojej postaci uda się zrobić niesamowitość, kt&oacute;rą właśnie
        wymyśliłeś. W takiej sytuacji wykonujesz test statystyki.</p>
      <p>W zależności od tego jaki typ czynności wykonujesz, MG poprosi Cię o odpowiedni rzut na pasującą statystykę.
        Rzucasz wtedy <strong>k20</strong> i dodajesz lub odejmujesz modyfikatory. Jeśli wynik rzutu jest niższy niż
        statystyka, twojej postaci się udaje! Gratulacje! Jeśli nie, c&oacute;ż&hellip; połamania n&oacute;g.</p>
      <p>Modyfikatory mogą być dodatnie i ujemne. MG ustala jaki modyfikator towarzyszy danemu testowi w zależności od
        trudności zadania:</p>
      <ul>
        <li>-6 - Proste</li>
        <li>-3 - Łatwe</li>
        <li>0 - Normalne</li>
        <li>+3 - Trudne</li>
        <li>+6 - Bardzo trudne</li>
      </ul>
      <h2>Tworzenie przeciwnika</h2>
      <p>Przeciwnicy z kt&oacute;rymi przyjdzie wam walczyć nie są tak skomplikowani jak wy. Mają dosłownie jeden
        atrybut od kt&oacute;rego zależy ich siła.</p>
      <p>MG tworząc przeciwnika ustala jaką rangę mu da. Najniżej - jeden, najwyżej - jak mu się spodoba. Następnie
        ustala jego typ, kt&oacute;ry ustala statystyki:</p>
      <ul>
        <li>Magiczny:</li>
        <ul>
          <li>Skupienie i Inteligencja r&oacute;wna Ranga * 4</li>
          <li>Siła i Zręczność r&oacute;wna Ranga * 2</li>
          <li>Wybrane zaklęcia z listy zaklęć w ilości r&oacute;wnej Randze</li>
          <li>Mana jest r&oacute;wna Randze</li>
        </ul>
        <li>Lekki:</li>
        <ul>
          <li>Skupienie i Inteligencja r&oacute;wna Ranga * 2</li>
          <li>Siła i Zręczność r&oacute;wna Ranga * 4</li>
          <li>Lekka rzecz do bicia lub strzelania</li>
        </ul>
        <li>Ciężki</li>
        <ul>
          <li>Skupienie i Inteligencja r&oacute;wna Ranga * 2</li>
          <li>Siła i Zręczność r&oacute;wna Ranga * 4</li>
          <li>Ciężka rzecz do bicia</li>
        </ul>
      </ul>
      <p>Żywotność przeciwnika r&oacute;wna jest Ranga * 5</p>
      <h2>Walka</h2>
      <p>Walczymy w turach. Sprawdzamy kto ma najwięcej zręczności i od tego ustalamy kolejność. Jeśli przeciwnicy mają
        tę samą zręczność, sami ustalają kto pierwszy, to samo gracze.</p>
      <p>W każdej turze macie akcję i reakcję. Za pomocą akcji możecie robić rzeczy, np. uderzyć niezapowiedzianie kogoś
        w głowę, rzucić zaklęcie czy bezpiecznie odejść od kogoś. Za pomocą reakcji możecie reagować na rzeczy, np.
        obronić się przed ciosem, czy uderzyć kogoś kto niezapowiedziany odchodzi od zwarcia.</p>
      <p>Jeśli chcesz zaatakować, rzucasz na Siłę. Jeśli chcesz uniknąć ciosu, rzucasz na Zręczność. Jeśli chcesz
        strzelić r&oacute;wnież rzucasz na Zręczność. Nie możesz uniknąć magii ani pocisku. Nie możesz strzelać w
        zwarciu.</p>
      <p>Jeśli uda ci się kogoś trafić, rzucasz na obrażenia:</p>
      <ul>
        <li>Lekkie bronie zadają k6 obrażeń</li>
        <li>Ciężkie bronie zadają k6 obrażeń + 2 i zajmują obie ręce</li>
        <li>Bronie dystansowe (lekkie) zadają k6 obrażeń ale nie mogą być używane w zwarciu</li>
        <li>Wszystko inne zadaje k2 obrażenia</li>
      </ul>
      <p>Od obrażeń odejmujesz wartość zbroi:</p>
      <ul>
        <li>Sk&oacute;rzana - 1</li>
        <li>Przeszywana - 2</li>
        <li>Kolcza - 3</li>
        <li>P&oacute;łpłytowa - 4</li>
        <li>Płytowa - 5</li>
      </ul>
      <p>Zbroje, kt&oacute;re mają wartość wyższą niż 2 uniemożliwiają skradanie się. Tarcza daje modyfikator -2
        postaciom kt&oacute;re cię atakują i jest lekkim przedmiotem.</p>
      <p>Nie możesz mieć mniej Żywotności niż 0. Jeśli masz 0 żywotności to padasz nieprzytomny i w ciągu 2 tur
        umierasz. Chyba że ktoś cię w tym czasie uleczy.</p>
      <h2>Magia</h2>
      <p>Jeśli twoja klasa jest typem magicznym, możesz wybrać sobie na start trzy zaklęcia z poniższej listy. Każde
        zaklęcie spala twoją jedną Manę. Mana regeneruje się jeśli się prześpisz.</p>
      <ul>
        <li>Heal - leczy 1k3 Żywotności</li>
        <li>Blast - magiczny pocisk o obrażeniach 1k3</li>
        <li>Protect - dotykasz kogokolwiek i przez 4 tury obrażenia na niego zmniejszają się o 1</li>
        <li>Enchant - dotykasz przedmiot i wybierasz czy przez 6 rund zadaje o 1 większe obrażenia czy daje o 2 większe
          szanse trafienia</li>
        <li>Curse - rzucasz na przeciwnika i zmniejszasz mu dwie statystyki o 4 (Musisz zdać na Skupienie) na 4 rundy
        </li>
        <li>Bless - dotykasz kogokolwiek i zwiększasz mu daną statystykę o 4 przy jego następnym rzucie</li>
        <li>Ilusion - tworzysz hologram kt&oacute;ry może się ruszać w prosty spos&oacute;b o maksymalnej wielkości 2m3
        </li>
        <li>Telekinesis - przenosisz nieduży przedmiot siłą umysłu, możesz też się z kimś siłować np. wyrywając mu
          ulubioną buławę</li>
        <li>Levitation - dotykasz kogokolwiek i od teraz przez 6 rund może r&oacute;wnież samotnie przemieszczać się w
          g&oacute;rę albo d&oacute;ł</li>
        <li>Polymorphy - zmieniasz się w nie większe od ciebie stworzenie, MG decyduje co ci to daje</li>
      </ul>
      <h2>Klasy</h2>
      <p>Poniżej opisane klasy do wyboru do koloru:</p>
      <ul>
        <li>Wojownik</li>
        <ul>
          <li>Typ klasy: Lekki</li>
          <li>Ekwipunek:</li>
          <ul>
            <li>Lekka broń</li>
            <li>Tarcza</li>
            <li>Zbroja kolcza (3)</li>
          </ul>
          <li>Specjalna zasada: Wojownik za pomocą tarczy może zużyć swoją reakcję by rzutem na zręczność ochronić przed
            uderzeniem kogoś obok siebie</li>
        </ul>
        <li>Zab&oacute;jca</li>
        <ul>
          <li>Typ klasy: Lekki</li>
          <li>Ekwipunek:</li>
          <ul>
            <li>Lekka broń</li>
            <li>Zbroja sk&oacute;rzana (1)</li>
            <li>Peleryna</li>
          </ul>
          <li>Specjalna zasada: Zab&oacute;jca zadaje podw&oacute;jne obrażenia w plecy</li>
        </ul>
        <li>Paladyn</li>
        <ul>
          <li>Typ klasy: Ciężki, Magiczny (tylko jedno startowe zaklęcie)</li>
          <li>Ekwipunek:</li>
          <ul>
            <li>Ciężka broń</li>
            <li>Zbroja Przeszywana (2)</li>
            <li>Symbol Boga</li>
          </ul>
          <li>Specjalna zasada: Paladyn może wybrać jedno startowe zaklęcie spośr&oacute;d:</li>
          <ul>
            <li>Heal</li>
            <li>Enchant</li>
            <li>Bless</li>
          </ul>
        </ul>
        <li>Barbarzyńca</li>
        <ul>
          <li>Typ klasy: ciężki</li>
          <li>Ekwipunek:</li>
          <ul>
            <li>Ciężka broń</li>
            <li>Dowolna ilość czaszek swoich wrog&oacute;w</li>
          </ul>
          <li>Specjalna zasada: Barbarzyńca potrafi poświęcić reakcję w jednej turze aby zaatakować drugi raz</li>
        </ul>
        <li>Mag</li>
        <ul>
          <li>Typ klasy: Magiczny</li>
          <li>Ekwipunek:</li>
          <ul>
            <li>Laska maga (+1 do Skupienia)</li>
            <li>Toga</li>
          </ul>
          <li>Specjalna zasada: Mag posiada 6 zaklęć do wyboru na start</li>
        </ul>
        <li>Czarnoksiężnik</li>
        <ul>
          <li>Typ klasy: Magiczny</li>
          <li>Ekwipunek</li>
          <ul>
            <li>Zw&oacute;j Przywołania (Jednorazowo przyzywa lekkiego pomocnika 2 Rangi)</li>
            <li>Mroczny Płaszcz</li>
          </ul>
          <li>Specjalna zasada: Czarnoksiężnik zadaje k6 obrażeń zaklęciem blast</li>
        </ul>
        <li>Kleryk</li>
        <ul>
          <li>Typ klasy: magiczny</li>
          <li>Ekwipunek:</li>
          <ul>
            <li>Toga</li>
            <li>Fiolka Życia (1k3 leczonych obrażeń)</li>
          </ul>
          <li>Specjalna zasada: Kleryk przywraca k6 Żywotności zaklęciem Heal</li>
        </ul>
        <li>Strzelec</li>
        <ul>
          <li>Typ klasy: lekki</li>
          <li>Ekwipunek:</li>
          <ul>
            <li>Lekka broń dystansowa</li>
            <li>12 pocisk&oacute;w</li>
          </ul>
          <li>Specjalna zasada: Strzelec zadaje dodatkowe 2 obrażenia bronią dystansową</li>
        </ul>
      </ul>
      <p><br /><br /></p>
      <h2>Tła fabularne</h2>
      <p>Zanim twoja postać wyruszyła na przygodę, powinna była czymś się zajmować. Chyba że preferujesz nudę. Możesz
        przerzucić kość i wybrać lepszy wynik, gdy wykonujesz czynność związaną z twoim zawodem.</p>
      <p>Poniżej znajduje się lista pozycji do wyboru:</p>
      <ul>
        <li>Rzemieślnik</li>
        <ul>
          <li>Jesteś bardzo dobry w wykonywaniu rzeczy. Jak ktoś spyta czy robisz wisiorki, to dobry moment żeby
            uświadomić delikwenta że nie ma nic za darmo.</li>
          <li>Ekwipunek:</li>
          <ul>
            <li>10 srebrnych monet</li>
            <li>Wybrane narzędzia rzemieślnicze</li>
            <li>Grzebień do wąs&oacute;w</li>
            <li>Plecak</li>
          </ul>
        </ul>
      </ul>
      <ul>
        <li>Artysta</li>
        <ul>
          <li>Nikt cię nie rozumie. Zarabiasz wyjątkowo mało mimo setek przepracowanych godzin. Nie zapominasz
            r&oacute;wnież się tym chwalić na każdym kroku.</li>
          <li>Ekwipunek:</li>
          <ul>
            <li>Wybrane narzędzia artystyczne</li>
            <li>2 srebrne monety</li>
            <li>Torba</li>
          </ul>
        </ul>
        <li>Kucharz</li>
        <ul>
          <li>Jesteś wyjątkowo dobry w przygotowywaniu szamy dla swoich towarzyszy. Jeśli chodzi o jedzenie, to
            tw&oacute;j konik. Co widać zresztą po niekt&oacute;rych walorach twojego ciała.</li>
          <li>Ekwipunek:</li>
          <ul>
            <li>Wybrany sprzęt do gotowania</li>
            <li>6 srebrnych monet</li>
            <li>Przyprawy</li>
            <li>Krzesiwo</li>
            <li>Worek</li>
          </ul>
        </ul>
        <li>Złodziej</li>
        <ul>
          <li>Czyjeś rzeczy to twoje rzeczy. Weź wszystko i nie dawaj nic w zamian.</li>
          <li>Ekwipunek:</li>
          <ul>
            <li>Wybrane narzędzia złodzieja</li>
            <li>4 srebrne monety</li>
            <li>Torba</li>
          </ul>
        </ul>
        <li>G&oacute;rnik</li>
        <ul>
          <li>Jaskinie to tw&oacute;j drugi dom. Ten pierwszy to piwo w karczmie. Możesz też walnąć komuś z kilofa jak
            podskakuje.</li>
          <li>Ekwipunek:</li>
          <ul>
            <li>Kilof (ciężka lub lekka broń)</li>
            <li>3 srebrne monety</li>
            <li>Kask ze świeczką lub latarnia</li>
          </ul>
        </ul>
        <li>Gajowy</li>
        <ul>
          <li>Znasz się na roślinach. Potrafisz obciąć nożyczkami żywopłot w dwie minuty lepiej niż kto inny szczypcami
            przez godzinę. Jak spytają cię czy to pokrzywa czy ziele angielskie to na pewno nie powiesz że to bakłażan.
          </li>
          <li>Ekwipunek:</li>
          <ul>
            <li>Nożyce</li>
            <li>4 srebrne monety</li>
            <li>Łopata</li>
            <li>Sadzonka wybranej rośliny</li>
          </ul>
        </ul>
        <li>Złomiarz</li>
        <ul>
          <li>Od kiedy pamiętasz, zbierasz wszystko co zobaczysz. Tw&oacute;j w&oacute;r pełny jest śmieci kt&oacute;re
            nie omieszkasz sprzedać jeśli tylko ktoś kupi. Uwielbiasz puste pola bitwy, kt&oacute;re możesz przemierzać
            szukając łup&oacute;w.</li>
          <li>Ekwipunek:</li>
          <ul>
            <li>W&oacute;r pełen śmieci</li>
            <li>Wybrane narzędzia do szybkiego przeszukiwania</li>
            <li>3 srebrne monety</li>
          </ul>
        </ul>
        <li>Żeglarz</li>
        <ul>
          <li>Morze to tw&oacute;j dom. Jeśli kiedykolwiek ktoś do ciebie przysiądzie to albo dostanie łyk rumu albo
            przegraną w kości. Tw&oacute;j statek niekoniecznie jest przy tobie fizycznie ale na pewno można go znaleźć
            w twoim sercu.</li>
          <li>Ekwipunek:</li>
          <ul>
            <li>Kości do gry</li>
            <li>Butelka Rumu</li>
            <li>6 srebrnych monet</li>
            <li>Złoty ząb</li>
          </ul>
        </ul>
        <li>Karczmarz</li>
        <ul>
          <li>Wiesz co nieco o otaczającym cię świecie. Nie jest to dziwne bo przecież p&oacute;ł życia spędziłeś za
            ladą lejąc trunki i słuchając lokalnych. Możesz upędzić bimber, kt&oacute;ry nie będzie smakował jak psie
            szczyny.</li>
          <li>Ekwipunek:</li>
          <ul>
            <li>Tw&oacute;j ulubiony fartuch</li>
            <li>Antałek bimbru</li>
            <li>8 srebrnych monet</li>
          </ul>
        </ul>
        <li>Kupiec</li>
        <ul>
          <li>Złoto i srebro. Jeśli coś istnieje, na pewno ma wartość a ty dobrze wiesz jaką. Targowanie, owijanie w
            bawełnę, wyduszanie ostatniej miedzi i liczenie złota to dla ciebie codzienność.</li>
          <li>Ekwipunek:</li>
          <ul>
            <li>10 srebrnych monet</li>
            <li>Monokl</li>
            <li>Plecak</li>
          </ul>
        </ul>
      </ul>

      <br>

      <i>Jeśli szukasz zasad w formie dokumentu, kliknij <a href="https://docs.google.com/document/d/1vedzS4KcwyEAqkGIKf77wiHPUiGRHXxVvydl5Gm8Zmw" target="_blank">tutaj</a>.</i>
    </div>
  </section>
</template>