import re

def update_file(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        html = f.read()
    
    html = re.sub(
        r'"https://uniformesprofesionales.mx/semprainfraestructura/api/image/(\d+)"',
        r'"img/catalogo/prod_\1.jpg"',
        html
    )
    
    html = html.replace('upe_productos_v2', 'upe_productos_v3')
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(html)
        
update_file('index.html')
update_file('catalogo.html')
print("Archivos actualizados")
