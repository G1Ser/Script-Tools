import geopandas as gpd
import subprocess
def import_geojson_to_postgis(geojson_file, db_name, user, password, host='localhost', table_name='startsbucks_data'):
    """
    使用ogr2ogr工具将GeoJSON文件导入PostGIS数据库
    """
    ogr2ogr_command = [
        'ogr2ogr',
        '-f', 'PostgreSQL',
        f'PG:host={host} dbname={db_name} user={user} password={password}',
        geojson_file,
        '-nln', table_name,
        '-append'
    ]

    try:
        subprocess.run(ogr2ogr_command, check=True)
        print(f'Successfully imported {geojson_file} to PostGIS table {table_name}')
    except subprocess.CalledProcessError as e:
        print(f'Error occurred: {e}')
geojson_file = r'/home/chang/var/startsbucks.geojson'
db_name = 'postgres'
user = 'postgres'
password = '8023cc'
host = 'localhost'
table_name = 'startsbucks_data'
import_geojson_to_postgis(geojson_file, db_name, user, password, host, table_name)