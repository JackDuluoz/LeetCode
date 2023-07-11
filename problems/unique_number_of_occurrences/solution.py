class Solution(object):
    def uniqueOccurrences(self, arr):
        dictionary = {}
        for number in arr:
            if number not in dictionary:
                dictionary[number] = 1
            else:
                dictionary[number] += 1
        set_of_occurrences = set(dictionary.values())
        if len(dictionary) == len(set_of_occurrences):
            return True
        else:
            return False
