import { log } from "../utils/logger";
import { apiRoot } from "./lib/client";

// 1. Create a type adding a delivery-speed attribute to carts

// apiRoot.types().post({
//     body: {
//         key: "ds-line-item-delivery-speed",
//         name: {
//             en: "DS Delivery Speed on Line Items"
//         },
//         description: {
//             en: "This adds Delivery Speed on Line Items."
//         },
//         resourceTypeIds: ["line-item"],
//         fieldDefinitions: [{
//             name: "deliverySpeed",
//             label: {
//                 en: "Delivery Speed"
//             },
//             required: false,
//             type: {
//                 name: "Enum",
//                 values: [
//                   {
//                     key: "high-priority",
//                     label: "high priority"
//                   },
//                   {
//                     key: "low-priority",
//                     label: "low priority"
//                   }
//                 ]
//               }
//               ,
//             inputHint: "SingleLine"
//         }]
//     }
// }).execute().then(log).catch(log);

// apiRoot.types().get().execute().then(log).catch(log);


// 2. Re-do the checkout filling in the delivery-speed field with the value “high priority”

// apiRoot.customers().withKey({ key: "ds-customer" }).get().execute().then(x => x.body)
//     .then(async customer => {
//         const product = await apiRoot.products().withKey({ key: "ds-tshirt" }).get().execute().then(x => x.body);
//         return apiRoot.carts().post({
//             body: {
//                 currency: "USD",
//                 customerId: customer.id,
//                 lineItems: [{
//                     productId: product.id,
//                     variantId: product.masterData.current.variants[0].id,
//                     custom: {
//                         type: {
//                             key: "ds-line-item-delivery-speed",
//                             typeId: "type"
//                         },
//                         fields: {
//                             deliverySpeed: "high-priority"
//                         }
//                     }
//                 }],
//                 shippingAddress: customer.addresses.find(x => x.id === customer.defaultShippingAddressId)
//             }
//         }).execute();
//     }).then(log).catch(log);


// 3. Fetch the created cart
// 4. Check that you can see the stored value in the delivery-speed attribute

apiRoot.carts().withId({ ID: "7e0bed6f-f67a-484b-a4dd-f8ccb8e00ee0" }).get().execute().then(log).catch(log);
