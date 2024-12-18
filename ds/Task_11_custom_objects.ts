import { log } from "../utils/logger";
import { apiRoot } from "./lib/client";

// 1. Create a custom object to store a custom print to be engraved on the product

// apiRoot.customObjects().post({
//     body: {
//         container : "ds-engraved-print",
//         "key" : "ds-foo-bar",
//         "value" : "Foo bar"
//       }
// }).execute().then(log).catch(log);

// apiRoot.customObjects().get().execute().then(log).catch(log);


// 2. Get the custom object by container and key

apiRoot.customObjects().withContainerAndKey({
    container: "ds-engraved-print",
    key: "ds-foo-bar"
}).get().execute().then(log).catch(log);
