import { log } from "../utils/logger";
import { pocApiRoot } from "./handson/client";

// Learning Goals
// Api Clients
// Get, Post

// TODO Step 1: Provide credentials in .env
// TODO Step 2: Check ClientService.java
        
// So this code displays the project configuration
// https://docs.commercetools.com/http-api-projects-project.html#get-project

// TODO Step 3:: Get project settings

pocApiRoot
    .get()
    .execute()
    .then(log)
    .catch(log);


// TODO Step 4: Get shipping method by id

// pocApiRoot
//     .shippingMethods()
//     .withId({ ID: "996fe73b-de00-4f3a-b9e1-1f1a3bbec5d3" })
//     .get()
//     .execute()
//     .then(log)
//     .catch(log);


// TODO Step 5: Get standard tax category by key

// pocApiRoot
//     .taxCategories()
//     .withKey({ key: "standard-tax-category" })
//     .get()
//     .execute()
//     .then(log)
//     .catch(log);
