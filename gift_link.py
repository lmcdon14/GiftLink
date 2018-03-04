import os
import webview
import threading
import time
import requests

#GiftLink's manual login flow URL
login_url = "https://volweb.utk.edu/~iige/"

access_token = None
	
def main():
	#Remove all of the spaces/newlines to make a valid URL
	cthread = threading.current_thread()
	print(cthread.name)
	global url
	newMainThread = threading.Thread(target = newMain)
	newMainThread.start()
	print("Active Threads: ", end = "")
	print(threading.activeCount())
	webview.create_window("Login", url, width = 640, height = 640)
	

def newMain():
	print("Access Token Should Be In Webview after Login")

if __name__ == "__main__":
	main()
