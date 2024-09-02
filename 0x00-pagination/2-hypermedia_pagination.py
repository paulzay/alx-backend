#!/usr/bin/env python3
"""simple pagination"""

import csv
from typing import List


def index_range(page: int, page_size: int) -> tuple:
    """return tuple of indices"""
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Get page from dataset
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        start, end = index_range(page, page_size)
        return self.dataset()[start:end]

    def get_hyper(self) -> dict:
        """Get hypermedia pagination"""
        data = self.get_page()
        page = 1
        page_size = 10
        page_size = len(data)
        page = len(self.dataset()) // page_size
        if len(self.dataset()) % page_size:
            page += 1
        next_page = page + 1
        prev_page = page - 1
        total_pages = page
        return {
                "page_size": page_size,
                "page": page,
                "data": data,
                "next_page": next_page,
                "prev_page": prev_page,
                "total_pages": total_pages
                }
