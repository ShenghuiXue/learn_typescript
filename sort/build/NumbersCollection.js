"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
    // get make to to reference length like data.length instead of data.length()
    get length() {
        return this.data.length;
    }
}
exports.NumbersCollection = NumbersCollection;
