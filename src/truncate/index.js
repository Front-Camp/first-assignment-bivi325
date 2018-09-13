/**
 * This function should truncate the passed string and add "..." to
 * the end of it. Should exist ability to change "..." to some other symbols
 *
 * @param {string} str - string which should be truncated
 * @param {number} length - the max length of string after truncation
 * @param {string} replacer - the string which will be added to the end
 * @return {string} truncated string
 */
const truncate = (str, length = 0, replacer = '...') => {
  if(length > str.length || str.length === 0){
    return str;
  }
  let arr = str.split('');
  let arr2;
  if(length === 0){
    arr2 = arr.splice(0, str.length - replacer.length);
  }else {
    arr2 = arr.splice(0, length - replacer.length);
  }  
  let res = arr2.join('') + replacer;
  return res;
};

export default truncate;
