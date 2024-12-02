// export interface Sortable {
//   // the name of the parameters in the interface does not need to the the same and the impl
//   compare (leftInd: number, rightInd: number) : boolean;
//   swap (leftIndex: number, rightIndex: number) : void;
//   // get length(): number;
//   length: number;
// }

export abstract class Sorter{
  abstract length : number;
  // abstract get length(): number;
  abstract compare (leftInd: number, rightInd: number) : boolean;
  abstract swap (leftIndex: number, rightIndex: number) : void;

  // bubble sort
  sort () : void {
    const length: number  = this.length;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j ++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}