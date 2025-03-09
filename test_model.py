import joblib
import numpy as np

# Load the saved model and scaler
model = joblib.load('herboscan-backend/models/SavedModels/RandomForest/model.pkl')
scaler = joblib.load('herboscan-backend/models/SavedModels/RandomForest/scaler.pkl')

# Example: New data to make predictions (replace this with real data)
# Assuming the model was trained on 4 features, for example:
X_new = np.array([[5.1, 3.5, 1.4, 0.2]])  # Shape should match the training data features

# Scale the new data using the same scaler
X_new_scaled = scaler.transform(X_new)

# Make predictions with the loaded model
predictions = model.predict(X_new_scaled)

# Print the predictions
print("Predictions:", predictions)
