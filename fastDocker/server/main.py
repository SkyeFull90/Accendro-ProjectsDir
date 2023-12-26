from fastapi import FastAPI
from typing import List
from pydantic import BaseModel

app = FastAPI()


class Warframe(BaseModel):
    id: int
    name: str
    rank: int
    ability: str


DB: List[Warframe] = [
    Warframe(id=1, name="Ivara", rank=19, ability="Ripclaw, Poison Ivy"),
    Warframe(id=2, name="Excalibur", rank=30, ability="Enchanted Sword")
]


@app.get("/")
def read_root():
    return {"message": "Hello Operator, Ordis is happy to see you."}


@app.get("/warframes")
def read_db():
    return DB
