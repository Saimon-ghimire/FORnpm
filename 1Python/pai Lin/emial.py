import os
import smtplib


address='saimon.toefl@gmail.com'
password='amantedemessi'

with smtplib.SMTP('smtp.gmail.com',587) as smtp:
  smtp.ehlo()
  smtp.starttls()
  smtp.ehlo()
  
  smtp.login(address,password)
  msg= f'Subject: {"Testing an automated email sender"}\n\n{"this is the body part"}'
  smtp.sendmail('saimon.toefl@gmail.com','ghimiresaimon1@gmail.com',msg)
 

