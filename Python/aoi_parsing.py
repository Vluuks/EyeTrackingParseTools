import numpy as np
import Image

image = Image.open("example.png")
image_data = np.asarray(image)

for i in range(len(image_data)):
    for j in range(len(image_data[0])):
        print(image_data[i][j])