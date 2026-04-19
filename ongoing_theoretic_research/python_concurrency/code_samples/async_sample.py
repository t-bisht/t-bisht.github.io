import asyncio
import time

import aiohttp  # since requests is syncronous require an async version


async def main():
    sites = [
                "https://www.jython.org",
                "http://olympus.realpython.org/dice",
            ] * 80
    start_time = time.perf_counter()
    await download_all_sites(sites)  # pause main till download_all_sites completes
    duration = time.perf_counter() - start_time
    print(f"Downloaded {len(sites)} sites in {duration} seconds")


async def download_all_sites(sites):
    # aiohttp maintains an internal session thread pool
    # we use async with since creation of session involves I/O and should not be blocking
    # ClientSession is not something you “await” — it’s something you “open and close” (a resource)
    #
    async with aiohttp.ClientSession() as session:
        # create the coroutine objects (these are tasks that can run in parallel)
        tasks = [download_site(url, session) for url in sites]

        # start running the tasks
        await asyncio.gather(*tasks, return_exceptions=True)


async def download_site(url, session):
    # non blocking for starting a request and getting a response
    # async with ensures the response is properly cleaned up else I could also do response = await session.get(url) but
    # I would also have to do await reponse.release
    async with session.get(url) as response:
        # await response since body is arriving in chunks
        '''
        Tries to read from socket
        OS says: “no data yet”
        Coroutine yields control to event loop
        Event loop runs other tasks
        When data arrives → coroutine resumes
        '''
        print(f"Read {len(await response.read())} bytes from {url}")


if __name__ == "__main__":
    asyncio.run(main())  # starts main functions - creates event loop
