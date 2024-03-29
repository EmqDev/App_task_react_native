const API = 'http://localhost:3000/task';

export const getTask = async () =>{
    const res = await fetch(API);
    return await res.json();
}