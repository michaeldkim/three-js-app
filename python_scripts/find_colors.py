import pandas as pd

# Load the modified CSV file
df = pd.read_csv('modified_augmented_ssense_dataset.csv')

# Filter rows where 'Colors' column is empty or contains only whitespace
no_color_entries = df[df['Colors'].str.strip().eq('')]

# Display entries without colors
print(no_color_entries)

