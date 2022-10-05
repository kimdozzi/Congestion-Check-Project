from flask import Flask, send_from_directory, request, jsonify, Response
from dblib import placesinfo
import pymysql
import os
import time

ht='localhost'
pt=3306
pw=''

def db_connect():
    return pymysql.connect(host=ht, port=pt, user='root', passwd=pw, db='congestion_db', charset='utf8')

app = Flask(__name__, static_url_path='/', static_folder='build')

@app.route('/places',methods=['GET'])
def get_places():
    conn = db_connect()
    with conn:
        with conn.cursor() as cursor:
            res = placesinfo.db_to_server_places(conn, cursor)
    return jsonify(res)

@app.route('/')
def index_html(): # 루트에서는 index.html을 response로 보냄
     return app.send_static_file('index.html')

@app.errorhandler(404)
def not_found(e):  # SPA 이므로 404 에러는 index.html을 보냄으로써 해결한다.
    return index_html()

if __name__ == '__main__':
    app.run(debug=True, port='3000')