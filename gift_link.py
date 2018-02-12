import os
import webview
import threading


#GiftLink's manual login flow URL
login_url = \
"""
  https://www.facebook.com/v2.12/dialog/oauth?
  client_id=2050570888522386
  &redirect_uri=https://www.facebook.com/connect/login_success.html
  &state="{st=cs340,ds=gift}"
  &response_type=token
 """
 
def launchBrowser():
	#Remove all of the spaces/newlines to make a valid URL
	url = login_url.replace("\n", "")
	url = url.replace("\r", "")
	url = url.replace(" ", "")
	print(url)
	webview.create_window("Login", url, width = 640, height = 640)


def main():
	
	browser = threading.Thread(target = launchBrowser)
	browser.start()	
	#myUrl = webview.get_current_url()
	

	
	
if __name__ == "__main__":
	main()