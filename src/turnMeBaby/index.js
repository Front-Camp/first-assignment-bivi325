/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
  let arr = str.split(" ");
  for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i].split('').reverse().join('');
  }
  arr = arr.reverse().join(' ');
  return arr;
};

export default turnMeBaby;
