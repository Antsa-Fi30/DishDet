from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)

# Dummy data
restaurants = pd.DataFrame({
    'id': [1, 2, 3, 4, 5],
    'name': ['Resto A', 'Resto B', 'Resto C', 'Resto D', 'Resto E'],
    'features': ['Italian, Pizza', 'Sushi, Japanese', 'Burger, Fast Food', 'Vegan, Salad', 'Mexican, Tacos']
})

users = {
    'user1': [5, 3, 4, 0, 1],
    'user2': [4, 0, 4, 1, 0],
    'user3': [3, 4, 0, 2, 5]
}

@app.route('/recommend', methods=['POST'])
def recommend():
    user_id = request.json['user_id']
    user_preferences = users.get(user_id)
    
    if not user_preferences:
        return jsonify({'error': 'User not found'}), 404
    
    similarity = cosine_similarity([user_preferences], list(users.values()))[0]
    recommendations = np.dot(similarity, list(users.values())) / np.array([np.abs(similarity).sum(axis=0)])
    
    recommended_indices = recommendations.argsort()[::-1]
    recommended_restaurants = restaurants.iloc[recommended_indices].to_dict('records')
    
    return jsonify(recommended_restaurants)

if __name__ == '__main__':
    app.run(debug=True)
