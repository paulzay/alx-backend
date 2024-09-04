#!/usr/bin/env python3
""" Basic Cache Module """
BaseCaching = __import__('base_caching').BaseCaching


class BasicCache(BaseCaching):
    """ child class """
    def put(self, key, item):
        """ put cache """
        if item and key:
            self.cache_data[key] = item
        else:
            return None

    def get(self, key):
        """ get cache """
        return self.cache_data.get(key)
