/**
  1146. Snapshot Array
  
  Implement a SnapshotArray that supports the following interface:
  - SnapshotArray(int length) initializes an array-like data structure with the given length. Initially, each element equals 0.
  - void set(index, val) sets the element at the given index to be equal to val.
  - int snap() takes a snapshot of the array and returns the snap_id: the total number of times we called snap() minus 1.
  - int get(index, snap_id) returns the value at the given index, at the time we took the snapshot with the given snap_id
  
  Example 1:
  Input: ["SnapshotArray","set","snap","set","get"]
  [[3],[0,5],[],[0,6],[0,0]]
  Output: [null,null,0,null,5]
  Explanation: 
    SnapshotArray snapshotArr = new SnapshotArray(3); // set the length to be 3
    snapshotArr.set(0,5);  // Set array[0] = 5
    snapshotArr.snap();  // Take a snapshot, return snap_id = 0
    snapshotArr.set(0,6);
    snapshotArr.get(0,0);  // Get the value of array[0] with snap_id = 0, return 5
 */

type HistoryRecord = [number, number];
type HistoryRecords = Array<HistoryRecord>;

class SnapshotArray {
  snapsCount: number;
  current: Map<number, number>;
  history: Map<number, HistoryRecords>

  constructor(length: number) {
    this.current = new Map();
    this.history = new Map();

    for (let i = 0; i < length; i++) {
      this.current.set(i, 0);
    }
    this.snapsCount = 0;
  }

  set(index: number, val: number): void {
    this.current.set(index, val);
  }

  snap(): number {
    this.current.forEach((val: number, index: number) => {
      const records = this.history.get(index) || [];
      
      records.push([this.snapsCount, val]);
      this.history.set(index, records);
    })
    this.current.clear();
    return this.snapsCount++;
  }

  get(index: number, snap_id: number): number {
    const records: HistoryRecords = this.history.get(index) || [];
    let l: number = 0;
    let r: number = records.length

    while (l < r) {
      const mid: number = l + Math.floor((r - l) / 2);

      if (records[mid][0] === snap_id) {
        return records[mid][1];
      } else if (records[mid][0] < snap_id) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }

    return records[r - 1][1];
  }
}

// Time: 
//   - Snap: O(n)
//   - Get: O(log m)
//   - Set: O(1)
//   - Constructor: O(n)
// Space: O(n + m))

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */