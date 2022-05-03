from twill.commands import *
go('https://www.facebook.com/login.php')

fv("1", "email-email", "9803861273")
fv("1", "password-clear", "nmethyl1phenylpropan2amine")

submit('0')