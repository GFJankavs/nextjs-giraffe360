type ContentTypes = {
    [key: string]: string;
}

const getContentType = (imageType: string): string => {
    const types: ContentTypes = {
        'jpg': 'image/jpeg',
        'jpeg': 'image/jpeg',
        'png': 'image/png',
        'gif': 'image/gif',
        'bmp': 'image/bmp',
        'webp': 'image/webp',
        'svg': 'image/svg+xml',
        'ico': 'image/x-icon',
        'tif': 'image/tiff',
        'tiff': 'image/tiff',
    };

    return types[imageType.toLowerCase()] || 'application/octet-stream';
}

export default getContentType;