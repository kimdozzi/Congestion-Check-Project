from flask import Flask, send_from_directory, request, jsonify, Response
import os
import time

app = Flask(__name__, static_url_path='/', static_folder='build')

@app.route('/places',methods=['GET'])
def get_places():
    res = [
        {
            "PlaceID":1,
            "Name": "스터디 카페",
            "Latitude": 35.13476791445124,
            "Longitude": 129.1028642118515,
            "Object": "human"
        },
        {
            "PlaceID": 2,
            "PlaceID":1,
            "Name": "드라이브 스루",
            "Latitude": 35.135,
            "Longitude": 129.106,
            "Object": "car"
        }
    ]
    return jsonify(res)

@app.route('/')
def index_html(): # 루트에서는 index.html을 response로 보냄
     return app.send_static_file('index.html')

@app.errorhandler(404)
def not_found(e):  # SPA 이므로 404 에러는 index.html을 보냄으로써 해결한다.
    return index_html()

if __name__ == '__main__':
    app.run(debug=True, port='3000')