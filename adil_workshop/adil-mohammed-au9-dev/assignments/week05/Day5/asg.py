class student:
    def __init__ (self, name ,age, roll_no):
        self.name = name
        self.age = age
        self.roll_no = roll_no
    def mark_attendence(self):
        print("student",self.name,"is marked attendence")
        print("student",self.name,"is marked attendence")
if __name__ == "__main__":
    student1 = student("adil",15,1)
    print(student1.name,student1.mark_attendence)