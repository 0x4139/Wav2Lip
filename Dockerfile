FROM python:3.6.5

WORKDIR /usr/wav2lip

RUN apt update
RUN apt install -y git ffmpeg build-essential
RUN git clone https://github.com/Rudrabha/Wav2Lip .
RUN pip install --upgrade pip
RUN sed -i 's/opencv-python==4.1.0.25/opencv-python==4.5.5.64/' requirements.txt
RUN pip install -r requirements.txt
COPY models/s3fd.pth face_detection/detection/sfd/
COPY models/wav2lip.pth  checkpoints/
CMD ["python","inference.py"]