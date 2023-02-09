#!/usr/bin/python3
"""class Square that defines a square"""


class Square():
    """square class with it's size and proper validation"""

    def __init__(self, size=0):
        """To initailize the instance"""
        self.__size = size

    @property
    def size(self):
        """To show the size of the Square"""
        return self.__size

    @size.setter
    def size(self, value):
        """To set a value for size of the sqaure"""
        if (type(value) is not int):
            raise TypeError("size must be an integer")
        elif (value < 0):
            raise ValueError("size must be >= 0")
        self.__size = value

    def area(self):
        """To return the area of tthe square"""
        return self.__size ** 2

    def my_print(self):
        """To print # multiplied by size"""
        if not self.__size:
            print("")
        for i in range(self.__size):
            print("#" * self.__size)
