import xmltodict

#Get the XML file data from
stream = open ('sample.xml', 'r')

#Prase  the XML file into an 'OrderDict'
xml = xmltodict.parse(stream.read())

for e in xml["People"]["Person"]:
    print(e)