# Password-generator-site
### Pseudocode
set global variables so can be reused(setting length to 0 and all characters to false)
(do most in alerts and prompts so user can easily interact)
use  a prompt for length of password 
alert for informing that user has to choose atleast one character
use confirms for each of the possible characters

within generator function {
    if length >= 8 and =<128 then accepted otherwise error
    if (uppercase or lowercase or numerical or special =true )accepted otherwise error
        accepted= generates a random variable from each array if boolean true using getRandom() else returns null
        length- generated length = amount of characters remaining needed then generate
        shuffle 
        turn into string 
        log on screen
    else false then display error and ask to try again    


}