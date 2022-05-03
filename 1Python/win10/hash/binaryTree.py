

class node:
    def  __init__(self,data):
        self.data=data
        self.left=None
        self.right=None

class binarytree:
    def __init__(self):
        self.root=None

#INSERT

    def insert(self,data):
        if self.root==None:				
            self.root=node(data)
        else:
            self._insert(data,self.root)
    def _insert(self,data,cur_node):
        if data<cur_node.data:
            if cur_node.left==None:			
                cur_node.left=node(data)
            else:
                self._insert(data,cur_node.left) 
        elif data>cur_node.data:			
            if cur_node.right==None:
                cur_node.right=node(data)
            else:
                self._insert(data,cur_node.right)
        else:
            print('Data In Treee Already')

#REMOVE

    def remove(self,data):
        if self.root!=None:
            self._remove(data,self.root)
    def _remove(self,data,cur_node):
        if cur_node == None:
            return cur_node
        if data<cur_node.data:
            cur_node.left=self._remove(data,cur_node.left)
        elif data>cur_node.data:
            cur_node.right=self._remove(data,cur_node.right)
        else:
            if cur_node.left is None and cur_node.right is None:
                print('Removing Leaf Node')
                if cur_node==self.root:
                    self.root=None
                del cur_node
                return None
            if cur_node.left is None:
                print('Removing None with Right Child')
                if cur_node==self.root:
                    self.root=cur_node.right
                tempnode=cur_node.right
                del cur_node
                return tempnode
            elif cur_node.right is None:
                print('Removing None with Left Child')
                if cur_node==self.root:
                    self.root=cur_node.left
                tempnode=cur_node.left
                del cur_node
                return tempnode
            print('Removing Node with 2 Children')
            tempnode=self.getpred(cur_node.left)
            cur_node.data=tempnode.data
            cur_node.left=self._remove(cur_node.data,cur_node.left)
        return cur_node
    def getpred(self,cur_node):
        if cur_node.right!=None:
            return self.getpred(cur_node.right)
        return cur_node

#INORDER TRAVERSAL

    def inorder(self):
        if self.root!=None:
            self._inorder(self.root)
    def _inorder(self,cur_node):
        if cur_node!=None:
            self._inorder(cur_node.left)
            print(cur_node.data)
            self._inorder(cur_node.right)

#PREORDER TRAVERSAL

    def preorder(self):
        if self.root!=None:
            self._preorder(self.root)
    def _preorder(self,cur_node):
        if cur_node!=None:
            print(cur_node.data)
            self._preorder(cur_node.left)
            self._preorder(cur_node.right)

#POSTORDER TRAVERSAL

    def postorder(self):
        if self.root!=None:
            self._postorder(self.root)
    def _postorder(self,cur_node):
        if cur_node!=None:
            self._postorder(cur_node.left)
            self._postorder(cur_node.right)
            print(cur_node.data)

#MINIMUM VALUE

    def minval(self):
        if self.root!=None:
            return self._minval(self.root)
    def _minval(self,cur_node):
        if cur_node.left!=None:
            return self._minval(cur_node.left)
        return cur_node.data

#MAXIMUM VALUE

    def maxval(self):
        if self.root!=None:
            return self._maxval(self.root)
    def _maxval(self,cur_node):
        if cur_node.right!=None:
            return self._maxval(cur_node.right)
        return cur_node.data

tree=binarytree()

tree.insert(100)
tree.insert(90)					#			 100
tree.insert(110)				#			/	\
tree.insert(95)					#          90   110
tree.insert(30)					#		  /  \
								#		30    95 
tree.remove(110)
tree.remove(90)

tree.inorder()
#tree.preorder()
#tree.postorder()

print(tree.minval())
print(tree.maxval())

#**********************************************************
#***************************************************************************
#linked lists



class Node:
    def __init__(self, data = None, next_node = None):
        self.data = data
        self.nextNode = next_node

    def get_data(self):
        return self.data

    def set_data(self, data):
        self.data = data

    def get_nextNode(self):
        return self.nextNode

    def set_nextNode(self, nextNode):
        self.nextNode = nextNode


class LinkedList:
    def __init__(self, head = None):
        self.head = head


    def add_Node(self, data):
        # if empty
        if self.head == None:
            self.head = Node(data)


        # not empty
        else:
            curr_Node = self.head
            
            # if node added is at the start
            if data < curr_Node.get_data():
                self.head = Node(data, curr_Node)
                
            # not at start
            else:
                while data > curr_Node.get_data() and curr_Node.get_nextNode() != None:
                    prev_Node = curr_Node
                    curr_Node = curr_Node.get_nextNode()

                # if node added is at the middle
                if data < curr_Node.get_data():
                    prev_Node.set_nextNode(Node(data, curr_Node))
                

                # if node added is at the last
                elif data > curr_Node.get_data() and curr_Node.get_nextNode() == None:
                    curr_Node.set_nextNode(Node(data))



    def search(self, data):
        curr_Node = self.head
        while curr_Node != None:
            if data == curr_Node.get_data():
                return True

            else:
                curr_Node = curr_Node.get_nextNode()

        return False


    def delete_Node(self, data):
        if self.search(data):
            # if data is found

            curr_Node = self.head
            #if node to be deleted is the first node
            if curr_Node.get_data() == data:
                self.head = curr_Node.get_nextNode()

            else:
                while curr_Node.get_data() != data:
                    prev_Node = curr_Node
                    curr_Node = curr_Node.get_nextNode()
                    
                #node to be deleted is middle
                if curr_Node.get_nextNode() != None:
                    prev_Node.set_nextNode(curr_Node.get_nextNode())

                # node to be deleted is at the end
                elif curr_Node.get_nextNode() == None:
                    prev_Node.set_nextNode(None)

        else:
            return "Not found."

    def return_as_lst(self):
        lst = []
        curr_Node = self.head
        while curr_Node != None:
            lst.append(curr_Node.get_data())
            curr_Node = curr_Node.get_nextNode()

        return lst

    def size(self):
        curr_Node = self.head
        count = 0
        while curr_Node:
            count += 1
            curr_Node = curr_Node.get_nextNode()
        return count

      
## TEST CASES #
test1 = LinkedList()
test2 = LinkedList()
test1.add_Node(20)
test1.add_Node(15)
test1.add_Node(13)
test1.add_Node(14)
test1.delete_Node(17)
print(test1.return_as_lst())
print(test2.size())

