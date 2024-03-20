//HTTP request to fetch data
export const url = 'http://localhost:3000/';
export async function getMenu(uri: string) {
    try {
        const response = await fetch(url + uri);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        //remove this when logic will be implemented
        console.log(data);
        return data;
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
}