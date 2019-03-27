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

    # rename columns to more sensible names because i was lazy with tobii
    # assumes format "AOI[Rectangle 14]Hit"
    name_map = {}
    columns_to_melt = []
    columns_to_not_melt = []

    for column in df:

        # what a terrible way to do this
        if "AOI[Rectangle" in column:
            print(column)

            # rename to numbers, minus 13 because the first rect is called "AOI[Rectangle 14]Hit"
            new_column_name = ( int(column[-6:-4]) - 13)

            # add to map and list
            name_map[column] = new_column_name
            columns_to_melt.append(new_column_name)

        else:
            columns_to_not_melt.append(column)

    # actual renaming


    print(name_map)

    df.rename(name_map, axis='columns', inplace=True)
    print(df[-5:])

    df.to_csv('firstattempt.csv')

    # merge line number columns into one
    # i understand nothing about this

    # why is the input the ones you want to KEEP???
    print(columns_to_melt)
    df.melt(id_vars=columns_to_not_melt)
    # print(df)


    # write back to csv
    df.to_csv('secondattempt.csv')
    print(df[-5:])

    
# main
# parse_file("nothing for now")
parse_file_pandas()
