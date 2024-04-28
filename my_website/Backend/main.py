# For the backend w/ Postman

from fastapi import FastAPI

app = FastAPI()

from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


cookie = []

@app.get('/items')
async def get_items():
    return cookie

class Item(BaseModel):
    count: int

@app.post('/add')
async def add_item(item: Item):
    for x in range(item.count):
        cookie.append("Cookies!")
    return {'have more cookies now'}


@app.delete('/remove')
async def remove_item(item: Item):
    if item.count > len(cookie):
        return {'removing too many cookies not happening'}
    else:
        for x in range(item.count):
            cookie.pop(0)
        return {'removed that many cookies'}