import xml.etree.ElementTree as ET

#Get the XML file data
stream = open('sample.xml', 'r')

#Parse tge data into an Elament tree object
xml = ET.parse(stream)

#Get the root Element objet from the elemenetree 
root = xml.getroot()

#Iterate through  each child of the root Element 
for e in root: 
    #Prtin the stringfield version of the element name
    print(ET.tosrting(e))
    print("")

    #print the 'Id' attribute of the element object

