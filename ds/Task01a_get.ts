import { CustomerDraft } from "@commercetools/platform-sdk";
import { log } from "../utils/logger";
import { apiRoot } from "./lib/client";
import { createCustomer,getCustomerById } from "../prep/lib/customer";

/*
Learning Goals
 - API Clients
 - Get Project details
*/

// TODO Step 1: Provide API credentials for your trial project in .env
// TODO Step 2: Check lib/client.ts
        
// So this code displays the project configuration
// https://docs.commercetools.com/http-api-projects-project.html#get-project

// TODO Step 3:: Get project settings

apiRoot
    .get()
    .execute()
    .then(log)
    .catch(log);

    // apiRoot
    // .customers()
    // .get()
    // .execute()
    // .then(log)
    // .catch(log);

    // const customerDraft: CustomerDraft = {
    //     email: "diego.schivo@accenture.com",
    //     password: "password"
    // };

    // createCustomer(customerDraft)
    // .then(log)
    // .catch(log);

    // getCustomerById("4c3424fa-705c-4d55-94b2-61abc0079516")
    // .then(customer => {
    //    return apiRoot
    //     .customers()
    //     .withId({ID: customer.body.id})
    //     .post({
    //         body: {
    //             version: customer.body.version,
    //             actions: [
    //                 {
    //                     action: "setFirstName",
    //                     firstName: "Diego"
    //                 },
    //                 {
    //                     action: "setLastName",
    //                     lastName: "Schivo"
    //                 }
    //             ]
    //         }
    //     })
    //     .execute()
    // })
    // .then(log)
    // .catch(log);
