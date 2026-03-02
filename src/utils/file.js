import { API_BASE_URL } from '../config/api';

/**
 * Universal Image Builder Function
 * - Enforces absolute root-relative paths
 * - Removes redundant /api/ prefixes from the input to prevent doubling
 * - Encodes special characters in filenames
 */
export const buildFileUrl = (pathOrObj) => {
    if (!pathOrObj) return '/placeholder.png';

    // Extract path if object
    let rawPath = typeof pathOrObj === 'string' ? pathOrObj : (pathOrObj.filePath || pathOrObj.path || pathOrObj.url || '');
    if (!rawPath || typeof rawPath !== 'string') return '/placeholder.png';

    let cleanPath = rawPath.trim();

    // 1. Handle base64 or blob URLs
    if (cleanPath.startsWith('data:') || cleanPath.startsWith('blob:')) return cleanPath;

    // 2. Normalize separators (convert all to forward slashes)
    cleanPath = cleanPath.replace(/\\/g, '/');

    // 3. Handle Windows absolute paths (e.g. "D:/uploads/file.jpg")
    cleanPath = cleanPath.replace(/^[A-Za-z]:\//, '');

    // 4. Handle full HTTP URLs (strip base if it matches API patterns)
    if (cleanPath.startsWith('http')) {
        const urlParts = cleanPath.split('/api/');
        if (urlParts.length > 1) {
            cleanPath = urlParts.pop(); // Get everything after /api/
        }
    }

    // 5. Remove common prefixes to get a pure relative file path
    cleanPath = cleanPath.replace(/^\/+/, '');
    const prefixPatterns = ['api/onboarding/files/', 'api/files/', 'uploads/', 'api/'];
    for (const prefix of prefixPatterns) {
        if (cleanPath.startsWith(prefix)) {
            cleanPath = cleanPath.slice(prefix.length);
            break;
        }
    }
    cleanPath = cleanPath.replace(/^\/+/, '');

    // 6. Encode path segments (so spaces become %20, etc.)
    const encodedPath = cleanPath.split('/').map(seg => encodeURIComponent(seg)).join('/');

    // 7. Return root-relative API path
    return `${API_BASE_URL}/onboarding/files/${encodedPath}`;
};
