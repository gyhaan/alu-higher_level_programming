#!/usr/bin/python3
"""Define a class Square"""


class Square:
    """Instantiation with optional size"""

    def __init__(self, size=0):
        self.size = size

    @property
    def size(self):
        """Get/Set a current size of square"""
        return self.__size

    """property setter that sets the size"""

    @size.setter
    def size(self, value):
        if not isinstance(value, int):
            raise TypeError("size must be an integer")
        elif value < 0:
            raise ValueError("size must be >= 0")
        self.__size = value

    def area(self):
        return self.__size * self.__size

    def my_print(self):
        for i in range(0, self.__size):
            [print("#", end="") for j in range(self.__size)]
            print("")
        if self.__size == 0:
            print("")
