import threading
import time
from concurrent.futures import ThreadPoolExecutor

import requests

thread_local = threading.local()  # creates a thread local storage


def main():
    sites = [
                "https://www.jython.org",
                "http://olympus.realpython.org/dice",
            ] * 80
    start_time = time.perf_counter()
    download_all_sites(sites)
    duration = time.perf_counter() - start_time
    print(f"Downloaded {len(sites)} sites in {duration} seconds")


def download_all_sites(sites):
    # created an instance of the ThreadPoolExecutor to manage the threads for you
    # TPE is implemented using context manager (with statement)
    # with statement can be used to create and free the pool of instances
    # executor is responsible to orchestrate the thread pool : it calls the main program download_all_sites
    # iterables are passed to the called function
    with ThreadPoolExecutor(max_workers=5) as executor:
        executor.map(download_site, sites)


def download_site(url):
    # here session object is shared by the threads and requests.sessions is not thread safe
    # session may contain data that can be corrupted by other thread (cookies etc.)

    session = get_session_for_thread()
    with session.get(url) as response:
        print(f"Read {len(response.content)} bytes from {url}")


def get_session_for_thread():
    # why we are creating session : to reuse what request.session has to offer - to be checked later
    # if this is done using shared  resource
    # session = requests.Session()
    # lock = threading.Lock()
    #
    # def download_site(url):
    #     with lock:
    #         response = session.get(url)

    # lock code can make threads block so we use ::: Thread local storage
    # thread_local = threading.local() : Stores separate data per thread, even though it looks like one shared object.
    # The session will be created per thread so each HTTP request in that thread will be reusing the session object

    if not hasattr(thread_local, "session"):
        thread_local.session = requests.Session() # checks for storage value session for the thread
    return thread_local.session


if __name__ == "__main__":
    main()
