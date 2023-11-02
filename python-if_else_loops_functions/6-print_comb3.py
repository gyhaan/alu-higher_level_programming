#!/usr/bin/python3
for item in range(0, 10):
    for n in range(item + 1, 10):
        if item == 8 and n == 9:
            print("{}{}".format(item, n))
        else:
            print("{}{}, ".format(item, n), end="")
