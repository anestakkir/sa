export function isIpValid(ip: string): boolean {
    return (
        /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.test(ip) &&
        ip.split('.').every((octet) => Number(octet) >= 0 && Number(octet) <= 255) // Добавлена проверка >= 0
    );
}

export function getNetworkAddress(ip: string, mask: string): string {
    const ipOctets = ip.split('.').map(Number);
    const maskOctets = mask.split('.').map(Number);
    const result = [];

    for (let i = 0; i < 4; i++) {
        result.push(ipOctets[i] & maskOctets[i]);
    }

    return result.join('.');
}

export function getAddressesCount(mask: string): number {
    let binaryMask = '';

    for (const octet of mask.split('.')) {
        const num = Number(octet);

        if (num < 0 || num > 255) {
            console.warn(`Invalid octet in mask: ${octet}`);
            return 0;
        }
        binaryMask += num.toString(2).padStart(8, '0');
    }


    const zeros = binaryMask.split('0').length - 1;

    if (zeros === 0) return 1;
    if (zeros === 1) return 2;


    return Math.pow(2, zeros) - 2;
}