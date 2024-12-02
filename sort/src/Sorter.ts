export interface Sortable {
  // the name of the parameters in the interface does not need to the the same and the impl
  compare (leftInd: number, rightInd: number) : boolean;
  swap (leftIndex: number, rightIndex: number) : void;
  // get length(): number;
  length: number;
}

export class Sorter {

  // short hand constructor
  constructor (public collection: Sortable) {}

  // bubble sort
  sort () : void {
    const length: number  = this.collection.length;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j ++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}