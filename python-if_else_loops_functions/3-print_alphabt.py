#!/usr/bin/python3
for item in range(97, 123):
    if chr(item) == "q" or chr(item) == "e":
        continue
    else:
        print("{}".format(chr(item)), end="")
