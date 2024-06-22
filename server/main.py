from flask import Flask, jsonify, request
from flask_cors import CORS
import pickle
import re
from supabase import create_client, Client

# Load the model and vectorizer
with open('sentiment_model.pkl', 'rb') as f:
    model = pickle.load(f)

with open('vectorizer.pkl', 'rb') as f:
    vectorizer = pickle.load(f)

# Supabase configuration
supabase_url = "https://waiargnrooltnzsilbkd.supabase.co"
supabase_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhaWFyZ25yb29sdG56c2lsYmtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExODcyMTcsImV4cCI6MjAxNjc2MzIxN30.g2XWdnLxc-pLgr_DgSzxdRcIbdd6YOdOpUJgNFq3_L8"
supabase: Client = create_client(supabase_url, supabase_key)

name = "JK"

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
    return prediction

app = Flask(__name__)
cors = CORS(app, origins="*")

@app.route('/api/users', methods=['GET'])
def users():
    try:
        response = supabase.table('users').select('*').execute()
        users = response.data
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
    return jsonify(users)

@app.route('/', methods=['GET'])
def home():
    return jsonify(
        {
            "message": "Welcome to the Flask "
        })
    
@app.route('/n', methods=['POST'])
def getname():
    return name

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    review = data['review']
    sentiment = predict_sentiment(review)
    try:
        # Optionally save the prediction result to Supabase
        supabase.table('predictions').insert({"review": review, "sentiment": sentiment}).execute()
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
    return jsonify(
        {
            "review": review,
            "sentiment": sentiment
        }
    )

if __name__ == '__main__':
    app.run(debug=True, port=8080)