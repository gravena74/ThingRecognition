from flask import Flask, jsonify, request
from flask_cors import CORS

import exp_001_machine
import datetime

app = Flask(__name__)
CORS(app)


"""
    Function to extract the file path 

    return: 
    Return the result of CNN, and pass to the web
"""
@app.route('/', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return 'No files sent', 400

    file = request.files['file']
    if file.filename == '':
        return 'Invalid file name', 400

    return exp_001_machine.load_image(file)

if __name__ == '__main__':
    app.run(debug=True)