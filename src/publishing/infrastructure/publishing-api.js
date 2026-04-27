import {BaseApi} from "../../shared/infrastructure/base-api.js";
import {BaseEndpoint} from "../../shared/infrastructure/base-endpoint.js";

const categoriesEndpointPath = import.meta.env.VITE_CATEGOIRES_ENDPOINT_PATH;

export class PublishingApi extends BaseApi{
    #categoriesEndpoint;

    constructor() {
        super();
        this.#categoriesEndpoint = new BaseEndpoint(this, categoriesEndpointPath);
    }

    getCategories() {
        return this.#categoriesEndpoint.getAll();
    }

    getCategoryById(id) {
        return this.#categoriesEndpoint.getById(id);
    }

    createCategory(category) {
        return this.#categoriesEndpoint.create(category);
    }

    updateCategory(id, category) {
        return this.#categoriesEndpoint.update(id, category);
    }

    deleteCategory(id) {
        return this.#categoriesEndpoint.delete(id);
    }
}