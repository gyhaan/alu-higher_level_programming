#!/usr/bin/python3
def islower(c):
    if ord(str(c)) <= 97 and ord(str(c)) >= 122:
        print(f"{c} is lower")
    else:
        print(f"{c} is upper")
