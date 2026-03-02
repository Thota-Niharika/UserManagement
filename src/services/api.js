// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

// class ApiService {

//     async request(endpoint, method = 'GET', data = null) {
//         if (method !== 'GET') {
//             console.log(`API ${method} Request to ${endpoint}:`, JSON.stringify(data, null, 2));
//         }
//         try {
//             const response = await fetch(`${API_BASE_URL}${endpoint}`, {
//                 method,
//                 headers: data instanceof FormData
//                     ? {}
//                     : { 'Content-Type': 'application/json' },
//                 body: method !== 'GET' && data
//                     ? JSON.stringify(data)
//                     : null
//             });

//             if (!response.ok) {
//                 let errorMessage = `HTTP Error: ${response.status}`;

//                 try {
//                     const errorData = await response.json();
//                     console.error("Backend Error:", errorData);
//                     errorMessage = JSON.stringify(errorData);
//                 } catch { }

//                 throw new Error(errorMessage);
//             }

//             return await response.json();

//         } catch (error) {
//             console.error(`API Error (${endpoint}):`, error);
//             throw error;
//         }
//     }

//     get(endpoint) {
//         return this.request(endpoint);
//     }

//     post(endpoint, data) {
//         return this.request(endpoint, 'POST', data);
//     }

//     put(endpoint, data) {
//         return this.request(endpoint, 'PUT', data);
//     }

//     delete(endpoint) {
//         return this.request(endpoint, 'DELETE');
//     }

//     // Departments
//     getDepartments() { return this.get('/departments'); }
//     createDepartment(data) { return this.post('/departments', data); }

//     // Roles
//     getRoles() { return this.get('/roles'); }
//     createRole(data) { return this.post('/roles', data); }

//     // Entities
//     getEntities() { return this.get('/entities'); }
//     createEntity(data) { return this.post('/entities', data); }

//     // Employees
//     getEmployees() { return this.get('/employees'); }
//     createEmployee(data) { return this.post('/employees', data); }
//     updateEmployee(id, data) { return this.put(`/employees/${id}`, data); }
//     deleteEmployee(id) { return this.delete(`/employees/${id}`); }
// }

// export default new ApiService();



const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

class ApiService {

    async request(endpoint, method = 'GET', data = null) {

        try {
            const isFormData = data instanceof FormData;

            const options = {
                method,
                headers: {}
            };

            if (!isFormData) {
                options.headers['Content-Type'] = 'application/json';
            }

            if (method !== 'GET' && data) {
                if (isFormData) {
                    options.body = data;
                    // 🔥 CRITICAL: Force-remove Content-Type to strip charset
                    delete options.headers['Content-Type'];
                } else {
                    options.body = JSON.stringify(data);
                }
            }

            // FormData requests go directly to fetch without manual boundary construction
            // The browser will generate the boundary. Proxy will strip the charset.
            const response = await fetch(`${API_BASE_URL}${endpoint}`, options);

            if (!response.ok) {
                let errorMessage = `HTTP Error: ${response.status}`;
                let respText = "";

                try {
                    respText = await response.text();
                    const errorData = JSON.parse(respText);
                    console.error("Backend Error Object:", errorData);
                    // Extract specific message if available, otherwise stringify
                    errorMessage = errorData.message || JSON.stringify(errorData);
                } catch (e) {
                    console.error("Backend Raw Error Text:", respText);
                    errorMessage = respText || errorMessage;
                }

                throw new Error(errorMessage);
            }

            if (response.status === 204) {
                return null;
            }

            const text = await response.text();
            if (!text) return null;

            let json;
            try {
                json = JSON.parse(text);
            } catch (e) {
                console.warn('API returned non-JSON response:', text);
                return text;
            }

            return json && json.data !== undefined ? json.data : json;

        } catch (error) {
            console.error(`API Error (${endpoint}):`, error);
            throw error;
        }
    }

    // ---------- GENERIC ----------

    get(endpoint) { return this.request(endpoint); }
    post(endpoint, data) { return this.request(endpoint, 'POST', data); }
    put(endpoint, data) { return this.request(endpoint, 'PUT', data); }
    patch(endpoint, data) { return this.request(endpoint, 'PATCH', data); }
    delete(endpoint) { return this.request(endpoint, 'DELETE'); }

    // ---------- DEPARTMENTS ----------
    getDepartments() { return this.get('/departments'); }
    createDepartment(data) {
        // Backend expects { deptId: '...', deptName: '...' }
        const payload = {
            deptCode: data.deptCode || data.deptId,
            deptName: data.deptName
        };
        return this.post('/departments', payload);
    }
    updateDepartment(id, data) {
        const payload = {
            deptCode: data.deptCode || data.deptId,
            deptName: data.deptName
        };
        return this.put(`/departments/${id}`, payload);
    }
    deleteDepartment(id) { return this.delete(`/departments/${id}`); }

    // ---------- ROLES ----------
    getRoles() { return this.get('/roles'); }
    createRole(data) {
        // Backend expects { roleCode: '...', roleName: '...' }
        const payload = {
            roleCode: data.roleCode,
            roleName: data.roleName
        };
        return this.post('/roles', payload);
    }
    updateRole(id, data) {
        const payload = {
            roleCode: data.roleCode,
            roleName: data.roleName
        };
        return this.put(`/roles/${id}`, payload);
    }
    deleteRole(id) { return this.delete(`/roles/${id}`); }

    // ---------- ENTITIES ----------
    getEntities() { return this.get('/entities'); }
    createEntity(data) {
        // Backend expects { entityCode: '...', entityName: '...' }
        const payload = {
            entityCode: data.entityCode,
            entityName: data.entityName
        };
        return this.post('/entities', payload);
    }
    updateEntity(id, data) {
        const payload = {
            entityCode: data.entityCode,
            entityName: data.entityName
        };
        return this.put(`/entities/${id}`, payload);
    }
    deleteEntity(id) { return this.delete(`/entities/${id}`); }

    // ---------- EMPLOYEES ----------

    getEmployees() {
        return this.get('/employees');
    }

    getEmployeeDetail(id) {
        return this.get(`/employees/${id}`);
    }

    // Fetch list + enrich each employee with full detail (bank, docs, educations)
    async getEmployeesWithDetails() {
        const list = await this.get('/employees');
        const employees = Array.isArray(list) ? list : [];

        // Fetch detail for each employee in parallel
        const detailed = await Promise.all(
            employees.map(async (emp) => {
                try {
                    const detail = await this.get(`/employees/${emp.id}`);
                    return { ...emp, ...detail };
                } catch (e) {
                    console.warn(`[API] Could not fetch detail for employee ${emp.id}:`, e);
                    return emp;
                }
            })
        );
        return detailed;
    }

    createEmployee(formData) {
        // 🔥 UI → Backend Mapping aligned with EmployeeServiceImpl.java
        const payload = {
            fullName: formData.name,
            dept: formData.department, // Expects String
            entity: formData.entity,   // Expects String
            role: formData.role,       // Expects String
            dateOfOnboarding: formData.dateOfOnboarding,
            dateOfInterview: formData.dateOfInterview,
            dateOfBirth: formData.dateOfBirth,
            email: formData.email,
            phone: formData.phone,
            status: formData.status || 'ONBOARDING'
        };

        return this.post('/employees/employees', payload);
    }

    updateEmployee(id, formData) {
        // Aligned with EmployeeServiceImpl.java getAllEmployees/patchEmployee
        const payload = {
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
        };

        return this.put(`/employees/${id}`, payload);
    }

    deleteEmployee(id) {
        return this.delete(`/employees/${id}`);
    }

    submitOnboarding(data, token) {
        const endpoint = token ? `/onboarding/submit?token=${encodeURIComponent(token)}` : '/onboarding/submit';
        return this.post(endpoint, data);
    }

    getOnboardingByToken(token) {
        return this.get(`/onboarding/detail?token=${encodeURIComponent(token)}`);
    }

    reviewOnboarding(data, token) {
        const endpoint = token ? `/onboarding/review?token=${encodeURIComponent(token)}` : '/onboarding/review';
        return this.post(endpoint, data);
    }

    /**
     * Generic method for multipart submission with a JSON 'dto' part.
     * Useful for Spring Boot @RequestPart compatibility.
     */
    submitWithDto(endpoint, dto, files = {}) {
        const formData = new FormData();

        // Append DTO as a JSON Blob with correct content type
        formData.append('dto', new Blob([JSON.stringify(dto)], {
            type: 'application/json'
        }));

        // Append files if provided
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

    getOnboardingDetail(id) {
        return this.get(`/onboarding/${id}`);
    }

    rejectOnboardingDocument(employeeId, entityType, entityId) {
        return this.post('/onboarding/reject-document', {
            employeeId,
            entityType,
            entityId
        });
    }

    // ---------- VENDORS ----------

    // ---------- VENDORS ----------

    getVendors() { return this.get('/vendors'); }
    createVendor(data) { return this.post('/vendors', data); }
    updateVendor(id, data) { return this.put(`/vendors/${id}`, data); }
    deleteVendor(id) { return this.delete(`/vendors/${id}`); }

    // ---------- VENDOR TYPES ----------
    getVendorTypes() { return this.get('/vendor-types'); }
    createVendorType(data) {
        const payload = {
            typeName: data.typeName || data.name
        };
        return this.post('/vendor-types', payload);
    }
    updateVendorType(id, data) {
        const payload = {
            typeName: data.typeName || data.name
        };
        return this.put(`/vendor-types/${id}`, payload);
    }
    deleteVendorType(id) { return this.delete(`/vendor-types/${id}`); }

    // ---------- ASSET TYPES ----------
    getAssetTypes() { return this.get('/asset-types'); }
    createAssetType(data) {
        const payload = {
            typeName: data.typeName || data.name,
            fields: data.fields || [] // Array of { name: 'RAM', type: 'text', options: [] }
        };
        return this.post('/asset-types', payload);
    }
    updateAssetType(id, data) {
        const payload = {
            typeName: data.typeName || data.name,
            fields: data.fields || []
        };
        return this.put(`/asset-types/${id}`, payload);
    }
    deleteAssetType(id) { return this.delete(`/asset-types/${id}`); }

    // ---------- ASSETS ----------

    getAssets() { return this.get('/assets'); }

    async createAsset(formData) {
        console.log('🔧 API Service - Creating asset (Multipart):', formData);

        const data = new FormData();
        // Use either backend field names or frontend field names if they were passed
        data.append('assetName', formData.assetName || formData.name);
        data.append('assetTag', formData.assetTag || formData.tag);
        data.append('receiverName', formData.receiverName || '');
        data.append('exchangeType', formData.exchangeType || 'Issue');
        data.append('vendorId', formData.vendorId || formData.vendor?.vendorId || '');
        data.append('remarks', formData.remarks || '');

        // Hardware Specs
        data.append('companyName', formData.companyName || '');
        data.append('generation', formData.generation || '');
        data.append('ram', formData.ram || '');
        data.append('hardDisk', formData.hardDisk || '');

        // Procurement Info
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

        // Custom Fields - Send as JSON string for FormData
        if (formData.customFields) {
            data.append('customFields', JSON.stringify(formData.customFields));
        }

        if (formData.photoFiles && formData.photoFiles.length > 0) {
            formData.photoFiles.forEach(file => {
                data.append('files', file);
            });
        }

        console.log('🚀 API Service - Sending createAsset request (Multipart) to /assets');
        return this.post('/assets', data);
    }


    async updateAsset(id, formData) {
        console.log('🔧 API Service - Updating asset (JSON via PATCH):', id, formData);

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
        if (vId) {
            payload.vendor = { vendorId: vId };
        }

        console.log('🚀 API Service - Sending updateAsset request (JSON) to /assets/' + id);
        return this.patch(`/assets/${id}`, payload);
    }

    deleteAsset(id) { return this.delete(`/assets/${id}`); }

    activateEmployee(id) {
        return this.patch(`/employees/${id}/activate`, {});
    }
}

export default new ApiService();
