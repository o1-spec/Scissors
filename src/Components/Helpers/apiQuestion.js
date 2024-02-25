export const getQuestions = async () => {
    const res = await fetch("/data.json");

    if (!res.ok) throw new Error("Failed getting question");
    const data = await res.json();
    console.log(data);
    return data;
};