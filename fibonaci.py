def fib(n):
    if n < 2:
        return n
    else:
        return fib(n-1) + fib(n-2)

def printFibo(n):
    for i in range(n):
        if fib(i) < n:
            print(fib(i))

print(printFibo(9))
