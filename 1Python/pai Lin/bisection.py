def m_code(a,b):
    print("a"+'\t'*3+'b'+'\t'*3+'m'+'\t'*3+'f(a)'+'\t'*3+'f(b)'+'\t'*3+'f(m)'+'\n')
    val=True
    while val:
        
        
        
            a0=str(a)
            b0=str(b)
            
            if a0[2:4]!="" and b0[2:4]!="" and a0[2:4]==b0[2:4]:
                
                val=False

            else:
                
                val=True
                m=(a+b)/2
                fa=(a*a)+a-4
                fb=(b*b)+b-4
                fm=(m*m)+m-4
                print (str(a)+"\t"*3+str(b)+"\t"*3+str(m)+"\t"*3+str(fa)+"\t"*3+str(fb)+"\t"*3+str(fm)+"\n")
                if fm>0:
                    b=m
                else:
                    a=m
        
            

m_code(1,2)
     

