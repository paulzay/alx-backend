#!/usr/bin/env python3
"""simple helper function"""
from typing import Tuple



def index_range(page, page_size) -> Tuple[int, int]:
    """return tuple of indices"""
    start_index = (page - 1) * page_size
    end_index = page * page_size
    data_tuple = tuple(start_index, end_index)
    return data_tuple
