export function formatLarge(value?: string | number, decimalPlaces: number = 1): string {
    if (!value) {
        return "";
    }

    const numericValue = Number(value);

    if (Math.abs(numericValue) >= 1e12) {
        return `${(numericValue / 1e12).toFixed(decimalPlaces)}T`;
    } else if (Math.abs(numericValue) >= 1e9) {
        return `${(numericValue / 1e9).toFixed(decimalPlaces)}B`;
    } else if (Math.abs(numericValue) >= 1e6) {
        return `${(numericValue / 1e6).toFixed(decimalPlaces)}M`;
    } else if (Math.abs(numericValue) >= 1e3) {
        return `${(numericValue / 1e3).toFixed(decimalPlaces)}K`;
    } else {
        const fixedValue = numericValue.toFixed(decimalPlaces);
        return fixedValue.endsWith('.00') ? fixedValue.slice(0, -3) : fixedValue;
    }
}