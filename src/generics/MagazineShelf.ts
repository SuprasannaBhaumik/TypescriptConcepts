import {Magazine} from '../model/Magazine';

export class MagazineShelf {

    _magazines: Magazine[] = [];

    addMagazineToShelf(magazine: Magazine) {
        console.log('add magazine to shelf');
    }

    removeMagazineFromShelf(magazine: Magazine) {
        console.log('removed magazine from shelf');
    }

}
