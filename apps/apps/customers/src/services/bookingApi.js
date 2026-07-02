import { apiRequest } from "./api";

export const createBooking = (data) =>
    apiRequest("/bookings", {
        method: "POST",
        body: JSON.stringify(data)
    });

export const getBookings = () =>
    apiRequest("/bookings/guest");

// Added for compatibility with routes
export const create = createBooking;
export const getMyTrips = () => apiRequest("/bookings/my");
export const getById = (id) => apiRequest(`/bookings/${id}`);

export const bookingApi = {
    create,
    getMyTrips,
    getById,
    createBooking,
    getBookings
};