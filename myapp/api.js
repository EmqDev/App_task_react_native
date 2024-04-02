const API = 'http://192.168.1.9:3000/task';

export const getTask = async () => {
    const res = await fetch(API);
    return res.json();
};

export const saveTask = async (newTask) => {
   const res =  await fetch(API, {
        method: "POST", 
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(newTask)
    });
    return await res.json();
};