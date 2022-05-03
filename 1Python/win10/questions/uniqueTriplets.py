def triplets(workList):
    workList=list(set(workList)) #clear out repeated numbers
    workList.sort()
    print(workList,"\n")
    pF = 0
    while pF < (len(workList)-3):
        fNum = workList[pF]
        pS=pF+1
        while not pS == len(workList)-2:
            sNum = workList[pS]
            pT=pS+1
            while not pT == len(workList)-1:
                tNum = workList[pT]
                if fNum+sNum+tNum == 0:
                    print(fNum, sNum, tNum, '\n')
                pT += 1
            pS += 1
        pF += 1

workList = [-2, -1, 0, 1, 3, 4, 15,1]
triplets(workList) #sum is zero

