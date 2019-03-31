import math

def is_prime(n):
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True

a = [1,2,3,4,7,6,3,11]


if __name__ == "__main__":
    max = 0
    for i in a:
        if is_prime(i):
            if max < i:
                max = i

    print(max)
