import { API_BASE_URL as rawBaseUrl } from '../config/api';

<<<<<<< HEAD
// Use relative path in development to go through Vite proxy → avoids CORS
// In production it will use whatever is set in config (full URL or /api)
const API_BASE_URL = import.meta.env.DEV ? '/api' : rawBaseUrl;

class ApiService {

    /**
     * Helper: Manual data recovery for recursive/truncated backend responses.
     */
    recoverData(text) {
        const data = [];
        let i = 0;
        let count = 0;
        const maxScan = 2000000; // 2MB limit for safety
        const textToScan = text.length > maxScan ? text.substring(0, maxScan) : text;

        while (i < textToScan.length && data.length < 50) {
            const start = textToScan.indexOf('{', i);
            if (start === -1) break;

            let depth = 0, j = start, inString = false;
            let foundBoundary = false;
            // Limit scan depth for each search
            const scanLimit = Math.min(j + 5000, textToScan.length);
            while (j < scanLimit) {
                const char = textToScan[j];
                if (char === '"' && textToScan[j - 1] !== '\\') inString = !inString;
                if (!inString) {
                    if (char === '{') depth++;
                    else if (char === '}') depth--;
                    if (depth === 0) { foundBoundary = true; break; }
                }
                j++;
            }

            const fragment = textToScan.substring(start, foundBoundary ? j + 1 : j + 1000);
            const ext = (pats) => {
                for (const p of pats) {
                    const regex = new RegExp(`"${p}"\\s*:\\s*(?:"([^"]*)"|([^,\\s}\\]]+))`, 'i');
                    const m = fragment.match(regex);
                    if (m) {
                        const v = (m[1] !== undefined ? m[1] : m[2])?.trim();
                        if (!v || v === 'null' || v === 'undefined') continue;
                        return v.replace(/^"|"$/g, '');
                    }
                }
                return null;
=======
class ApiService {
    async request(endpoint, method = 'GET', data = null) {
        try {
            const isFormData = data instanceof FormData;
            const options = {
                method,
                headers: {}
>>>>>>> 62ebbba (commit)
            };

            const idVal = ext(['id', 'pk', 'uid']);
            const employeeId = ext(['employeeId', 'empId', 'employee_id', 'empNo', 'employeeNo', 'emp_no', 'employee_no', 'empCode', 'id']);
            const name = ext(['fullName', 'name', 'full_name', 'employeeName', 'empName']);
            const email = ext(['email', 'emailId', 'email_address']);
            const empCode = ext(['empId', 'empNo', 'empCode', 'employeeCode', 'employee_code']);

            if ((idVal || empCode || employeeId) && (name || email)) {
                const dbId = parseInt(idVal) || parseInt(employeeId) || Math.floor(Math.random() * 1000000);
                const displayId = String(employeeId || idVal || dbId).trim();
                const empName = (name || email?.split('@')[0] || `Employee ${displayId}`).trim();

                data.push({
                    id: dbId,
                    employeeId: displayId,
                    fullName: empName,
                    name: empName,
                    empCode: empCode || '-',
                    deptName: ext(['deptName', 'departmentName', 'dept_name', 'dept', 'department']),
                    roleName: ext(['roleName', 'designation', 'role_name', 'role']),
                    entityName: ext(['entityName', 'entity_name', 'entity']),
                    email: email || '-',
                    phone: ext(['phone', 'phoneNumber', 'mobile', 'mobileNumber']) || '-',
                    status: ext(['status']) || 'Active',
                    onboardingDate: ext(['dateOfOnboarding', 'onboardingDate', 'joiningDate', 'doj'])
                });
                // Jump past this object
                i = foundBoundary ? j + 1 : start + 100;
            } else {
                i = start + 50; // Jump ahead to next potential object
            }
<<<<<<< HEAD
=======

            if (method !== 'GET' && data) {
                if (isFormData) {
                    options.body = data;
                    // 🔥 CRITICAL: Force-remove Content-Type to strip charset
                    delete options.headers['Content-Type'];
                } else {
                    options.body = JSON.stringify(data);
                }
            }

            const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;
            const response = await fetch(url, options);

            if (!response.ok) {
                let errorMessage = `HTTP Error: ${response.status}`;
                let respText = "";
                try {
                    respText = await response.text();
                    const errorData = JSON.parse(respText);
                    errorMessage = errorData.message || JSON.stringify(errorData);
                } catch (e) {
                    errorMessage = respText || errorMessage;
                }
                throw new Error(errorMessage);
            }

            if (response.status === 204) return null;

            const text = await response.text();
            if (!text) return null;

            try {
                const json = JSON.parse(text.trim());
                return json && json.data !== undefined ? json.data : json;
            } catch (e) {
                return text;
            }
        } catch (error) {
            console.error(`API Error (${endpoint}):`, error);
            throw error;
>>>>>>> 62ebbba (commit)
        }

        const unique = {};
        for (const emp of data) {
            const key = emp.employeeId || emp.id;
            if (!unique[key] || (unique[key].empCode === '-' && emp.empCode !== '-')) {
                unique[key] = emp;
            }
        }
        return Object.values(unique);
    }

    async request(endpoint, method = 'GET', payload = null) {
        const isFormData = payload instanceof FormData;

        const options = {
            method,
            headers: new Headers()
        };

        if (method !== 'GET' && payload) {
            if (isFormData) {
                options.body = payload;
            } else {
                options.headers.set('Content-Type', 'application/json');
                options.body = JSON.stringify(payload);
            }
        }

        const fullUrl = `${API_BASE_URL}${endpoint}`;
        console.log("Calling API:", fullUrl);

        const response = await fetch(fullUrl, options);
        if (response.status === 204) return null;

        const text = await response.text();

        // Strip heavy/circular keys that crash JSON.parse
        const stripJsonKey = (src, key) => {
            const pattern = `"${key}":`;
            let out = src;
            let pos = 0;
            while (true) {
                const kStart = out.indexOf(pattern, pos);
                if (kStart === -1) break;
                const vStart = kStart + pattern.length;
                let vi = vStart;
                while (vi < out.length && /\s/.test(out[vi])) vi++;
                if (out[vi] !== '{' && out[vi] !== '[') { pos = kStart + 1; continue; }
                const open = out[vi], close = open === '{' ? '}' : ']';
                let depth = 1, i = vi + 1, inString = false;
                while (i < out.length && depth > 0) {
                    const char = out[i];
                    if (char === '"' && out[i - 1] !== '\\') inString = !inString;
                    if (!inString) {
                        if (char === open) depth++;
                        else if (char === close) depth--;
                    }
                    i++;
                }
                let removeFrom = kStart, removeTo = i;
                if (removeFrom > 0 && out[removeFrom - 1] === ',') removeFrom--;
                else if (out[removeTo] === ',') removeTo++;
                out = out.slice(0, removeFrom) + out.slice(removeTo);
                pos = removeFrom;
            }
            return out;
        };

        let data;
        try {
            let safeText = text;
            for (const key of ['employeeForm', 'onboardingDetails', 'onboardingForm']) {
                if (safeText.includes(`"${key}":`)) safeText = stripJsonKey(safeText, key);
            }
            data = JSON.parse(safeText);
        } catch (err) {
            console.warn(`⚠️ JSON Parse failed for ${method} ${endpoint}. Length: ${text.length}. Err: ${err.message}`);
            
            // Only attempt recovery for employee list or detail endpoints if they crash
            if (endpoint.includes('/employees') || endpoint.includes('/onboarding')) {
                const recovered = this.recoverData(text);
                if (recovered.length > 0) {
                    console.log(`✅ Recovered ${recovered.length} items manually.`);
                    // For GET details or POST creation, return the first recovered item
                    data = (endpoint.match(/\/\d+$/) || method === 'POST') ? recovered[0] : recovered;
                } else {
                    if (method !== 'GET') throw new Error(`Server error (${response.status}): ${text.substring(0, 300)}`);
                    data = { message: "Data recovery failed", raw: text.substring(0, 500) };
                }
            } else {
                if (method !== 'GET') throw new Error(`Server error (${response.status}): ${text.substring(0, 300)}`);
                data = { message: "Parse failed", raw: text.substring(0, 500) };
            }
        }

        if (response.status === 404) return null;
        if (!response.ok) {
            // Special case: If we recovered data from a crashed response, don't throw
            if (Array.isArray(data) && data.length > 0) return data;
            if (data && data.employeeId) return data; 
            
            throw new Error(data?.message || data?.error || `HTTP ${response.status}`);
        }

        return data && data.data !== undefined ? data.data : data;
    }

<<<<<<< HEAD
    // ---------- GENERIC ----------
=======
>>>>>>> 62ebbba (commit)
    get(endpoint) { return this.request(endpoint); }
    post(endpoint, data) { return this.request(endpoint, 'POST', data); }
    put(endpoint, data) { return this.request(endpoint, 'PUT', data); }
    patch(endpoint, data) { return this.request(endpoint, 'PATCH', data); }
    delete(endpoint) { return this.request(endpoint, 'DELETE'); }

    // ---------- DEPARTMENTS ----------
    getDepartments() { return this.get('/departments'); }
    createDepartment(data) {
        return this.post('/departments', {
            deptCode: data.deptCode || data.deptId,
            deptName: data.deptName
        });
    }
    updateDepartment(id, data) {
        return this.put(`/departments/${id}`, {
            deptCode: data.deptCode || data.deptId,
            deptName: data.deptName
        });
    }
    deleteDepartment(id) { return this.delete(`/departments/${id}`); }

    // ---------- ROLES ----------
    getRoles() { return this.get('/roles'); }
    createRole(data) {
        return this.post('/roles', {
            roleCode: data.roleCode,
            roleName: data.roleName
        });
    }
    updateRole(id, data) {
        return this.put(`/roles/${id}`, {
            roleCode: data.roleCode,
            roleName: data.roleName
        });
    }
    deleteRole(id) { return this.delete(`/roles/${id}`); }

    // ---------- ENTITIES ----------
    getEntities() { return this.get('/entities'); }
    createEntity(data) {
        return this.post('/entities', {
            entityCode: data.entityCode,
            entityName: data.entityName
        });
    }
    updateEntity(id, data) {
        return this.put(`/entities/${id}`, {
            entityCode: data.entityCode,
            entityName: data.entityName
        });
    }
    deleteEntity(id) { return this.delete(`/entities/${id}`); }

    // ---------- EMPLOYEES ----------
<<<<<<< HEAD
    getEmployees() { return this.get('/employees'); }
    getEmployeeDetail(id) { return this.get(`/employees/${id}`); }

    async getEmployeesWithDetails() {
        const list = await this.get('/employees');
        // Return the full backend list — no client-side filtering.
        // Every employee the backend sends must appear in the UI.
        return Array.isArray(list) ? list : [];
    }

    createEmployee(formData) {
        return this.post('/employees', {
=======
    async getEmployees() {
        console.warn("[API] Using blind-fetch workaround for /employees due to backend recursion bug.");
        try {
            const idsToTry = Array.from({ length: 30 }, (_, i) => i + 1);
            const results = await Promise.all(
                idsToTry.map(async id => {
                    try {
                        const url = `/api/employees/${id}`;
                        const res = await fetch(url);
                        if (res.ok) {
                            const json = await res.json();
                            return json && json.data !== undefined ? json.data : json;
                        }
                    } catch (err) { }
                    return null;
                })
            );
            return results.filter(emp => emp && (emp.id || emp.employeeId));
        } catch (e) {
            console.error("[API] Fallback fetch failed:", e);
            return [];
        }
    }

    getEmployeeDetail(id) {
        return this.get(`/employees/${id}`);
    }

    async getEmployeesWithDetails() {
        const list = await this.getEmployees();
        const employees = Array.isArray(list) ? list : [];
        const detailed = await Promise.all(
            employees.map(async (emp) => {
                try {
                    const detail = await this.get(`/employees/${emp.id || emp.employeeId || 1}`);
                    return { ...emp, ...detail };
                } catch (e) {
                    return emp;
                }
            })
        );
        return detailed;
    }

    createEmployee(formData) {
        return this.post('/employees/employees', {
>>>>>>> 62ebbba (commit)
            fullName: formData.name,
            dept: formData.department,
            entity: formData.entity,
            role: formData.role,
            dateOfOnboarding: formData.dateOfOnboarding,
            dateOfInterview: formData.dateOfInterview,
            dateOfBirth: formData.dateOfBirth,
            email: formData.email,
            phone: formData.phone,
<<<<<<< HEAD
            status: formData.status || "ONBOARDING"
=======
            status: formData.status || 'ONBOARDING'
>>>>>>> 62ebbba (commit)
        });
    }

    updateEmployee(id, formData) {
        return this.put(`/employees/${id}`, {
            fullName: formData.name,
            dept: formData.department,
            entity: formData.entity,
            role: formData.role,
            dateOfOnboarding: formData.dateOfOnboarding,
            dateOfInterview: formData.dateOfInterview,
            dateOfBirth: formData.dateOfBirth,
            email: formData.email,
            phone: formData.phone,
            status: formData.status || 'Active'
        });
    }

    deleteEmployee(id) { return this.delete(`/employees/${id}`); }

    // ---------- ONBOARDING ----------
    submitOnboarding(data, token) {
        const endpoint = token ? `/onboarding/submit?token=${encodeURIComponent(token)}` : '/onboarding/submit';
        return this.post(endpoint, data);
    }

    getOnboardingByToken(token) {
        return this.get(`/onboarding/get-onboarding-by-token?token=${token}`);
    }

    reviewOnboarding(data, token) {
        const endpoint = token ? `/onboarding/review?token=${encodeURIComponent(token)}` : '/onboarding/review';
        return this.post(endpoint, data);
    }

    submitWithDto(endpoint, dto, files = {}) {
        const formData = new FormData();
        formData.append('data', new Blob([JSON.stringify(dto)], { type: 'application/json' }));
        Object.entries(files).forEach(([key, value]) => {
            if (value) {
                if (Array.isArray(value)) {
                    value.forEach(v => formData.append(key, v));
                } else {
                    formData.append(key, value);
                }
            }
        });
        return this.post(endpoint, formData);
    }

    getOnboardingDetail(id) { return this.get(`/onboarding/${id}`); }

<<<<<<< HEAD
    rejectOnboardingDocument(employeeId, entityType, entityId, remarks) {
        return this.post('/onboarding/reject-document', {
            employeeId,
            entityType,
            entityId,
            remarks: remarks || ''
        });
=======
    rejectOnboardingDocument(employeeId, entityType, entityId) {
        return this.post('/onboarding/reject-document', { employeeId, entityType, entityId });
>>>>>>> 62ebbba (commit)
    }

    // ---------- VENDORS ----------
    getVendors() { return this.get('/vendors'); }
    createVendor(data) { return this.post('/vendors', data); }
    updateVendor(id, data) { return this.put(`/vendors/${id}`, data); }
    deleteVendor(id) { return this.delete(`/vendors/${id}`); }

    // ---------- VENDOR TYPES ----------
    getVendorTypes() { return this.get('/vendor-types'); }
    createVendorType(data) {
        return this.post('/vendor-types', { typeName: data.typeName || data.name });
    }
    updateVendorType(id, data) {
        return this.put(`/vendor-types/${id}`, { typeName: data.typeName || data.name });
    }
    deleteVendorType(id) { return this.delete(`/vendor-types/${id}`); }

    // ---------- ASSET TYPES ----------
    getAssetTypes() { return this.get('/asset-types'); }
    createAssetType(data) {
        return this.post('/asset-types', {
            typeName: data.typeName || data.name,
            fields: data.fields || []
        });
    }
    updateAssetType(id, data) {
        return this.put(`/asset-types/${id}`, {
            typeName: data.typeName || data.name,
            fields: data.fields || []
        });
    }
    deleteAssetType(id) { return this.delete(`/asset-types/${id}`); }

    // ---------- ASSETS ----------
    getAssets() { return this.get('/assets'); }
    async createAsset(formData) {
        const data = new FormData();
        data.append('assetName', formData.assetName || formData.name);
        data.append('assetTag', formData.assetTag || formData.tag);
        data.append('receiverName', formData.receiverName || '');
        data.append('exchangeType', formData.exchangeType || 'Issue');
        data.append('vendorId', formData.vendorId || formData.vendor?.vendorId || '');
        data.append('remarks', formData.remarks || '');
        data.append('companyName', formData.companyName || '');
        data.append('generation', formData.generation || '');
        data.append('ram', formData.ram || '');
        data.append('hardDisk', formData.hardDisk || '');
        data.append('procurementType', formData.procurementType || 'Purchasing');
        data.append('purchaseDate', formData.purchaseDate || '');
        data.append('poNumber', formData.poNumber || '');
        data.append('invoiceNumber', formData.invoiceNumber || '');
        data.append('purchaseCost', formData.purchaseCost || '');
        data.append('warrantyPeriod', formData.warrantyPeriod || '');
        data.append('vendorContact', formData.vendorContact || '');
        data.append('deliveryDate', formData.deliveryDate || '');
        data.append('returnDate', formData.returnDate || '');
        data.append('agreementNumber', formData.agreementNumber || '');
        data.append('securityDeposit', formData.securityDeposit || '');
<<<<<<< HEAD

        if (formData.customFields) {
            data.append('customFields', JSON.stringify(formData.customFields));
        }
        if (formData.photoFiles) {
            formData.photoFiles.forEach(file => data.append('files', file));
        }
=======
        if (formData.customFields) data.append('customFields', JSON.stringify(formData.customFields));
        if (formData.photoFiles) formData.photoFiles.forEach(file => data.append('files', file));
>>>>>>> 62ebbba (commit)
        return this.post('/assets', data);
    }

    async updateAsset(id, formData) {
        const payload = {
            assetName: formData.assetName || formData.name,
            assetTag: formData.assetTag || formData.tag,
            receiverName: formData.receiverName || '',
            exchangeType: formData.exchangeType || 'Issue',
            remarks: formData.remarks || '',
            companyName: formData.companyName || '',
            generation: formData.generation || '',
            ram: formData.ram || '',
            hardDisk: formData.hardDisk || '',
            procurementType: formData.procurementType || 'Purchasing',
            purchaseDate: formData.purchaseDate || '',
            poNumber: formData.poNumber || '',
            invoiceNumber: formData.invoiceNumber || '',
            purchaseCost: formData.purchaseCost || '',
            warrantyPeriod: formData.warrantyPeriod || '',
            vendorContact: formData.vendorContact || '',
            deliveryDate: formData.deliveryDate || '',
            returnDate: formData.returnDate || '',
            agreementNumber: formData.agreementNumber || '',
            securityDeposit: formData.securityDeposit || '',
            customFields: formData.customFields || {}
        };
        const vId = formData.vendorId || formData.vendor?.vendorId;
        if (vId) payload.vendor = { vendorId: vId };
        return this.patch(`/assets/${id}`, payload);
    }

    deleteAsset(id) { return this.delete(`/assets/${id}`); }
    activateEmployee(id) { return this.patch(`/employees/${id}/activate`, {}); }
    deactivateEmployee(id) { return this.patch(`/employees/${id}/deactivate`, {}); }

    getFileUrl(path) {
        if (!path) return null;
        const cleanPath = String(path).replace(/\\/g, '/').replace(/^\/+/, '');
        return `${API_BASE_URL}/${cleanPath}`;
    }
}

export default new ApiService();
