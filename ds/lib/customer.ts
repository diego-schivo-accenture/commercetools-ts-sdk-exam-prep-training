import { apiRoot } from "./client";
import { ClientResponse, Customer, CustomerDraft, CustomerGroup, CustomerGroupDraft, CustomerSignInResult, CustomerUpdate } from "@commercetools/platform-sdk";

export const getCustomerById = (ID: string): Promise<ClientResponse<Customer>> =>{
    // throw new Error("Function not implemented")
    return apiRoot.customers().withId({ID}).get().execute();
}

export const getCustomerByKey = (key: string): Promise<ClientResponse<Customer>> =>{
    // throw new Error("Function not implemented")
    return apiRoot.customers().withKey({key}).get().execute();
}

export const createCustomer = (customerDraft: CustomerDraft): Promise<ClientResponse<CustomerSignInResult>> =>{
    // throw new Error("Function not implemented")
    return apiRoot.customers().post({body: customerDraft}).execute();
}

export const updateCustomerById = (ID: string, customerUpdate: CustomerUpdate): Promise<ClientResponse<Customer>> =>{
    return apiRoot.customers().withId({ID}).post({body: customerUpdate}).execute();
}

export const deleteCustomerById = (ID: string, version: number): Promise<ClientResponse<Customer>> =>{
    return apiRoot.customers().withId({ID}).delete({queryArgs: {version}}).execute();
}

export const createCustomerGroup = (customerGroupDraft: CustomerGroupDraft): Promise<ClientResponse<CustomerGroup>> =>{
    return apiRoot.customerGroups().post({body: customerGroupDraft}).execute();
}
