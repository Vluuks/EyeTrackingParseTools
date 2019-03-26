import csv
import pandas as pd
import numpy as np

def parse_file(filename):

    parsed_data = []

    # open tsv
    with open('../Data/test.tsv') as f:
        reader = csv.DictReader(f, dialect='excel-tab')
    
        # AOI[Rectangle 14]Hit is the first line

        for row in reader:
            # print(row)
            
            # if it is a fixation
            if(row['GazeEventType'] == 'Fixation'):
                # grab the columns we want
                x_coor = row['FixationPointX (MCSpx)']
                y_coor = row['FixationPointY (MCSpx)']

                aoi = 1
                linenumber += 1

                parsed_data.append([row['RecordingTimestamp'], row['GazeEventDuration'], x_coor, y_coor, str(aoi), str(linenumber // 10) ])

    
    # write new data to file
    write_file(parsed_data)

def write_file(output):
    with open('testing_things.csv', 'w') as f:

        f.write("TS,DUR,X,Y,AOI,LN\n")
        for item in output:
            print(item)
            f.write("%s\n" % (",").join(item))
    
    f.close()


def parse_file_pandas():

    # grab file from csv
    df = pd.read_csv('test_cleaned_linenumbers.csv')
    # print(df)
    

    # rename columns to more sensible names
    for column in df:
        if "Rectangle" in df[column]:
            print(df[column])


# USE EVAL?
    # df.rename({'$a':'a', '$b':'b', '$c':'c', '$d':'d', '$e':'e'}, axis='columns')

    # keep list of said names for the next call of melt

    # merge line number columns into one
    # df.melt(id_vars=['country','year','perc'])

    
# main
# parse_file("nothing for now")
parse_file_pandas()
