import { apiRequest } from './api';
export const adminApi = {
  getPendingListings: () => apiRequest('/admin/moderation/listings?status=PENDING'),
  moderateListing: (id, status) => apiRequest('/admin/moderation/listings/' + id, { method: 'POST', body: JSON.stringify({ status }) }),
  getUsers: () => apiRequest('/admin/users'),
  updateUserStatus: (id, status) => apiRequest('/admin/users/' + id + '/status', { method: 'PUT', body: JSON.stringify({ status }) }),
  getAnalytics: () => apiRequest('/admin/analytics'),
};