# aboutNode
This was my first project built in NodeJS. Simply put, it is a note keeping console application. Methods include...
  add()
  read()
  remove()
  list()
  
AVAILABLE FUNCTIONS:

<b>add()</b> -> This function uses yargs to require a title and body properties as arguments. It will take your new NOTE and add it to the json file where the data is being persisted for now.

<b>read()</b> -> This function requires a title to be passed in matching that of the one you wish to read. It then writes that note to the console

<b>remove()</b> -> The remove function also requires a title to be passed in matching that of the note you wish to remove. If the note was found and removed it writes "Note removed" if the note was not found it writes "Note not found"

<b>list()</b> -> List takes all notes in the json file and writes them to the console

MISC:

All notes are being written to a json file for now, if I set up a MongoDB I will refactor to write to that instead.
  
