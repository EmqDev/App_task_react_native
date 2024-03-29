const API = 'http://192.168.1.36:3000/task';

export const getTask = async () =>{
    const res = await fetch(API);
    return await res.json();
}