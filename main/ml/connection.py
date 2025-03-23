from flask import Flask, jsonify, request
from flask_cors import CORS

import exp_001_machine
import datetime

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return 'Nenhum arquivo enviado', 400

    file = request.files['file']
    if file.filename == '':
        return 'Nome de arquivo inválido', 400

    # Salva o arquivo ou processa conforme necessário
    #file.save(f'uploads/{file.filename}')
    print("foi")
    # exp_001_machine.load_image(file)
    return exp_001_machine.load_image(file)
    #return 'Arquivo recebido com sucesso', 200

if __name__ == '__main__':
    app.run(debug=True)