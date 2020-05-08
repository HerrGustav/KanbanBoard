export const uuid = () => {
    return "xxxxxxxx-xxxx-8xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
        let random = (Math.random() * 16) | 0;
        let value = char === "x" ? random : (random % 4) + 8; // RFC 4122
        return value.toString(16);
    });
};