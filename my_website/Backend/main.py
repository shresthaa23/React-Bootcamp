# For the backend w/ Postman

from fastapi import FastAPI

app = FastAPI()

from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

cookie = []

@app.get('/items')
async def getCookie():
    return cookie

class Item(BaseModel):
    count: int

@app.post('/add')
async def moreCookie(item: Item):
    for x in range(item.count):
        cookie.append("Cookies!")
    return {'have more cookies now'}


@app.delete('/remove')
async def lessCookie(item: Item):
    if item.count > len(cookie):
        return {'removing too many cookies'}
    else:
        for x in range(item.count):
            cookie.pop(0)
        return {'removed that many cookies'}