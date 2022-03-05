
import {Book} from "../model/Book";
import {Newspaper} from "../model/Newspaper";
import {NewspaperAdditionalAttributes} from "../model/NewspaperAdditionalAttributes";

let article: Book | Newspaper;
article = {
    date: '2022-02-28'
}
console.log(article);

//Intersection type: Must contain attributes of both
let additionalArticle: NewspaperAdditionalAttributes & Newspaper;
additionalArticle = {
    article: 'Ukraine in trouble',
    date: '2022-02-28',
    section: 'Geo-politics'
}
console.log(additionalArticle);
