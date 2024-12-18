import { log } from "../utils/logger";
import { importApiRoot } from "./lib/client";

// 1. Create an import container using Import API

// importApiRoot.importContainers().post({
//     body: {
//         key: "ds-new-product-price",
//         resourceType: "price"
//     }
// }).execute().then(log).catch(log);

// importApiRoot.importContainers().get().execute().then(log).catch(log);


// 2. Use the import container to import a new product price by posting a new price import request

// importApiRoot.prices().importContainers()
//     .withImportContainerKeyValue({ importContainerKey: "ds-new-product-price" }).post({
//         body: {
//             type: "price",
//             resources: [{
//                 key: "ds-price",
//                 value: {
//                     centAmount: 1234,
//                     currencyCode: "USD",
//                     type: "centPrecision"
//                 },
//                 product: {
//                     key: "ds-product",
//                     typeId: "product"
//                 },
//                 productVariant: {
//                     key: "ds-product-variant",
//                     typeId: "product-variant"
//                 }
//             }]
//         }
//     }).execute().then(log).catch(log);


// 3. Verify that the price has been successfully imported by checking the operation as well as the import container summary

// importApiRoot.importContainers()
//     .withImportContainerKeyValue({ importContainerKey: "ds-new-product-price" })
//     .importOperations().get().execute().then(log).catch(log);

importApiRoot.importContainers()
    .withImportContainerKeyValue({ importContainerKey: "ds-new-product-price" })
    .importSummaries().get().execute().then(log).catch(log);
