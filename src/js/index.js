import axios from "axios";
import _ from 'lodash';
import '../styles/main.scss';

import {popupBtn, sceneOne, sceneTwo, sceneThree, input, form, category, title, description, wrapperResults} from './variables';
import { getBooks } from './get_books.js';
import { getDescription } from "./getDescription";


popupBtn.addEventListener("click", () => {
    sceneOne.classList.add('hide');
    sceneTwo.classList.remove('hide');
}); 

form.addEventListener("submit", (e) => {
    e.preventDefault();
    category.textContent = input.value;
    sceneTwo.classList.add('hide');
    sceneThree.classList.remove('hide');
    getBooks(axios, wrapperResults, input.value, _);
});

wrapperResults.addEventListener("click", doSmt, false);
function doSmt(e) {
    if((e.target !== e.currentTarget) && (e.target.className == 'getDescriptionBtn')) {
        getDescription(e.target.id, title, description, axios, _);
    }
    e.stopPropagation();
}