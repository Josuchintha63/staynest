import { apiRequest } from './api';
export const hostApi = {
  getApplications: () => apiRequest('/admin/host-applications'),
  reviewApplication: (id, data) => apiRequest('/admin/host-applications/' + id, { method: 'POST', body: JSON.stringify(data) }),
};