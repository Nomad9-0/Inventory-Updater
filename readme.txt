

1. Create or sign into your Twilio account. Complete the on-boarding process if you are creating an account.
2. Copy your authentication token and account SID from the Twilio console (see twilio.com/console)
3. Set the device's environment variables to contain the Twilio account SID and authentication token (see twil.io/secure)
4. Install Twilio and its dependencies. (https://www.twilio.com/docs/sms/quickstart/python#install-the-twilio-cli)
5. Launch Twilio with the 'twilio login' command and login to your account
6. Obtain a Twilio phone number (sms enabled)
7. Open the 'Text-Sender.py' file with any text editor
8. Replace the 'from_' phone number with your new number
9. Also replace the path to the excel file location  on lines 6 and 69
10. Save your changes.

Running the bot
1. Open the Windows command prompt
2. Change the directory to the folder containing the 'Text-Sender.py' file
3. Run the program (in the command prompt, type in python Text-Sender.py)
4. Follow the prompts

Updating the Spreadsheet
1. Open the Out of Stock Excel file
2. Enter the customer's name (first and last) in column A
3. Enter the name of the product they are requesting in column B
4. Enter the date they requested it in column C
5. Initialize columns E and G to 'No' and columns F and H to '-'
6. When we restock on the product they are requesting, update column E to yes and column f to the date when we restocked
7. Save the file and exit out of excel  


Also see:
https://www.twilio.com/docs/sms/quickstart/python
 