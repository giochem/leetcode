/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var repeatingCharacters = {}
  var lengthOfLongestSubstring = 0
  for (var i = 0; i < s.length; i++) {
    if (repeatingCharacters[s[i]] === undefined) {
      repeatingCharacters[s[i]] = i
    } else {
      lengthOfLongestSubstring =
        Object.keys(repeatingCharacters).length > lengthOfLongestSubstring
          ? Object.keys(repeatingCharacters).length
          : lengthOfLongestSubstring

      i = repeatingCharacters[s[i]] + 1
      repeatingCharacters = { [s[i]]: i }
    }
  }
  if (Object.keys(repeatingCharacters).length > lengthOfLongestSubstring) {
    lengthOfLongestSubstring = Object.keys(repeatingCharacters).length
  }
  return lengthOfLongestSubstring
}
lengthOfLongestSubstring("abcabcbb")
lengthOfLongestSubstring("bbbbb")
lengthOfLongestSubstring("cdd")
lengthOfLongestSubstring("dvdf")
lengthOfLongestSubstring(" ")
lengthOfLongestSubstring("bbtablud")
