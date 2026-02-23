const fs = require('fs');

// Mock data from response.json
const emp = {
    "id": 1,
    "empId": null,
    "fullName": "Niha",
    "educations": [
        {
            "institutionName": "SHS",
            "hallTicketNo": "1909876543",
            "passoutYear": 2019,
            "percentageCgpa": 93.0,
            "certificatePath": "Screenshot 2026-02-11 232241.png",
            "marksMemoPath": null
        },
        {
            "institutionName": "KJC",
            "hallTicketNo": "2109875678",
            "passoutYear": 2021,
            "percentageCgpa": 87.0,
            "certificatePath": "Screenshot (76).png",
            "marksMemoPath": null
        },
        {
            "institutionName": "NDC",
            "hallTicketNo": "2409876543",
            "passoutYear": 2424,
            "percentageCgpa": 88.0,
            "certificatePath": "Screenshot 2026-02-11 232211.png",
            "marksMemoPath": "Screenshot 2026-02-11 232241.png"
        }
    ]
};

// --- LOGIC FROM EmployeeList.jsx ---

const findByPattern = (obj, patterns) => {
    if (!obj || typeof obj !== 'object') return null;

    // 1. Direct search (Keys)
    for (const key of Object.keys(obj)) {
        if (patterns.some(p => key.toLowerCase().includes(p.toLowerCase()))) {
            let val = obj[key];
            if (typeof val === 'string' && (val.trim().startsWith('{') || val.trim().startsWith('['))) {
                try { val = JSON.parse(val); } catch (e) { }
            }
            if (val !== null && val !== undefined && val !== '-') return val;
        }
    }

    // 2. Recursive search
    for (const key of Object.keys(obj)) {
        const val = obj[key];
        if (val && typeof val === 'object') {
            if (Array.isArray(val)) {
                // Recurse into arrays
                for (const item of val) {
                    const found = findByPattern(item, patterns);
                    if (found) return found;
                }
            } else {
                const found = findByPattern(val, patterns);
                if (found) return found;
            }
        }
    }
    return null;
};

const scavengePath = (obj, patterns) => {
    const val = findByPattern(obj, patterns);
    if (typeof val === 'string') return val;
    if (val && typeof val === 'object') {
        return val.filePath || val.path || val.certificatePath || val.panPath || val.aadharPath || val.photoPath || val.url || findByPattern(val, ['path', 'url', 'file']);
    }
    return null;
};

const normalizeEdu = (item) => {
    if (!item || item === '-') return null;
    let parsed = item;
    if (typeof item === 'string' && (item.trim().startsWith('{') || item.trim().startsWith('['))) {
        try { parsed = JSON.parse(item); } catch (e) { }
    }
    if (!parsed || typeof parsed !== 'object' || parsed === '-') return null;

    const rawInst = parsed.institutionName || parsed.school || parsed.college || parsed.instituteName || parsed.institute || findByPattern(parsed, ['institute', 'school', 'college', 'university', 'board', 'institution', 'collage', 'acadamy']);
    const rawYear = parsed.passoutYear || parsed.year || parsed.yop || parsed.completionYear || findByPattern(parsed, ['year', 'passout', 'date', 'passing', 'completion', 'duration']);
    const rawScore = parsed.percentageCgpa || parsed.percentage || parsed.cgpa || parsed.grade || parsed.score || parsed.marks || findByPattern(parsed, ['percentage', 'cgpa', 'marks', 'score', 'grade']);

    const result = {
        ...parsed,
        institutionName: rawInst || '-',
        passoutYear: rawYear || '-',
        percentageCgpa: rawScore || '-',
        certificatePath: parsed.certificatePath || scavengePath(parsed, ['certificate', 'certPath', 'doc', 'file', 'image']),
        marksMemoPath: parsed.marksMemoPath || scavengePath(parsed, ['marksMemo', 'marks', 'memo', 'transcript'])
    };

    if (result.institutionName === '-' && result.passoutYear === '-' && result.percentageCgpa === '-') return null;
    return result;
};

// --- SIMULATED EXECUTION ---

const expandedEmp = emp;

// Sort educations by year (ascending)
const sortedEducations = (expandedEmp.educations || []).sort((a, b) => {
    const yearA = parseInt(a.passoutYear || a.year || 0) || 0;
    const yearB = parseInt(b.passoutYear || b.year || 0) || 0;
    return yearA - yearB;
});

console.log("Sorted Educations:", JSON.stringify(sortedEducations, null, 2));

const intermediate = normalizeEdu(expandedEmp.intermediate || findByPattern(expandedEmp, ['intermediate', 'inter', '12th', 'hsc']) || (sortedEducations?.[1]));

console.log("Intermediate Result:", JSON.stringify(intermediate, null, 2));
fs.writeFileSync('debug_result.json', JSON.stringify({ intermediate, sortedEducations }, null, 2));
