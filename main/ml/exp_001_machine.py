import torch 
import torchvision
import torchvision.transforms as transforms
import matplotlib.pyplot as plt
import numpy as np

import torch.nn as nn
import torch.nn.functional as F

from tensorflow.keras.models import load_model
from PIL import Image

import torch.optim as optim 


train_path = 'cnn_20_epochs.h5'

def preprocess_image(image_path):
    # Open the image
    img = Image.open(image_path)
    # Resize to 32x32
    img = img.resize((32, 32))
    # Convert to RGB (if not already)
    img = img.convert('RGB')
    # Convert to numpy array
    img_array = np.array(img) / 255.0  # Normalize to [0, 1]
    # Add batch dimension (required for model input)
    img_array = np.expand_dims(img_array, axis=0)
    return img_array

model = load_model(train_path)


def load_image(file):
    print("Chegou")
    preprocessed_image = preprocess_image(file)

    # Make a prediction
    predictions = model.predict(preprocessed_image)
    predicted_class = np.argmax(predictions, axis=1)

    # Map the predicted class index to the CIFAR-10 label
    cifar10_labels = ['airplane', 'automobile', 'bird', 'cat', 'deer', 'dog', 'frog', 'horse', 'ship', 'truck']
    predicted_label = cifar10_labels[predicted_class[0]]

    #print(f'Predicted class: {predicted_label}') 
    return predicted_label