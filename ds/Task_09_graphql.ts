import { log } from "../utils/logger";
import { apiRoot } from "./lib/client";

// 1. Fetch all customer names sorted alphabetically

// apiRoot.graphql().post({
//     body: {
//         query: `query queryCustomers {
//             customers(sort: ["firstName asc", "lastName asc"]) {
//                 results {
//                     firstName
//                     lastName
//                 }
//             }
//         }`,
//         operationName: "queryCustomers"
//     }
// }).execute().then(log).catch(log);


// 2. Fetch all orders with totals, customer emails and the line items

apiRoot.graphql().post({
    body: {
        query: `query queryOrders {
            orders {
                results {
                    id
                    totalPrice {
                        currencyCode
                        centAmount
                    }
                    customerEmail
                    lineItems {
                        id
                        productId
                        productKey
                        nameAllLocales {
                            locale
                            value
                        }
                        totalPrice {
                            currencyCode
                            centAmount
                        }
                        quantity
                    }
                }
            }
        }`,
        operationName: "queryOrders"
    }
}).execute().then(log).catch(log);
