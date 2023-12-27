function findIndicesWithSum(list, target) {
  let left = 0;
  let right = list.length - 1;

  while (left < right) {
    const sum = list[left] + list[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++; // Move left pointer to increase the sum
    } else {
      right--; // Move right pointer to decrease the sum
    }
  }

  return "No such indices found";
}

const numbers = [2, 5, 8, 11, 15];
const targetSum = 20;

const result = findIndicesWithSum(numbers, targetSum);
console.log(result);
