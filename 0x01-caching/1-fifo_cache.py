#!/usr/bin/env python3
""" FIFOCache """
BaseCaching = __import__('base_caching').BaseCaching


class FIFOCache(BaseCaching):
    """ class definition """
    def __init__(self):
        """ initialize data """
        self.queue = []
        super().__init__()

    def put(self, key, item):
        """ put data """
        if key and item:
            if self.cache_data.get(key):
                self.queue.remove(key)
            self.queue.append(key)
            self.cache_data[key] = item
            if len(self.queue) > self.MAX_ITEMS:
                delete = self.queue.pop(0)
                self.cache_data.pop(delete)
                print('DISCARD: {}'.format(delete))


    def get(self, key):
        """ get data """
        return self.cache_data.get(key)
