const buttons = document.querySelectorAll(".door-btn");
const modal = document.querySelector(".modal");
const darkBckg = document.querySelector(".darkbackground");
const title = document.querySelector(".title");
const doorGrid = document.querySelector(".door-grid");
const exitButton = document.querySelector(".exit-icon");

const quoteContainer = document.querySelector(".daily-quote");
const programContainer = document.querySelector(".daily-program");
const storyContainer = document.querySelector(".daily-story");
const giftContainer = document.querySelector(".daily-gift");

const quote = document.querySelector(".quote");
const program = document.querySelector(".program");
const story = document.querySelector(".story");
const gift = document.querySelector(".gift");

const icons = document.querySelectorAll(".selectable-icon");
const todaysDate = document.querySelector(".today-date");

const welcomeMsg = document.querySelector(".welcome-msg");

const okBtn = document.querySelector(".okbutton");

const dailyContent = {
  1: {
    program:
      "Halgassunk meg együtt egy karácsonyi lejátszási listát, és válasszuk ki az idei közös kedvencünket!",

    quote: `"A karácsony a szeretet ünnepe - és nincs szebb ajándék annál, hogy veled ünnepelhetem."`,

    story: `Herold cocó, a lelkes kis viziló, izgatottan ébredt. Az ablakon kinézve meglátta az első hópelyheket, amelyek lágyan hulltak a tájra. "Ez tökéletes nap a kakaóhoz!" – gondolta, és máris keresni kezdte kishúgát, Hanna cocót. Együtt eldöntötték, hogy különleges karácsonyi kalandot terveznek, amihez természetesen mindenkinek szüksége lesz egy csésze forró kakaóra.`,

    gift: `Mogyorós Csokigolyó, Mini Kinder Bueno, Csokipénz`,
  },
  2: {
    program: `Készítsünk közösen egy-egy kézzel készített karácsonyi dekorációt!`,

    quote: `„Nem számít, mi van a fa alatt, amíg te vagy mellettem.”`,

    story: `Herold és Hanna éppen kakaót kortyolgattak, amikor kopogást hallottak az ajtón. Brendon, a pandamaci, hóval borítva állt az ajtóban. "Hóembert építettem, de elfogyott a kakaóm!" – mondta bánatosan. Hanna mosolyogva töltött neki egy csészével. "Csatlakozol a karácsonyi kalandunkhoz?" – kérdezte Herold. Brendon izgatottan bólogatott.`,

    gift: `Mogyorós Csokigolyó, Mini Kinder Bueno, Csokipénz`,
  },
  3: {
    program: `Készítsünk forró csokit, teát vagy forralt bort, és próbáljunk ki egy új ízesítést!`,

    quote: `"A karácsony számomra az, hogy minden pillanatban érezhetem a szerelmed melegét."`,

    story: `A kis csapat elindult a nagy útra, és a dombok között találkozott Bertalannal, a kispingvinnel, aki egy jégcsapokkal díszített szánkót húzott maga után. "Készülök a nagy karácsonyi szánkóversenyre!" – jelentette ki büszkén. Herold megkérdezte, van-e ideje velük tartani, mire Bertalan így felelt: "Ha hoztok kakaót, jövök!" Természetesen mindenki nevetett, és megosztották vele a termoszukat.`,

    gift: `Mogyorós Csokigolyó, Mini Kinder Bueno, Csokipénz`,
  },
  4: {
    program: `Írjunk egy listát arról, hogy mit szeretnénk együtt csinálni az ünnepek alatt.`,

    quote: `„Veled minden nap olyan, mint a karácsony: tele van meglepetésekkel, boldogsággal és szeretettel.”`,

    story: `Miközben a hóban trappoltak, egy kis füles csacsit, Füli babát találtak, aki egy hatalmas hókupac tetején ült. "Miért vagy itt egyedül?" – kérdezte Hanna. "Eltévedtem, és hideg van" – sóhajtotta Füli. Hanna gyorsan felmelegítette egy csésze kakaóval. "Gyere velünk, együtt karácsonyozni mindig vidám!" – mondta Brendon, és Füli boldogan csatlakozott.`,

    gift: `Mogyorós Csokigolyó, Mini Kinder Bueno, Csokipénz`,
  },
  5: {
    program: `Nézzünk meg egy ünnepi témájú filmet!`,

    quote: `„Amíg te vagy a karácsonyi történetem főszereplője, addig minden csodásan alakul.”`,

    story: `A társaság egy rétre érve találkozott Bockóval, a virágos bocival, aki éppen hóvirágokat festett az ablakokra. "Hamarosan készítek kakaós pralinékat!" – újságolta. "Nektek is megmutatom, ha eljöttök a kis műhelyembe!" A kis csapat izgatottan elfogadta az ajánlatot.`,

    gift: `Mogyorós csokigolyó, Mini Kinder Bueno, Mini Kindertojás, Csokipénz`,
  },
  6: {
    program: `Tegyünk egy esti sétát, és keressünk karácsonyi fényeket a környéken.`,

    quote: `„A legszebb fények karácsonykor nem az égősorokon ragyognak, hanem a szemünkben, amikor egymásra nézünk.”`,

    story: `A hóesés közepén egy kengurut pillantottak meg. Picibaba volt az, aki nagyokat ugrált a hóban. "Kakaót iszom, hogy tovább bírjam az ugrándozást!" – kacagott. Hanna elővette a termoszát, és őt is megkínálta. "Velünk tartasz a karácsonyi kalandban?" – kérdezte Herold. Picibaba egy nagy ugrással csatlakozott.`,

    gift: `Mogyorós Csokigolyó, Mini Kinder Bueno, Csokipénz`,
  },
  7: {
    program: `Süssünk együtt valami egyszerűt, például mézeskalácsot vagy csokis kekszet.`,

    quote: `„A szeretet az igazi karácsonyi csoda – és veled ezt minden nap megtapasztalom.”`,

    story: `Herold egy régi térképet talált Bertalan szánkóján. "Ez egy varázstérkép!" – mondta Bertalan. "Azt mutatja meg, hol található a tökéletes karácsonyfa." A csapat izgatottan elindult, hogy kövessék a térképet.`,

    gift: `Mogyorós csokigolyó, szaloncukor, mini Kinder Bueno`,
  },
  8: {
    program: `Oldjunk meg egy ünnepi témájú rejtvényt vagy kvízt (akár egy online verziót is, vagy az adventi szabadulókönyvet).`,

    quote: `„Nem kell hóesés vagy díszek, hogy ünnepi hangulatban legyek – elég, ha melletted lehetek.”`,

    story: `A térkép egy hídhoz vezette őket, amelyet vastagon borított a hó. Füli baba bátran átgázolt, és mindenkinek segített átkelni. Amikor sikeresen átjutottak, Herold megjutalmazta őt egy csésze kakaóval.`,

    gift: `Szaloncukor, Mini Kinder, Mini Kinder tojás, csokipénz`,
  },
  9: {
    program: `Készítsünk együtt kézzel vagy digitálisan karácsonyi képeslapokat, és küldjünk el egy párat a családtagjainknak.`,

    quote: `„Karácsony: az az idő, amikor még jobban rádöbbenek, hogy veled az élet egy örök ünnep.”`,

    story: `A térkép egy különleges helyre vezette őket: a Kandírozott Erdei ösvényhez, ahol cukorkaágak és csokoládélevelek lógtak a fákon. Bockó itt talált egy új receptet a kakaós pralinéihoz, és megígérte, hogy elkészíti karácsonyra.`,

    gift: `Szaloncukor, csokipénz, Mini Kinder`,
  },
  10: {
    program: `Írjunk együtt egy ajándéklistát a családtagoknak, és tervezzük meg, mit adunk nekik.`,

    quote: `„A karácsony nem a tökéletességről szól, hanem arról, hogy ott legyünk egymásnak – és te vagy a legszebb bizonyíték erre.”`,

    story: `A babák egész álló nap alapanyagokat gyűjtöttek az új recepthez. Nagyon elfáradtak, de mindenki elszűrcsölt egy pohár kakaót, és újra erőre kaptak!`,

    gift: `Sok-sok szaloncukor!!`,
  },
  11: {
    program: `Csináljuk egy mini „karácsonyi fotósarkot”, és készítsünk képeket együtt!`,

    quote: `„A tél hidege sem számít, amikor a szíved melegsége átölel engem.”`,

    story: `Végül már a kakaó sem segített eleget, így egy kiadós alvás után folytatták a keresgélést.`,

    gift: `Mogyorós csoki, Mini Kinder, Mini Kinder Bueno`,
  },
  12: {
    program: `Próbáljuk ki az origami karácsonyi díszeket!`,

    quote: `„Ha a szereteted egy karácsonyi ajándék lenne, egész évben kibontanám, újra és újra.”`,

    story: `A keresgélés után a babák annyira elfáradtak, hogy ezt a napot átaludták.`,

    gift: `Mogyorós csoki, csokipénz, Mini Kinder tojások`,
  },
  13: {
    program: `Menjünk el egy helyi cukrászdába (Pl. Csáklit), és kóstoljunk meg valami szezonális sütit.`,

    quote: `„Az égősorok ragyognak, a hópelyhek táncolnak, de a szívem csak a te dallamodra dobban.”`,

    story: `Miután felébredtek, az erdő közepén egy varázslatos hóangyalt találtak. Amikor a csapat lefeküdt a hóba, hogy saját hóangyalokat készítsen, amitől különleges fények jelentek meg az égen. Ez mutatta meg nekik az utat a tökéletes karácsonyfához.`,

    gift: `Mini Kinder, Mogyorós Csoki, csokipénz`,
  },
  14: {
    program: `Számkifestőzzünk ma! (Még meg kell venni)`,

    quote: `„A karácsonyi csillagokat nézve mindig arra gondolok, hogy te vagy a legfényesebb mind közül.”`,

    story: `A kicsik elindultak a hosszú útra, ami a karácsonyfához vezetett. Közben karácsonyi dalokat dúdolgattak közösen.`,

    gift: `Mini Kinder Csoki, Csokipénz`,
  },
  15: {
    program: `Játsszunk egy társasjátékot vagy valami vicces PS játékot!`,

    quote: `„A karácsonyfa alatt nem ajándékokat keresek, hanem a pillanatot, amikor magamhoz ölelhetlek.”`,

    story: `Mivel az út nagyon hosszú volt, a mai napot végigbandukolták. Közben nagyon sok kakaót ittak!`,

    gift: `Mini Kinderek, csokipénz`,
  },
  16: {
    program: `Készítsünk saját karácsonyi díszt szárított narancskarikákból!`,

    quote: `„A legszebb karácsonyi ajándék, amit valaha kaptam, az a mosolyod és a veled megosztott élet.”`,

    story: `Az út hosszú volt, de megérkeztek. Nagyon elfáradtak, ezért a napot átcsucsulták.`,

    gift: `Kinder Schoko Bons, csokipénz`,
  },
  17: {
    program: `Szerezzünk be egy karácsonyi témájú puzzle-t, és rakjuk ki együtt. Közben hallgassunk karácsonyi zenéket!`,

    quote: `„A tél hideg, de a karácsony forrón tartja a szívünket – főleg, ha ott vagy nekem.”`,

    story: `A fa megtalálása után rájöttek, hogy hiányzik a csúcsdísz. Bertalan szerint a legszebb csillag egy közeli hegycsúcs tetején található. Együtt vágtak neki a hegynek, kakaós szüneteket tartva, miközben a fát a szánkón húzták felfele.`,

    gift: `Kinder Schoko Bons`,
  },
  18: {
    program: `Főzzünk együtt egy egyszerű vacsorát, majd gyertyafény mellett együk meg.`,

    quote: `„A szeretetünk olyan, mint a karácsonyi fények – melegséget és ragyogást hoz a leghidegebb napokba is.”`,

    story: `A hegy nagyon magas volt. "Ezt nem hiszem el, hogy megint ekkora útra kell menni!" - mondta Herold cocó. "Ugyan már Herold, gondolj arra, mennyi kakaót fogunk inni közben!" - válaszolt Hanna cocó`,

    gift: `Csoki`,
  },
  19: {
    program: `Nézzünk meg két karácsonyi filmet egymás után, és közben együnk popcorn-t vagy chipset!`,

    quote: `„A karácsonyi filmek mindig arról szólnak, hogy a szeretet győz – és velünk ez tényleg igaz!”`,

    story: `A babák egy ponton megálltak, mert találtak egy barlangot. A barlang tele volt kakaós mézeskaláccsal! Ez csakis a karácsony csodája lehet!`,

    gift: `Csoki`,
  },
  20: {
    program: `Csomagoljuk be együtt az ajándékokat – hallgassunk közben karácsonyi zenét vagy nézzünk egy háttérben futó karácsonyi filmet.`,

    quote: `„A karácsony igazi ajándéka nem csomagolható – te vagy az, a szívem minden sarkában.”`,

    story: `Miután a telefalták magukat mézeskaláccsal, a kicsik továbbindultak a hegy teteje felé. Az úton nagyon sok mindent láttak: mosolygós gumimacikat, dúdoló rénszarvasokat, és egy nagy doboz kakaóport (amit természetesen eltettek!)`,

    gift: `Csoki`,
  },
  21: {
    program: `Készítsünk mézeskalács házat!`,

    quote: `„Az ünnepek igazi varázsa nem a díszekben rejlik, hanem abban, hogy veled oszthatom meg az örömömet.”`,

    story: `A hegy tetején egy óriási csillagot találtak, de a jég miatt nehéz volt elérni. Picibaba nagy ugrásával sikerült megszerezni a csillagot, és mindenki kakaóval ünnepelt.`,

    gift: `Csoki`,
  },
  22: {
    program: `Csillagszórózzunk és készítsünk képeket!`,

    quote: `„Minden csillagszóróval egy újabb boldog pillanatot kívánok, amit veled tölthetek.”`,

    story: `A babák Bertalan szánkóját használva elindultak lefele a hegycsúcsról. Mivel nem fértek el rajta mindannyian, ezért megoldást kellett találniuk. De előtte, kakaószünet!`,

    gift: `Csoki`,
  },
  23: {
    program: `Üljünk le egy forró teával vagy forralt borral, és beszélgessünk arról, mi volt az év legszebb pillanata. Írjuk össze, mik történtek idén!`,

    quote: `„Minden évben azt hittem, tökéletes a karácsony. Aztán megérkeztél, és rájöttem, hogy veled kezdődnek az igazi ünnepek.”`,

    story: `Mivel leleményes gyerekek voltak, ezért egymás feje tetejére álltak, úgy néztek ki, mint egy kisbaba totemoszlop. Miután megtalálták az egyensúlyt, elindultak lefele. Nagyon gyorsan csúsztak, de mindannyian élvezték az élményt. Csak arra nem gondoltak, hogy lehet nem Bertalant kellett volna legalulra tenni.`,

    gift: `Csoki`,
  },
  24: {
    program: `Reggel készítsünk kakaót. Díszítsük fel a fát, és készüljünk a szentestére! Boldog Karácsonyt!`,

    quote: `„A legjobb ajándék, amit adhatsz karácsonyra, a közös emlékeink és az ígéret, hogy még több ilyet alkotunk.”`,

    story: `Miután hazaértek a nagy kalandról, karácsony estéjén a csapat közösen díszítette fel a tökéletes karácsonyfát, és a csúcsára helyezték a csillagot. Bockó elővette a pralinékat, Bertalan forró kakaót készített, és mindenki együtt ünnepelt. Herold mosolyogva nézett körbe: „Ez a legszebb karácsony – együtt, sok-sok kakaóval!”`,

    gift: `Csoki`,
  },
};

const fullReset = function () {
  quoteContainer.classList.add("opacityzero");
  programContainer.classList.add("opacityzero");
  storyContainer.classList.add("opacityzero");
  giftContainer.classList.add("opacityzero");

  quoteContainer.classList.remove("opacityfull");
  programContainer.classList.remove("opacityfull");
  storyContainer.classList.remove("opacityfull");
  giftContainer.classList.remove("opacityfull");
};

const partialReset = function () {
  quoteContainer.classList.remove("opacityfull");
  programContainer.classList.remove("opacityfull");
  storyContainer.classList.remove("opacityfull");
  giftContainer.classList.remove("opacityfull");

  quoteContainer.classList.add("opacityfull");
  programContainer.classList.add("opacityzero");
  storyContainer.classList.add("opacityzero");
  giftContainer.classList.add("opacityzero");
};

function setDefaultState() {
  icons.forEach((icon, index) => {
    if (index === 0) {
      icon.classList.add("activated");
      icon.classList.remove("deactivated");

      quoteContainer.classList.add("absolute");
      storyContainer.classList.add("opacityzero");
      programContainer.classList.add("opacityzero");
      giftContainer.classList.add("opacityzero");
    } else {
      icon.classList.remove("activated");
      icon.classList.add("deactivated");
    }
  });
}

function updateIconClasses(clickedIcon) {
  icons.forEach((icon) => {
    if (icon === clickedIcon) {
      icon.classList.add("activated");
      icon.classList.remove("deactivated");
    } else {
      icon.classList.remove("activated");
      icon.classList.add("deactivated");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  let today = new Date().getDate(); // Az aktuális nap száma
  let month = new Date().getMonth() + 1;
  console.log(month);

  setTimeout(() => {
    title.classList.remove("opacityzero");
  }, 1);
  setTimeout(() => {
    title.classList.remove("middle-placement");
  }, 2000);

  setTimeout(() => {
    welcomeMsg.classList.remove("opacityzero");
    welcomeMsg.classList.add("opacityfull");
    darkBckg.classList.remove("hidden");
    darkBckg.style.opacity = "70%";
    darkBckg.classList.add("show-flex");
    doorGrid.style.display = "grid";
  }, 2100);

  setTimeout(() => {
    doorGrid.classList.remove("opacityzero");
  }, 2300);

  buttons.forEach((button) => {
    const dayNumber = parseInt(button.textContent, 10);
    const content = dailyContent[dayNumber];

    if (dayNumber === today && month === 12) {
      button.classList.add("btn-current-day");
      modal.classList.add("mdl-current-day");
    } else if (dayNumber > today || (today > 24 && month === 12)) {
      button.classList.add("btn-not-accessed");
    }

    if (!button.classList.contains("btn-not-accessed")) {
      button.addEventListener("click", function () {
        if (content) {
          quote.textContent = content.quote;
          program.textContent = content.program;
          story.textContent = content.story;
          gift.textContent = content.gift;
          todaysDate.textContent = `${month}.${
            dayNumber < 10 ? `0${dayNumber}` : dayNumber
          }`;
        }
        setDefaultState();

        darkBckg.style.opacity = "70%";
        modal.style.opacity = "100%";

        setTimeout(() => {
          darkBckg.classList.remove("hidden");
          modal.classList.remove("hidden");
          darkBckg.classList.add("show-flex");
          modal.classList.add("show-flex");
        }, 200);
      });
    }
  });

  darkBckg.addEventListener("click", function (event) {
    event.preventDefault();

    document.body.style.top = ""; // Visszaállítjuk a pozíciót

    darkBckg.style.opacity = "0";
    modal.style.opacity = "0";

    setTimeout(() => {
      darkBckg.classList.remove("show-flex");
      modal.classList.remove("show-flex");
      darkBckg.classList.add("hidden");
      modal.classList.add("hidden");

      partialReset();
    }, 200);
  });

  exitButton.addEventListener("click", function (event) {
    event.preventDefault();

    darkBckg.style.opacity = "0";
    modal.style.opacity = "0";

    setTimeout(() => {
      darkBckg.classList.remove("show-flex");
      modal.classList.remove("show-flex");
      darkBckg.classList.add("hidden");
      modal.classList.add("hidden");
      partialReset();
    }, 200);
  });
});

okBtn.addEventListener("click", function () {
  welcomeMsg.classList.remove("opacityfull");
  welcomeMsg.classList.add("opacityzero");
  darkBckg.style.opacity = "0";
  darkBckg.classList.remove("show-flex");
  darkBckg.classList.add("hidden");
});

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    updateIconClasses(icon); // Frissítjük az osztályokat
    console.log(icon);
    if (icon.classList.contains("quote-trgt")) {
      fullReset();

      setTimeout(() => {
        quoteContainer.classList.remove("opacityzero");
        quoteContainer.classList.add("opacityfull");
        quoteContainer.classList.add("absolute");

        programContainer.classList.add("opacityzero");
        storyContainer.classList.add("opacityzero");
        giftContainer.classList.add("opacityzero");
      }, 200);
    } else if (icon.classList.contains("program-trgt")) {
      fullReset();
      setTimeout(() => {
        programContainer.classList.remove("opacityzero");
        programContainer.classList.add("opacityfull");
        programContainer.classList.add("absolute");

        quoteContainer.classList.add("opacityzero");
        storyContainer.classList.add("opacityzero");
        giftContainer.classList.add("opacityzero");
      }, 200);
    } else if (icon.classList.contains("story-trgt")) {
      fullReset();
      setTimeout(() => {
        storyContainer.classList.remove("opacityzero");
        storyContainer.classList.add("opacityfull");
        storyContainer.classList.add("absolute");

        programContainer.classList.add("opacityzero");
        quoteContainer.classList.add("opacityzero");
        giftContainer.classList.add("opacityzero");
      }, 200);
    } else if (icon.classList.contains("gift-trgt")) {
      fullReset();
      setTimeout(() => {
        giftContainer.classList.remove("opacityzero");
        giftContainer.classList.add("opacityfull");
        giftContainer.classList.add("absolute");

        programContainer.classList.add("opacityzero");
        storyContainer.classList.add("opacityzero");
        quoteContainer.classList.add("opacityzero");
      }, 200);
    }
  });
});
