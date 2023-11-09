#!/usr/bin/python3
def no_c(my_string):
    array = []
    for i in range(len(my_string)):
        if my_string[i] == "c" or my_string[i] == "C":
            continue
        else:
            array.append(my_string[i])

    sentence = "".join(array)
    print(sentence)
    return sentence
