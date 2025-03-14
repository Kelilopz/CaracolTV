export class ApiService {
    static async fetchData() {
      try {
        const response = await fetch('/data.json'); 
        if (!response.ok) throw new Error('Error al cargar los datos');
        return await response.json();
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  } 