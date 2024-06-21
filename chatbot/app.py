from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import random
import google.generativeai as genai 

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
    # Example places categorized by interest
    places = {
        "nature": ["Yosemite National Park", "Grand Canyon", "Yellowstone National Park"],
        "history": ["Rome", "Athens", "Cairo"],
        "beach": ["Maldives", "Bora Bora", "Hawaii"],
        "adventure": ["Queenstown", "Interlaken", "Costa Rica"]
    }

    return random.choice(places.get(interest, ["Sorry, I don't have recommendations for that interest."]))

def is_tourism_related(text):
    # Simple keyword-based filtering
    keywords = ["tourism", "travel", "trip", "vacation", "holiday", "place", "recommend", "visit", "attraction", "hello", "explore", "destination", "sightseeing", "adventure", "journey", "voyage", "excursion", "tour", "expedition", "jaunt", "outing", "ramble", "stroll", "walk", "hike", "trek", "climb", "mountaineer", "roam", "rove", "wander", "meander", "drift", "saunter", "amble", "promenade", "perambulate", "mosey", "traipse", "gallivant", "peregrinate", "galavant", "circumnavigate", "navigate", "pilgrimage", "odyssey", "quest", "explore", "discover", "search", "hunt", "scout", "look", "seek", "pursue", "probe", "delve", "investigate", "examine", "inspect", "survey", "scrutinize", "analyze", "study", "research", "explore", "discover", "search", "hunt", "scout", "look", "seek", "pursue", "probe", "delve", "investigate", "examine", "inspect", "survey", "scrutinize", "analyze", "study", "research", "food", "restaurant" , "hotel", "museum", "park", "beach", "mountain", "lake", "river", "ocean", "sea", "forest", "jungle", "desert", "island", "cave", "waterfall", "volcano", "canyon", "valley", "hill", "mountain", "peak", "summit", "glacier", "cliff", "cave", "cavern", "grotto", "waterfall", "cascade", "rapids", "stream", "river", "brook", "creek", "lake", "pond", "lagoon", "marsh", "swamp", "bog", "wetland", "ocean", "sea", "gulf", "bay", "strait", "channel", "sound", "fjord", "estuary", "delta", "beach", "shore", "coast", "island", "peninsula", "atoll", "archipelago", "reef", "cay", "key", "sandbar", "sandbank", "sandspit", "sand dune", "mountain", "hill", "volcano", "volcanic", "volcanism", "volcanology", "volcanologist", "volcanic eruption", "volcanic ash", "volcanic rock", "volcanic crater", "volcanic cone", "volcanic island", "volcanic arc", "volcanic belt", "volcanic chain", "volcanic hotspot", "volcanic vent", "volcanic gas", "volcanic mud", "volcanic lake", "volcanic spring"]
    return any(keyword in text.lower() for keyword in keywords)

def extract_interest(text):
    interests = ["nature", "history", "beach", "adventure"]
    for interest in interests:
        if interest in text.lower():
            return interest
    return "general"

def get_chat_response(text):
    global chat_session
    if chat_session is None:
        get_chat_model()

    if not is_tourism_related(text):
        return "I'm here to help with tourism-related questions. Please ask me about travel, places to visit, or recommendations."

    response = chat_session.send_message(text)

    # Recommendation
    if "recommend" in text.lower():
        interest = extract_interest(text)
        recommendation = recommend_places(interest)
        response.text += f"\nI recommend visiting: {recommendation}"

    return response.text

@app.route('/get', methods=['POST'])
def get_response():
    msg = request.form['msg']
    response = get_chat_response(msg)
    return jsonify(response=response)

if __name__ == '__main__':
    app.run(debug=True)