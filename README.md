# Password-generator-site
## Description
In this project, i was furthering my knowledge of javascript by using functions instead of long loops or ifs. I also used filtering techniques to be able to select only the values the user selected to create the desired password
## Usage
Press the green code button and select your desired option  eg. for ssh copy and use git clone in the terminal 

### Pseudocode
set global variables so can be reused(setting length to 0 and all characters to false)
(do most in alerts and prompts so user can easily interact)
use  a prompt for length of password 
user confirms for each of the possible characters

within generator function {
    if length >= 8 and =<128 then accepted otherwise error
    if (uppercase or lowercase or numerical or special =true )accepted otherwise error
        accepted= generates a random variable from each array .
        each selected array from boolean true
        log on screen
    else false then display error and ask to try again    


}
