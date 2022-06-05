from flask import Flask, send_from_directory, request, jsonify, Response
import os
import time
from werkzeug.utils import secure_filename
from object_detection.personcounter import PeopleCounter
import threading

sema = threading.Semaphore(1)

UPLOAD_FOLDER = os.path.dirname(os.path.abspath(__file__)) + '\\uploads'
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])

pplcounter = PeopleCounter()

app = Flask(__name__, static_url_path='/', static_folder='build')
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename): # filename을 보고 지원하는 media type인지 판별
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS

@app.route('/upload', methods=['POST'])
def upload_file():
    try:
        file = request.files['file']
        if file and allowed_file(file.filename.lower()):
            sta = time.time() # 시간 측정
            sema.acquire() # 세마포어 획득

            # 파일을 a.jpg/a.png/a.jpeg 형식으로 저장
            filename = 'a.' + file.filename.rsplit('.', 1)[1]
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

            # 이미지로 부터 사람 수 예측
            res = pplcounter.count_people(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            sema.release() # 세마포어 릴리즈
            return jsonify([str(res), f'{time.time() - sta:.2f}'])
    except Exception as e:
        print(e)
    # unsupported media type (=http status 415)
    return Response('Error', status=415, mimetype='text/plain')

@app.route('/')
def index_html(): # 루트에서는 index.html을 response로 보냄
     return app.send_static_file('index.html')

@app.errorhandler(404)
def not_found(e):  # SPA 이므로 404 에러는 index.html을 보냄으로써 해결한다.
    return index_html()

if __name__ == '__main__':
    app.run(debug=True)