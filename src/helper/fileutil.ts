import fs from 'fs'

export const exportJSONResponse = (filename: string, data: any) => {
    if (!fs.existsSync('tmp')) {
        fs.mkdirSync('tmp');
    }
    fs.writeFileSync(`tmp/${filename}`, JSON.stringify(data, null, 4))
}