/** 
 * Para empezar me gusta descomponer en funcionalidades
 * Y llevarlo a poo no me parecio conveniente asi que con funciones
 * Lo malo es que iria un poco mas lento de lo que iria con una sola funcion y una sola linea
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const merged = mergeArrays(nums1, nums2);
  // Para evitar los sideefects uso el [...] pero solo porque es de un nivel si fuera con objetos anidados mejor usar JSON.parse y JSON.stringify
  const sorted = [...merged].sort(sortNumbers);
  return calcMedian(sorted);
};

function mergeArrays(nums1: number[], nums2: number[]): number[] {
  return [...nums1, ...nums2];
}

function sortNumbers(a: number, b: number): number {
  return a - b;
}

function calcMedian(nums: number[]): number {
  if (nums.length % 2 == 0) {
    const half = nums.length/ 2;
    const first = nums[half- 1]
    const second = nums[half]
    return (first + second) / 2;
  }
  return nums[(nums.length - 1)/2];
}