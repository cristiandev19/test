import { Item } from "./Item";

/**
 * En esta solucion lo ordene por casos y los etapas. Por eso hay 3 switch. Para que 3 etapas ? para poder separarlo en funciones y que tengamos una funcion por cada etapa. Como? ir a 2_2
 */

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    tick() {
        const variable1 = 'Backstage passes to a TAFKAL80ETC concert';
        const variable2 = 'Aged Brie';
        const variable3 = 'Sulfuras, Hand of Ragnaros';
        const variable4 = 'Conjured Mana Cake';

        return this.items.map(item => {
            // primera clausula
            // Esto lo puedo dejar asi, porque haria que el sistema sea mas rapido. Pero no seria tan bueno para ser autodocumentado
            // if (item.name == variable3) {
            //     return item;
            // }

            // segunda clausula
            switch (item.name) {
                case variable1:
                    item.increaseQuality();
                    if (item.sellIn <= 10) {
                        item.increaseQuality();
                    }
                    if (item.sellIn <= 5) {
                        item.increaseQuality();
                    }
                    break;
                case variable2:
                    item.increaseQuality();
                    break;

                case variable3:
                    break;

                case variable4:
                    item.decreaseQuality(2);
                    break;

                default:
                    item.decreaseQuality();
                    break;
            }

            // tercera clausula
            switch (item.name) {
                case variable3:
                    break;

                default:
                    item.decreaseSellIn();
                    break;
            }

            // cuarta clausula
            if (item.sellIn < 0) {

                switch (item.name) {
                    case variable1:
                        item.resetQuality();
                        break;
                    case variable2:
                        item.increaseQuality();
                        break;

                    case variable3:
                        break;

                    case variable4:
                        item.decreaseQuality(2);
                        break;

                    default:
                        item.decreaseQuality();
                        break;
                }
            }
            return item;
        });
    }
}
