from flask import Flask, render_template, request, jsonify
import google.generativeai as genai 

genai.configure(api_key='AIzaSyBjU63x29GgstqjzFp6D6pt1RwBhF6dCXQ')

model = genai.GenerativeModel("models/gemini-1.5-flash")

chat_session = model.start_chat(history=[])

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('chat.html')

def get_chat_model():
    global chat_session
    try:
        chat_session = model.start_chat(history=[])
    except Exception as e:
        print(e)

def is_tourism_related(text):
    # Simple keyword-based filtering
    keywords = ["tourism", "travel", "trip", "vacation", "holiday", "place", "recommend", "visit", "attraction","hello"]
    return any(keyword in text.lower() for keyword in keywords)

def get_chat_response(text):
    global chat_session
    if chat_session is None:
        get_chat_model()

    if not is_tourism_related(text):
        return "I'm here to help with tourism-related questions. Please ask me about travel, places to visit, or recommendations."

    response = chat_session.send_message(text)
    return response.text

@app.route('/get', methods=['POST'])
def get_response():
    msg = request.form['msg']
    response = get_chat_response(msg)
    return jsonify(response=response)

if __name__ == '__main__':
    app.run(debug=True)
