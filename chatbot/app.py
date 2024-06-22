from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import random
import google.generativeai as genai

# Replace 'YOUR_NEW_API_KEY' with your actual valid API key
genai.configure(api_key='AIzaSyBjU63x29GgstqjzFp6D6pt1RwBhF6dCXQ')

model = genai.GenerativeModel("models/gemini-1.5-flash")

chat_session = model.start_chat(history=[])

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('chat.html')

def get_chat_model():
    global chat_session
    try:
        chat_session = model.start_chat(history=[])
    except Exception as e:
        print(e)

def recommend_places(interest):
    places = {
        "nature": ["Jim Corbett National Park", "Kaziranga National Park", "Valley of Flowers National Park"],
        "history": ["Delhi", "Agra", "Jaipur"],
        "beach": ["Goa", "Andaman and Nicobar Islands", "Kovalam"],
        "adventure": ["Rishikesh", "Manali", "Ladakh"]
    }
    return random.choice(places.get(interest, ["Sorry, I don't have recommendations for that interest."]))

def is_tourism_related(text):
    tourism_keywords = [
        "tourism", "travel", "trip", "vacation", "holiday", "place", 
        "recommend", "visit", "attraction", "destination", "sightseeing",
        "adventure", "journey", "voyage", "excursion", "tour", "expedition",
        "hotel", "restaurant", "museum", "park", "beach", "mountain",
        "lake", "river", "ocean", "sea", "forest", "jungle", "desert",
        "island", "cave", "waterfall", "volcano", "canyon", "valley",
        "hill", "cliff", "town", "city", "country", "culture", "history", 
        "nature", "wildlife", "monument", "architecture", "landmark", 
        "scenery", "view", "landscape", "sunset", "sunrise" , "photo", "explore" , "discover" , "adventure" , "hike" , "trek" , "camp" , "safari" , "cruise" , "road trip" , "backpacking" , "backpack" , "traveler" , "wanderlust" , "bucket list" , "itinerary" , "guide" , "map" , "route" , "transport" , "flight" , "train" , "bus" , "car" , "rental" , "accommodation" , "booking" , "reservation" , "ticket" , "passport" , "visa" , "currency" , "budget" , "cost" , "expense" , "tip" , "souvenir" , "shopping" , "local" , "food" , "drink" , "cuisine" , "restaurant" , "cafe" , "bar" , "street food" , "market" , "shopping" , "street" , "market" , "festival" , "event" , "celebration" , "tradition" , "culture" , "heritage" , "custom" , "language" , "religion" , "belief" , "ritual" , "ceremony" , "dance" , "music" , "art" , "craft" , "performance" , "show" , "exhibition" , "museum" , "gallery" , "theater" , "cinema" , "film" , "movie" , "book" , "literature" , "poem" , "story"
    ]

    non_tourism_keywords = [
        "code", "programming", "software", "python", "java", "javascript", 
        "html", "css", "algorithm", "data", "database", "sql", "finance", 
        "investment", "stock", "market", "loan", "bank", "currency", "crypto", 
        "blockchain", "health", "medicine", "disease", "treatment", "doctor", 
        "hospital", "therapy", "exercise", "fitness", "workout", "diet", 
        "nutrition", "science", "research", "experiment", "physics", "chemistry", 
        "biology", "mathematics", "math", "statistics", "probability", "engineering", 
        "robotics", "electronics", "mechanics", "technology", "innovation"
    ]

    text_lower = text.lower()
    return any(keyword in text_lower for keyword in tourism_keywords) and not any(keyword in text_lower for keyword in non_tourism_keywords)

def extract_interest(text):
    interests = ["nature", "history", "beach", "adventure"]
    for interest in interests:
        if interest in text.lower():
            return interest
    return "general"

def format_response(text):
    lines = text.split('\n')
    formatted_text = '<ul>'
    for line in lines:
        parts = line.split('*')
        formatted_line = ""
        for i, part in enumerate(parts):
            if i % 2 == 0:
                formatted_line += part
            else:
                formatted_line += f'<b>{part}</b>'
        formatted_text += f'<li>{formatted_line}</li>'
    formatted_text += '</ul>'
    return formatted_text

def get_chat_response(text):
    global chat_session
    if chat_session is None:
        get_chat_model()

    if not is_tourism_related(text):
        return "I'm here to help with tourism-related questions. Please ask me about travel, places to visit, or recommendations."

    response = chat_session.send_message(text)

    if "recommend" in text.lower():
        interest = extract_interest(text)
        recommendation = recommend_places(interest)
        response.text += f"\n\n*I recommend visiting:* {recommendation}"

    formatted_response = format_response(response.text)
    return formatted_response

@app.route('/get', methods=['POST'])
def get_response():
    msg = request.form['msg']
    response = get_chat_response(msg)
    return jsonify(response=response)

if __name__ == '__main__':
    app.run(debug=True)
