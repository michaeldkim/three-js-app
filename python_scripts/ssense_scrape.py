import pandas as pd
import re

# Step 1: Read your CSV file
df = pd.read_csv('augmented_ssense_dataset.csv')

# Step 2: List of known colors
colors = ['black', 'green', 'taupe', 'blue', 'multicolor', 'beige', 'burgundy', 'tan', 'indigo', 'gray', 'grey','red', 'navy', 'khaki', 'white', 'yellow', 'orange', 'purple', 'grey', 'silver', 'gold', 'brown', 'pink']

# Function to find and return colors from the description
def find_colors(description):
    found_colors = []
    for color in colors:
        # Use regular expressions to find colors in the description, ignoring case
        if re.search(r'\b' + color + r'\b', description, re.IGNORECASE):
            found_colors.append(color.capitalize())  # Capitalize for consistency
    return ', '.join(found_colors)  # Join multiple colors found with a comma

# Step 3: Apply the function to each description to create a new 'Colors' column
df['Colors'] = df['description'].apply(find_colors)

# Step 4: Write the updated DataFrame to a new CSV file
df.to_csv('modified_augmented_ssense_dataset.csv', index=False)

