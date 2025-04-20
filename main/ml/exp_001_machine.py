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

"""
    Receive the image from load_image to transform the 
    image like, resize to 32x32, convert to RGB (if not already), 
    convert to numpy array and normalize

    image_path (str):  file from load_image(file)

    Return:
    array: Array from image_path
"""

def preprocess_image(image_path):
    img = Image.open(image_path)
    img = img.resize((32, 32))
    img = img.convert('RGB')
    img_array = np.array(img) / 255.0  
    img_array = np.expand_dims(img_array, axis=0)
    return img_array

"""
    Use the preprocess_image to prepare the image, 
    after make a prediction class
    
    return:
    predicted_label (str): return the result of CNN.
"""
def load_image(file):
    preprocessed_image = preprocess_image(file)

    predictions = model.predict(preprocessed_image)
    predicted_class = np.argmax(predictions, axis=1)

    cifar10_labels = ['airplane', 'automobile', 'bird', 'cat', 'deer', 'dog', 'frog', 'horse', 'ship', 'truck']
    predicted_label = cifar10_labels[predicted_class[0]]

    return predicted_label


model = load_model(train_path)