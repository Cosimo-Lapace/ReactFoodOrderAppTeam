//HTTP request to fetch data
export const url = 'http://localhost:3000/';
export async function getMenu(uri: string) {
   
        const response = await fetch(url + uri);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
}