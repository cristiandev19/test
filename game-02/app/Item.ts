interface IItem {
    name: string;
    sellIn: number;
    quality: number;
    increaseQuality(increased: number): void;
    decreaseQuality(decreased: number): void;
    resetQuality(): void;
    decreaseSellIn(decreased: number): void;
}

export class Item implements IItem {
    // Los volvi privados porque no me gusta la idea de que esten cambiando
    private _name: string; // los nombres ni por accidente, la logica de negocio esta muy pegada a los nombres
    private _sellIn: number;
    private _quality: number;

    // Estoy exponiendo estas constantes porque no pueden ser cambiadas al ser readonly
    public readonly MAX_QUALITY: number = 50;
    public readonly MIN_QUALITY: number = 0;

    constructor(
        name,
        quality,
        sellIn
    ) {
        this._name = name;
        this._quality = quality;
        this._sellIn = sellIn;
    }

    get name(): string {
        return this._name;
    }

    get sellIn(): number {
        return this._sellIn;
    }

    get quality(): number {
        return this._quality;
    }

    public increaseQuality(increased: number = 1) {
        // Aqui puse una validacion en la clase, porque esa logica es inherente a la clase
        this._quality = (this._quality + increased > this.MAX_QUALITY) ? this.MAX_QUALITY : this._quality + increased;
    }

    public decreaseQuality(decreased: number = 1) {
        // Lo mismo, validacion que si conscierne a la clase.
        this._quality = (this._quality - decreased < this.MIN_QUALITY) ? this.MIN_QUALITY : this._quality - decreased;
    }

    public resetQuality() {
        // Me sigue encantando este detalle, soberbio
        // this._quality = this._quality - this._quality
        this._quality = 0;
    }

    public decreaseSellIn(decreased: number = 1) {
        this._sellIn = this._sellIn - decreased;
    }

}