function anagram(arr) {
    const anagramMap = {};
    const result = [];
  
    for (const str of arr) {
      const sortedStr = str.toLowerCase().split('').sort().join('');
  
      if (anagramMap[sortedStr]) {
        anagramMap[sortedStr].push(str);
      } else {
        anagramMap[sortedStr] = [str];
      }
    }
  
    for (const key in anagramMap) {
      result.push(anagramMap[key]);
    }
  
    return result;
  }
  
  const arr = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
  const anagrams = anagram(arr);
  console.log(anagrams);