import csv
import pandas as pd
import numpy as np
import math

files =             [
                        "AAAA_R-S-SV1_studentClass_PARSED.csv",
                        "AAAA_R-S-SV2_studentClass_PARSED.csv",

                        "AAAA_R-S-VS1_studentClassStrideJava_PARSED.csv",
                        "AAAA_R-S-VS2_studentClassStrideJava_PARSED.csv",

                        "AAAA_N-S-SV1_studentClass-noSH_PARSED.csv",
                        "AAAA_N-S-SV2_studentClass-noSH_PARSED.csv",

                        "AAAA_N-S-VS1_studentClassStrideJava_PARSED.csv",

                        "AAAA_R-S-VS1_vehicleClass_PARSED.csv",
                        "AAAA_R-S-VS2_vehicleClass_PARSED.csv",

                        "AAAA_R-S-SV1_vehicleClassStrideJava_PARSED.csv",
                        "AAAA_R-S-SV2_vehicleClassStrideJava_PARSED.csv",

                        "AAAA_N-S-VS1_vehicleClass-noSH_PARSED.csv",

                        "AAAA_N-S-SV1_vehicleClassStrideJava_PARSED.csv",
                        "AAAA_N-S-SV2_vehicleClassStrideJava_PARSED.csv"
                    ]

for file in files:

    df = pd.read_csv(file)
    gaze = df["GazeEventDuration"]

    avg = np.mean(gaze)
    
    count = 0
    count2 = 0
    for row in gaze:
        count2+=1
        if row > ( avg + (avg/2)):
            count+=1
    
    print("--------")
    print(file)
    print(count / count2)
    