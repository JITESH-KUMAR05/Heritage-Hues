from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origins="*")

@app.route('/api/users', methods=['GET'])
def users():
    return jsonify(
        {
            "users": [
                "jk",
                "dj",
                "jks",
                "medha",
                "mekhla"
            ]
        }
    )

@app.route('/',methods=['GET'])
def home():
    return jsonify(
        {
            "message": "Welcome to the Flask API"
        })  

if __name__ == '__main__':
    app.run(debug=True, port=8080)