"use strict";
// export interface Sortable {
//   // the name of the parameters in the interface does not need to the the same and the impl
//   compare (leftInd: number, rightInd: number) : boolean;
//   swap (leftIndex: number, rightIndex: number) : void;
//   // get length(): number;
//   length: number;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    // bubble sort
    sort() {
        const length = this.length;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
