import os
import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_iris  # Example dataset

# Load data (use your actual data here)
data = load_iris()
X = data.data
y = data.target

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Scale the data
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)

# Train the model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train_scaled, y_train)

# Define paths for saving model and scaler
model_path = '/Users/christyjohntharakan/Library/Mobile Documents/com~apple~CloudDocs/Downloads/HerboScan/herboscan-backend/models/SavedModels/RandomForest/model.pkl'
scaler_path = '/Users/christyjohntharakan/Library/Mobile Documents/com~apple~CloudDocs/Downloads/HerboScan/herboscan-backend/models/SavedModels/RandomForest/scaler.pkl'
os.makedirs(model_dir, exist_ok=True)
model = joblib.load(model_path)
scaler = joblib.load(scaler_path)


# Save the model and scaler using joblib
joblib.dump(model, model_path)
joblib.dump(scaler, scaler_path)

print(f"Model and scaler have been saved to {model_path} and {scaler_path}")
