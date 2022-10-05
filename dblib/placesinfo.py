import pymysql

def db_to_server_places(db, cursor):
    query = f'SELECT PlaceID, Name, Object, Latitude, Longitude FROM place_info'
    cursor.execute(query)
    res = []
    for i in cursor.fetchall():
        res.append({
            'PlaceID': i[0],
            'Name' : i[1],
            'Object' : i[2],
            'Latitude' : i[3],
            'Longitude' : i[4]
        })
    db.commit()

    return res

def server_to_db_places(db, cursor, datas):
    insert_sql = "INSERT INTO `place_info`(Name, Object, Latitude, Longitude) VALUES (%(Name)s, %(Object)s, %(Latitude)s, %(Longitude)s);"
    cursor.executemany(insert_sql, datas)
    db.commit()

def server_to_db_place(db, cursor, data):
    insert_sql = "INSERT INTO `place_info`(Name, Object, Latitude, Longitude) VALUES (%(Name)s, %(Object)s, %(Latitude)s, %(Longitude)s);"
    cursor.execute(insert_sql, data)
    db.commit()




if __name__=="__main__":
    conn = pymysql.connect(host='localhost', port=3306, user='root', passwd='', db='congestion_db', charset='utf8')
    with conn:
        with conn.cursor() as cs:
            dt = [{
                'Name': '부산카페',
                'Object': 'human',
                "Latitude": 35.13476,
                "Longitude": 129.10286
            },
            {
                'Name': '대학가 스터디룸',
                'Object': 'human',
                "Latitude": 35.135767,
                "Longitude": 129.1328
            },
            {
                'Name': '부경대 주차장',
                'Object': 'car',
                "Latitude": 35.124767,
                "Longitude": 129.0428
            }]

            dt2 = {
                'Name': 'dfd',
                'object': 'uman',
                'Latitude': 34.232,
                'Longitude': 124.333
            }

            #server_to_db_places(conn, cs, dt)
            server_to_db_place(conn, cs, dt2)

            print(db_to_server_places(conn, cs))
