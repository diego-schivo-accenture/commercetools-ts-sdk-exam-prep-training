import { CustomerDraft, CustomerGroupDraft } from "@commercetools/platform-sdk";
import {
    createCustomer,
    createCustomerGroup,
    deleteCustomerById,
    getCustomerById,
    getCustomerByKey,
    updateCustomerById,
} from "./lib/customer";
import { log } from "../utils/logger";
import { createTaxCategory } from "./lib/project";
import { createCategory, getCategoryByKey } from "./lib/product";

// TODO Step 1: Create a new customer.
// TODO Step 2: Update the customer's billing address.
// TODO Step 3: Create a customer group.
// TODO Step 4: Assign the customer to the customer group.
// TODO Step 5: Create a tax category.
// TODO Step 6: Create a few product categories.
// TODO Step 7: Query the categories by key.

// getCustomerById("4c3424fa-705c-4d55-94b2-61abc0079516")
//     .then(customer => deleteCustomerById(customer.body.id, customer.body.version))
//     .then(log)
//     .catch(log);

// const customerDraft: CustomerDraft = {
//     firstName: "Diego",
//     lastName: "Schivo",
//     email: "diego.schivo@accenture.com",
//     password: "password",
//     key: "ds-customer",
//     addresses: [
//         {
//             country: "IT",
//             key: "ds-customer-address"
//         }
//     ],
//     defaultBillingAddress: 0,
//     defaultShippingAddress: 0
// };
// createCustomer(customerDraft).then(log).catch(log);

// getCustomerByKey("ds-customer")
//     .then(x => updateCustomerById(x.body.id, {
//         version: x.body.version,
//         actions: [
//             {
//                 "action": "setDefaultBillingAddress",
//                 "addressKey": "ds-customer-address"
//             }
//         ]
//     }))
//     .then(log)
//     .catch(log);

// createCustomerGroup({
//     "key": "webshop-user",
//     "groupName": "Webshop user"
//   })
//   .then(log)
//   .catch(log);

// getCustomerByKey("ds-customer")
//     .then(x => updateCustomerById(x.body.id, {
//         version: x.body.version,
//         actions: [
//             {
//                 "action": "setCustomerGroup",
//                 "customerGroup": {
//                     "key": "webshop-user",
//                     "typeId": "customer-group"
//                 }
//             }
//         ]
//     }))
//     .then(log)
//     .catch(log);

// createTaxCategory({
//     "key" : "test-tax",
//     "name" : "Test Tax Category",
//     "rates" : [ {
//       "name" : "HST Ontario",
//       "amount" : 0.13,
//       "includedInPrice" : true,
//       "country" : "CA",
//       "state" : "ON",
//       "subRates" : [ {
//         "name" : "Federal rate (GST 5%)",
//         "amount" : 0.05
//       }, {
//         "name" : "Provincial rate (PST 8%)",
//         "amount" : 0.08
//       } ]
//     } ]
//   }).then(log).catch(log);

// createCategory({
//     "key": "hats",
//     "name" : {
//       "en" : "Hats"
//     },
//     "slug" : {
//       "en" : "hats"
//     },
//     // "parent" : {
//     //   "typeId" : "category",
//     //   "id" : "123456"
//     // },
//     "orderHint" : "0.1"
//   }).then(log).catch(log);

getCategoryByKey("hats").then(log).catch(log);