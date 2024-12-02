import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

let sorter = new Sorter(new NumbersCollection([5, -1, 10, -100]));
sorter.sort();
console.log("sorted number []", sorter.collection);


sorter = new Sorter(new CharactersCollection('testString'));
sorter.sort()
console.log("sorted string", sorter.collection);

const ll = new LinkedList();
ll.add(5);
ll.add(12);
ll.add(-100);

sorter = new Sorter(ll);
sorter.sort();
ll.print();
