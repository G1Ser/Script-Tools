export const savedata = (data) => {
    fetch('http://localhost:3000/saveData', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => { console.log('成功保存数据：', data) })
        .catch(error => { console.error(error) })
}