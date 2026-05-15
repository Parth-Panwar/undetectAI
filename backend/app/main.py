from fastapi import FastAPI, UploadFile, File
import shutil
import os
import uuid
from app.detector import detect_image, detect_video
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)


def save_file(file: UploadFile):
    file_id = str(uuid.uuid4())
    path = os.path.join(UPLOAD_DIR, file_id + "_" + file.filename)

    with open(path, "wb") as f:
        shutil.copyfileobj(file.file, f)

    return path


@app.post("/detect-image")
def detect_image_endpoint(file: UploadFile = File(...)):
    path = save_file(file)
    result = detect_image(path)
    return {"type": "image", "result": result}


@app.post("/detect-video")
def detect_video_endpoint(file: UploadFile = File(...)):
    path = save_file(file)
    result = detect_video(path)
    return {"type": "video", "result": result}