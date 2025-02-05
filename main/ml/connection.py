from flask import Flask, jsonify
from flask_cors import CORS

import datetime

app = Flask(__name__)
CORS(app)  # Permite requisições de qualquer origem

x = datetime.datetime.now()

@app.route('/')
def get_data():
    data = {"valor":42}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)