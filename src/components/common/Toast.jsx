import React, { useEffect, useState } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

const Toast = ({ message, type = 'success', onClose, duration = 5000 }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (message) {
            setIsVisible(true);
            const timer = setTimeout(() => {
                handleClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [message, duration]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Wait for animation
    };

    if (!message) return null;

    return (
        <div className={`toast-container ${isVisible ? 'show' : ''}`}>
            <div className={`toast-content ${type}`}>
                <div className="toast-icon">
                    {type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                </div>
                <div className="toast-message">
                    {message}
                </div>
                <button className="toast-close" onClick={handleClose}>
                    <X size={16} />
                </button>
            </div>

            <style>{`
                .toast-container {
                    position: fixed;
                    bottom: 2rem;
                    right: 2rem;
                    z-index: 10000;
                    transform: translateY(100px);
                    opacity: 0;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    pointer-events: none;
                }

                .toast-container.show {
                    transform: translateY(0);
                    opacity: 1;
                    pointer-events: auto;
                }

                .toast-content {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    background: white;
                    padding: 1rem 1.25rem;
                    border-radius: 12px;
                    box-shadow: 
                        0 10px 15px -3px rgba(0, 0, 0, 0.1),
                        0 4px 6px -2px rgba(0, 0, 0, 0.05),
                        0 0 0 1px rgba(0, 0, 0, 0.05);
                    min-width: 320px;
                    max-width: 450px;
                }

                .toast-content.success {
                    border-left: 4px solid var(--success, #10b981);
                }

                .toast-content.error {
                    border-left: 4px solid var(--danger, #ef4444);
                }

                .toast-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .success .toast-icon { color: var(--success, #10b981); }
                .error .toast-icon { color: var(--danger, #ef4444); }

                .toast-message {
                    flex: 1;
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: var(--text-main, #1e293b);
                }

                .toast-close {
                    background: none;
                    color: var(--text-muted, #64748b);
                    padding: 0.25rem;
                    border-radius: 4px;
                    display: flex;
                    transition: all 0.2s;
                }

                .toast-close:hover {
                    background: var(--bg-main, #f8fafc);
                    color: var(--text-main, #1e293b);
                }

                @media (max-width: 640px) {
                    .toast-container {
                        bottom: 1rem;
                        right: 1rem;
                        left: 1rem;
                    }
                    .toast-content {
                        min-width: 0;
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
};

export default Toast;
