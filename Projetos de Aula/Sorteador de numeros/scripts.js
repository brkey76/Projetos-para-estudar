async function randomizar() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    return Math.floor(Math.random() * (input2 - input1 + 1)) + parseInt(input1);
}
async function handleSortear() {
    let result = await randomizar();
    alert(result);
}