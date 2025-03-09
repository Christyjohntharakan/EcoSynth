import requests

# URL of your Flask API endpoint
url = 'http://127.0.0.1:5000/predict'  # Replace with your Flask server's URL

# The data you want to send in the POST request (e.g., the features of your model)
data = {
    'features': [1.2, 3.4, 5.6, 7.8]  # Example features; replace with actual data as required
}

# Send the POST request to the Flask API
response = requests.post(url, json=data)

# Check if the request was successful
if response.status_code == 200:
    # Parse the JSON response
    prediction = response.json()
    print("Prediction:", prediction)
else:
    print(f"Failed to get a response. Status code: {response.status_code}")
