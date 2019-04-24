import csv
import pandas as pd
import numpy as np

def clean():
    df = pd.read_csv('RegularHL-StrideHL-SV.tsv', sep="\t")
    print(df)


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





clean()




