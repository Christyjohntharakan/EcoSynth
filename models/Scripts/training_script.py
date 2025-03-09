import pandas as pd
import numpy as np
import os
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, confusion_matrix, ConfusionMatrixDisplay
from sklearn.preprocessing import StandardScaler
import joblib
import matplotlib.pyplot as plt

# Load your dataset
dataset_path = r"C:\Users\abiya\OneDrive\Desktop\AYUSH_project\dataset\medicinal_herbs_adulteration_detailed_spectral_dataset.csv"  # Replace with your actual file path
df = pd.read_csv(dataset_path)
df = df.dropna()

# Preprocess the dataset
print("Dataset Columns:", df.columns)
print("Missing values before handling:\n", df.isnull().sum())

# Convert Spectral_Data from string to numeric arrays
df["Spectral_Data"] = df["Spectral_Data"].astype(str)
X_spectral = np.array(df["Spectral_Data"].str.split(",").apply(lambda x: list(map(float, x))).tolist())

# Combine Spectral_Data and Adulteration_Level as features
X = np.hstack((X_spectral, df["Adulteration_Level"].values.reshape(-1, 1)))

# Define target variable
y = df["Adulterant_Present"].values

# Standardize the feature set
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

# Define the model
model = RandomForestClassifier(random_state=42)

# Define hyperparameter grid for GridSearchCV
param_grid = {
    'n_estimators': [100, 200, 300],
    'max_depth': [10, 15, 20, None],
    'min_samples_split': [2, 5, 10],
    'min_samples_leaf': [1, 2, 4],
    'bootstrap': [True, False],
    'max_features': [None, 'sqrt', 'log2'],
    'criterion': ['gini', 'entropy']
}

# Initialize GridSearchCV
grid_search = GridSearchCV(estimator=model, param_grid=param_grid, cv=5, scoring='accuracy', n_jobs=-1, verbose=2)

# Fit GridSearchCV on training data
print("Starting grid search...")
grid_search.fit(X_train, y_train)

# Retrieve the best model
best_model = grid_search.best_estimator_
print(f"Best Parameters: {grid_search.best_params_}")

# Evaluate the model on the test set
y_pred = best_model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Test Set Accuracy: {accuracy:.2%}")

# Save the best model and scaler for future use

joblib.dump(best_model, r"C:\Users\abiya\OneDrive\Desktop\AYUSH_project\SavedModels\RandomForest1\random_forest_best_model.pkl")
joblib.dump(scaler, r"C:\Users\abiya\OneDrive\Desktop\AYUSH_project\SavedModels\RandomForest1\scaler.pkl")

# 1. Plot Feature Importance
feature_importances = best_model.feature_importances_
plt.figure(figsize=(10, 6))
plt.bar(range(len(feature_importances)), feature_importances, color='skyblue')
plt.title("Feature Importances")
plt.xlabel("Feature Index")
plt.ylabel("Importance")
plt.show()

# 2. Confusion Matrix
conf_matrix = confusion_matrix(y_test, y_pred)
disp = ConfusionMatrixDisplay(confusion_matrix=conf_matrix, display_labels=["Not Adulterated", "Adulterated"])
disp.plot(cmap="Blues", values_format="d")
plt.title("Confusion Matrix")
plt.show()

# 3. Accuracy Across Folds
cv_results = pd.DataFrame(grid_search.cv_results_)
mean_test_scores = cv_results["mean_test_score"]
plt.figure(figsize=(8, 6))
plt.bar(range(1, len(mean_test_scores) + 1), mean_test_scores, color='lightgreen')
plt.title("Accuracy Across Cross-Validation Folds")
plt.xlabel("Hyperparameter Combination Index")
plt.ylabel("Mean Accuracy")
plt.show()

