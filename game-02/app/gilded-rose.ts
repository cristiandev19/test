import { Item } from "./Item";


// Cree una interface para tener un "contrato" de que implementaciones tiene que tener
interface IGildedRoseUseCase {
    execute(item: Item): Item;
    useCaseBackstage(item: Item): Item;
    useCaseBrie(item: Item): Item;
    useCaseSulfuras(item: Item): Item;
    useCaseConjured(item: Item): Item;
    useCaseNormal(item: Item): Item;
}

/**
 * Puse este objeto de casos de uso aqui para no complicar mas los test
 * Se puede? Si pero yo quiero que simplemente se cambie la importacion de "GildedRose" y que se pueda probar las otras forma en que resolvi esto
*/
export class GildedRoseUseCase implements IGildedRoseUseCase {
    // Puse estas variables privadas porque son los contenedores de useCases particular en la logica de negocio y solo le conscierne a esta clase, por otro lado los puse mas declarativos que solo poner "variable"
    private backstage = 'Backstage passes to a TAFKAL80ETC concert';
    private brie = 'Aged Brie';
    private sulfuras = 'Sulfuras, Hand of Ragnaros';
    private conjured = 'Conjured Mana Cake';

    constructor() {}

    // Puse estas implementaciones en public por si alguien quiere usar el caso de uso por separado
    public useCaseBackstage(item: Item): Item {
        if (item.sellIn <= 5) {
            item.increaseQuality(3);
        } else if (item.sellIn <= 10) {
            item.increaseQuality(2);
        } else {
            item.increaseQuality();
        }
        item.decreaseSellIn();

        if (item.sellIn < 0) {
            item.resetQuality();
        }
        return item;
    }

    public useCaseBrie(item: Item): Item {
        item.increaseQuality();
        item.decreaseSellIn();

        if (item.sellIn < 0) {
            item.increaseQuality();
        }
        return item;
    }

    // Este casito es curioso porque no se le hace nada
    public useCaseSulfuras(item: Item): Item {
        return item;
    }

    public useCaseConjured(item: Item): Item {
        item.decreaseQuality(2);
        item.decreaseSellIn();

        if (item.sellIn < 0) {
            item.decreaseQuality(2);
        }
        return item;
    }


    public useCaseNormal(item: Item): Item {
        item.decreaseQuality();
        item.decreaseSellIn();

        if (item.sellIn < 0) {
            item.decreaseQuality();
        }
        return item;
    }

    public execute(item: Item): Item {
        switch (item.name) {
            case this.backstage:
                item = this.useCaseBackstage(item);
                break;
            case this.brie:
                item = this.useCaseBrie(item);
                break;

            case this.sulfuras:
                item = this.useCaseSulfuras(item);
                break;

            case this.conjured:
                item = this.useCaseConjured(item);
                break;

            default:
                item = this.useCaseNormal(item);
                break;
        }
        return item;
    }
}
export class GildedRose {
    items: Array<Item>;
    // Puse la interfaz enves de la clase, por si algun dia quieren hacer un cambio de esta clase a otra que se guie por el contrato de la interfaz
    gildedRoseUseCase: IGildedRoseUseCase;

    constructor(items = [] as Array<Item>) {
        this.items = items;
        this.gildedRoseUseCase = new GildedRoseUseCase();
    }

    tick() {
        return this.items.map(item => this.gildedRoseUseCase.execute(item));
    }
}
