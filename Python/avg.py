import csv
import pandas as pd
import numpy as np
import math


df = pd.read_csv("AAAA_N-S-SV2_vehicleClassStrideJava_PARSED.csv")
gaze = df["GazeEventDuration"]

avg = np.mean(gaze)
print(avg)