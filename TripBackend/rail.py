from selenium import webdriver
from datetime import date
import os
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys
import time


#date 
today = date.today()
currentday = today.strftime("%d")
nextday = (int(currentday)+1)


os.environ['PATH'] += os.pathsep + r"C:\Users\kushb\OneDrive\Desktop\selenium"
chrome_options = Options()
chrome_options.add_argument("--disable-notifications")
try:
    driver = webdriver.Chrome(options=chrome_options)
    driver.get('https://www.irctc.co.in/nget/train-search')
    driver.fullscreen_window()
    driver.implicitly_wait(8)
except Exception as e:
    print(f"An error occurred: {str(e)}")


try:
    login  = driver.find_element(By.CSS_SELECTOR,"a[aria-label='Click here to Login in application']")
    login.click()
    username = driver.find_element(By.CSS_SELECTOR,"input[placeholder='User Name']")
    username.send_keys('USER NAME')
    pswd = driver.find_element(By.CSS_SELECTOR,"input[placeholder='Password']")
    pswd.send_keys('PASSWORD')

    time.sleep(8)

    signin = driver.find_element(By.XPATH,"//button[text()='SIGN IN']")
    signin.click()

except:
    print('ada')

try :   
    origin  = driver.find_element(By.CSS_SELECTOR,"input[aria-controls='pr_id_1_list']")

    origin.send_keys('NEW DELHI')
    origin.send_keys(Keys.ARROW_DOWN)
    origin.send_keys(Keys.ENTER)
    destination = driver.find_element(By.CSS_SELECTOR,"input[aria-controls='pr_id_2_list']")
    destination.send_keys('BHARUCH JN - BH')
#clciking tatkal
    catg = driver.find_element(By.CSS_SELECTOR,"span[class='ng-tns-c65-12 ui-dropdown-label ui-inputtext ui-corner-all ng-star-inserted']")
    catg.click()
    tatkal = driver.find_element(By.CSS_SELECTOR,"li[aria-label='TATKAL']")
    tatkal.click()
###
    classes = driver.find_element(By.ID,'journeyClass')
    classes.click()
    ac3 = driver.find_element(By.CSS_SELECTOR,"li[aria-label='AC 3 Tier (3A)']")
    ac3.click()
###
    date = driver.find_element(By.CSS_SELECTOR,"p-calendar[aria-label='Enter Journey Date. Formate D.D./.M.M./.Y.Y.Y.Y. Input is Mandatory.']")
    date.click()
    date1 = driver.find_element(By.XPATH,f"//a[text()='{nextday}']")
    date1.click()

    search = driver.find_element(By.XPATH,"//button[text()='Search']")
    search.click()

    time.sleep(10)

    passengername = driver.find_element(By.CSS_SELECTOR,"input[placeholder='Passenger Name']")
    passengername.send_keys('Kush Bang')
    
    age =  driver.find_element(By.CSS_SELECTOR,"input[placeholder='Age']")
    age.click()
    age.clear()
    age.send_keys('18')
    age.send_keys(Keys.TAB)

    gender = driver.find_element(By.CSS_SELECTOR,"select[formcontrolname='passengerGender']")
    gender.click()
    gender.send_keys(Keys.ARROW_DOWN)
    gender.send_keys(Keys.ENTER)

    try:
        foodchoice = driver.find_element(By.CSS_SELECTOR,"select[formcontrolname='passengerFoodChoice']")
        foodchoice.click()
        foodchoice.send_keys(Keys.ARROW_DOWN)
        foodchoice.send_keys(Keys.ENTER)
        final = driver.find_element(By.CSS_SELECTOR,"button[class='train_Search btnDefault']")
        final.click()
    except:
        final = driver.find_element(By.CSS_SELECTOR,"button[text()='Continue ']")
        final.click()
    
except:
    print('fsf')

while(1):
    True