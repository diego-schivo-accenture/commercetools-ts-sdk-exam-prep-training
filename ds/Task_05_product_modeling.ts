import { log } from "../utils/logger";
import { apiRoot } from "./lib/client";

// 1. Create a simple product type

// apiRoot
//     .productTypes()
//     .post({
//         body: {
//             "key" : "ds-pants",
//             "name" : "Pants",
//             "description" : "Pants product type",
//             "attributes" : [ {
//               "type" : {
//                 "name" : "ltext"
//               },
//               "isSearchable" : true,
//               "inputHint" : "SingleLine",
//               "name" : "size",
//               "label" : {
//                 "en" : "The right size is important."
//               },
//               "isRequired" : false,
//               "attributeConstraint" : "CombinationUnique"
//             } ]
//           }
//     })
//     .execute()
//     .then(log)
//     .catch(log);

// 2. Create a product with at least two variants

// apiRoot.products().post({
//     body: {
//         key: "ds-product",
//         productType: {
//             key: "ds-pants",
//             typeId: "product-type"
//         },
//         categories: [{
//             typeId: "category",
//             key: "new-arrivals"
//         }],
//         name: {
//             en: "Some Product"
//         },
//         slug: {
//             en: "product_slug_ds"
//         },
//         masterVariant: {
//             sku: "SKU-1",
//             prices: [{
//                 value: {
//                     currencyCode: "EUR",
//                     centAmount: 4200
//                 }
//             }],
//             images: [{
//                 url: "http://my.custom.cdn.net/master.png",
//                 label: "Master Image",
//                 dimensions: {
//                     w: 303,
//                     h: 197
//                 }
//             }]
//         },
//         variants: [{
//             images: [{
//                 url: "http://my.custom.cdn.net/variant1.png",
//                 label: "Variant Image 1",
//                 dimensions: {
//                     w: 303,
//                     h: 197
//                 }
//             }]
//         }, {
//             images: [{
//                 url: "http://my.custom.cdn.net/variant2.png",
//                 label: "Variant Image 2",
//                 dimensions: {
//                     w: 303,
//                     h: 197
//                 }
//             }]
//         }]
//     }
// }).execute().then(log).catch(log);

// 3. Create a category

// apiRoot
//     .categories()
//     .post({
//         body: {
//             "key": "ds-shirts",
//             "name" : {
//               "en" : "Shirts"
//             },
//             "slug" : {
//               "en" : "ds-shirts"
//             },
//             "parent" : {
//               "typeId" : "category",
//               "key" : "new-arrivals"
//             },
//             "orderHint" : "0.1"
//           }
//     })
//     .execute()
//     .then(log)
//     .catch(log);

// 4. Assign the product to your category

// apiRoot
//     .products()
//     .withKey({ key: "ds-product"})
//     .get()
//     .execute()
//     .then(product =>
//         apiRoot
//             .products()
//             .withKey({ key: "ds-product"})
//             .post({
//                 body: {
//                     version: product.body.version,
//                     actions: [ {
//                         "action": "addToCategory",
//                         "category": {
//                           "typeId": "category",
//                           "key": "ds-shirts"
//                         }
//                       } ]
//                 }
//             })
//             .execute()
//     )
//     .then(log)
//     .catch(log);

apiRoot
    .products()
    .withKey({ key: "ds-product" })
    .get({
        queryArgs: { expand: ["productType", "masterData.current.categories[*]"] },
    })
    .execute()
    .then(log)
    .catch(log);
