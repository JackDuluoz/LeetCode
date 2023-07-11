class Solution(object):
    def gcdOfStrings(self, str1, str2):
        unicode_array1, unicode_array2 = [], []
        str1_total, str2_total = 0, 0
        for character in str1:
            unicode_array1.append(ord(character))
            str1_total += ord(character)
        for character in str2:
            unicode_array2.append(ord(character))
            str2_total += ord(character)
        shortest_array = unicode_array1 if len(unicode_array1) <= len(unicode_array2) else unicode_array2
        longest_array = unicode_array1 if len(unicode_array1) > len(unicode_array2) else unicode_array2
        gcd = math.gcd(str1_total, str2_total)
        if gcd == 1:
            return ""
        if gcd < min(shortest_array):
            return ""
        result_array = []
        chunk_total = 0
        i = 0
        while chunk_total < gcd:
            result_array.append(shortest_array[i])
            chunk_total += shortest_array[i]
            i += 1
        output = ""        
        for index, uni in enumerate(result_array):
            if unicode_array1[index] != uni or unicode_array2[index] != uni:
                return ""
            else: 
                output += chr(uni)
        if len(unicode_array1) == len(unicode_array2):
            return output
        while len(longest_array) >= len(result_array):
            for index, uni in enumerate(result_array):
                if longest_array[index] != uni:
                    return ""            
            longest_array = longest_array[len(result_array):]
        return output














