while True:
    import os
    mode=str(input("ENTER + TO ADD TIME AND - TO SUBTRACT: "))
    if mode=="+":
      file="/home/saimon_ghimire010/sAIMON/toBeAdded/Work/1Python/py sub/subtitles/COMPLETE/ADD.py"
      break
    elif mode=="-":
      file="/home/saimon_ghimire010/sAIMON/toBeAdded/Work/1Python/py sub/subtitles/COMPLETE/SUBTRACT.py"
      break
    else:
      print("WRONG INPUT FORMAT")
      continue

# os.system(file)
import subprocess
subprocess.run(["python3", file])
