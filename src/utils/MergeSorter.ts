import Comparator from "../Comparator";

interface Sorter<T> {
  sort(list: Array<T>, comparisonFn: Comparator<T>): void;
}

// Source: https://stackoverflow.com/a/7730507/4379903

export class MergeSorter<T> implements Sorter<T> {
  sort(list: Array<T>, comparisonFn: Comparator<T>): Array<T> {
    return this.mergeSort(list, comparisonFn);
  }

  private mergeSort(list: Array<T>, compare?: Comparator<T>): Array<T> {
    let length = list.length,
      middle = Math.floor(length / 2);

    if (!compare) {
      compare = function(left, right) {
        if (left < right) return -1;
        if (left == right) return 0;
        else return 1;
      };
    }

    if (length < 2) return list;

    let firstHalf: Array<T> = list.slice(0, middle),
      secondHalf: Array<T> = list.slice(middle, length);

    return this.merge(
      this.mergeSort(firstHalf, compare),
      this.mergeSort(secondHalf, compare),
      compare
    );
  }

  private merge(left: Array<T>, right: Array<T>, compare: Comparator<T>) {
    let result = [];

    while (left.length > 0 || right.length > 0) {
      if (left.length > 0 && right.length > 0) {
        if (compare(left[0], right[0]) <= 0) {
          result.push(left[0]);
          left = left.slice(1);
        } else {
          result.push(right[0]);
          right = right.slice(1);
        }
      } else if (left.length > 0) {
        result.push(left[0]);
        left = left.slice(1);
      } else if (right.length > 0) {
        result.push(right[0]);
        right = right.slice(1);
      }
    }
    return result;
  }
}
