import os
import webview
import threading
import time
import requests

#GiftLink's manual login flow URL
login_url = \
"""
  https://www.facebook.com/v2.12/dialog/oauth?
  client_id=2050570888522386
  &redirect_uri=https://www.facebook.com/connect/login_success.html
  &state="{st=cs340,ds=gift}"
  &response_type=token
  &scope=public_profile,user_friends
 """

access_token = None
	
def get_URL():
	"""
		Temporary Workaround:
		The access token is available for a very short time after a successful
		login so if your access token is not available, decrease the sleep time
		slowly until it prints without crashing webview.
	"""
	time.sleep(8)
	link = webview.get_current_url()
	print(link)
	
	"""
	If you haven't authorized access to GiftLink with Facebook once before,
	comment out the following line so you can grant access first.
	"""
	webview.destroy_window()
	
def main():
	#Remove all of the spaces/newlines to make a valid URL
	cthread = threading.current_thread()
	print(cthread.name)
	global url
	url = login_url.replace("\n", "")
	url = url.replace("\r", "")
	url = url.replace(" ", "")
	print(url)
	newMainThread = threading.Thread(target = newMain)
	newMainThread.start()
	print("Active Threads: ", end = "")
	print(threading.activeCount())
	webview.create_window("Login", url, width = 640, height = 640)
	

def newMain():
	print("I am the new main")
	global url
	urlGrabber = threading.Thread(target = get_URL)
	urlGrabber.start()
	urlGrabber.join()

if __name__ == "__main__":
	main()
