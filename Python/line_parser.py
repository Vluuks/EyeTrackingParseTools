

def read_lines():

    # open java file
    with open('../Stimuli/Java/Student.java') as f:

        for line in f:
            # print(line)

            # if not blank and not a curly brace
            if line.strip() != '}' and line.strip() != '{' and line.strip() != '\n' and line.strip() != "":
            
            # or line.strip() != '{') and (line.strip() != "" or line.strip() != '\n' ):
                print(line)


read_lines()