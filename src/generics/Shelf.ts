
export class Shelf<T> {

    _items: T[] = [];

    addItemToCatalog(item: T) {
        console.log('added item to catalog');
        console.log(item);
    }

    removeItemFromCatalog(item: T) {
        console.log('remove item from catalog');
    }
}
