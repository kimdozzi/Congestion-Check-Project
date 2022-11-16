import pymysql

def db_to_server_congestions(db, cursor, pid):
    query = f'SELECT NumberOfHuman FROM place_info where PlaceID = %s;'
    cursor.execute(query, (pid))
    res = {}
    for i in cursor.fetchall():
        res['NumberOfHuman'] = i[0]
    db.commit()

    return res

def server_to_db_congestion(db, cursor, data):
    insert_sql = "INSERT INTO `congestion_data`(PlaceID, NumberOfObject) VALUES (%(PlaceID)s, %(NumberOfObject)s);"
    cursor.execute(insert_sql, data)
    db.commit()

if __name__=="__main__":
    conn = pymysql.connect(host='localhost', port=3306, user='root', passwd='', db='congestion_db', charset='utf8')
    with conn:
        with conn.cursor() as cs:
            dt = {
                "PlaceID": 3,
                "NumberOfObject": 15
            }

            #server_to_db_places(conn, cs, dt)
            server_to_db_congestion(conn, cs, dt)

            print(db_to_server_congestions(conn, cs, 3))