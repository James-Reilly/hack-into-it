import csv
'''
filter.py
THis program filters the best answer from Turbotax Answer Exchange questions and also filters them into three categories, marriage, baby, and home.

@author: James Reilly
'''

#Create a list of common words in these tpyes of questions
commonMarried = ['marriage', 'married', 'jointly', 'joint']
commonBaby = ['child', 'dependent', 'kid', 'kids', 'children', 'dependents']
commonHome = ['home','mortgage', 'house']

def filterCSV():
    with open('output.csv') as csvfile:
        with open('filtered.csv', 'w') as f:
            writer = csv.DictWriter(f, ['Post ID', 'Subject', 'Details', 'Reply', 'Type'])
            writer.writeheader()
            reader = csv.DictReader(csvfile)
            prevId = ''
            for row in reader:
                #Make sure we don't repeat questions
                #from my look at the data the first answer is the best answer
                curId = row['Post ID']
                if not (curId == prevId):
                    prevId = curId
                    dataType = ''
                    subject = row['Subject']
                    details = row['Details']
                    #Make a searchable string
                    searchString = subject + " " + details
                    if any(word in searchString for word in commonMarried):
                        dataType = 'marriage'
                    elif any(word in searchString for word in commonBaby):
                        dataType = 'baby'
                    elif any(word in searchString for word in commonHome):
                        dataType = 'home'
                    if not (dataType == ''):
                        data = {'Post ID': row['Post ID'], 'Subject': row['Subject'], 'Details': row['Details'], 'Reply': row['Reply'], 'Type': dataType}
                        writer.writerow(data)

filterCSV()
