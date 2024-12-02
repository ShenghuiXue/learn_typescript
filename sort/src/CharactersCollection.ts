import { Sortable } from "./Sorter";

export class CharactersCollection implements Sortable {
  constructor (public data: string) {
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
  }
  swap(leftIndex: number, rightIndex: number): void {
    const characters: string[] = this.data.split('');

    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;

    this.data = characters.join('');
  }
  
  get length(): number {
    return this.data.length;
  };
}