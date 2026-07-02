import {
    apiRequest
} from "./api";

export const getProperties =
    () =>
        apiRequest(
            "/search"
        );

export const getProperty =
    (id) =>
        apiRequest(
            `/properties/${id}`
        );

export const getHostProperties =
    (hostId) =>
        apiRequest(
            `/properties/host/${hostId}`
        );

export const approveProperty =
    (id) =>
        apiRequest(
            `/admin/moderation/${id}/approve`,
            {
                method: "PUT"
            }
        );

export const rejectProperty =
    (id) =>
        apiRequest(
            `/admin/moderation/${id}/reject`,
            {
                method: "PUT"
            }
        );