import { apiRequest } from "./api";

export const createProperty = (data) =>
    apiRequest("/properties", {
        method: "POST",
        body: JSON.stringify(data)
    });

export const getProperty = (id) =>
    apiRequest(`/properties/${id}`);

export const getHostProperties = (id) =>
    apiRequest(`/properties/host/${id}`);

// Added for compatibility with routes
export const search = (params) => {
    const queryParams = new URLSearchParams();
    if (params?.city) queryParams.append("city", params.city);
    if (params?.propertyType) queryParams.append("propertyType", params.propertyType);
    if (params?.priceMax) queryParams.append("priceMax", params.priceMax);
    if (params?.sort) queryParams.append("sort", params.sort);
    
    const queryStr = queryParams.toString();
    return apiRequest(`/search${queryStr ? `?${queryStr}` : ""}`);
};

export const getById = (id) => {
    return apiRequest(`/properties/${id}`);
};

export const create = createProperty;

export const propertyApi = {
    search,
    getById,
    create,
    getProperty,
    getHostProperties
};