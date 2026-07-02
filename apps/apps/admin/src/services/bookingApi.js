import {
    apiRequest
} from "./api";

export const getBookings =
    () =>
        apiRequest(
            "/admin/bookings"
        );

export const getBooking =
    (id) =>
        apiRequest(
            `/bookings/${id}`
        );

export const cancelBooking =
    (id) =>
        apiRequest(
            `/admin/bookings/${id}/cancel`,
            {
                method: "PUT"
            }
        );