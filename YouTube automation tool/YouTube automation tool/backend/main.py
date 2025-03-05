from fastapi import FastAPI
import subprocess

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "YouTube Automation API is running!"}

@app.post("/generate-script")
def generate_script():
    subprocess.run(["python", "scripts/generate_script.py"])
    return {"status": "Script generation started"}

@app.post("/generate-voiceover")
def generate_voiceover():
    subprocess.run(["python", "scripts/text_to_speech.py"])
    return {"status": "Voiceover generation started"}

@app.post("/generate-video")
def generate_video():
    subprocess.run(["python", "scripts/generate_video.py"])
    return {"status": "Video generation started"}

@app.post("/upload-youtube")
def upload_youtube():
    subprocess.run(["python", "scripts/upload_to_youtube.py"])
    return {"status": "Upload to YouTube started"}
