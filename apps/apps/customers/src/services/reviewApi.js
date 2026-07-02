import { apiRequest } from "./api";

export const createReview = (data) =>
    apiRequest("/reviews", {
        method: "POST",
        body: JSON.stringify(data)
    });

export const getReviews = (propertyId) =>
    apiRequest(`/reviews/property/${propertyId}`);

// Added for compatibility with routes
export const create = createReview;
export const getByPropertyId = getReviews;

export const reviewApi = {
    create,
    getByPropertyId,
    createReview,
    getReviews
};