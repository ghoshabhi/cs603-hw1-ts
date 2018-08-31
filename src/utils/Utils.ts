import Comparator from "../Comparator";
import { MergeSorter } from "./MergeSorter";
import Task from "../Task";

export class Utils<T> {
  private _mergerSorter: MergeSorter<T>;

  private get mergeSorter(): MergeSorter<T> {
    if (
      this._mergerSorter === undefined ||
      this._mergerSorter === null ||
      !(this._mergerSorter instanceof MergeSorter)
    ) {
      this._mergerSorter = new MergeSorter<T>();
    }
    return this._mergerSorter;
  }

  public sort(list: Array<T>, comparator: Comparator<T>): Array<T> | [] {
    const mergerSorter = this.mergeSorter;
    return mergerSorter.sort(list, comparator);
  }
}
