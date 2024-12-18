import { apiRoot } from "./client";
import { ClientResponse, TaxCategory, TaxCategoryDraft } from "@commercetools/platform-sdk";

export const createTaxCategory = (taxCategoryDraft: TaxCategoryDraft): Promise<ClientResponse<TaxCategory>> =>{
    return apiRoot.taxCategories().post({body: taxCategoryDraft}).execute();
}
