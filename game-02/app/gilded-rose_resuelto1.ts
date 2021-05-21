import { Item } from "./Item";


/**
 * En esta resolucion mantuve el codigo legacy, lo ordene un poquito y le agregue la nueva funcionalidad
 */

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    tick() {
        // Con esto se lee mucho mejor
        const variable1 = 'Backstage passes to a TAFKAL80ETC concert';
        const variable2 = 'Aged Brie';
        const variable3 = 'Sulfuras, Hand of Ragnaros';
        const variable4 = 'Conjured Mana Cake';

        // En lo personal me gusta mucho mas usar map que for aunque for suele ser mas rapido para ciertos casos
        return this.items.map(item => {
            // primera clausula
            if (item.name != variable1 && item.name != variable2) {
                if(item.quality > 0) {
                    if (item.name != variable3) {
                        if (item.name == variable4) {
                            item.decreaseQuality(2);
                        } else {
                            item.decreaseQuality();
                        }
                    }
                }
            } else {
                if (item.quality < 50) {
                    item.increaseQuality();
                    if (item.name == variable1) {
                        if (item.sellIn < 11) {
                            if(item.quality < 50) {
                                item.increaseQuality();
                            }
                        }
                        if (item.sellIn < 6) {
                            if(item.quality < 50) {
                                item.increaseQuality();
                            }
                        }
                    }
                }
            }

            // segunda clausula
            if (item.name != variable3) {
                item.decreaseSellIn();
            }

            // tercera clausula
            if (item.sellIn < 0) {
                if (item.name != variable2) {
                    if (item.name != variable1) {
                        if (item.quality > 0) {
                            if (item.name != variable3) {
                                if (item.name == variable4) {
                                    item.decreaseQuality(2);
                                } else {
                                    item.decreaseQuality();
                                }
                            }
                        }
                    } else {
                        item.resetQuality();
                    }
                } else {
                    if (item.quality < 50) {
                        item.increaseQuality();
                    }
                }
            }
            return item;
        });
    }
}
