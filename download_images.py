import os
import time
from playwright.sync_api import sync_playwright
import requests

def download_images():
    img_dir = os.path.join(os.path.dirname(__file__), 'img', 'catalogo')
    os.makedirs(img_dir, exist_ok=True)
    
    ids = ["217","244","245","181","215","214","213","183","242","243","240","236","184","235","234","182"]
    
    with sync_playwright() as p:
        print("Lanzando navegador...")
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()
        
        print("Cargando página de login...")
        page.goto("https://uniformesprofesionales.mx/semprainfraestructura/#/login")
        page.wait_for_selector("#username")
        
        print("Iniciando sesión...")
        page.fill("#username", "info@uniformesprofesionales.mx")
        page.fill("#password", "@Uniformes1")
        page.click("button[type='submit']")
        
        # Esperar a que el login sea exitoso
        page.wait_for_load_state("networkidle")
        time.sleep(5) # Darle un momento extra para redirecciones
        
        print("Extrayendo sesión...")
        
        # Extraer token de localStorage
        token = page.evaluate("window.localStorage.getItem('token') || window.localStorage.getItem('access_token') || window.localStorage.getItem('auth_token')")
        print(f"Token encontrado: {token is not None}")
        
        session = requests.Session()
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
        }
        if token:
            headers["Authorization"] = f"Bearer {token}"
            
        session.headers.update(headers)
        
        print("Descargando imágenes...")
        for img_id in ids:
            url = f"https://uniformesprofesionales.mx/semprainfraestructura/api/image/{img_id}"
            try:
                response = session.get(url, timeout=10)
                if response.status_code == 200:
                    with open(os.path.join(img_dir, f"prod_{img_id}.jpg"), 'wb') as f:
                        f.write(response.content)
                    print(f"Descargada: prod_{img_id}.jpg")
                else:
                    print(f"Error {response.status_code} al descargar {img_id}")
            except Exception as e:
                print(f"Excepcion en {img_id}: {e}")
                
        browser.close()
        print("¡Proceso completado!")

if __name__ == "__main__":
    download_images()
