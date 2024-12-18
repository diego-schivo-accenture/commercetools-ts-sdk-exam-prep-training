import { apiRoot } from "./client";
import { ClientResponse, Category, CategoryDraft } from "@commercetools/platform-sdk";

export const createCategory = (categoryDraft: CategoryDraft): Promise<ClientResponse<Category>> =>{
    return apiRoot.categories().post({body: categoryDraft}).execute();
}

export const getCategoryByKey = (key: string): Promise<ClientResponse<Category>> =>{
    return apiRoot.categories().withKey({key}).get().execute();
}
