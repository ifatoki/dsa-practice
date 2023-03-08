var findMedianSortedArrays = function(nums1, nums2) {
  let l = 0;
  
  const binSearchAndInsert = num => {
    let r = nums1.length - 1;
    
    while (r >= l) {
      const mid = l + Math.floor((r - l) / 2);

      if (r === l) {
        let insertionPoint = mid;

        if (num > nums1[mid]) insertionPoint++;
        nums1.splice(insertionPoint, 0, num);
        break;
      } else if (num >= nums1[mid]) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }
  };
  
  if (nums1.length === 0) {
    nums1 = [...nums2];
  } else {
    for (let i = 0; i < nums2.length; i++) {
      binSearchAndInsert(nums2[i])
    }
  }
  
  const isEven = (nums1.length % 2 === 0);
  const mid = Math.floor(nums1.length / 2)
  
  if (isEven) {
    return (nums1[mid] + nums1[mid - 1]) / 2;
  } else {
    return nums1[mid];
  }
};

// console.log(findMedianSortedArrays([2, 2, 4, 4], [2, 2, 4, 4]));
// console.log(findMedianSortedArrays([1, 2], [3, 4]));