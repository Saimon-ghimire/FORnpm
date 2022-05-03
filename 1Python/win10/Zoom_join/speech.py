import speech_recognition as sr

r = sr.Recognizer()


def voiceInput():
    with sr.Microphone() as source2:

        print("Speak")

        # listens for the user's input
        audio2 = r.listen(source2)

        try:
            # Using ggogle to recognize audio
            MyText = r.recognize_google(audio2)
            MyText = MyText.lower()
            print("Did you say "+MyText)
        except:
            print('Again')
			
			
voiceInput()
