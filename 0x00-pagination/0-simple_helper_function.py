#!/usr/bin/env python3
"""simple helper function"""


def index_range(page: int, page_size: int) -> tuple:
    """return tuple of indices"""
    start_index = (page - 1) * page_size
    end_index = page * page_size
    data_tuple = tuple(start_index, end_index)
    return data_tuple
