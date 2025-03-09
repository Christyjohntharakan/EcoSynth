import pandas as pd
import numpy as np

# Define possible values for each feature
herb_names = ["Ginseng", "Echinacea", "Turmeric", "Ginkgo Biloba", "Ashwagandha"]
adulterant_types = ["Starch", "Dextrin", "Chicory", "Lead Chromate", "Metanil Yellow", "Talc", "None"]

# Function to generate realistic spectral data with 100 elements
def generate_spectral_data(adulterant_present):
    if adulterant_present:
        return ",".join(map(str, np.random.rand(100) * 2))  # Adulterated samples have higher values
    else:
        return ",".join(map(str, np.random.rand(100)))

# Create a larger synthetic dataset
num_samples = 1000
data = {
    "Sample_ID": range(1, num_samples + 1),
    "Herb_Name": np.random.choice(herb_names, num_samples),
    "Adulterant_Present": np.random.randint(0, 2, num_samples),
    "Adulterant_Type": np.random.choice(adulterant_types, num_samples),
    "Adulteration_Level": np.random.randint(0, 51, num_samples),
    "Spectral_Data": []
}

# Generate spectral data
for i in range(num_samples):
    data["Spectral_Data"].append(generate_spectral_data(data["Adulterant_Present"][i]))

# Adjust "Adulterant_Type" to "None" when "Adulterant_Present" is 0
for i in range(num_samples):
    if data["Adulterant_Present"][i] == 0:
        data["Adulterant_Type"][i] = "NotPresent"
        data["Adulteration_Level"][i] = 0

# Convert the data dictionary to a pandas DataFrame
df = pd.DataFrame(data)

# Save the DataFrame to a CSV file
df.to_csv("medicinal_herbs_adulteration_detailed_spectral_dataset.csv", index=False)

print(df)
