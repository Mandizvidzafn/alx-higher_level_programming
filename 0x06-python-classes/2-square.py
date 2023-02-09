#!/usr/bin//python3
"""class Square"""

class Square():
    """square class with size"""
    
    def __init__(self, size=0):
        """initilization and setting conditions"""
        if (type(size) is not int):
            raise TypeError("size must be an integer")
        elif (size < 0):
            raise ValueError("size must be >= 0")
        self.__size = size
