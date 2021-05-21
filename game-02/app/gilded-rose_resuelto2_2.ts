import { Item } from "./Item";

/**
 * En esta solucion lo ordene por casos y los etapas. Por eso hay 3 switch. Para que 3 etapas ? para poder separarlo en funciones y que tengamos una funcion por cada etapa. Como? ir a 2.2
 */

interface IGildedRoseUseCases {
    preSellIn(item: Item): Item;
    actualSellIn(item: Item): Item;
    posSellIn(item: Item): Item;
}

export class GildedRoseUseCases implements IGildedRoseUseCases {
    private variable1 = 'Backstage passes to a TAFKAL80ETC concert';
    private variable2 = 'Aged Brie';
    private variable3 = 'Sulfuras, Hand of Ragnaros';
    private variable4 = 'Conjured Mana Cake';

    constructor() {}

    preSellIn(item: Item): Item {
        switch (item.name) {
            case this.variable1:
                if (item.sellIn <= 5) {
                    item.increaseQuality(3);
                } else if (item.sellIn <= 10) {
                    item.increaseQuality(2);
                } else {
                    item.increaseQuality();
                }
                break;
            case this.variable2:
                item.increaseQuality();
                break;

            case this.variable3:
                break;

            case this.variable4:
                item.decreaseQuality(2);
                break;

            default:
                item.decreaseQuality();
                break;
        }
        return item;
    }

    actualSellIn(item: Item): Item {
        switch (item.name) {
            case this.variable3:
                break;

            default:
                item.decreaseSellIn();
                break;
        }
        return item;
    }

    posSellIn(item: Item): Item {
        if (item.sellIn < 0) {
            switch (item.name) {
                case this.variable1:
                    item.resetQuality();
                    break;
                case this.variable2:
                    item.increaseQuality();
                    break;

                case this.variable3:
                    break;

                case this.variable4:
                    item.decreaseQuality(2);
                    break;

                default:
                    item.decreaseQuality();
                    break;
            }
        }

        return item;
    }
}

export class GildedRose {
    items: Array<Item>;
    gildedRoseUseCases: IGildedRoseUseCases = new GildedRoseUseCases();

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    tick() {
        return this.items.map(item => {
            // primera clausula
            // Esto lo puedo dejar asi, porque haria que el sistema sea mas rapido. Pero no seria tan bueno para ser autodocumentado
            // if (item.name == variable3) {
            //     return item;
            // }

            // segunda clausula
            item = this.gildedRoseUseCases.preSellIn(item);

            // tercera clausula
            item = this.gildedRoseUseCases.actualSellIn(item);

            // cuarta clausula
            item = this.gildedRoseUseCases.posSellIn(item);

            return item;
        });
    }
}
