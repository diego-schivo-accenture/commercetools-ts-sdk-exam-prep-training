import { log } from "../utils/logger";
import { apiRoot } from "./lib/client";

// 1. Create a cart

// apiRoot.customers().withKey({ key: "ds-customer" }).get().execute()
//     .then(x => apiRoot.carts().post({
//         body: {
//             currency: "EUR",
//             customerId: x.body.id
//         }
//     }).execute())
//     .then(log)
//     .catch(log);


// 2. Add a product variant to your cart

// apiRoot.products().withKey({ key: "ds-product" }).get().execute()
//     .then(async x => {
//         const tc = await apiRoot.taxCategories().withKey({ key: "standard-tax" }).get().execute().then(y => y.body);
//         return apiRoot.products().withId({ ID: x.body.id }).post({
//             body: {
//                 actions: [{
//                     action: "setTaxCategory",
//                     taxCategory: {
//                         typeId: "tax-category",
//                         id: tc.id
//                     }
//                 }, {
//                     action: "addPrice",
//                     variantId: x.body.masterData.current.variants[1].id,
//                     price: {
//                         value: {
//                             currencyCode: "EUR",
//                             centAmount: 1234
//                         }
//                     }
//                 }, {
//                     action: "publish"
//                 }],
//                 version: x.body.version
//             }
//         }).execute();
//     }).then(log).catch(log);

// apiRoot.customers().withKey({ key: "ds-customer" }).get().execute().then(x => x.body)
//     .then(customer => apiRoot.carts().withCustomerId({ customerId: customer.id }).get().execute()).then(x => x.body)
//     .then(async cart => {
//         const product = await apiRoot.products().withKey({ key: "ds-product" }).get().execute().then(x => x.body);
//         return apiRoot.carts().withId({ ID: cart.id }).post({
//             body: {
//                 actions: [{
//                     action: "addLineItem",
//                     productId: cart.id,
//                     variantId: product.masterData.current.variants[1].id
//                 }],
//                 version: cart.version
//             }
//         }).execute();
//     }).then(log).catch(log);

// apiRoot.customers().withKey({ key: "ds-customer" }).get().execute().then(x => x.body)
//     .then(async customer => {
//         const cart = await apiRoot.carts().withCustomerId({ customerId: customer.id }).get().execute().then(x => x.body);
//         return apiRoot.carts().withId({ ID: cart.id }).post({
//             body: {
//                 actions: [{
//                     action: "setShippingAddress",
//                     address: customer.addresses.find(x => x.id === customer.defaultShippingAddressId)!
//                 }],
//                 version: cart.version
//             }
//         }).execute();
//     }).then(log).catch(log);


// apiRoot.customers().withKey({ key: "ds-customer" }).get().execute()
//     .then(x => apiRoot.carts().withCustomerId({ customerId: x.body.id }).get().execute())
//     .then(log)
//     .catch(log);


// 3. Place an order using the cart

// apiRoot.customers().withKey({ key: "ds-customer" }).get().execute().then(x => x.body)
//     .then(customer => apiRoot.carts().withCustomerId({ customerId: customer.id }).get().execute()).then(x => x.body)
//     .then(cart => apiRoot.orders().post({
//         body: {
//             cart: {
//                 typeId: "cart",
//                 id: cart.id
//             },
//             version: cart.version
//         }
//     }).execute()).then(log).catch(log);


// 4. Buy two t-shirts get one for free

// apiRoot.productTypes().post({
//     body: {
//         key: "ds-tshirts",
//         name: "T-Shirts",
//         description: "T-Shirts product type",
//     }
// }).execute().then(log).catch(log);

// apiRoot.cartDiscounts().post({
//     body: {
//         key: "ds-TShirtsBOGO",
//         name: {
//             "en-US": "Buy two t-shirts get one for free"
//         },
//         description: {
//             "en-US": "Two for one on all t-shirts items (discount on the cheapest item)"
//         },
//         cartPredicate: "1 = 1",
//         target: {
//             type: "multiBuyLineItems",
//             predicate: 'productType.key = "ds-tshirts"',
//             triggerQuantity: 2,
//             discountedQuantity: 1,
//             selectionMode: "Cheapest"
//         },
//         value: {
//             type: "relative",
//             permyriad: 10000
//         },
//         sortOrder: "0.25"
//     }
// }).execute().then(log).catch(log);


// 5. Buy for more than 100 USD, get 10% off

// apiRoot.cartDiscounts().post({
//     body: {
//         key: "ds-10Off100",
//         name: {
//             "en-US": "Buy for more than 100 USD, get 10% off"
//         },
//         cartPredicate: 'totalPrice > "100.00 USD"',
//         target: {
//             type: "totalPrice",
//         },
//         value: {
//             type: "relative",
//             permyriad: 1000
//         },
//         sortOrder: "0.3"
//     }
// }).execute().then(log).catch(log);

// apiRoot.cartDiscounts().withKey({ key: "ds-10Off100" }).get().execute().then(log).catch(log);


// 6. Now, create an order and check the correct implementation

// apiRoot.products().post({
//     body: {
//         key: "ds-tshirt",
//         productType: {
//             typeId: "product-type",
//             key: "ds-tshirts"
//         },
//         categories: [{
//             typeId: "category",
//             key: "new-arrivals"
//         }],
//         name: {
//             en: "DS T-Shirt"
//         },
//         slug: {
//             en: "ds-tshirt"
//         },
//         masterVariant: {
//             sku: "DS-TSHIRT-1",
//             prices: [{
//                 value: {
//                     currencyCode: "USD",
//                     centAmount: 12300
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
//             }],
//             prices: [{
//                 value: {
//                     currencyCode: "USD",
//                     centAmount: 12300
//                 }
//             }],
//         }, {
//             images: [{
//                 url: "http://my.custom.cdn.net/variant2.png",
//                 label: "Variant Image 2",
//                 dimensions: {
//                     w: 303,
//                     h: 197
//                 }
//             }],
//             prices: [{
//                 value: {
//                     currencyCode: "USD",
//                     centAmount: 13400
//                 }
//             }],
//         }],
//         taxCategory: {
//             typeId: "tax-category",
//             key: "standard-tax"
//         },
//         publish: true
//     }
// }).execute().then(log).catch(log);

// apiRoot.customers().withKey({ key: "ds-customer" }).get().execute().then(x => x.body)
//     .then(async customer => {
//         const product = await apiRoot.products().withKey({ key: "ds-tshirt" }).get().execute().then(x => x.body);
//         return apiRoot.carts().post({
//             body: {
//                 currency: "USD",
//                 customerId: customer.id,
//                 lineItems: [{
//                     productId: product.id,
//                     variantId: product.masterData.current.variants[0].id
//                 },{
//                     productId: product.id,
//                     variantId: product.masterData.current.variants[1].id
//                 }],
//                 shippingAddress: customer.addresses.find(x => x.id === customer.defaultShippingAddressId)
//             }
//         }).execute();
//     }).then(log).catch(log);

apiRoot.customers().withKey({ key: "ds-customer" }).get().execute().then(x => x.body)
    .then(customer => apiRoot.carts().withCustomerId({ customerId: customer.id }).get().execute()).then(x => x.body)
    .then(cart => apiRoot.orders().post({
        body: {
            cart: {
                typeId: "cart",
                id: cart.id
            },
            version: cart.version
        }
    }).execute()).then(log).catch(log);
