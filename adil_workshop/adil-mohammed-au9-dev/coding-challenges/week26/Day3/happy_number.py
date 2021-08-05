def isHappy(n):
    """
    :type n: int
    :rtype: bool
    """
    infinit_loop = []
	# keep looking for the happy number -> 1
    while n != 1:
        # sum squared digtis: number -> string -> digits -> square -> sum
        n = sum([int(d)**2 for d in str(n)])
		
        # if in loop, unhappy
        if n in infinit_loop:
            return False
        infinit_loop.append(n)
    return True
print(isHappy(2))