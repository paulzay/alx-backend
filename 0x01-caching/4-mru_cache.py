#!/usr/bin/python3
""" MRU Cache class """
BaseCaching = __import__('base_caching').BaseCaching


class MRUCache(BaseCaching):
    """ Define MRU Cache """

    def __init__(self):
        """ Initialize data """
        self.stack = []
        super().__init__()

    def put(self, key, item):
        """ Assign the item to the dictionary """
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
        """ get data """
        if self.cache_data.get(key):
            self.stack.remove(key)
            self.stack.append(key)
        return self.cache_data.get(key)
