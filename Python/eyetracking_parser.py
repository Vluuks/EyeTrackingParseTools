import csv

def parse_file(filename):

    parsed_data = []

    # open tsv
    with open('../Data/test.tsv') as f:
        reader = csv.DictReader(f, dialect='excel-tab')
    
        # iterate over rows
        for row in reader:
            # print(row)
            
            # if it is a fixation
            if(row['GazeEventType'] == 'Fixation'):
                # grab the columns we want
                x_coor = row['FixationPointX (MCSpx)']
                y_coor = row['FixationPointY (MCSpx)']

                aoi = determine_aoi(x_coor, y_coor)

                parsed_data.append([row['RecordingTimestamp'], row['GazeEventDuration'], x_coor, y_coor, str(aoi)])

    
    # write new data to file
    write_file(parsed_data)


# determines to which aoi point belongs based on 
def determine_aoi(x, y):
    return 1

def write_file(output):
    with open('testing_things.txt', 'w') as f:

        f.write("TS,DUR,X,Y,AOI\n")
        for item in output:
            print(item)
            f.write("%s\n" % (",").join(item))
    
    f.close()


# main
parse_file("nothing for now")
