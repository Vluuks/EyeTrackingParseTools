import csv
import pandas as pd
import numpy as np
import math

def clean():
    df = pd.read_csv('RegularHL-StrideHL-SV.tsv', sep="\t")
    # print(df)


    # remove all columns that we do not need
    unnecessary = ["StudioVersionRec", "StudioProjectName", "RecordingResolution", "FixationFilter", "MediaPosX (ADCSpx)", "MediaPosY (ADCSpx)", "MediaWidth", "MediaHeight", "SegmentName",
    "SegmentStart", "SegmentEnd", "SegmentDuration", "SceneSegmentStart", "SceneSegmentDuration", "MouseEventIndex", "MouseEvent", "MouseEventX (ADCSpx)", "MouseEventY (ADCSpx)",
    "MouseEventX (MCSpx)", "MouseEventY (MCSpx)", "KeyPressEventIndex", "KeyPressEvent", "StudioEventIndex", "StudioEvent", "StudioEventData", "ExternalEventIndex", "ExternalEvent", 
    "ExternalEventValue", "EventMarkerValue", "CamLeftX", "CamLeftY", "CamRightX", "CamRightY", "DistanceLeft", "DistanceRight", "PupilLeft", "PupilRight", "IRMarkerCount", "IRMarkerID", "PupilGlassesRight"]

    # for name in unnecessary:
        # del df[name]

    # throw out all non fixation rows, since we do not care
    df = df[df.GazeEventType == "Fixation"]

    # done
    write_back_to_csv(df, "some_attempt")
    partition(df)


def partition(df):

    participant_names = ["R-S-VS1", "R-S-SV1", "R-S-VS2", "R-S-SV2"]

    # possible stimuli
    media_names = ["instructionimage1.png", "vehicleClassStrideJava.png", "vehicleClass.png", "studentClassStrideJava.png", "studentClass.png"]

    # grab data subset for each person
    for name in participant_names:
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
    parse_lines()


def parse_lines():

    # grab the right file and stimulus
    df = pd.read_csv("R-S-SV2_studentClass.png.csv")
    name = "R-S-SV2_studentClass_PARSED"
    stimulus = "studentClass.png"

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

        # print(column)
        # print(stim_line_map[stimulus])

        # if its an image that makes sense, find columns that are belonging to the AOIS of t his image
        if (stim_line_map[stimulus] + "-Rectangle") in column:

            # print(stimulus)
            # print(stim_line_map[stimulus])
            # print("Column: " + column)
            # print("Wordt index: " + str(index))

            name_map[column] = str(index)
            name_list.append(str(index))
            index += 1

    # print("NAME MAP AND LIST ----------------------------------")
    # print(name_map)
    # print(name_list)

    # bulk renaming
    df.rename(name_map, axis='columns', inplace=True)
    # print("RENAMNING COLUMNS ----------------------------------")
    # print(df.columns)
    
    # add col for later
    df['LineNumber'] = 0
    # print("ADDING 1 COLUMN ----------------------------------")
    # print(df.columns)

    df_subset = df[name_list]
    # print("LINE NUMBER COLUMNS ----------------------------------")
    # print(df_subset)


    # print("ZEROES ----------------------------------")
    # print(df['LineNumber'])

    # for all line number columns
    for column in df_subset:
        # print("THIS IS A COLUMN:" + column)
        
        i = 0
        # inside that column
        # print(len(df_subset[column]))
        for entry in df_subset[column]:

            # if it says one there, say line number in original df
            # drop rows with NaN
            if math.isnan(entry):
                df.drop(df.index[i])

            elif int(entry) == 1:
                # print(i)
                # continue

                # df.loc[df["LineNumber"]][i] = int(column)
                df['LineNumber'][i] = int(column)
                # df.ix[i, 'LineNumber'] = int(column)
                # print("replace")

            # update the row count
            i += 1

    # print(df.LineNumber)
    # reinit timestamp
    

    df.to_csv(name + ".csv")

   
clean()
# parse_lines()




