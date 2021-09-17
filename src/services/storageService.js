const saveToStorage = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value))
}

const loadFromStorage = (key) => {
    try {
    return JSON.parse(localStorage.getItem(key))
    } catch (e) {
        return null
    }
}

export const storageService = {
    saveToStorage,
    loadFromStorage
}