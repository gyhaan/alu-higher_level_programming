#!/usr/bin/python3
"""define a class Square"""


class Square:
    """initialisation of area of a square"""

    def __init__(self, size=0):
        self.__size = size

        if not isinstance(self.__size, int):
            raise TypeError("size must be an integer")
        elif self.__size < 0:
            raise ValueError("size must be >= 0")

    def area(self):
        return self.__size**2
