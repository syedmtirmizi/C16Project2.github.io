# Super-Hip 
Group Project 2:  A Restaurant Menu CMS 

## Description


The **Super-Hip** project is a Restaurant Menu CMS created for centralized chain restaurants with multiple stores. It aims to ease the process of updating menu items and adjusting menu prices in response to different factors, such as: seasonality, supply shortage and projected sales.  
Our system also allow individual store to take off menu items on a store level. This feature would be helpful during an ingredient shortage where some menu items are not available.  
The system is protected with encrypted user passwords so only authorized user can access and alternate the data base.  
Additional store can be registered to the system as the restaurant chain expand.

> **Benefit to implement Hmbrgr-Hlpr CMS**
>- [x] Reduce inconsistency of item recipe and prices across restaurants
>   * Restaurants will pull their set menu from the same data base
>   * Standardized discount and promotion during special event and promotion discount
>- [x] Reduce human error 
>   * Updates would be automatically sent to the restaurant digital menu on the launch date
>   * Eliminate shipping costs and possibly delays of promotional signage
>- [x] Provides customization for individual store 
>   * Decrease customers' disappointment with item outage 
>   * Increase exposure of item in response to PAR level and shelf-life


## User Story 
As an owner of a chain of quick-service restaurants,  
I would like to have an application that allows me to update our standardized menu recipes and prices in an efficient and timely manner.  
I would also like the ability to add new restaurants as we increase the number of location.  
Each individual Restaurant Management teams should have their unique login ID to access their restaurant data.  
The restaurant is able to delete or hide certain menu items on a store level through the application.  

## Acceptance criteria 
#### **LOGIN PAGE**
WHEN I launch the app  
THEN I am presented with a secure login page  
WHEN I click on the dashboard without logging in   
THEN I will be directed to ` LOGIN PAGE `   
WHEN I input my email and password  
THEN I will see a error message or successfully directed to the dashboard

#### **DASHBOARD**
WHEN I get to the dashboard  
THEN I am given the options to  
` ADD A MENU ITEM `  
` VIEW AND UPDATE MENU ITEM `  
` VIEW MENU BY LOCATION `  
` OPEN / CLSOE A LOCATION `    


#### **VIEW AND UPDATE MENU ITEM (Main and Store level)**  
WHEN I click on ` ADD A MENU ITEM `  
THEN I can add item to a store menu  
WHEN I click on ` VIEW AND UPDATE MENU ITEM `  
THEN I am presented the latest version of the full menu  
WHEN I click on ` VIEW MENU BY LOCATION `  
THEN I am presented the latest version of a store menu  
WHEN I pressed the ` SAVE ` button  
THEN the updated version will be sent to the data base  
    
#### **OPEN / CLSOE A LOCATION**   
WHEN  I clicked on `ADD CLSOE A LOCATION `to system  
THEN I can add new store location  
WHEN  I clicked on ` CLSOE A LOCATION `to system  
THEN I can delete store location 
WHEN I pressed the ` SAVE ` button  
THEN the updated version will be sent to the data base  
#### **LOGOUT**
WHEN I click `LOGOUT` in the `NAVBAR`  
THEN I will be logged out and re-directed to the login page  

## Initial Application design 
![alt text](https://github.com/fraudwheeldrive/Hmbrgr-Hlpr/blob/develop/public/images/super-hip-design.png
)

## Deployed Application 
https://hmbrgr-hlpr.herokuapp.com/

## Github Repository 
https://github.com/fraudwheeldrive/Hmbrgr-Hlpr

## built with: 
*   "bcrypt": "^5.0.1",
*   "connect-session-sequelize": "^7.1.1",
*   "dotenv": "^10.0.0",
*    "express": "^4.17.1",
*    "express-handlebars": "^5.3.2",
*    "express-sessions": "^1.0.6",
*    "mysql2": "^2.2.5",
*    "node": "^16.1.0",
*    "sequelize": "^6.6.2"





