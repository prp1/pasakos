import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Story } from './stories.interfaces';

@Injectable()
export class StoriesService {

    private _categories = [
        {
            id: 1,
            title: 'Nuotykių',
        },
        {
            id: 2,
            title: 'Baugios',
        },
        {
            id: 3,
            title: 'Linksmos',
        },        
    ]

    private _stories: Story[] = [
        {
            id: 1,
            title: 'Erelis',
            text: ``,
            categoryId: 1,
        },
        {
            id: 2,
            title: 'Mėlynbarzdis',
            text: `
                Kažkada labai toli, puikiuose rūmuose, gyveno turtingas žmogus, vardu Mėlynbarzdis. Tokią keistą pavardę jis gavo todėl, kad jo barzda buvo mėlyna. Pažiūrėti jis buvo rūstus ir žiaurus, o mėlyna barzda darė jį tokį baisų, kad niekas nenorėjo už jo tekėti. O Mėlynbarzdis jau šešis sykius buvo vedęs, tiktai niekas nežinojo, kur jo pačios dingsta. 
                Tuo metu, kai prasideda mūsų pasaka, Mėlynbarzdis atvažiavo pas savo kaimynę našlę prašyti, kad leistų už jo vieną savo dukrelę — tą, kuri pati panorės už jo eiti. Kai sužinojo gražuolės sesers tas piršlybas, ėmė savitarpy bartis ir siuntinėti jaunikį viena pas kitą.
                Mėlynbarzdis po to iškėlė puotą, susikvietė į ją kaimynus su dukterimis ir visus nustebino savo turtu: šilkai, deimantai ir šydai visur šlamėjo, krištolinės žvakidės visur skleidė šviesos spindulius, didžiausi veidrodžiai rodė
                visą žmogų, paveikslai ir marmurinės stovylos puošė sienas.
                Svečiams buvo labai linksma, šeimininkas gausiai visus vaišino, ir jaunesniajai našlės dukteriai jo barzda pasirodė ne tokia jau baisi. Ir ji sutiko už jo tekėti. Tuojau atšoko linksmiausias vestuves. Gražuolė gyveno turtinguos, aukštais
                bokštais rūmuos.
                Už mėnesio Mėlynbarzdis išsirengė į kelione.
                — Aš dviem savaitėm išvažiuoju su svarbiais reikalais. Linksminkis, neliūdėk, pasikviesk svečių — ir nepajusi, kaip
                prabėgs laikas. Čia tau visų sandėlių raktai. Ten daug turtų, daug auksinių ir brangių daiktų sukrauta. Gali viską
                vartyti, kilnoti; visur vaikščioti ir viską žiūrėti. Bet štai dar vienas ilgas raktas — juo užrakintas galinis kambarys. Aš griežtai tau draudžiu tenai įeiti. Jeigu tu manęs nepaklausysi ir atidarysi tą kambarį, aš tave skaudžiai nubausiu,— rūsčiai tarė savo pačiai Mėlynbarzdis, net akys jam sužybčiojo.
                Gražuolė pasižadėjo klausyti įsakymo. Vyras išvažiavo, ir namai buvo pilni svečių; atėjo kviestų ir nekviestų; visi
                norėjo pamatyti nesuskaitomus šeimininko turtus.
                Mėlynbarzdžio pati visur vedžiojo svečius, o šie tik aikčiojo ir stebeilijos, didžiai nustebę negirdėtomis brangenybėmis, ir žvalgėsi į auksą. Bet gražuolė liūdo. Turtas jos neramino, o ilgasis raktas degino rankas; šeimininkę kankino noras atidaryti galines duris. Ji neiškentė, paliko prie svečių savo seseris, o pati leidosi bėgti
                į užgintąją vietą. Šit ir durys. Klaiku gražuolei: vyras taip rūsčiai žiūrėjo, kai liepė neiti čionai. Geriau grįžti atgal, o ne — tai neišvengsi nelaimės. Bet toks didelis buvo smalsumas, kad ji neiškentė ir atrakino duris.
                O, siaubas! Pasieniuose gulėjo kruvini pinnųjų Mėlynbarzdžio žmonų kūnai. Gražuolė sudrebėjo kaip epušės lapas ir išmetė raktą ant grindų į kraujo lataką. Paskum atsipeikėjus ji pasiėmė nuo žemės raktą, užrakino duris ir sugrįžo į bokštą. Iš baimės tiktai dabar pastebėjo Mėlynbarzdžio pati, kad raktas visas kruvinas, ir ėmė ji trinti smiltimis ir
                pelenais; bet kur čia tau: dėmės betrinant dar didėjo.
                Ir staiga ji girdi: ateina vyras.
                — Aš sugrįžau kiek anksčiau,— tarė jis.
                — Reikalus baigiau.
                Pati stengėsi būti linksma ir patenkinta, tiktai jai nesisekė apsimesti.
                — Duok man raktus,— tarė Mėlynbarzdis.
                Gražuolė net nutirpo iš baimės ir padavė raktus.
                — Iš kur tas kraujas? — paklausė ją vyras.
                — Nežinau! — sušnabždėjo pati.
                — Tai aš žinau! — rūsčiai sušuko Mėlynbarzdis.
                — Tu nepaklausei manęs ir įėjai į užgintąjį kambarį. Gerai, tai pati dabar gausi atsigulti šalia pirmųjų mano pačių!
                Gražuolė prašė pasigailėti. Graudžiai ji verkė, bet Mėlynbarzdis buvo žiaurus ir neperkalbamas.
                — Tuojau bus tau galas! — tarė jis pačiai.
                — Duok man nors pasimelsti prieš mirtį,— prašė nelaimingoji moteris.
                — Duodu tau penkias minutes laiko,— tarė jis ir nužirgliojo paniuręs į gretimą menę.
                O gražuolė pasišaukė seserį ir sako jai:
                — Įlipk į bokšto viršūnę ir pasižiūrėk, ar neatjoja mūsų broleliai: jie turėjo šiandien čia būti. Jeigu pamatysi, duok
                ženklą, kad skubėtų.
                Sesuo įlipo į bokšto viršūnę, o Mėlynbarzdžio pati jai sako:
                — Miela sesyte, ką ten matai?
                — Matau laukus ir pievas, ir saulutę skaisčią.
                — Ar jau pasimeldei? — sušuko Mėlynbarzdis.
                — Tuojau,— atsakė pati, ir tik šnibžda:
                — Sesyt, sesyt, argi daugiau tu nieko nematai?
                — Matau dulkių stulpus keliu atidulkant.
                — Dėkui Dievui, tai mūsų broleliai joja!
                — Ne, mano vargšele, tai aveles gena.
                — Ir ką ten veiki taip ilgai? Jau baigėsi skirtas laikas! — sušuko Mėlynbarzdis.
                — Einu, einu,— atsakė žmona ir vėl tyliai klausia seserį:
                — Sesut, sesut, argi vis dar nieko nematai?
                — O-o, dabar matau,— lekia du raiteliai keliu, bet dar toli. Tai mūsų broleliai. Aš skepetaite duodu Jiems ženklą, kad jie, kiek tik gali, skubėtų.
                — Jeigu tu dar nebaigei, tai aš užbaigsiu! — suriaumojo Mėlynbarzdis ir puolė pas pačią.
                Jis pakėlė ranką ir buvo besmeigiąs peilį nelaimingajai į krūtinę, bet atsidarė durys ir į kambarį įsiveržė gražuolės
                broliai. Jie atbloškė Mėlynbarzdį ir pervėrė kardais.
                Sesuo puolė ant kaklo savo išgelbėtojams. Visas Mėlynbazdžio turtas atiteko jai. Ji atidavė pusę turto broliams, o antrą pusę pasidalijo su sesute.
                Abi seserys veikiai ištekėjo už gerų žmonių ir buvo laimingos. Apie gyvenimą su Mėlynbarzdžiu ji papasakodavo, lyg kokį baisų sapną prisiminus, o gal iš tikrųjų čia buvo tiktai sapnas?
            `,
            categoryId: 1,
        },
        {
            id: 3,
            title: 'Du žalčiai',
            text: 'Du žalčiai text',
            categoryId: 1,
        },
        {
            id: 4,
            title: 'Triratukas',
            text: 'Triratukas text',
            categoryId: 2,
        },
    ];

    private _favoriteStoriesIds = [
        1
    ];

    public getStory(storyId: number) {
        let story;

        this._stories.forEach((s) => {
            if (s.id === storyId) {
                story = s;
            }
        });

        return story;
    }

    public getStories(categoryId: number) {
        if (!categoryId) {
            return this._stories;
        }

        let stories = [];

        this._stories.forEach((s) => {
            if (s.categoryId === categoryId) {
                stories.push(s);
            }
        });

        return stories;
    }

    public getCategories() {
        return this._categories;
    }

    public isFavorite(storyId): boolean {
        return this._favoriteStoriesIds.indexOf(storyId) > -1;
    }

    public toggleFavoriteState(storyId: number): void {
        if (this.isFavorite(storyId)) {
            var index = this._favoriteStoriesIds.indexOf(storyId);
            this._favoriteStoriesIds.splice(index, 1);
        } else {
            this._favoriteStoriesIds.push(storyId);
        }
    }

}