/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//LINK:https://leetcode.com/problems/isomorphic-strings/solutions/3347810/javascript-100-with-explanation-92-beats-hash-maps/
var isIsomorphic = function (s, t) {
  /*
    //1st solution
    //TIME-COMPLEXITY: O(n);
    //MEMORY: O(k)
  let mapS = {},
    mapT = {};
  for (let i = 0; i < s.length; i++) {
    if (!mapS[s[i]] && !mapT[t[i]]) {
      mapS[s[i]] = t[i];
      mapT[it[i]] = s[i];
      console.log(mapS, mapT);
    } else if (mapS[s[i]] !== t[i] || mapT[t[i]] !== s[i]) return false;
  }
  return true;
  */
  //2nd solution
  //TIME-COMPLEXITY: O(n);
  //MEMORY: O(k)
  const mapS = new Map();
  const mapT = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (!mapS.has(charS) && !mapT.has(charT)) {
      mapS.set(charS, charT);
      mapT.set(charT, charS);
    } else if (mapS.get(charS) !== charT || mapT.get(charT) !== charS) {
      return false;
    }
  }

  return true;
};
