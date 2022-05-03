import os
import smtplib
from datetime import datetime
set="True"
while set=="True":

 now = datetime.now().time()

 if now.hour==14 and now.minute==6:
  set="False"
  address='saimon.toefl@gmail.com'
  password=''

  with smtplib.SMTP('smtp.gmail.com',587) as smtp:
    smtp.ehlo()
    smtp.starttls()
    smtp.ehlo()

    smtp.login(address,password)
    msg= f'Subject: {"Testing an automated email sender"}\n\n{"this is the body part"}'
    smtp.sendmail('saimon.toefl@gmail.com','ghimiresaimon1@gmail.com',msg)
