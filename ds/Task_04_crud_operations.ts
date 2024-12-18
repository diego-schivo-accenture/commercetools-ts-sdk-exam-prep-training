import { log } from "../utils/logger";
import { apiRoot } from "./lib/client";

// 1. Create a new customer

// apiRoot.customers().withKey({ key: "ds-customer" }).get().execute().then(log).catch(log);

apiRoot.customers().post({
    body: {
        email: "foo.bar@example.com"
    }
}).execute().then(log).catch(log);
