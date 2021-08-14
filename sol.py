bina = '00000101000000000010100000 00001000100000000100010000 000010000011111100000 00001000000011100000010000'

a_binary_string = "01100001 01100010 01100011"

binary_values = a_binary_string.split()

ascii_string = ""
for binary_value in binary_values:
    an_integer = int(binary_value, 2)


    ascii_character = chr(an_integer)


    ascii_string += ascii_character


print(ascii_string)