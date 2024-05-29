//Выводим текущую дату на страницу внутрь тега с id="current-date"
//Россия
function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();


    // Вывод даты и времени для разных локалей 
    out.innerHTML = `
        <div style="margin:10px"><b>Дата и время для русской локали:</b> ${today.toLocaleString('ru-RU')}</div>
        <div style="margin:10px"><b>Дата и время для греческой локали:</b> ${today.toLocaleString('el-GR')}</div>
        <div style="margin:10px"><b>Дата и время для эстонской локали:</b> ${today.toLocaleString('et-EE')}</div>
        <div style="margin:10px"><b>Дата и время для японской локали:</b> ${today.toLocaleString('ja-JP')}</div>
        <div style="margin:10px"><b>Дата и время для чилийской локали:</b> ${today.toLocaleString('es-CL')}</div>
        <div style="margin:10px"><b>Дата и время для французской локали:</b> ${today.toLocaleString('fr-FR')}</div>
    `;
}