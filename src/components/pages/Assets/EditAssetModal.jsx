import { X, Package, Tag, ArrowRightLeft, MessageSquare, Image as ImageIcon, Camera, User, Building2 } from 'lucide-react';
import apiService from '../../../services/api';
import { getFileUrl } from '../../../utils/normalizeEmployee';

const EditAssetModal = ({ isOpen, onClose, onUpdate, asset }) => {
    const [formData, setFormData] = useState({
        assetName: '',
        assetTag: '',
        receiverName: '',
        exchangeType: 'Issue',
        newAssetId: '',
        remarks: '',
        assetCode: '',
        photos: [], // Preview URLs for display
        vendor: null, // Selected vendor object
        companyName: '',
        generation: '',
        ram: '',
        hardDisk: '',
        procurementType: 'Purchasing',
        purchaseDate: '',
        poNumber: '',
        invoiceNumber: '',
        purchaseCost: '',
        warrantyPeriod: '',
        vendorContact: '',
        deliveryDate: '',
        returnDate: '',
        agreementNumber: '',
        securityDeposit: '',
        customFields: {} // Added custom fields state
    });

    const [assetTypes, setAssetTypes] = useState([]); // Available asset types
    const [selectedType, setSelectedType] = useState(null); // Current asset type definition

    const [photoFiles, setPhotoFiles] = useState([]); // Actual File objects
    const [vendors, setVendors] = useState([]); // Available vendors
    const fileInputRef = useRef(null);

    // Use sample vendors for now
    useEffect(() => {
        if (isOpen) {
            // Fetch Vendors
            const fetchVendors = async () => {
                try {
                    const data = await apiService.getVendors();
                    setVendors(Array.isArray(data) ? data : (data.data || []));
                } catch (error) {
                    console.error('Failed to fetch vendors:', error);
                }
            };
            fetchVendors();

            // Fetch Asset Types
            const fetchAssetTypes = async () => {
                try {
                    const data = await apiService.getAssetTypes();
                    setAssetTypes(Array.isArray(data) ? data : (data.data || []));
                } catch (error) {
                    console.error('Error fetching asset types:', error);
                }
            };
            fetchAssetTypes();
        }
    }, [isOpen]);

    useEffect(() => {
        if (asset) {
            setFormData({
                id: asset.id || '',
                assetName: asset.assetName || asset.name || '',
                assetTag: asset.assetTag || asset.tag || '',
                receiverName: asset.receiverName || '',
                exchangeType: asset.exchangeType || 'Issue',
                newAssetId: asset.newAssetId || '',
                remarks: asset.remarks || '',
                assetCode: asset.assetCode || '-',
                photos: asset.photos || [],
                vendor: asset.vendor ? { ...asset.vendor, vendorId: String(asset.vendor.vendorId || asset.vendor.id) } : null,
                companyName: asset.companyName || '',
                generation: asset.generation || '',
                ram: asset.ram || '',
                hardDisk: asset.hardDisk || '',
                procurementType: asset.procurementType || 'Purchasing',
                purchaseDate: asset.purchaseDate || '',
                poNumber: asset.poNumber || '',
                invoiceNumber: asset.invoiceNumber || '',
                purchaseCost: asset.purchaseCost || '',
                warrantyPeriod: asset.warrantyPeriod || '',
                vendorContact: asset.vendorContact || '',
                deliveryDate: asset.deliveryDate || '',
                returnDate: asset.returnDate || '',
                agreementNumber: asset.agreementNumber || '',
                securityDeposit: asset.securityDeposit || ''
            });
        }
    }, [asset]);

    // Update selectedType whenever assetTypes or formData.assetType changes
    useEffect(() => {
        if (assetTypes.length > 0 && asset) {
            // Try to find by ID first, then by name match if needed
            // The asset object from API might have assetType as a string (name) or object
            const typeNameOrId = asset.assetType || asset.type;
            const found = assetTypes.find(t =>
                t.id === typeNameOrId ||
                t.typeId === typeNameOrId ||
                t.typeName === typeNameOrId ||
                t.name === typeNameOrId
            );
            setSelectedType(found || null);

            // Initialize custom fields from asset if available
            if (asset.customFields) {
                setFormData(prev => ({ ...prev, customFields: asset.customFields }));
            }
        }
    }, [assetTypes, asset]);

    if (!isOpen || !asset) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleVendorChange = (e) => {
        const val = e.target.value;
        const selectedVendor = vendors.find(v => v.vendorId === val);
        setFormData(prev => ({ ...prev, vendor: selectedVendor || null }));
    };

    const handleCustomFieldChange = (name, value) => {
        setFormData(prev => ({
            ...prev,
            customFields: { ...prev.customFields, [name]: value }
        }));
    };

    const handlePhotoChange = (e) => {
        const files = Array.from(e.target.files);
        if (photoFiles.length + files.length > 4) {
            alert('You can only add up to 4 photos.');
            return;
        }

        // Store actual File objects
        setPhotoFiles(prev => [...prev, ...files]);

        // Create preview URLs for display
        const newPhotos = files.map(file => URL.createObjectURL(file));
        setFormData(prev => ({
            ...prev,
            photos: [...prev.photos, ...newPhotos]
        }));
    };

    const removePhoto = (index) => {
        // Remove from both arrays
        setPhotoFiles(prev => prev.filter((_, i) => i !== index));
        setFormData(prev => ({
            ...prev,
            photos: prev.photos.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Pass essential data for PATCH update
        const submitData = {
            ...formData,
            vendorId: formData.vendor?.vendorId || ''
        };
        onUpdate(submitData);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container scrollable animate-pop" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <div className="header-info">
                        <div className="header-icon">
                            <Package size={20} />
                        </div>
                        <div>
                            <h3>Edit Asset Details</h3>
                            <p>Update information for {asset.id}</p>
                        </div>
                    </div>
                    <button className="close-btn" onClick={onClose}><X size={20} /></button>
                </div>

                <form onSubmit={handleSubmit} className="modal-form">
                    <div className="procurement-toggle-container">
                        <button
                            type="button"
                            className={`toggle-btn ${formData.procurementType === 'Purchasing' ? 'active' : ''}`}
                            onClick={() => setFormData(prev => ({ ...prev, procurementType: 'Purchasing' }))}
                        >
                            Purchasing
                        </button>
                        <button
                            type="button"
                            className={`toggle-btn ${formData.procurementType === 'Vendor' ? 'active' : ''}`}
                            onClick={() => setFormData(prev => ({ ...prev, procurementType: 'Vendor' }))}
                        >
                            Taking from Vendor
                        </button>
                    </div>

                    <div className="form-sections">
                        <div className="form-section">
                            {formData.procurementType === 'Vendor' && (
                                <div className="form-group">
                                    <label><Building2 size={14} /> Vendor</label>
                                    <select
                                        name="vendor"
                                        value={formData.vendor?.vendorId || ''}
                                        onChange={handleVendorChange}
                                        className="select-input"
                                        required
                                    >
                                        <option value="">-- Select Vendor --</option>
                                        {vendors.map(vendor => (
                                            <option key={vendor.vendorId} value={vendor.vendorId}>
                                                {vendor.vendorName} ({vendor.vendorType})
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            <div className="form-group">
                                <label><Package size={14} /> Asset Name</label>
                                <input
                                    type="text"
                                    name="assetName"
                                    value={formData.assetName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label><Tag size={14} /> Asset Code (Auto-generated)</label>
                                <input
                                    type="text"
                                    name="assetCode"
                                    value={formData.assetCode}
                                    readOnly
                                    className="read-only-input"
                                />
                            </div>

                            <div className="form-group">
                                <label><Tag size={14} /> Asset Tag</label>
                                <input
                                    type="text"
                                    name="assetTag"
                                    value={formData.assetTag}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {formData.procurementType === 'Vendor' && (
                                <div className="form-group">
                                    <label><User size={14} /> Receiver Name</label>
                                    <input
                                        type="text"
                                        name="receiverName"
                                        value={formData.receiverName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            )}

                            {selectedType && ['Laptop', 'Desktop', 'Server', 'Workstation', 'IT Hardware'].includes(selectedType.typeName || selectedType.name) && (
                                <div className="technical-specs-section">
                                    <h4 className="section-subtitle">Hardware Specifications</h4>
                                    <div className="specs-grid">
                                        <div className="form-group">
                                            <label>Company Name</label>
                                            <input
                                                type="text"
                                                name="companyName"
                                                value={formData.companyName}
                                                onChange={handleChange}
                                                placeholder="e.g. Lenovo, Dell"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Generation</label>
                                            <input
                                                type="text"
                                                name="generation"
                                                value={formData.generation}
                                                onChange={handleChange}
                                                placeholder="e.g. 12th Gen, M2"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>RAM</label>
                                            <input
                                                type="text"
                                                name="ram"
                                                value={formData.ram}
                                                onChange={handleChange}
                                                placeholder="e.g. 16GB, 32GB"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Hard Disk</label>
                                            <input
                                                type="text"
                                                name="hardDisk"
                                                value={formData.hardDisk}
                                                onChange={handleChange}
                                                placeholder="e.g. 512GB SSD, 1TB HDD"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {selectedType?.fields && selectedType.fields.length > 0 && (
                                <div className="technical-specs-section">
                                    <h4 className="section-subtitle">Custom Attributes</h4>
                                    <div className="specs-grid">
                                        {selectedType.fields.map((field, idx) => (
                                            <div key={idx} className="form-group">
                                                <label>{field.name}{field.required && '*'}</label>
                                                {field.type === 'select' ? (
                                                    <select
                                                        value={formData.customFields?.[field.name] || ''}
                                                        onChange={(e) => handleCustomFieldChange(field.name, e.target.value)}
                                                        className="select-input"
                                                    >
                                                        <option value="">Select</option>
                                                        {field.options?.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
                                                    </select>
                                                ) : (
                                                    <input
                                                        type={field.type}
                                                        value={formData.customFields?.[field.name] || ''}
                                                        onChange={(e) => handleCustomFieldChange(field.name, e.target.value)}
                                                        placeholder={field.name}
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {formData.procurementType === 'Vendor' && (
                                <>
                                    <div className="form-group">
                                        <label><ArrowRightLeft size={14} /> Exchange Type</label>
                                        <select
                                            name="exchangeType"
                                            value={formData.exchangeType}
                                            onChange={handleChange}
                                            className="select-input"
                                        >
                                            <option value="Issue">Issue</option>
                                            <option value="Return">Return</option>
                                            <option value="Replace">Replace</option>
                                        </select>
                                    </div>

                                    {formData.exchangeType === 'Replace' && (
                                        <div className="form-group">
                                            <label><Tag size={14} /> New Asset ID</label>
                                            <input
                                                type="text"
                                                name="newAssetId"
                                                value={formData.newAssetId}
                                                onChange={handleChange}
                                                required
                                                placeholder="e.g. AST-NEW-001"
                                            />
                                        </div>
                                    )}
                                </>
                            )}
                        </div>

                        <div className="form-section">
                            <div className="procurement-details-section">
                                <h4 className="section-subtitle">
                                    {formData.procurementType === 'Purchasing' ? 'Purchasing Details' : 'Vendor Procurement Details'}
                                </h4>
                                {formData.procurementType === 'Purchasing' ? (
                                    <div className="specs-grid">
                                        <div className="form-group">
                                            <label>Purchase Date</label>
                                            <input type="date" name="purchaseDate" value={formData.purchaseDate} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>PO Number</label>
                                            <input type="text" name="poNumber" value={formData.poNumber} onChange={handleChange} placeholder="e.g. PO-123" />
                                        </div>
                                        <div className="form-group">
                                            <label>Invoice Number</label>
                                            <input type="text" name="invoiceNumber" value={formData.invoiceNumber} onChange={handleChange} placeholder="e.g. INV-456" />
                                        </div>
                                        <div className="form-group">
                                            <label>Purchase Cost</label>
                                            <input type="number" name="purchaseCost" value={formData.purchaseCost} onChange={handleChange} placeholder="e.g. 50000" />
                                        </div>
                                        <div className="form-group">
                                            <label>Warranty (Months)</label>
                                            <input type="text" name="warrantyPeriod" value={formData.warrantyPeriod} onChange={handleChange} placeholder="e.g. 12" />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="specs-grid">
                                        <div className="form-group">
                                            <label>Vendor Contact</label>
                                            <input type="text" name="vendorContact" value={formData.vendorContact} onChange={handleChange} placeholder="e.g. John Sales" />
                                        </div>
                                        <div className="form-group">
                                            <label>Delivery Date</label>
                                            <input type="date" name="deliveryDate" value={formData.deliveryDate} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Expected Return</label>
                                            <input type="date" name="returnDate" value={formData.returnDate} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Agreement #</label>
                                            <input type="text" name="agreementNumber" value={formData.agreementNumber} onChange={handleChange} placeholder="e.g. AGR-789" />
                                        </div>
                                        <div className="form-group">
                                            <label>Security Deposit</label>
                                            <input type="number" name="securityDeposit" value={formData.securityDeposit} onChange={handleChange} placeholder="e.g. 10000" />
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="form-group">
                                <label><MessageSquare size={14} /> Remarks</label>
                                <textarea
                                    name="remarks"
                                    value={formData.remarks}
                                    onChange={handleChange}
                                    rows="3"
                                />
                            </div>

                            <div className="form-group">
                                <label><ImageIcon size={14} /> Photos (Max 4)</label>
                                <div className="photo-upload-grid">
                                    {formData.photos.map((photo, index) => (
                                        <div key={index} className="photo-preview-item">
                                            <img src={getFileUrl(photo)} alt={`Asset ${index + 1}`} />
                                            <button type="button" className="photo-remove" onClick={() => removePhoto(index)}>
                                                <X size={12} />
                                            </button>
                                        </div>
                                    ))}
                                    {formData.photos.length < 4 && (
                                        <button
                                            type="button"
                                            className="photo-upload-btn"
                                            onClick={() => fileInputRef.current.click()}
                                        >
                                            <Camera size={20} />
                                            <span>Add</span>
                                        </button>
                                    )}
                                </div>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handlePhotoChange}
                                    multiple
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="secondary-btn" onClick={onClose}>Cancel</button>
                        <button type="submit" className="submit-btn primary-glow">Update Asset</button>
                    </div>
                </form>
            </div>

            <style>{`
                .procurement-toggle-container {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 2rem;
                    background: #f1f5f9;
                    padding: 0.5rem;
                    border-radius: 12px;
                }

                .toggle-btn {
                    flex: 1;
                    padding: 0.75rem;
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 0.875rem;
                    cursor: pointer;
                    transition: all 0.2s;
                    background: transparent;
                    color: #64748b;
                }

                .toggle-btn.active {
                    background: white;
                    color: #2563eb;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                }

                .procurement-details-section {
                    background: #f8fafc;
                    padding: 1.25rem;
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                    margin-bottom: 1.5rem;
                }

                .modal-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(15, 23, 42, 0.4);
                    backdrop-filter: blur(4px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2000;
                    padding: 1rem;
                }

                .modal-container {
                    background: white;
                    width: 100%;
                    max-width: 1000px;
                    border-radius: 20px;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.2);
                    display: flex;
                    flex-direction: column;
                    max-height: 90vh;
                    overflow-x: hidden;
                }

                .modal-container.scrollable {
                    overflow-y: auto;
                }

                .animate-pop {
                    animation: pop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                @keyframes pop {
                    from { transform: scale(0.95); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }

                .modal-header {
                    padding: 1.5rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid #f1f5f9;
                    position: sticky;
                    top: 0;
                    background: white;
                    z-index: 10;
                }

                .header-info {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .header-icon {
                    width: 42px;
                    height: 42px;
                    background: #f8fafc;
                    color: #2563eb;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .header-info h3 {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #1e293b;
                }

                .header-info p {
                    font-size: 0.875rem;
                    color: #64748b;
                }

                .close-btn {
                    background: #f8fafc;
                    border: none;
                    color: #64748b;
                    width: 32px;
                    height: 32px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .modal-form {
                    padding: 2rem;
                }

                .form-sections {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2rem;
                    margin-bottom: 2rem;
                }

                @media (max-width: 640px) {
                    .form-sections {
                        grid-template-columns: 1fr;
                    }
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    margin-bottom: 1.25rem;
                }

                .form-group label {
                    font-size: 0.8125rem;
                    font-weight: 700;
                    color: #475569;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .form-group input, 
                .form-group select, 
                .form-group textarea {
                    padding: 0.75rem 1rem;
                    border: 1px solid #e2e8f0;
                    border-radius: 10px;
                    font-size: 0.875rem;
                    background: #f8fafc;
                    max-width: 400px;
                    width: 100%;
                }

                .form-group input:read-only {
                    background: #f1f5f9;
                    color: #64748b;
                    cursor: not-allowed;
                    border-color: #e2e8f0;
                }

                .photo-upload-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 0.75rem;
                }

                .photo-preview-item {
                    position: relative;
                    aspect-ratio: 1;
                    border-radius: 8px;
                    overflow: hidden;
                    border: 1px solid #e2e8f0;
                }

                .photo-preview-item img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .photo-remove {
                    position: absolute;
                    top: 4px;
                    right: 4px;
                    background: rgba(0, 0, 0, 0.5);
                    color: white;
                    border: none;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .photo-upload-btn {
                    aspect-ratio: 1;
                    border: 2px dashed #e2e8f0;
                    border-radius: 8px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 0.25rem;
                    color: #64748b;
                    background: #f8fafc;
                    font-size: 0.625rem;
                    font-weight: 700;
                    text-transform: uppercase;
                }

                .modal-footer {
                    display: flex;
                    justify-content: flex-end;
                    gap: 1rem;
                    padding-top: 1.5rem;
                    border-top: 1px solid #f1f5f9;
                }

                .secondary-btn {
                    padding: 0.75rem 1.5rem;
                    border-radius: 10px;
                    font-weight: 600;
                    font-size: 0.875rem;
                    background: white;
                    border: 1px solid #e2e8f0;
                    color: #475569;
                }

                .submit-btn {
                    padding: 0.75rem 2rem;
                    border-radius: 10px;
                    font-weight: 700;
                    font-size: 0.875rem;
                    background: #2563eb;
                    color: white;
                    border: none;
                }

                .technical-specs-section {
                    background: #f1f5f9;
                    padding: 1.25rem;
                    border-radius: 12px;
                    margin: 0.5rem 0 1.5rem;
                }

                .section-subtitle {
                    font-size: 0.75rem;
                    font-weight: 800;
                    color: #475569;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: 1rem;
                }

                .specs-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                }

                .specs-grid .form-group {
                    margin-bottom: 0;
                }

                .specs-grid label {
                    font-size: 0.7rem;
                    color: #64748b;
                }
            `}</style>
        </div>
    );
};

export default EditAssetModal;
