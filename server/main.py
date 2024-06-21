from flask import Flask, jsonify
from flask_cors import CORS
import pickle
import re

# Load the model and vectorizer
with open('sentiment_model.pkl', 'rb') as f:
    model = pickle.load(f)

with open('vectorizer.pkl', 'rb') as f:
    vectorizer = pickle.load(f)

def preprocess_text(text):
    text = text.lower()
    text = re.sub(r'\d+', '', text)
    text = re.sub(r'[^\w\s]', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def preprocess_text(text):
    text = text.lower()
    text = re.sub(r'\d+', '', text)
    text = re.sub(r'[^\w\s]', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def predict_sentiment(review):
    review = preprocess_text(review)
    review_tfidf = vectorizer.transform([review])
    prediction = model.predict(review_tfidf)[0]
    return sentiment

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

@aap.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    review = data['review']
    sentiment  = predict_sentiment(review)
    return jsonify(
        {
            "review": review,
            "sentiment": sentiment
        }
    )

if __name__ == '__main__':
    app.run(debug=True, port=8080)

