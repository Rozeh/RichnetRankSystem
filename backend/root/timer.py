import threading

end = False

def execute_func(second=5.0):
    global end
    if end:
        return
    print("Hello__word")

    threading.Timer(second, execute_func,[second]).start()
