import random
import math

lower = int(1)
upper = int(20)

x = random.randint(lower, upper)
print("you only have '3' choice to guess the number")

count = 0

while count < math.log(upper - lower+1):
    count += 1
    guess = int(input("Guess a number:- "))
    if x == guess:
        print("Congratulations you did it in ", count, " try")
        break
    elif x > guess:
        print("Try again")
    elif x < guess:
        print("Try again")

# Below code shows the output
if count >= math.log(upper - lower):
    print("\nThe number is %d" % x)
    print("\tBetter Luck Next time!")