 
#!/usr/bin/python3  
#here the link https://bc-robotics.com/tutorials/raspberry-pi-irrigation-control-part-3/
#another example https://github.com/markveillette/rpi_sprinkler/blob/master/run_sprinkler.py
#https://blog.devgenius.io/i-built-a-smart-irrigation-system-using-only-a-raspberry-pi-ba29282b499e
#set python 3 cuz busio is for 3 only   to install pip and the module that will need like 
#apt install python3-pip then you can install the modules 
#ex python -m pip install requests
#ex python -m pip install board
#import smtplib
#import busio
#import adafruit_ads1x15.ads1015 as ADS

#from w1thermsensor import W1ThermSensor
   
#import board

#i2c = busio.I2C(board.SCL, board.SDA)
#from adafruit_ads1x15.analog_in import AnalogIn
#ds18b20 = W1ThermSensor()
   
#ads = ADS.ADS1015(i2c)
#ads.gain = 1
   
#waterTick = 0   #Used to count the number of times the flow input is triggered

##Event to detect flow (1 tick per revolution)
#GPIO.add_event_detect(24, GPIO.FALLING) 
#def flowtrig(self):
    #global waterTick
    #waterTick += 1
   
#GPIO.add_event_callback(24, flowtrig)
 
##Email Variables
#SMTP_SERVER = 'smtp.gmail.com' #Email Server (don't change!)
#SMTP_PORT = 587 #Server Port (don't change!)
#GMAIL_USERNAME = 'youremail@email.com' #change this to match your gmail account
#GMAIL_PASSWORD = 'yourPassword'  #change this to match your gmail password
 
#recipient = 'sendToEmail@email.com' #change this to your destination email account
 
#Start
#smStart = AnalogIn(ads, ADS.P0) #Read initial value from soil moisture sensor connected to A0

#print("activating solenoid number1 which is pin : {} end of the works babe! {}".format(s1)
 
#smEnd = AnalogIn(ads, ADS.P0) #Read end value from soil moisture sensor connected to A0
 
#temperature = ds18b20.get_temperature() #Get temperature from the temperature sensor
 
#waterUsed = waterTick * 2.25 #convert our sensor count to millilitres 
#waterUsed = waterUsed / 1000 #convert to liters 
 
#Send Email
 
##Email Subject
#subject = 'Sprinkler Update'  
 
##Email Content
#line0 = 'Run Completed \n'
#line1 = 'Starting Moisture: ' + str(smStart.value) + '\n'
#line2 = 'Ending Moisture: ' + str(smEnd.value) + '\n'
#line3 = 'Water Consumed: ' + str(waterUsed) + '\n'
#line4 = 'Temperature: ' + str(temperature)
 
#emailText = line0 + line1 + line2 + line3 + line4
 
##Email Headers
#headers = ["From: " + GMAIL_USERNAME, "Subject: " + subject, "To: " + recipient, "MIME-Version: 1.0", "Content-Type: text/html"]
#headers = "\r\n".join(headers)
 
##Send Email
#session = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
#session.ehlo()
#session.starttls()
#session.ehlo
 
#session.login(GMAIL_USERNAME, GMAIL_PASSWORD)
 
#session.sendmail(GMAIL_USERNAME, recipient, headers + "\r\n\r\n" + emailText)
#session.quit
##Done

import sys
import time
import RPi.GPIO as GPIO
 
zone1 = 6  #Zone 1 run duration in minutes
zone2 = 10 #Zone 2 run duration in minutes
zone3 = 8  #Zone 3 run duration in minutes
zone4 = 5  #Zone 4 run duration in minutes
zone5 = 7  #Zone 5 run duration in minutes
zone6 = 10 #Zone 6 run duration in minutes
test=   10 #test 10 seconds variable to test your solenoids 
   
#Assign channels to variables to keep track of them easier (these BCM pin numbers were listed in part 1 of the tutorial)
s1 = 4
s2 = 17
s3 = 18
s4 = 27
s5 = 22
s6 = 23
s7 = 24
s8 = 25
   
#Set GPIO pins to use BCM pin numbers
GPIO.setmode(GPIO.BCM)
   
#Set digital pin 24 to an input
#GPIO.setup(24, GPIO.IN) 
   
#Set solenoid driver pins to outputs:
GPIO.setup(s1, GPIO.OUT) #set Solenoid 1 output 
GPIO.setup(s2, GPIO.OUT) #set Solenoid 2 output
GPIO.setup(s3, GPIO.OUT) #set Solenoid 3 output 
GPIO.setup(s4, GPIO.OUT) #set Solenoid 4 output
GPIO.setup(s5, GPIO.OUT) #set Solenoid 5 output 
GPIO.setup(s6, GPIO.OUT) #set Solenoid 6 output
GPIO.setup(s7, GPIO.OUT) #set Solenoid 6 output
GPIO.setup(s8, GPIO.OUT) #set Solenoid 6 output
   

 
#Run Zone 1
GPIO.output(s1, GPIO.HIGH) #turn zone 1 on
sleepTime = zone1 * 60 #multiply our run time (minutes) by 60 to get seconds
time.sleep(sleepTime ) # sleep for our duration with the solenoid open 
GPIO.output(s1, GPIO.LOW) #turn zone 1 offa
#print("activating solenoid number1 which is pin : {} next solenoid will be {}".format(s1,s2))
#Run Zone 2
GPIO.output(s2, GPIO.HIGH) #turn zone 2 on
sleepTime = zone2 * 60 #multiply our run time (minutes) by 60 to get seconds
time.sleep(sleepTime ) # sleep for our duration with the solenoid open 
GPIO.output(s2, GPIO.LOW) #turn zone 2 off
#print("activating solenoid number1 which is pin : {} next solenoid will be {}".format(s2,s3))
 
#Run Zone 3
GPIO.output(s3, GPIO.HIGH) #turn zone 3 on
sleepTime = zone3 * 60 #multiply our run time (minutes) by 60 to get seconds
time.sleep(sleepTime ) # sleep for our duration with the solenoid open 
GPIO.output(s3, GPIO.LOW) #turn zone 3 off
#print("activating solenoid number1 which is pin : {} next solenoid will be {}".format(s3,s4))

#Run Zone 4
GPIO.output(s4, GPIO.HIGH) #turn zone 4 on
sleepTime = zone4 * 60 #multiply our run time (minutes) by 60 to get seconds
time.sleep(sleepTime ) # sleep for our duration with the solenoid open 
GPIO.output(s4, GPIO.LOW) #turn zone 4 off
#print("activating solenoid number1 which is pin : {} next solenoid will be {}".format(s4,s5)) 
#Run Zone 5
GPIO.output(s5, GPIO.HIGH) #turn zone 5 on
sleepTime = zone5 * 60 #multiply our run time (minutes) by 60 to get seconds
time.sleep(sleepTime ) # sleep for our duration with the solenoid open 
GPIO.output(s5, GPIO.LOW) #turn zone 5 off
#print("activating solenoid number1 which is pin : {} next solenoid will be {}".format(s5,s6))
#Run Zone 6
GPIO.output(s6, GPIO.HIGH) #turn zone 6 on
sleepTime = zone6 * 60 #multiply our run time (minutes) by 60 to get seconds
time.sleep(sleepTime ) # sleep for our duration with the solenoid open 
GPIO.output(s6, GPIO.LOW) #turn zone 6 off
#print("activating solenoid number1 which is pin : {} next solenoid will be {}".format(s6,s7))

#Run Zone 7
GPIO.output(s7, GPIO.HIGH) #turn zone 6 on
sleepTime = zone7 * 60 #multiply our run time (minutes) by 60 to get seconds
time.sleep(sleepTime ) # sleep for our duration with the solenoid open 
GPIO.output(s7, GPIO.LOW) #turn zone 6 off
#print("activating solenoid number1 which is pin : {} next solenoid will be {}".format(s7,s8))

#Run Zone 8
GPIO.output(s8, GPIO.HIGH) #turn zone 6 on
sleepTime = zone8 * 60 #multiply our run time (minutes) by 60 to get seconds
time.sleep(sleepTime ) # sleep for our duration with the solenoid open 
GPIO.output(s8, GPIO.LOW) #turn zone 6 off
