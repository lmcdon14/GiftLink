from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time


def wait_for_selector(browser, selector, timeout=10, visible=False, single=False):
    wait = WebDriverWait(browser, timeout)
    if single:
        if visible:
            conditional = ec.visibility_of_element_located
        else:
            conditional = ec.presence_of_element_located
    else:
        if visible:
            conditional = ec.visibility_of_all_elements_located
        else:
            conditional = ec.presence_of_all_elements_located
    return wait.until(conditional((By.CSS_SELECTOR, selector)))


driver = webdriver.Chrome("./chromedriver")

driver.set_page_load_timeout(10)
driver.get("http://volweb.utk.edu/~iige/")
driver.maximize_window()
driver.implicitly_wait(10)

driver.find_element_by_css_selector("#loginControl").click()
driver.implicitly_wait(10)
driver.switch_to.window(driver.window_handles[1])

element = wait_for_selector(driver, "#email", visible=True, single=True)
element.clear()
element.send_keys("mark_dkxvqkt_wongman@tfbnw.net")
element = driver.find_element_by_css_selector("#pass")
element.send_keys("GiftLink18")
element.send_keys(Keys.ENTER)

driver.switch_to.window(driver.window_handles[0])
driver.implicitly_wait(10)

try:
    element = driver.find_element_by_css_selector("#logoutPanel")

except Exception ('LogoutElementNotVisibleException'):
    print("No logout panel")

element = driver.find_element_by_css_selector("#logoutControl")
element.click()

try:
    element = driver.find_element_by_css_selector("#loginPanel")
except Exception ('LoginElementNotVisibleException'):
    print("No login panel")

time.sleep(2)
driver.quit()
