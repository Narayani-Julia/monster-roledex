// need to create a generic getter data function
//gets data from a url and converts it into a json
// recieves a string as url
// what do you return? 
//Promise<> is await. This is the one time you use generic parameter
export const getData = async <T> (url: string): Promise<T> => {
    const response = await fetch(url);
    return await response.json();
}


//defining a function and ensuring data types here, and then defining it outside ensures type safety
