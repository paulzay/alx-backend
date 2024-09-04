#!/usr/bin/python3
""" LIFO CACHE """
BaseCaching = __import__('base_caching').BaseCaching


class LIFOCache(BaseCaching):
    """ class definition """

    def __init__(self):
        """ initialize data """
        self.stack = []
        super().__init__()

    def put(self, key, item):
        """ put data """
        if key and item:
            if self.cache_data.get(key):
                self.stack.remove(key)
            while len(self.stack) >= self.MAX_ITEMS:
                delete = self.stack.pop()
                self.cache_data.pop(delete)
                print('DISCARD: {}'.format(delete))
            self.stack.append(key)
            self.cache_data[key] = item

    def get(self, key):
        """ return data """
        return self.cache_data.get(key)
