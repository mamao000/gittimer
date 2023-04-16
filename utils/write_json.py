import json


def writeJsonData(fileDir:str ,dic):
    with open(fileDir, 'w') as f:
        json.dump(dic, f)
    f.close()


sample = open('../Sample/sample_request.json', 'r', encoding='UTF-8')
data = json.loads(sample.read())

response : str = data[0]['title'] + '\n' + str(data[0]['duration'])
print(response)
sample.close()


goal = open('../timer_log.json')
data = json.loads(goal.read())
dic = {'message' : response}
data.append(dic)

writeJsonData('../timer_log.json', data)
