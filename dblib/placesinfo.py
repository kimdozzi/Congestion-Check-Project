import pymysql


def db_to_server_places(db, cursor):
    query = f'SELECT PlaceID, Name, Latitude, Longitude, CrowdThreshold, Employees, NumberOfHuman FROM place_info'
    cursor.execute(query)
    res = []
    for i in cursor.fetchall():
        res.append({
            'PlaceID': i[0],
            'Name' : i[1],
            'Latitude' : i[2],
            'Longitude' : i[3],
            'CrowdThreshold' : i[4],
            'Employees' : i[5],
            'NumberOfHuman' : i[6]
        })
    db.commit()

    return res


def server_to_db_places(db, cursor, datas):
    insert_sql = '''INSERT INTO `place_info`(Name, Latitude, Longitude, CrowdThreshold, Employees, NumberOfHuman)
                    VALUES (%(Name)s, %(Latitude)s, %(Longitude)s, %(CrowdThreshold)s, %(Employees)s, 0);'''
    cursor.executemany(insert_sql, datas)
    db.commit()


def server_to_db_place(db, cursor, data):
    insert_sql = '''INSERT INTO `place_info`(Name, Latitude, Longitude, CrowdThreshold, Employees, NumberOfHuman)
                    VALUES (%(Name)s, %(Latitude)s, %(Longitude)s, %(CrowdThreshold)s, %(Employees)s, 0);'''
    cursor.execute(insert_sql, data)
    db.commit()


if __name__ == "__main__":
    conn = pymysql.connect(host='localhost', port=3306, user='root',
                           passwd='', db='congestion_db', charset='utf8')
    with conn:
        with conn.cursor() as cs:
            dt = [{
                'Name': '부산카페',
                "Latitude": 35.13476,
                "Longitude": 129.10286,
                "CrowdThreshold": 13,
                "Employees": 2
            },
                {
                'Name': '대학가 스터디룸',
                "Latitude": 35.135767,
                "Longitude": 129.1328,
                "CrowdThreshold": 20,
                "Employees": 1
            },
                {
                'Name': '부경대 주차장',
                "Latitude": 35.124767,
                "Longitude": 129.0428,
                "CrowdThreshold": 22,
                "Employees": 2
            }]

            dt2 = {
                'Name': 'dfd',
                'Latitude': 34.232,
                'Longitude': 124.333,
                "CrowdThreshold": 20,
                "Employees": 1
            }

            #server_to_db_places(conn, cs, dt)
            server_to_db_place(conn, cs, dt2)

            print(db_to_server_places(conn, cs))
