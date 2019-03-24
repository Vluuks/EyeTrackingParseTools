import csv

def parse_file(filename):

    parsed_data = []

    # open tsv
    with open('../Data/test.tsv') as f:
        reader = csv.DictReader(f, dialect='excel-tab')
    
        # iterate over rows

        # temporary metric so long as we have no aoi or line data
        # this is inaccurate for now because it assumes every measurement represents a new line
        # which is of course not true
        linenumber = 10

        for row in reader:
            # print(row)
            
            # if it is a fixation
            if(row['GazeEventType'] == 'Fixation'):
                # grab the columns we want
                x_coor = row['FixationPointX (MCSpx)']
                y_coor = row['FixationPointY (MCSpx)']

                aoi = determine_aoi(x_coor, y_coor)
                linenumber += 1

                parsed_data.append([row['RecordingTimestamp'], row['GazeEventDuration'], x_coor, y_coor, str(aoi), str(linenumber // 10) ])

    
    # write new data to file
    write_file(parsed_data)


# determines to which aoi point belongs based on 
def determine_aoi(x, y):
    return 1

def write_file(output):
    with open('testing_things.csv', 'w') as f:

        f.write("TS,DUR,X,Y,AOI,LN\n")
        for item in output:
            print(item)
            f.write("%s\n" % (",").join(item))
    
    f.close()


# main
parse_file("nothing for now")
