import axios from "axios";
import { normalizeEmployee, normalizeEmployeeList } from '../utils/normalizeEmployee';
import { parseIfString } from '../utils/apiUtils';

// ─── CONFIG ─────────────────────────────────────────────
export const API_BASE_URL = "/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 120000,
});

// ─── INTERCEPTOR ────────────────────────────────────────
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  // 🛡️ STEP 1: TOKEN TEMPORARILY DISABLED FOR DEBUGGING 403
  // To re-enable, uncomment the block below.
  /*
  if (token && token !== "null" && token !== "undefined" && token.length > 10) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  */

  return config;
});

// ─── CORE METHODS ───────────────────────────────────────

export const safeGet = async (url) => {
  try {
    const res = await api.get(url);
    const data = res.data;
    // Return inner data if wrapped, else return whole object
    if (data?.data) return data.data;
    return data;
  } catch (err) {
    console.error(`❌ GET ERROR [${url}]`, err.response?.status, err.message);
    throw err;
  }
};

export const safePost = async (url, payload) => {
  try {
    const isFormData = payload instanceof FormData;
    const res = await api.post(url, payload, {
      headers: isFormData ? {} : { "Content-Type": "application/json" }
    });
    const parsed = parseIfString(res.data);
    return parsed?.data ?? parsed;
  } catch (err) {
    console.error(`❌ POST ERROR [${url}]`, err.response?.status, err.message);
    throw err;
  }
};

export const safePut = async (url, payload) => {
  try {
    const res = await api.put(url, payload);
    const parsed = parseIfString(res.data);
    return parsed?.data ?? parsed;
  } catch (err) {
    console.error(`❌ PUT ERROR [${url}]`, err.response?.status, err.message);
    throw err;
  }
};

export const safeDelete = async (url) => {
  try {
    await api.delete(url);
    return true;
  } catch (err) {
    console.error(`❌ DELETE ERROR [${url}]`, err.response?.status, err.message);
    throw err;
  }
};

export const safePatch = async (url, payload) => {
  try {
    const res = await api.patch(url, payload);
    const parsed = parseIfString(res.data);
    return parsed?.data ?? parsed;
  } catch (err) {
    console.error(`❌ PATCH ERROR [${url}]`, err.response?.status, err.message);
    throw err;
  }
};

// ─── ONBOARDING (NAMED EXPORT) ──────────────────────────
export const submitOnboarding = async (dto, files = [], token = null) => {
  const formData = new FormData();
  formData.append("data", new Blob([JSON.stringify(dto)], { type: "application/json" }));

  const fileList = Array.isArray(files) ? files : Object.values(files || {});
  fileList.forEach(file => { if (file) formData.append("files", file); });

  const endpoint = token
    ? `/onboarding/submit?token=${encodeURIComponent(token)}`
    : "/onboarding/submit";

  return safePost(endpoint, formData);
};

// ─── MAIN SERVICE ───────────────────────────────────────

export const createEmployee = async (employeeData) => {
  try {
    const response = await safePost('/employees', employeeData);
    return normalizeEmployee(response); 
  } catch (error) {
    console.error("Create employee error:", error);
    throw error;
  }
};

const ApiService = {
  // --- DEPARTMENTS ---
  getDepartments: () => safeGet('/departments'),
  createDepartment: (d) => safePost('/departments', { deptCode: d.deptCode, deptName: d.deptName }),
  updateDepartment: (id, d) => safePut(`/departments/${id}`, { deptCode: d.deptCode, deptName: d.deptName }),
  deleteDepartment: (id) => safeDelete(`/departments/${id}`),

  // --- ROLES ---
  getRoles: () => safeGet('/roles'),
  createRole: (r) => safePost('/roles', { roleCode: r.roleCode, roleName: r.roleName }),
  updateRole: (id, r) => safePut(`/roles/${id}`, { roleCode: r.roleCode, roleName: r.roleName }),
  deleteRole: (id) => safeDelete(`/roles/${id}`),

  // --- ENTITIES ---
  getEntities: () => safeGet('/entities'),
  createEntity: (e) => safePost('/entities', { entityCode: e.entityCode, entityName: e.entityName }),
  updateEntity: (id, e) => safePut(`/entities/${id}`, { entityCode: e.entityCode, entityName: e.entityName }),
  deleteEntity: (id) => safeDelete(`/entities/${id}`),

  // --- VENDOR/ASSET TYPES ---
  getVendorTypes: () => safeGet('/vendor-types'),
  createVendorType: (d) => safePost('/vendor-types', { typeName: d.typeName || d.name }),
  updateVendorType: (id, d) => safePut(`/vendor-types/${id}`, { typeName: d.typeName || d.name }),
  deleteVendorType: (id) => safeDelete(`/vendor-types/${id}`),

  getAssetTypes: () => safeGet('/asset-types'),
  createAssetType: (data) => safePost('/asset-types', {
    typeName: data.typeName || data.name,
    fields: data.fields || []
  }),
  updateAssetType: (id, data) => safePut(`/asset-types/${id}`, {
    typeName: data.typeName || data.name,
    fields: data.fields || []
  }),
  deleteAssetType: (id) => safeDelete(`/asset-types/${id}`),

  // --- EMPLOYEES ---
  /**
   * ✅ PROPER CONTRACT: Returns full pagination object (content, totalPages, number).
   * Do NOT strip or guess the data shape here.
   */
  getEmployees: async (page = 0, size = 20) => {
    const res = await api.get(`/employees?page=${page}&size=${size}`);
    // Backend wraps response in { status: "SUCCESS", data: { content: [...] } }
    return res.data?.data ?? res.data;
  },

  getEmployeeDetail: async (id) => {
    const data = await safeGet(`/employees/${id}`);
    return normalizeEmployee(data?.employee || data);
  },

  createEmployee,

  updateEmployee: async (id, formData) => {
    const payload = {
      fullName: formData.name,
      dept: { id: formData.department },
      role: { id: formData.role },
      entity: { id: formData.entity },
      email: formData.email,
      phone: formData.phone,
      dateOfBirth: formData.dateOfBirth || null,
      dateOfInterview: formData.dateOfInterview || null,
      dateOfOnboarding: formData.dateOfOnboarding || null,
      status: formData.status || 'Active'
    };
    const raw = await safePut(`/employees/${id}`, payload);
    return normalizeEmployee(raw);
  },

  deleteEmployee: (id) => safeDelete(`/employees/${id}`),
  activateEmployee: (id) => safePatch(`/employees/${id}/activate`, {}),
  deactivateEmployee: (id) => safePatch(`/employees/${id}/deactivate`, {}),

  // --- VENDORS ---
  getVendors: () => safeGet('/vendors'),
  createVendor: (v) => safePost('/vendors', v),
  updateVendor: (id, v) => safePut(`/vendors/${id}`, v),
  deleteVendor: (id) => safeDelete(`/vendors/${id}`),

  // --- ASSETS ---
  getAssets: () => safeGet('/assets'),
  createAsset: async (formData) => {
    const data = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'photoFiles') {
        formData.photoFiles.forEach(file => data.append('files', file));
      } else if (key === 'customFields') {
        data.append('customFields', JSON.stringify(formData.customFields));
      } else {
        data.append(key, formData[key] || '');
      }
    });
    return safePost('/assets', data);
  },
  updateAsset: (id, formData) => {
    const vId = formData.vendorId || formData.vendor?.vendorId;
    const payload = { ...formData };
    if (vId) payload.vendor = { vendorId: vId };
    return safePatch(`/assets/${id}`, payload);
  },
  deleteAsset: (id) => safeDelete(`/assets/${id}`),

  // --- ONBOARDING ACTIONS ---
  submitOnboarding,
  getOnboardingByToken: (token) =>
    safeGet(`/onboarding/get-onboarding-by-token/${encodeURIComponent(token)}`),

  reviewOnboarding: (data, token) => {
    const url = token ? `/onboarding/review?token=${encodeURIComponent(token)}` : "/onboarding/review";
    return safePost(url, data);
  },

  getOnboardingDetail: (id) => safeGet(`/onboarding/${id}`),
  rejectOnboardingDocument: (employeeId, entityType, entityId, remarks) => {
    return safePost('/onboarding/reject-document', { employeeId, entityType, entityId, remarks: remarks || '' });
  },

  getFileUrl: (path) => {
    if (!path) return null;
    const cleanPath = String(path).replace(/\\/g, '/').replace(/^\/+/, '');
    // Proxied URL for images
    return `/api/${cleanPath}`;
  }
};

export default ApiService;