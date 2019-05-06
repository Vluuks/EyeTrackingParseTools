import csv
import pandas as pd
import numpy as np
import math

def clean():
    df = pd.read_csv('maandag.tsv', sep="\t")

    # throw out all non fixation rows, since we do not care
    df = df[df.GazeEventType == "Fixation"]

    # done
    partition(df)


def partition(df):

    # participant_names = ["R-S-VS1", "R-S-SV1", "R-S-VS2", "R-S-SV2"]
    participant_names = ["NS-SV2"]

    # possible stimuli
    media_names = ["instructionimage1.png", "vehicleClassStrideJava.png", "vehicleClass.png", "studentClassStrideJava.png", "studentClass.png", "studentClass-noSH.png", "vehicleClass-noSH.png"]

    # grab data subset for each person
    for name in participant_names:

        print(name)
        subset = df[df.ParticipantName == name]

        # if exists
        if len(subset) != 0:

            # for each of the images, create a file
            for stimulus in media_names:
                subsubset = subset[df.MediaName == stimulus]

                # if said image was present in this dataset, make file for it
                if len(subsubset) != 0: 
                    write_back_to_csv(subsubset, name + "_" + stimulus)
                    



def write_back_to_csv(df, file_name):
    df.to_csv(file_name + ".csv")
    # parse_lines()


def parse_lines():

    # grab the right file and stimulus
    df = pd.read_csv("N-S-SV2_vehicleClassStrideJava.png.csv")
    name = "AAAA_N-S-SV2_vehicleClassStrideJava_PARSED"
    stimulus = "vehicleClassStrideJava.png"

    df["CorrectedRecordingTimestamp"] = df["RecordingTimestamp"] - df["RecordingTimestamp"][0]
    
    # make sure that for each image we know which AOI we need to map it to 
    stim_line_map = { 
                        "instructionimage1.png" : "BOEIT NIET",
                        "vehicleClassStrideJava.png" : "VehSJ", 
                        "studentClassStrideJava.png" : "StuSJ",
                        "vehicleClass.png" : "Veh",
                        "studentClass.png" : "Stu"
                    }

    # select all columns that start with the right clause
    name_map = {}
    name_list = []

    index = 1
    for column in df.columns:
        # if its an image that makes sense, find columns that are belonging to the AOIS of t his image
        if (stim_line_map[stimulus] + "-Rectangle") in column:

            name_map[column] = str(index)
            name_list.append(str(index))
            index += 1

    # bulk renaming
    df.rename(name_map, axis='columns', inplace=True)
    
    # add col for later
    df['LineNumber'] = 0


    df_subset = df[name_list]
    # for all line number columns
    for column in df_subset:
        
        i = 0
        # inside that column
        for entry in df_subset[column]:

            # if it says one there, say line number in original df
            # drop rows with NaN
            if math.isnan(entry):
                df.drop(df.index[i])

            elif int(entry) == 1:
                df['LineNumber'][i] = (int(column))

            # update the row count
            i += 1

    df.to_csv(name + ".csv")




# clean()
parse_lines()

    




