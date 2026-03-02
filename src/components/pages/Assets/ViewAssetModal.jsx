import { X, Package, Tag, ArrowRightLeft, MessageSquare, Image as ImageIcon, User, Building2, FileText } from 'lucide-react';
import { buildFileUrl } from '../../../utils/file';
import { API_BASE_URL } from '../../../config/api';

const ViewAssetModal = ({ isOpen, onClose, asset }) => {
    if (!isOpen || !asset) return null;


    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container animate-pop" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <div className="header-info">
                        <div className="header-icon">
                            <Package size={20} />
                        </div>
                        <div>
                            <h3>Asset Profile</h3>
                            <p>Global identifier: {asset.id}</p>
                        </div>
                    </div>
                    <button className="close-btn" onClick={onClose}><X size={20} /></button>
                </div>

                <div className="modal-content">
                    <div className="info-grid_assets">
                        <div className="info-item_assets">
                            <label><Package size={14} /> Asset Name</label>
                            <span className="value">{asset.name}</span>
                        </div>
                        <div className="info-item_assets">
                            <label><Tag size={14} /> Asset Code</label>
                            <span className="value tag-value">{asset.assetCode || '-'}</span>
                        </div>
                        <div className="info-item_assets">
                            <label><Tag size={14} /> Asset Tag</label>
                            <span className="value tag-value">{asset.tag || asset.assetTag}</span>
                        </div>

                        {asset.procurementType === 'Vendor' && (
                            <>
                                <div className="info-item_assets">
                                    <label><User size={14} /> Receiver Name</label>
                                    <span className="value">{asset.receiverName || '-'}</span>
                                </div>
                                <div className="info-item_assets">
                                    <label><ArrowRightLeft size={14} /> Exchange Type</label>
                                    <span className={`value status-badge ${asset.exchangeType?.toLowerCase() || 'issue'}`}>
                                        <span className="dot"></span>
                                        {asset.exchangeType || 'Issue'}
                                    </span>
                                </div>
                                {asset.vendor && (
                                    <div className="info-item_assets">
                                        <label><Building2 size={14} /> Vendor</label>
                                        <div className="vendor-info">
                                            <span className="vendor-name-view">{asset.vendor.vendorName}</span>
                                            <span className="vendor-type-view">{asset.vendor.vendorType}</span>
                                        </div>
                                    </div>
                                )}
                                {asset.exchangeType === 'Replace' && asset.newAssetId && (
                                    <div className="info-item_assets">
                                        <label><Tag size={14} /> New Asset ID</label>
                                        <span className="value tag-value">{asset.newAssetId}</span>
                                    </div>
                                )}
                            </>
                        )}

                        {['Laptop', 'Desktop', 'Server', 'Workstation', 'IT Hardware'].includes(asset.assetType || asset.type || asset.typeName) && (
                            <div className="info-item_assets full-width technical-specs-view">
                                <label><Package size={14} /> Technical Specifications</label>
                                <div className="specs-view-grid">
                                    <div className="spec-item">
                                        <span className="spec-label">Company:</span>
                                        <span className="spec-value">{asset.companyName || '-'}</span>
                                    </div>
                                    <div className="spec-item">
                                        <span className="spec-label">Gen:</span>
                                        <span className="spec-value">{asset.generation || '-'}</span>
                                    </div>
                                    <div className="spec-item">
                                        <span className="spec-label">RAM:</span>
                                        <span className="spec-value">{asset.ram || '-'}</span>
                                    </div>
                                    <div className="spec-item">
                                        <span className="spec-label">Disk:</span>
                                        <span className="spec-value">{asset.hardDisk || '-'}</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {asset.customFields && Object.keys(asset.customFields).length > 0 && (
                            <div className="info-item_assets full-width technical-specs-view">
                                <label><Tag size={14} /> Custom Attributes</label>
                                <div className="specs-view-grid">
                                    {Object.entries(asset.customFields).map(([key, value]) => (
                                        <div key={key} className="spec-item">
                                            <span className="spec-label">{key}:</span>
                                            <span className="spec-value">{value || '-'}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="info-item_assets full-width">
                            <label><MessageSquare size={14} /> Remarks</label>
                            <span className="value remarks-box">{asset.remarks || 'No additional remarks provided.'}</span>
                        </div>

                        {asset.procurementType && (
                            <div className="info-item_assets full-width procurement-details-view">
                                <label><Building2 size={14} /> Procurement Details ({asset.procurementType === 'Purchasing' ? 'Purchased' : 'From Vendor'})</label>
                                <div className="specs-view-grid">
                                    {asset.procurementType === 'Purchasing' ? (
                                        <>
                                            <div className="spec-item">
                                                <span className="spec-label">Purchase Date:</span>
                                                <span className="spec-value">{asset.purchaseDate || '-'}</span>
                                            </div>
                                            <div className="spec-item">
                                                <span className="spec-label">PO Number:</span>
                                                <span className="spec-value">{asset.poNumber || '-'}</span>
                                            </div>
                                            <div className="spec-item">
                                                <span className="spec-label">Invoice Number:</span>
                                                <span className="spec-value">{asset.invoiceNumber || '-'}</span>
                                            </div>
                                            <div className="spec-item">
                                                <span className="spec-label">Purchase Cost:</span>
                                                <span className="spec-value">{asset.purchaseCost ? `₹${asset.purchaseCost}` : '-'}</span>
                                            </div>
                                            <div className="spec-item">
                                                <span className="spec-label">Warranty:</span>
                                                <span className="spec-value">{asset.warrantyPeriod ? `${asset.warrantyPeriod} Months` : '-'}</span>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="spec-item">
                                                <span className="spec-label">Vendor Contact:</span>
                                                <span className="spec-value">{asset.vendorContact || '-'}</span>
                                            </div>
                                            <div className="spec-item">
                                                <span className="spec-label">Delivery Date:</span>
                                                <span className="spec-value">{asset.deliveryDate || '-'}</span>
                                            </div>
                                            <div className="spec-item">
                                                <span className="spec-label">Expected Return:</span>
                                                <span className="spec-value">{asset.returnDate || '-'}</span>
                                            </div>
                                            <div className="spec-item">
                                                <span className="spec-label">Agreement #:</span>
                                                <span className="spec-value">{asset.agreementNumber || '-'}</span>
                                            </div>
                                            <div className="spec-item">
                                                <span className="spec-label">Security Deposit:</span>
                                                <span className="spec-value">{asset.securityDeposit ? `₹${asset.securityDeposit}` : '-'}</span>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="detail-section">
                        <label className="section-label">Media & Photos</label>
                        <div className="photos-container">
                            {asset.photos && asset.photos.length > 0 ? (
                                asset.photos.map((photo, index) => {
                                    const fileUrl = buildFileUrl(photo);
                                    const lowerUrl = fileUrl.toLowerCase();
                                    const isImage = /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(lowerUrl);
                                    const isPdf = lowerUrl.endsWith(".pdf");

                                    return (
                                        <div key={index} className="photo-wrapper" onClick={() => window.open(fileUrl, '_blank')} style={{ cursor: 'pointer' }}>
                                            {isImage ? (
                                                <img
                                                    src={fileUrl}
                                                    alt={`Asset ${index + 1}`}
                                                    onError={(e) => {
                                                        const target = e.target;
                                                        if (target.dataset.errorState === '1') {
                                                            target.src = '/placeholder.png';
                                                            target.classList.add('broken-link');
                                                            return;
                                                        }

                                                        target.dataset.errorState = '1';
                                                        const currentSrc = target.src;
                                                        const match = currentSrc.match(/\/(?:onboarding\/)?files\/(.+)$/);
                                                        const relativePath = match ? match[1] : '';

                                                        if (currentSrc.includes('/onboarding/files/')) {
                                                            target.src = `${API_BASE_URL}/files/${relativePath}`;
                                                        } else {
                                                            target.src = `${API_BASE_URL}/onboarding/files/${relativePath}`;
                                                        }
                                                    }}
                                                />
                                            ) : isPdf ? (
                                                <div className="pdf-preview-container">
                                                    <FileText size={48} color="#ef4444" />
                                                    <span>PDF</span>
                                                </div>
                                            ) : (
                                                <div className="generic-preview-container">
                                                    <FileText size={48} color="#94a3b8" />
                                                    <span>File</span>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })
                            ) : (
                                <div className="no-photos">
                                    <ImageIcon size={48} />
                                    <p>No photos attached to this asset.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="modal-footer">
                    <button className="primary-btn" onClick={onClose}>Done</button>
                </div>
            </div>

            <style>{`
                .procurement-details-view {
                    background: #f8fafc;
                    padding: 1.25rem;
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                    margin-top: 0.5rem;
                    border-left: 4px solid #2563eb;
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
                    overflow: hidden;
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
                    margin: 0;
                }

                .header-info p {
                    font-size: 0.875rem;
                    color: #64748b;
                    margin: 0.125rem 0 0;
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

                .modal-content {
                    padding: 2rem;
                    overflow-y: auto;
                }

                .info-grid_assets {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }

                .info-item_assets {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .info-item_assets.full-width {
                    grid-column: span 2;
                }

                .info-item_assets label {
                    font-size: 0.75rem;
                    font-weight: 800;
                    color: #94a3b8;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .info-item_assets .value {
                    font-size: 1rem;
                    font-weight: 600;
                    color: #1e293b;
                }

                .tag-value {
                    font-family: monospace;
                    background: #f1f5f9;
                    padding: 4px 8px;
                    border-radius: 6px;
                    width: fit-content;
                }

                .remarks-box {
                    background: #f8fafc;
                    padding: 1rem;
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                    font-weight: 400 !important;
                    line-height: 1.6;
                    color: #475569 !important;
                }

                .status-badge {
                    width: fit-content;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 4px 10px;
                    border-radius: 6px;
                    font-size: 0.8125rem !important;
                }

                .status-badge .dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                }

                .status-badge.issue { background: #eff6ff; color: #1d4ed8; }
                .status-badge.issue .dot { background: #2563eb; }

                .status-badge.return { background: #fff1f2; color: #be123c; }
                .status-badge.return .dot { background: #ef4444; }

                .status-badge.replace { background: #fefce8; color: #a16207; }
                .status-badge.replace .dot { background: #eab308; }

                .vendor-info {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                }

                .vendor-name-view {
                    font-size: 1rem;
                    font-weight: 600;
                    color: #1e293b;
                }

                .vendor-type-view {
                    font-size: 0.875rem;
                    color: #64748b;
                    background: #f1f5f9;
                    padding: 4px 8px;
                    border-radius: 6px;
                    width: fit-content;
                }

                .detail-section {
                    margin-top: 2rem;
                }

                .section-label {
                    font-size: 0.75rem;
                    font-weight: 800;
                    color: #94a3b8;
                    text-transform: uppercase;
                    margin-bottom: 1rem;
                    display: block;
                }

                .photos-container {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1rem;
                }

                .photo-wrapper {
                    aspect-ratio: 1;
                    border-radius: 12px;
                    overflow: hidden;
                    border: 1px solid #e2e8f0;
                }

                .photo-wrapper img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .no-photos {
                    grid-column: span 4;
                    background: #f8fafc;
                    border: 2px dashed #e2e8f0;
                    border-radius: 12px;
                    padding: 2rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: #94a3b8;
                    gap: 0.5rem;
                }

                .modal-footer {
                    padding: 1.5rem 2rem;
                    border-top: 1px solid #f1f5f9;
                    display: flex;
                    justify-content: flex-end;
                }

                .primary-btn {
                    background: #2563eb;
                    color: white;
                    padding: 0.75rem 2rem;
                    border-radius: 10px;
                    font-weight: 700;
                    border: none;
                }

                .technical-specs-view {
                    background: #f8fafc;
                    padding: 1.25rem;
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                    margin-top: 0.5rem;
                }

                .specs-view-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1rem;
                    margin-top: 1rem;
                }

                .spec-item {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                }

                .spec-label {
                    font-size: 0.7rem;
                    font-weight: 700;
                    color: #94a3b8;
                    text-transform: uppercase;
                }

                .spec-value {
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: #1e293b;
                }
                .pdf-preview-container, .generic-preview-container {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: #f8fafc;
                    gap: 0.5rem;
                }

                .pdf-preview-container span {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: #ef4444;
                }

                .generic-preview-container span {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: #94a3b8;
                }
            `}</style>
        </div>
    );
};

export default ViewAssetModal;
